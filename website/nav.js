function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const navItems = document.querySelector(".nav-items");
    
    // إظهار/إخفاء السايد بار
    sidebar.classList.toggle("sidebar-open");
    
    // إخفاء/إظهار القائمة الرئيسية
    if (sidebar.classList.contains("sidebar-open")) {
        navItems.classList.add("hide"); // إخفاء القائمة العادية عند فتح السايد بار
    } else {
        navItems.classList.remove("hide"); // إظهار القائمة العادية عند إغلاق السايد بار
    }
}

// دالة لإغلاق السايد بار عند النقر على زر الإغلاق
function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    const navItems = document.querySelector(".nav-items");

    sidebar.classList.remove("sidebar-open"); // إخفاء السايد بار
    navItems.classList.remove("hide"); // إظهار القائمة العادية بعد إغلاق السايد بار
}
