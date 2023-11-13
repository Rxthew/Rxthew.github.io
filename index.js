const currentProject = function(){
    const CurrentProjectBuilder = class {
        constructor(current){
            this._current = current;
        }
    
        get current(){
            return this._current;
        }
    
        set current(newCurrent){
            this._current = newCurrent;
        }

    };
    
    const ProjectDetails = class {
        constructor(srcs,alts,title,description,links,tools){
            this.srcs = srcs;
            this.alts = alts;
            this.title = title;
            this.description = description;
            this.links = links;
            this.tools = tools;
        }
    
        get previous(){
            return this._previous
        }
    
        set previous(newPrevious){
            !this._previous ? this._previous = newPrevious : false
        }
    
        get next(){
            return this._next
        }
    
        set next(newNext){
            !this._next ? this._next = newNext : false
        }
    };
    
    
    const iconsData =  {
            css3: {src: "assets/Icons/css3.svg", alt: "Css3"},
            ejs: {src: "assets/Icons/ejs.svg", alt: "Ejs"},
            html5: {src: "assets/Icons/html5.svg", alt: "Html5"},
            javascript: {src: "assets/Icons/javascript.svg", alt: "JavaScript"},
            sequelize: {src: "assets/Icons/sequelize.svg", alt: "Sequelize"},
            tailwindcss: {src: "assets/Icons/tailwindcss.svg", alt: "TailwindCSS"},
            webpack: {src: "assets/Icons/webpack.svg", alt: "Webpack"},
            typescript:   {src: "assets/Icons/typescript.svg", alt: "TypeScript"},
            express:    {src: "assets/Icons/express.svg", alt: "Express"},
            mongodb:    {src: "assets/Icons/mongodb.svg", alt: "Mongodb"},
            react:      {src: "assets/Icons/react.svg", alt: "React"},
            passport:      {src: "assets/Icons/passport.svg", alt: "Passport"},
            mui:      {src: "assets/Icons/mui.svg", alt: "Mui"},
            reactrouter:      {src: "assets/Icons/reactrouter.svg", alt: "React Router"},
            jest:      {src: "assets/Icons/jest.svg", alt: "Jest"}
    };
    
    const projectIcons = function(...keys){
        return keys.map(key => iconsData[key]);
    };
    
    
    const whoSaidWhat = new ProjectDetails(
                {wide: "./assets/screenshots/wsw.png", mobile: "./assets/screenshots/wsw_mobile.png"}, 
                {wide: "Wide screenshot of project: WhosaidWhat " , mobile:"Mobile screenshot of project: WhosaidWhat "},
                "Who Said What",
                "Template blog with authentication for different tiers of membership, served via a RESTful API",
                {live: "https://rxthew.github.io/whosaidwhat", repo: "https://www.github.com/rxthew/whosaidwhatapi"}, 
                projectIcons('typescript','express','mongodb','react','passport','mui','reactrouter','jest')
                
    );
    
    const foot = new ProjectDetails(
                {wide: "./assets/screenshots/foot.png", mobile: "./assets/screenshots/foot_mobile.png"}, 
                {wide: "Wide screenshot of project: Footman " , mobile:"Mobile screenshot of project: Footman "},
                "Footman",
                "Football-themed CRUD app",
                {live: "https://footman.up.railway.app", repo: "https://www.github.com/rxthew/footman"},
                projectIcons('typescript','express','sequelize','ejs')
                
    
    );
    
    
    const marketplace = new ProjectDetails(
        {wide: "./assets/screenshots/marketplace.png", mobile: "./assets/screenshots/marketplace_mobile.png"}, 
        {wide: "Wide screenshot of project: Marketplace " , mobile:"Mobile screenshot of project: Marketplace "},
        "Marketplace",
        "E-commerce front-end simulation",
        {live: "https://rxthew.github.io/marketplace", repo: "https://www.github.com/rxthew/marketplace"},
        projectIcons('typescript','react','reactrouter','tailwindcss','jest')
        
    
    );
    
    const meal = new ProjectDetails(
        {wide: "./assets/screenshots/meal.png", mobile: "./assets/screenshots/meal_mobile.png"}, 
        {wide: "Wide screenshot of project: Mealwars " , mobile:"Mobile screenshot of project: Mealwars "},
        "Mealwars",
        "Meal comparison tool",
        {live: "https://rxthew.github.io/mealwars", repo: "https://www.github.com/rxthew/mealwars"},
        projectIcons('typescript','react','css3')
        
    
    );
    
    const journal = new ProjectDetails(
        {wide: "./assets/screenshots/journal.png", mobile: "./assets/screenshots/journal_mobile.png"}, 
        {wide: "Wide screenshot of project: Journal maker " , mobile:"Mobile screenshot of project: Journal maker "},
        "Journalmaker",
        "Journal template generator",
        {live: "https://rxthew.github.io/journalmaker", repo: "https://www.github.com/rxthew/journalmaker"},
        projectIcons('typescript','react','css3')
        
    
    );
    
    const weather = new ProjectDetails(
        {wide: "./assets/screenshots/weather.png", mobile: "./assets/screenshots/weather_mobile.png"}, 
        {wide: "Wide screenshot of project: Weather forecast " , mobile:"Mobile screenshot of project: Weather foreacast "},
        "Weather Forecast",
        "Weather forecast renderer",
        {live: "https://rxthew.github.io/weatherAPI", repo: "https://www.github.com/rxthew/weatherAPI"},
        projectIcons('html5', 'css3', 'javascript', 'webpack')
        
    
    );
    
    const projectPointers = {
        "Who Said What": {p: foot, n: weather},
        "Footman": {p: marketplace, n: whoSaidWhat},
        "Marketplace": {p: meal, n: foot},
        "Mealwars": {p: journal, n: marketplace},
        "Journalmaker": {p: weather, n: meal},
        "Weather Forecast": {p: whoSaidWhat, n: journal}
    };
    
    
    [whoSaidWhat, foot, marketplace, meal, journal, weather].map((project) => project.previous = projectPointers[project.title].p);
    [whoSaidWhat, foot, marketplace, meal, journal, weather].map((project) => project.next = projectPointers[project.title].n)

  

    return new CurrentProjectBuilder(whoSaidWhat);

};



const projectHelpers = function(){

    const projectDOMtargets = function(){ 

        const images = Array.from(document.querySelectorAll('#devices img'));
        const toolsContainer = document.querySelector('ul');
        const title = Array.from(document.querySelectorAll('#project_details h3'))[0]
        const description = Array.from(document.querySelectorAll('#project_details p'))[0];
        const links = Array.from(document.querySelectorAll('#project_details a'))
    
        return {
            images, toolsContainer,title,description,links
        }
    
    };
    
    const changeDeviceImages = function(currentProject, imageElements){
        const {alts, srcs} = currentProject;
        const indexedAlts = [alts.mobile, alts.wide];
        const indexedSrcs = [srcs.mobile, srcs.wide];
        imageElements.map(function(element,index){
            element.setAttribute('src',indexedSrcs[index]); 
            element.setAttribute('alt',indexedAlts[index])
        });
        return 
    };
    
    const changeTools = function(currentProject, toolsContainer){
    
        const clearPreviousTools = () => Array.from(toolsContainer.children).map(child => child.remove());
        
        const domTool = function(tool){
            const li = document.createElement('li');
            const img = document.createElement('img');
            const p = document.createElement('p');
            img.setAttribute('src',tool.src);
            img.setAttribute('alt',`${tool.alt} logo`);
            p.textContent = tool.alt;
            li.appendChild(img);
            li.appendChild(p);
            return li;
        };
    
        const generateNewTools = function(){
            const currentTools = currentProject.tools;
            const newTools = currentTools.map(domTool);
            newTools.map(tool => toolsContainer.appendChild(tool));
        };
    
        clearPreviousTools();
        generateNewTools()
        return
    };
    
    const changeTitle = function(currentProject, title){
        title.textContent = currentProject.title;
        return
    
    };
    
    const changeDescription = function(currentProject, description){
        description.textContent = currentProject.description;
        return
    
    };
    
    const changeLinks = function(currentProject,linkElements){
        const {links} = currentProject;
        const indexedLinks = [links.repo, links.live];
        linkElements.map(function(element,index){element.setAttribute('href',indexedLinks[index])});
        return
    
    };
    
    
    const changeProject = function(currentProject, pointer){
    
        const newProject = currentProject.current[pointer];
    
        const {images,toolsContainer,title,description,links} = projectDOMtargets();
        changeDeviceImages(newProject, images);
        changeTools(newProject, toolsContainer);
        changeTitle(newProject,title);
        changeDescription(newProject, description);
        changeLinks(newProject,links);
    
        currentProject.current = newProject;
    };

    const resetProjectDetails = function(currentProject){
        while(currentProject.current.title !== "Who Said What"){
            changeProject(currentProject, 'next')
        }
        return
    };

    return {
        changeProject,
        resetProjectDetails
        
    }

};


const aboutHelpers = function(){

    
    const isWideScreen = function(){
        const isWideScreenWidth = window.matchMedia('(min-width:800px)');
        return isWideScreenWidth.matches
    }

    const closeAllDetails = function(){
        const detailses = Array.from(document.querySelectorAll('details'));
        detailses.map(d => d.removeAttribute('open'));
        return
    };
    
    const closeAllNavDetails = function(){
        const navDetailses = Array.from(document.querySelectorAll('nav details'));
        navDetailses.map(d => d.removeAttribute('open'));
        return
    };

    const identifyLastOpenText = function(){
        const openDetailses = document.querySelectorAll('nav details[open]');
        const lastOpen = openDetailses[openDetailses.length -1];
        const lastOpenDiv = lastOpen && lastOpen.parentElement
        return lastOpenDiv
    };

    const postToggleDetailsAction = function(targetDetails, postToggleAction){
        const executeActionOnce = function(){
            postToggleAction();
            targetDetails.removeEventListener('toggle',executeActionOnce)
        };
        targetDetails.addEventListener('toggle',executeActionOnce)
    };

    const removeAllContracted = function(){
        Array.from(document.querySelectorAll('.contracted')).map(e => e.classList.remove('contracted'));
        
    };
    
    const removeAllFirsts = function(){
        Array.from(document.querySelectorAll('.first')).map(e => e.classList.remove('first'));
        return
    };
    

    const resetNavScroll = function(){
        const nav = document.querySelector('details > nav');
        nav.scrollLeft = 0;
    };


    const setPrimarySummaryTextContent = function(newText){
        const summary = document.querySelector('details > summary');
        summary.textContent = newText;
    }

    const scrollToTextPosition = function(targetElement){
        targetElement.parentElement.scrollTo(targetElement.offsetLeft, 0)
    };

    const scrollToLastOpenText = function(){
        const targetElement = identifyLastOpenText();
        targetElement ? scrollToTextPosition(targetElement) : resetNavScroll();

    };

    const manageScroll = function(targetElement,det){
        det.hasAttribute('open') ?
            scrollToTextPosition(targetElement)
            
          :
            scrollToLastOpenText()   
          

    };


    const toggleContractedState = function(targetElement,det){
        det.hasAttribute('open') ?
            targetElement.classList.add('contracted')
        :
            targetElement.classList.remove('contracted')
    
    };
    
    const toggleFirst = function(targetElement, det){
        det.hasAttribute('open') ? targetElement.classList.remove('first') : targetElement.classList.add('first')
    };


    return {
        isWideScreen,
        closeAllDetails,
        closeAllNavDetails,
        manageScroll,
        postToggleDetailsAction,
        removeAllFirsts,
        removeAllContracted,
        resetNavScroll,
        scrollToTextPosition,
        setPrimarySummaryTextContent,
        toggleContractedState,
        toggleFirst
    }

};

const aboutStaticHelpers = (function(){

    const addFixedToDetails = function(){
        const primaryDetails = document.querySelector('details');
        primaryDetails.classList.add('fixed');
    }

    const removeFixedFromDetails = function(){
        const primaryDetails = document.querySelector('details');
        primaryDetails.classList.remove('fixed');
    }

    const fixPrimaryDetailsOnTop = function(){

        const isPrimaryDetailsClosed = !document.querySelector('details').hasAttribute('open')
        const aboutTitle = document.querySelector('#about > h2');
        const aboutTitleBottomLocation = aboutTitle.getBoundingClientRect().bottom;
        aboutTitleBottomLocation <= 0 && isPrimaryDetailsClosed ? addFixedToDetails() : removeFixedFromDetails()

    };

    const addScrollListenerPosition = function(){
        const {isWideScreen} = aboutHelpers();

        isWideScreen() ? window.addEventListener('scroll', fixPrimaryDetailsOnTop) : false;
    };

    const removeScrollListener = function(){
        window.removeEventListener('scroll', fixPrimaryDetailsOnTop)
    };
    
    const restorePrimaryDetailsPosition = function(){
       
        removeFixedFromDetails();
        removeScrollListener();

    };

    return {
        addScrollListenerPosition,
        fixPrimaryDetailsOnTop,
        restorePrimaryDetailsPosition,
    }

}())


const headerHelpers = function(project){

    const postAnimationHandler = function(postAnimationAction){
        const header = document.querySelector('header');
        
        const executeActionOnce = function(){
            postAnimationAction()
            header.removeEventListener('animationend',executeActionOnce);
        };

       header.addEventListener('animationend',executeActionOnce);
    };

    const identifyButtonRelations = function(buttonElement){

        const getButtonIndex = function(){
    
            const header = document.querySelector('header');
            const buttons = Array.from(header.querySelectorAll('button'))
            const index = buttons.findIndex(e => e === buttonElement);
            return index
        };
    
        const getArticle = function(buttonIndex){
            const articles = Array.from(document.querySelectorAll('article'));
            const article = articles[buttonIndex];
            return article;
        };
    
        const article = getArticle(getButtonIndex());
        const svgSibling = buttonElement.nextElementSibling;
        const turbulence = svgSibling.querySelector('feTurbulence');
    
        
      
        return {
            article,
            svgSibling,
            turbulence
        }
    
    }
    
    
    const makeVisible = function(element){
         element.classList.remove('none');
    };
    
    const makeInvisible = function(element){
         element.classList.add('none');
    };
    
    const closeHeader = function(header){
        header.classList.remove('open');
        header.classList.add('closed');
    };
    
    const openHeader = function(header){
        header.classList.remove('closed');
        header.classList.add('open');
    };
    
    const addHighlight = function(button){
        button.classList.add('bold');
    
    };
    
    const removeHighlight = function(button){
        button.classList.remove('bold');
    
    };
    
    const setFrequency = function(feTurbulence){
        const frequency = Math.round((Math.random() * 0.5) * 10)/10 || 0.3;
        feTurbulence.setAttribute('baseFrequency',frequency)
    
    };
    
    const scrollToTop = function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };


    const positiveWorkflow = function(button, hiddenElements, turbulence, header){
        const { addScrollListenerPosition } = aboutStaticHelpers;

        addHighlight(button);
        hiddenElements.map(makeVisible);
        addScrollListenerPosition();
        setFrequency(turbulence);
        closeHeader(header);    
    };


    const negativeWorkflow = function(button, visibleElements,header){

        const {
            resetProjectDetails
        } = projectHelpers();

        const {
            closeAllDetails,
            removeAllFirsts,
            removeAllContracted,
            resetNavScroll,
            setPrimarySummaryTextContent
        } = aboutHelpers();

        const {
            restorePrimaryDetailsPosition
        } = aboutStaticHelpers;

        const resetClosedState = function(){
            removeHighlight(button);
            resetNavScroll();
            restorePrimaryDetailsPosition();
            visibleElements.map(makeInvisible); 
            resetProjectDetails(project); 
            removeAllFirsts();
            removeAllContracted();
            closeAllDetails();
            setPrimarySummaryTextContent('Be serious now.')
        ;}


        scrollToTop()
        postAnimationHandler(resetClosedState)
        openHeader(header);

    };

    const mixedWorkflow = function(turnOff, turnOn){
        negativeWorkflow(...turnOff)
        postAnimationHandler(() => positiveWorkflow(...turnOn))
        
    };

    const revertToDefaultHeader = function(){
        const header = document.querySelector('header');
        const highlighted = header.querySelector('.bold');
        const visible = Array.from(document.querySelectorAll('article, svg'));
        highlighted ? negativeWorkflow(highlighted, visible, header) : null;
        return
        

    };

    return {
        identifyButtonRelations,
        mixedWorkflow,
        positiveWorkflow,
        revertToDefaultHeader
    }
    

};

const eventTargets = function(){
    const headerAndChildren = Array.from(document.querySelectorAll('header, header *'));
    const headerButtons = Array.from(document.querySelectorAll('header button'));
    const headerSvgs = Array.from(document.querySelectorAll('header svg'));
    const projectDetails= Array.from(document.querySelectorAll('#project_details button'));
    const primarySummary= document.querySelector('summary');
    const navSummaries= Array.from(document.querySelectorAll('nav summary'));
     return {
         headerAndChildren,
         headerButtons,
         headerSvgs,
         projectDetails,
         primarySummary,
         navSummaries
      
     }
 };


const project = currentProject();


const clickProjectButton = function(event){

    const {changeProject} = projectHelpers();

    const pointer = event.target.textContent.toLowerCase();
    changeProject(project,pointer)
};


const resetAllDetails = function(event){
    const {
        closeAllNavDetails,
        removeAllContracted,
        removeAllFirsts, 
        resetNavScroll,
        setPrimarySummaryTextContent} = aboutHelpers();
    
    const details = event.target.parentElement;
    const isPrimaryDetailsOpen = details.hasAttribute('open');

    const ifOpenWorkflow = function(){
        resetNavScroll();
        removeAllContracted();
        removeAllFirsts();
        closeAllNavDetails();
        setPrimarySummaryTextContent('Be serious now.')
    };

    const ifClosedWorkflow = function(){
        setPrimarySummaryTextContent('Ah! Make it stop!')
        
    };

    isPrimaryDetailsOpen ? ifOpenWorkflow() : ifClosedWorkflow()
    
};

const toggleStatefulText = function(event){

    const {
        isWideScreen,
        manageScroll,
        postToggleDetailsAction,
        removeAllFirsts,
        toggleContractedState,
        toggleFirst,
    } = aboutHelpers();

    const details = event.target.parentElement;
    const p = details.nextElementSibling;
    const div = details.parentElement;
   
    toggleContractedState(p,details);

    const wideScreenTextAdjustment = function(){
        
        toggleFirst(div,details);
        postToggleDetailsAction(details,() => manageScroll(div,details))
        
    };


    isWideScreen() ? wideScreenTextAdjustment()  : removeAllFirsts();

};


const clickHeaderButton = function(event){

    const {
        identifyButtonRelations,
        mixedWorkflow,
        positiveWorkflow,
        revertToDefaultHeader
    } = headerHelpers(project);
    
    const produceOnAndOffSwitches = function(){
        const header = document.querySelector('header');
        const relations = identifyButtonRelations(event.target);
        const currentBoldButton = header.querySelector('.bold');
        const otherRelations = currentBoldButton ? identifyButtonRelations(currentBoldButton) : null;
        const turnOn = [event.target, [relations.article, relations.svgSibling],relations.turbulence,header];
        const turnOff = otherRelations && [currentBoldButton, [otherRelations.article, otherRelations.svgSibling],header];
        return {
            turnOn,
            turnOff
        }        
    };

    const openArticle = function(){
        const {turnOff, turnOn} = produceOnAndOffSwitches();
        const areOtherArticlesOpen = turnOff;
        return areOtherArticlesOpen ? mixedWorkflow(turnOff, turnOn) : positiveWorkflow(...turnOn)
    }

    const isThisArticleAlreadyOpen = event.target.classList.contains('bold');
     
    return isThisArticleAlreadyOpen ?  revertToDefaultHeader() : openArticle()
}; 

const clickHeaderSvg = function(event){
    const button = event.target.nodeName === "svg" ? event.target.previousElementSibling : event.target.closest('svg').previousElementSibling;
    button.click()
};


const clickEventListener = function(event){      
    const {
        headerAndChildren,
        headerButtons, 
        headerSvgs,
        projectDetails, 
        primarySummary, 
        navSummaries, 
        } = eventTargets();  
        
    const { revertToDefaultHeader } = headerHelpers(project);

    switch(true){
        case headerButtons.includes(event.target): clickHeaderButton(event);
        break
        case headerSvgs.includes(event.target) || headerSvgs.includes(event.target.closest('svg')): clickHeaderSvg(event)
        break
        case headerAndChildren.includes(event.target): revertToDefaultHeader();
        break
        case projectDetails.includes(event.target): clickProjectButton(event);
        break
        case event.target === primarySummary: resetAllDetails(event);
        break
        case navSummaries.includes(event.target): toggleStatefulText(event);
        break
    }
    

};

const activateResizeEventListener = function(){

    const { 
        addScrollListenerPosition,
        fixPrimaryDetailsOnTop,
        restorePrimaryDetailsPosition,
    
    } = aboutStaticHelpers;
    const { 
        isWideScreen,    
        removeAllFirsts, 
        resetNavScroll,
        toggleFirst
    
    } = aboutHelpers();

    const isAboutInvisible = function(){
        const article = document.querySelector('#about').closest('article');
        return article.classList.contains('none')
    };


    const narrowWorkflow = function(){
        removeAllFirsts();
        restorePrimaryDetailsPosition()

    }

    const wideWorkflow = function(){
        const identifyAllOpenNavDetails = function(){
            return Array.from(document.querySelectorAll('nav details[open]'))
        }

        const toggleFirstOnOpenDivs = function(){
            const allOpenNavDetails = identifyAllOpenNavDetails();
            allOpenNavDetails.map(details => toggleFirst(details.closest('div'), details))

        }

        fixPrimaryDetailsOnTop();
        addScrollListenerPosition();
        toggleFirstOnOpenDivs();
        resetNavScroll();

    };

    const adjustDOM = function(){
        isWideScreen() ? wideWorkflow() : narrowWorkflow() 
    };

    const resizeHandler = () => isAboutInvisible() ? false : adjustDOM();
    window.addEventListener('resize', resizeHandler)

};

const addListenerToBody = function(){
    const body = document.querySelector('body');
    body.addEventListener('click', clickEventListener)
};

addListenerToBody()
activateResizeEventListener()
