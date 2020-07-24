const time = document.querySelector('#time'),
    greeting = document.querySelector('#greeting'),
    name = document.querySelector('#name'),
    focus = document.querySelector('#focus');

    const showAmPm = true;

    function showTime(){
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();

        const amPm = hour >= 12 ? 'PM' : 'AM';

        hour = hour % 12 || 12;

        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showTime ? amPm : ''}`;

        setTimeout(showTime, 1000);
    }

    function addZero(n){
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    function setBgGreet(){
        let today = new Date(),
            hour = today.getHours();

        if(hour < 12){
            document.body.style.background = "url('./img/oliver-ash-KelEH6qnA3c-unsplash.jpg) no-repeat center center/cover";
            greeting.textContent = 'Good Morning';
            document.body.style.color = "white";
        }else if (hour < 18){
            document.body.style.background = "url('./img/ryan-yao-8knfh02igIM-unsplash.jpg') no-repeat center center/cover";
            greeting.textContent = 'Good Day';
        }else{
            document.body.style.background = "url('./img/reuben-teo-fUZWpaUknyI-unsplash.jpg') no-repeat center center/cover";
            greeting.textContent = 'Good Evening';
            document.body.style.color = "white";
        }
    }

    function getName(){
        if(localStorage.getItem('name') === null){
            name.textContent = 'Stranger';
        }else{
            name.textContent = localStorage.getItem('name');
        }
    }

    function setName(e){
        if (e.type === 'keypress'){
            if (e.which == 13 || e.keyCode == 13){
                localStorage.setItem('name', e.target.innerText)
                name.blur();
            }
        }else {
            localStorage.setItem('name', e.target.innerText)
        }
    }

    function setFocus(e){
        if (e.type === 'keypress'){
            if (e.which == 13 || e.keyCode == 13){
                localStorage.setItem('focus', e.target.innerText)
                focus.blur();
            }
        }else {
            localStorage.setItem('focus', e.target.innerText)
        }
    }

    function getFocus(){
        if(localStorage.getItem('focus') === null){
            focus.textContent = 'As The Almighty Directs';
        }else{
            focus.textContent = localStorage.getItem('focus');
        }
    }

    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);

    showTime();
    setBgGreet();
    getName();
    getFocus();

