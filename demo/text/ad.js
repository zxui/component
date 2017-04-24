let data = ['JavaScript', 'Python', 'Ruby', 'C#', 'Go', 'Java', 'C++', 'Perl', 'Object-C', 'PHP', 'Groovy'];
let level = 3;
let strs = [];
data.forEach((v, i)=> {
    let fs = (Math.random() * 100).toFixed(0);
    strs.push(`<span style="color: white;font-size:${fs}px " class="actor${i % 2 + 1}">${v}</span>`);
    strs.push(`<br/>`);
})
document.getElementById('content').innerHTML = strs.join('');
