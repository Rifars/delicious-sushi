function faralax(item, distance, speed){
    let items = document.querySelector(item);
    items.style.transform=`translateY(${distance * speed}px)`;
}


const runAnimate = () => {
    // add animate
    const addAnimate = item => {
        let items = document.querySelector(item);
        items.classList.add('animate');
    }
    const addAnimateUp = item => {
        let items = document.querySelector(item);
        items.classList.add('animateUp');
    }
    const addAnimateLeft = item => {
        let items = document.querySelector(item);
        items.classList.add('animateLeft');
    }
    const addAnimateRight = item => {
        let items = document.querySelector(item);
        items.classList.add('animateRight');
    }
            
    // animasi di header
    const headerAnimate = () => {
        // menjalankan
        const run = () => {
            addAnimateLeft('.header-text h1');
            addAnimateRight('.main-text .section p');
            addAnimateUp('.button button');
            // setTimeout(() => {addAnimateRight('.main-text .section p');},800);
            // setTimeout(() => {addAnimateUp('.button button');},1200);
        }
        run();
    } 
    headerAnimate();
    // end animasi header 



    window.addEventListener('scroll',() => {
        let bestSeller = window.scrollY;
        console.log(window.scrollY);
        if(bestSeller >= 300){
            addAnimateUp('.header-best-seller');
            addAnimate('.sushi1');
            addAnimate('.sushi2');
            setTimeout(() => {addAnimate('.one');},1000);
            setTimeout(() =>{addAnimate('.two');},1400);
            setTimeout(() =>{addAnimate('.three');},1800);
        }

        if(bestSeller >= 1000){addAnimateUp('.best-tasty ');}

        if(bestSeller >= 1780){
            addAnimateUp('.static-header');
            setTimeout(() => {addAnimateRight('.numb.one');},800);
            setTimeout(() =>{addAnimateUp('.numb.two');},1200);
            setTimeout(() =>{addAnimateLeft('.numb.three');
            addAnimate('.sushi3');
            addAnimate('.sushi4');
            },1600);
        }

        if(bestSeller >= 2350){addAnimateUp('.delicious');}
        if(bestSeller >= 3040){addAnimateUp('.img-profile img'); addAnimateRight('.quote p'); addAnimateLeft('.quote ')}
        if(bestSeller >= 3650){
            addAnimateLeft('.up .right');
            addAnimateRight('.up .left');
            addAnimateLeft('.sub h1');
            addAnimateRight('.sub p');
            addAnimateUp('.buttons');
            setTimeout(() => {
                addAnimate('.sushi11');
                addAnimate('.sushi12');
                addAnimate('.sushi13');
            },1200);
        
        }

    });

}
runAnimate();
