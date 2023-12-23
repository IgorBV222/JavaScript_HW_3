let arrCont = ['+7(999)999-99-99', 'example@gmail.com', 'г. Разработчик, ул. Подвальная, д. 5'];
generateFooter ('SiteName', arrCont, '#494949', 'white');

function generateFooter(title, contacts, bgcolor, fontcolor) {
    let currentYear = new Date().getFullYear();
    document.write (   
        `<body style = "` + 
            `padding: 0;` +
            `margin: 0;` +
            `height: 100vh` +    
            `">` +     
        
            `<div style = "` +
                    `display: flex;` +                    
                    `height: 100vh;` +
                    `flex-direction: column;` +                    
                    `">` +     

                    //=============== HEADER ====================
                    `<header style = "` +        
                        `height: 10px;` +                    
                        `">` +
                    `</header>` +
                    //=============== END HEADER ====================

                    //========== MAIN ==================
                    `<main style = "` +                    
                        `height: 100%;` +                    
                        `">` +     
                    `</main>`+
                    //============= END MAIN ===============

                    // ========= FOOTER ==========
                    `<footer style = "` +        
                        `padding: 0 6px;` +
                        `height: 120px;` +
                        `display: flex;` +
                        `justify-content: space-between;` +    
                        `background-color: ${bgcolor};` +
                        `font-family: Arial, Helvetica, sans-serif` +
                        `">` +

                        `<div style = "` +
                            `display: flex;` +
                            `align-items: center`+
                            `">` +
                            `<ul style = "` +
                                `margin-left: 20px;` +
                                `padding: 4px 4px;` +  
                                `align-items: center;` +
                                `letter-spacing: 1px;` +                        
                                `font-size: 16px;` +
                                `color:${fontcolor};` +
                                `text-decoration: none;` +  
                                `list-style-type: none` +            
                                `">` +
                                    `<li>Номер: ${contacts[0]} </li>` +
                                    `<li>Эл. почта: ${contacts[1]}</li>` +
                                    `<li>Адрес: ${contacts[2]}</li>` +
                            `</ul>` +
                        `</div>`+

                        `<div style = "` +
                            `display: flex` +                         
                            `">`+
                            `<div style = "` +
                                `text-decoration: none;` +
                                `display: flex;` +
                                `align-items: center`+
                                `">`+
                                `<p style = "` +   
                                    `margin-right: 20px;` +
                                    `font-size: 16px;` +
                                    `font-family: Arial, Helvetica, sans-serif` +
                                    `text-decoration: none;` +
                                    `letter-spacing: 1px;` +
                                    `color: ${fontcolor}` +
                                    `"> ${title} &copy; ${currentYear} г.` +
                                `</p>` +
                            `</div>` +
                        `</div>` +    
                    `</footer>` +
                    //========================== END FOOTER ==================================
            `</div>` +            
       `</body>`
    );
}