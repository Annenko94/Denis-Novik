const ratingItemsList = document.querySelectorAll(".skills-list__rating-item");
ratingItemsList.forEach (item =>
    item.addEventListener("click",()=>
    item.parentNode.dataset.totalValue = item.dataset.itemValue
    )
    );