document.addEventListener('DOMContentLoaded', () => {

    // Decrypt email address
    const cryptedmails = document.querySelectorAll(".cryptedmail");
    cryptedmails.forEach((cryptedmail) => {
        if (cryptedmail != null) {
            cryptedmail.innerHTML = cryptedmail.dataset.name + "@" + cryptedmail.dataset.domain + "." + cryptedmail.dataset.tld;
            cryptedmail.addEventListener("click", function(event) {
                window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld;
                event.preventDefault();
                return false;
            });
        }  
    });


    // Update the clock every second
    let clock = document.getElementById('clock');
    if (clock != null) {
        setInterval(() => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            clock.textContent = formattedTime;
        }, 1000);
    }
        


    // About and Archive link
    document.querySelectorAll("#footer .nav button").forEach(button => {

        panels = document.querySelectorAll("body main.homepage .right-side div");
        button.addEventListener("click", ()=>{
            panels.forEach(panel => {
                

                if(panel.dataset.type == button.dataset.type){
                    panel.classList.toggle("active");
                } else {
                    panel.classList.remove("active");
                }
            })
        });
    });
});

function changePage(clickedButton, number){
    document.querySelectorAll(".pagination button").forEach(button => {
        button.classList.remove("active");
    });
    clickedButton.classList.add("active");

    document.querySelectorAll(".grid-container").forEach(page => {
        if (page.dataset.page == number) {
            page.classList.add("active");
        } else {
            page.classList.remove("active");
        }
    });

    document.querySelectorAll(".right-side").forEach(sidebar => {
        if (sidebar.dataset.page == number) {
            sidebar.classList.add("active");
        } else {
            sidebar.classList.remove("active");
        }
    });
}

document.addEventListener('scroll', () => {
    
});

window.addEventListener('resize', function(event) {

}, true);