let test;

document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
      const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором
  
      window.addEventListener('mousemove', e => { // при движении курсора
        const target = e.target // определяем, где находится курсор
        if (!target) return
        el.style.display = 'block'
        if (target.closest('a')) { // если курсор наведён на ссылку
          el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        } else { // иначе
          el.classList.remove('follow-cursor_active') // удаляем активный класс
        }
        if (target.closest('#too')) { // если курсор наведён на ссылку
            el.classList.add('follow-cursor_active') // элементу добавляем активный класс
          } else { // иначе
            el.classList.remove('follow-cursor_active') // удаляем активный класс
          }
          if (target.closest('#too1')) { // если курсор наведён на ссылку
            el.classList.add('follow-cursor_active1') // элементу добавляем активный класс
          } else { // иначе
            el.classList.remove('follow-cursor_active1') // удаляем активный класс
          }  
          window.addEventListener('mouseout', function(){
            let el1 = document.querySelector('.follow-cursor')
            el1.style.display = "none"
          })
        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
      })
    }
  
    followCursor() // вызываем функцию followCursor
  
  })

  const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = div.scrollY || div.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 100 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        div.scrollTo({
          top:0
        })
      }
    }
  }
  let div = document.querySelector('.ggg') 
  btnUp.addEventListener();
