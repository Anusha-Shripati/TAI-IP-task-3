let filterItem = document.querySelector('.items-links');
let filterImages = document.querySelector('.project-img');


window.addEventListener('load',()=>{
    filterItem.addEventListener('click',(selectedItem)=>{
        if(selectedItem.target.classList.contains('item-link')){
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            let filterName = selectedItem.target.getAttribute('data-name');
            filterImages.forEach((image)=>{
                let filterImages = image.getAttribute('data-name');
                if((filterImages == filterName) || filterName == 'all'){
                   image.style.display='block' 
                }else{
                    image.style.display='none' 
                }
            })
        }
    })

})