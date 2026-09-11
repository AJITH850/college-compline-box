(function(){
  const STUDENTS_KEY='ccms_students';
  const COMPLAINTS_KEY='complaints';

  function safeParse(value,fallback){try{return JSON.parse(value)||fallback}catch(e){return fallback}}

  function seedStudents(){
    const students=safeParse(localStorage.getItem(STUDENTS_KEY),[]);
    if(!students.some(s=>s.regno==='22CS001')){
      students.push({regno:'22CS001',name:'Student Name',department:'Computer Science',email:'student@example.com',password:'1234'});
      localStorage.setItem(STUDENTS_KEY,JSON.stringify(students));
    }
    return students;
  }

  function getStudents(){return seedStudents()}
  function saveStudents(list){localStorage.setItem(STUDENTS_KEY,JSON.stringify(list))}
  function getComplaints(){return safeParse(localStorage.getItem(COMPLAINTS_KEY),[])}
  function saveComplaints(list){localStorage.setItem(COMPLAINTS_KEY,JSON.stringify(list))}
  function getStudentSession(){return safeParse(sessionStorage.getItem('studentUser'),null)}
  function getAdminSession(){return safeParse(sessionStorage.getItem('adminUser'),null)}
  function requireStudent(){const s=getStudentSession();if(!s){location.replace('student_login.html');return null}return s}
  function requireAdmin(){const a=getAdminSession();if(!a){location.replace('admin_login.html');return null}return a}
  function studentLogout(){sessionStorage.removeItem('studentUser');location.href='student_login.html'}
  function adminLogout(){sessionStorage.removeItem('adminUser');location.href='admin_login.html'}
  function complaintId(){return 'CMP'+Date.now().toString().slice(-10)}
  function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
  function statusClass(status){const s=String(status||'Pending').toLowerCase();return ['pending','accepted','rejected','resolved'].includes(s)?s:'pending'}
  function statusBadge(status){return `<span class="status ${statusClass(status)}">${escapeHtml(status||'Pending')}</span>`}
  function formatDate(iso){if(!iso)return '-';const d=new Date(iso);return Number.isNaN(d.getTime())?'-':d.toLocaleString()}

  window.CCMS={getStudents,saveStudents,getComplaints,saveComplaints,getStudentSession,getAdminSession,requireStudent,requireAdmin,studentLogout,adminLogout,complaintId,escapeHtml,statusBadge,formatDate};
})();
