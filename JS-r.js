// kali linux download navigation page 
let download = confirm("do u want to download kali linux ?");
let choice;
if(download){ 
    choice = parseInt(prompt(`enter choice for type of image u want to download : 
    1. Installer image
    2. Virtual Machine
    3. ARM
    4. Mobile
    5. Cloud
    6. Containers
    7. Live Boot
    8. WSL`))
}
switch(choice){
    case 1: location.href = "https://www.kali.org/get-kali/#kali-installer-images" ; break ;
    case 2: location.href = "https://www.kali.org/get-kali/#kali-virtual-machines" ; break ;
    case 3: location.href = "https://www.kali.org/get-kali/#kali-arm" ; break;
    case 4: location.href = "https://www.kali.org/get-kali/#kali-mobile" ; break;
    case 5: location.href = "https://www.kali.org/get-kali/#kali-cloud" ; break;
    case 6: location.href = "https://www.kali.org/get-kali/#kali-containers";
            break ;
    case 7: location.href = "https://www.kali.org/get-kali/#kali-live";break;
    case 8: location.href = "https://www.kali.org/get-kali/#kali-wsl";break;
}

