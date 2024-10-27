let showInput:boolean = false



const handleClickEvent = (): void =>{
    const inputDisplay = document.querySelectorAll<HTMLElement>(".input-section")
    showInput = !showInput; 
    inputDisplay.forEach((visible)=>(
        visible.style.display = showInput ? "flex" : "none"
    ))
    const toogle = document.querySelector<HTMLButtonElement>('#button')
    toogle.innerText = showInput ? "Hide all sections" : "Show All Sections"
}


