document.addEventListener('DOMContentLoaded', function() {
    initLikeButtons();
    initSaveButtons();
});

function initLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const isLiked = this.getAttribute('data-liked') === 'true';
            
            if (isLiked) {
                this.setAttribute('data-liked', 'false');
                icon.classList.remove('fa-solid', 'liked');
                icon.classList.add('fa-regular');
            } else {
                this.setAttribute('data-liked', 'true');
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid', 'liked');
            }
        });
    });
}

function initSaveButtons() {
    const saveButtons = document.querySelectorAll('.save-btn');
    
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const isSaved = this.getAttribute('data-saved') === 'true';
            
            if (isSaved) {
                this.setAttribute('data-saved', 'false');
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            } else {
                this.setAttribute('data-saved', 'true');
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
        });
    });
}
