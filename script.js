function showDocuments(section) {
    let documents = {
        intro: [
            { name: 'Кіріспе 1', file: 'files/info1.pdf' },
            { name: 'Кіріспе 2', file: 'files/info2.pdf' }
        ],
        lek: [
            { name: '1-дәріс', file: 'files/lek1.pdf' },
            { name: '2-дәріс', file: 'files/lek2.pdf' },
            { name: '3-дәріс', file: 'files/lek3.pdf' },
            { name: '4-дәріс', file: 'files/lek4.pdf' },
            { name: '5-дәріс', file: 'files/lek5.pdf' },
            { name: '6-дәріс', file: 'files/lek6.pdf' },
            { name: '7-дәріс', file: 'files/lek7.pdf' },
            { name: '8-дәріс', file: 'files/lek8.pdf' },
            { name: '9-дәріс', file: 'files/lek9.pdf' },
            { name: '10-дәріс', file: 'files/lek10.pdf' }
        ],
        q: [
            { name: '1-сұрақ', file: 'files/q1.pdf' },
            { name: '2-сұрақ', file: 'files/q2.pdf' },
            { name: '3-сұрақ', file: 'files/q3.pdf' },
            { name: '4-сұрақ', file: 'files/q4.pdf' },
            { name: '5-сұрақ', file: 'files/q5.pdf' },
            { name: '6-сұрақ', file: 'files/q6.pdf' },
            { name: '7-сұрақ', file: 'files/q7.pdf' },
            { name: '8-сұрақ', file: 'files/q8.pdf' },
            { name: '9-сұрақ', file: 'files/q9.pdf' },
            { name: '10-сұрақ', file: 'files/q10.pdf' }
        ],
        p: [
            { name: '1-практика', file: 'files/p1.pdf' },
            { name: '2-практика', file: 'files/p2.pdf' },
            { name: '3-практика', file: 'files/p3.pdf' },
            { name: '4-практика', file: 'files/p4.pdf' },
            { name: '5-практика', file: 'files/p5.pdf' },
            { name: '6-практика', file: 'files/p6.pdf' },
            { name: '7-практика', file: 'files/p7.pdf' },
            { name: '8-практика', file: 'files/p8.pdf' },
            { name: '9-практика', file: 'files/p9.pdf' },
            { name: '10-практика', file: 'files/p10.pdf' }
        ],
        task: [
            { name: '1-тапсырма', file: 'files/task1.pdf' },
            { name: '2-тапсырма', file: 'files/task2.pdf' },
            { name: '3-тапсырма', file: 'files/task3.pdf' },
            { name: '4-тапсырма', file: 'files/task4.pdf' },
            { name: '5-тапсырма', file: 'files/task5.pdf' },
            { name: '6-тапсырма', file: 'files/task6.pdf' },
            { name: '7-тапсырма', file: 'files/task7.pdf' },
            { name: '8-тапсырма', file: 'files/task8.pdf' },
            { name: '9-тапсырма', file: 'files/task9.pdf' },
            { name: '10-тапсырма', file: 'files/task10.pdf' }
        ],
        glossary: [
            { name: 'Глоссарий', file: 'files/glossary.pdf' }
        ]
    };
    // Барлық тізімдерді жасыру
    const lists = document.querySelectorAll('.document-list');
    lists.forEach(list => list.style.display = 'none');

    // Таңдалған бөлімнің тізімін көрсету
    let selectedDocuments = documents[section];
    let list = document.getElementById(`${section}-list`);
    list.style.display = 'block'; // Тізімді көрсету

    // Тізімді жаңарту
    list.innerHTML = ''; // Алдымен тізімді тазалау
    selectedDocuments.forEach(doc => {
        let li = document.createElement('li');
        li.innerHTML = `<a href="#" onclick="openDocument('${doc.file}')">${doc.name}</a>`;
        list.appendChild(li);
    });
}

// Файлды iframe ішінде ашу
function openDocument(file) {
    let iframe = document.getElementById("wordViewer");
    iframe.src = file;
}

// Файлды iframe ішінде ашу
function openDocument(file) {
    let iframe = document.getElementById("wordViewer");
    iframe.src = file;
}