let buttons = document.querySelectorAll('button');
let img = document.querySelector('img');
let Previous = document.getElementById('Previous')
let imgs = ['img/pexels-photo-255377.webp']
let pos = 0;

for (let i = 1; i <= 18; i++) {
    imgs.push(`img/img${i}.jpg`)
}


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.id == 'Previous') {
            if (pos > 0) {
                pos--;
                img.src = imgs[pos];
                
            }else{
                
                Previous.style.backgroundColor = 'gray'
            }
            
        }
        if (e.target.id == 'Next') {
            if (pos < imgs.length - 1) {
                pos++;
                img.src = imgs[pos];
                Previous.style.backgroundColor = 'red'
            } else {
                pos = 0
                img.src = imgs[pos];
            }

        }
    })
})