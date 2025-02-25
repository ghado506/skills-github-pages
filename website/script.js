async function loadStockData() {
  try {
    const response = await fetch("new.csv"); // قراءة ملف CSV
    const data = await response.text();
    const rows = data.split("\n").slice(1); // تخطي صف العناوين

    const tableBody = document.querySelector("#stockTable tbody");

    rows.forEach((row) => {
      const cols = row.split(",").map((col) => col.trim());

      if (cols.length < 10) {
        // تأكد أن الصف يحتوي على 10 أعمدة على الأقل
        console.warn("تم تجاهل صف غير مكتمل:", cols);
        return;
      }

      // قراءة جميع الأعمدة كنصوص
      let col1 = cols[0]; // عمود نصي (أول عمود)
      let col2 = cols[1]; // عمود نصي (ثاني عمود)
      let col3 = cols[2]; // عمود نصي (ثالث عمود)
      let col4 = cols[3]; // عمود نصي (رابع عمود)
      let col5 = cols[4]; // عمود نصي (خامس عمود)
      let col6 = cols[5]; // عمود نصي (سادس عمود)
      let col7 = cols[6]; // عمود نصي (سابع عمود)
      let col8 = cols[7]; // عمود نصي (ثامن عمود)
      let col9 = cols[8]; // عمود نصي (تاسع عمود)
      let col10 = cols[9]; // عمود نصي (عاشر عمود)

      // إنشاء صف جديد في الجدول وعرض الأعمدة المطلوبة
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${col1}</td>  <!-- العمود الأول نص -->
          <td>${col2}</td>  <!-- العمود الثاني نص -->
          <td>${col3}</td>  <!-- العمود الثالث نص -->
          <td>${col4}</td>  <!-- العمود الرابع نص -->
          <td>${col5}</td>  <!-- العمود الخامس نص -->
          <td>${col6}</td>  <!-- العمود السادس نص -->
          <td>${col7}</td>  <!-- العمود السابع نص -->
          <td>${col8}</td>  <!-- العمود الثامن نص -->
          <td>${col9}</td>  <!-- العمود التاسع نص -->
          <td>${col10}</td>  <!-- العمود العاشر نص -->
        `;
      tableBody.appendChild(tr);
    });
  } catch (error) {
    console.error("حدث خطأ أثناء تحميل البيانات:", error);
  }
}

loadStockData();