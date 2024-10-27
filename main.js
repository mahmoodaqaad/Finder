function compareFiles() {
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const result = document.getElementById('result');






    // الحصول على أسماء الملفات من المدخل الأول
    const filesA = Array.from(inputA.files).map(file => file.name);
    // الحصول على أسماء الملفات من المدخل الثاني
    const filesB = Array.from(inputB.files).map(file => file.name);


    // مقارنة الملفات
    const missingFiles = filesA.filter(file => !filesB.includes(file));




    // عرض النتائج
    result.innerHTML = '';
    if (missingFiles.length === 0) {
        result.innerHTML = '<li>No missing files</li>';
    } else {
        missingFiles.forEach(file => {
            const li = document.createElement('li');
            li.className = "childMissing"
            li.textContent = file;
            result.appendChild(li);
        });
    }



    if (document.querySelector(".childMissing")) {
        let elements = document.querySelectorAll(".childMissing")
        elements.forEach(ele => {
            ele.onclick = (e) => {
                navigator.clipboard.writeText(e.target.innerHTML)
                alert(`تم نسخ => ${e.target.innerHTML}`)
            }
        })
    }
}