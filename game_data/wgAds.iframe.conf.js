var wg_adContainer = ".wgAdsContainer{ overflow:hidden; }";
var wg_loadingSpinner = ".loadingMarkerContainer{position:fixed; top:50%; left:50%;margin-top:-25px !important;margin-left:-25px !important;} .loadingMarkerContainer {margin: 60px auto;font-size: 5px;text-indent: -9999em;border-top: 5px solid rgba(0, 0, 0, 0.4);border-right: 5px solid rgba(0, 0, 0, 0.4);border-bottom: 5px solid rgba(0, 0, 0, 0.4);border-left: 5px solid #ffffff;-webkit-transform: translateZ(0);-ms-transform: translateZ(0);transform: translateZ(0);-webkit-animation: load8 1.1s infinite linear;animation: load8 1.1s infinite linear !important;}.loadingMarkerContainer,.loadingMarkerContainer:after {border-radius: 50%; width: 50px; height: 50px;} @-webkit-keyframes load8 {0% {  -webkit-transform: rotate(0deg);  transform: rotate(0deg);}100% {  -webkit-transform: rotate(360deg);  transform: rotate(360deg);}}@keyframes load8 {0% {  -webkit-transform: rotate(0deg);  transform: rotate(0deg);}100% {  -webkit-transform: rotate(360deg);  transform: rotate(360deg);}}";
var wg_timeremainigcontainer = ".adTimeRemainingContainer{ width:100%; text-align:center !important; position:relative!important; padding-top:10px;font-family:Arial;color:#fff;} .adMessageContainer{font-size: 14px!important; font-family:Arial;color:#fff;}";
var wg_playNowButton = ".playNowButton{cursor:pointer; display:inline-block; position:absolute; top:50%; left:50%; margin-left:-115px; margin-top:-24px;width:200px; padding:10px; border-radius:5px; border:5px solid #fff; color:#000; background:yellow; text-align:center; font-family:Arial; font-weight:600;}.playNowButton:hover{  box-shadow: 0px 0px 10px #888888; transition:.3s;}";
var wg_splash_css = ".WGPSplash,.WGPSplash:before{position:absolute}.WGPSplash,.WGPSplash:before,.WGPSplash>div{width:100%;height:100%;}.WGPSplash:before{content:' ';top:0;left:0;background:url() no-repeat;-webkit-filter:blur(45px);-moz-filter:blur(45px);-o-filter:blur(45px);-ms-filter:blur(45px);filter:blur(45px);background-size:cover}.WGPSplash>div{padding:130px 0;box-sizing:border-box;text-align:center}.wg-action-button{display:inline-block;background:#99c506;background:-webkit-linear-gradient(#aed409,#77952b);background:-o-linear-gradient(#aed409,#77952b);background:-moz-linear-gradient(#aed409,#77952b);background:linear-gradient(#aed409,#77952b);padding:10px 20px;border-radius:10px;border:3px solid #fff;color:#fff;text-decoration:none;font-size:20px;font-weight:900;text-transform:uppercase;position:relative;bottom:0;white-space:nowrap;margin-bottom:-30px;left:-50%;cursor:pointer;text-shadow:1px 1px #505050;transition:all .2s}.wg-action-button:after{content:\"\\00bb\";position:absolute;opacity:0;right:5px;transition:.5s}.wg-action-button:hover{text-decoration:none;color:#fff;padding-right:35px;background-color:#3e8e41;background:-webkit-linear-gradient(#87ae00,#77952b);background:-o-linear-gradient(#87ae00,#77952b);background:-moz-linear-gradient(#87ae00,#77952b);background:linear-gradient(#87ae00,#77952b)}.wg-action-button:hover:after{opacity:1;right:15px}.wg-action-button:active{background-color:#3e8e41;box-shadow:0 2px #666;transform:translateY(2px) translateX(1px)}.WGPSplash .wg-splash-title{font-size:23px;font-weight:700;color:#fff;padding:10px;margin-top:70px;text-align:center;position:relative;text-shadow:1px 1px #505050;background:-moz-linear-gradient(left,rgba(30,87,153,0) 0,rgba(0,0,0,.3) 50%,rgba(125,185,232,0) 100%);background:-webkit-linear-gradient(left,rgba(30,87,153,0) 0,rgba(0,0,0,.3) 50%,rgba(125,185,232,0) 100%);background:linear-gradient(to right,rgba(30,87,153,0) 0,rgba(0,0,0,.3) 50%,rgba(125,185,232,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#007db9e8', GradientType=1 )}.WGPSplash .wg-splash-thumb{cursor:pointer;width:190px;height:190px;display:inline-block;background-size:contain;background-position:center center;background-repeat:no-repeat;border-radius:50%;border:5px solid #fff;position:relative;box-shadow:4px 2px 30px #505050}.wg-splash-button-bolder{position:absolute;left:50%;margin-top:-20px}";
var wg_site_css = ".google-auto-placed{margin-top:140px;}";
var preroll = {
    get config() {
        var defaultValues = {
            fs: typeof WgFlashEmulator !== "undefined" || typeof WgFlashSuggestions !== "undefined" ? false : true,
            fe: typeof WgFlashEmulator !== "undefined" ? WgFlashEmulator : false,
            otherGames: {
                file: typeof WgFlashSuggestions !== "undefined" ? WgFlashSuggestions : 'https://st.wgplayer.com/dl-girls.com/wgFlashSuggestions.json',
                title: typeof WgFlashSuggestionsTitle !== "undefined" ? WgFlashSuggestionsTitle : null,
                message: typeof WgFlashSuggestionsMessage !== "undefined" ? WgFlashSuggestionsMessage : null,
            },
            autoplay: false,
            autoInit: true,
            absolutePositioning: false,
            containerPosition: "relative",
            forceHtml5: true,
            noAd: typeof wgNoAfg === "undefined" ? false : wgNoAfg,
            minWidth: "100%",
            minHeight: "100%",
            fitParent: true,
            autoCollapseTimeout: 20,
            trl: true,
            trnl: false,
            learnMoreButtonInterval: 5000000000,
            loaderObjectName: "wgAfgLoader",
            preAfgCallback: "preAfgCallback",
            removeAdsCallback: "removeAdHTML5FLASH",
            adMessage: "The game will continue in a few moments.",
            background: "#343434",
            contentContainer: (typeof wgGameContainerID !== "undefined" ? wgGameContainerID : "container"),
            customStyles: wg_adContainer + wg_timeremainigcontainer + wg_loadingSpinner + wg_playNowButton + wg_splash_css,
            launchEvent: "fast",
            triggerElem: null,
            ec: {
                v: 4000,
                i: 16000,
                t: 4000
            },
            ect: 5000,
            exc: ["ALL"],
            mainClassName: "WGP1M1ST1PK1MP1",
            preAdLoadingTime: 0,
            postAdLoadingTime: 0,
            waitForClickPre: true,
            waitForClickMid: true,
            disableAdBlock: {
                level: "block",
                freePlayTime: 30,
                enableFreePlay: true,
                playButtonText: "Play game for 30 seconds",
                message: "Please disable AdBlock to play this game and refresh the page.",
                position: "overlay"
            },
            waitForFlash: 900,
            pd: false,
            adEventCallback: "adEventCallback",
            midrollCallback: "midrollCallback",
            forceCallback: true,
            noloading: true,
            dockTitleAndButton: true,
            scaleSplash: false,
            flashIcon: "//st.wgplayer.com/no_flash.gif",
            flashButtonText: "Allow flash",
            flashTitle: "Click allow flash to play this game",
            isFlashGame: (typeof wgIsFlashGame !== "undefined" ? wgIsFlashGame : null),
            titleExtract: "-,2,left",
            gameThumbnail: (typeof wgGameThumbnail !== "undefined" ? wgGameThumbnail : (document.querySelectorAll('[property="og:image"]').length > 0 ? document.querySelectorAll('[property="og:image"]')[0].content : 'https://st.wgplayer.com/afg_bkg.jpg')),
            gameBackground: (typeof wgGameBkgImage !== "undefined" ? wgGameBkgImage : (document.querySelectorAll('[property="og:image"]').length > 0 ? document.querySelectorAll('[property="og:image"]')[0].content : 'https://st.wgplayer.com/afg_bkg.jpg')),
            gameName: (typeof wgGameName !== "undefined" ? wgGameName : (document.querySelectorAll('[property="og:title"]').length > 0 ? document.querySelectorAll('[property="og:title"]')[0].content : (document.title ? document.title : ''))),
            gameDescription: (typeof wgGameDescription !== "undefined" ? wgGameDescription : (document.querySelectorAll('[property="og:description"]').length > 0 ? document.querySelectorAll('[property="og:description"]')[0].content : "")),
            gameLogo: "https://dl-girls.com/images/logo.png",
            playGameText: (typeof wgGamePlayText !== "undefined" ? wgGamePlayText : "Play game"),
            continueGameText: (typeof wgGameContinueText !== "undefined" ? wgGameContinueText : "Continue game"),
            extraHtmml: (typeof wgCustomSplash === "undefined" ? '<style>.WGPSplash:before{background-image: url(##GAME-BACKGROUND##);}</style><div id="splash-pre"><div class="WGPSplash"><div><div class="wg-splash-thumb" style="background-image: url(##GAME-THUNBMAIL##);" style="visibility: visible"></div><div class="wg-splash-button-bolder"><a class="wg-action-button" id="pre-splash-btn">##PLAY##</a></div><div class="wg-splash-title">##GAME-NAME##</div></div></div></div><div id="splash-mid"><div class="WGPSplash"><div><div class="wg-splash-thumb" style="background-image: url(##GAME-THUNBMAIL##);"></div><div class="wg-splash-button-bolder"><span class="wg-action-button" id="mid-splash-btn">##CONTINUE##</span></div><div class="wg-splash-title">##GAME-NAME##</div></div></div></div>' : ''),
            splash: {
                pre: {
                    splash: (typeof wgCustomSplash !== "undefined" && typeof wgCustomSplash.preSplash !== "undefined" ? wgCustomSplash.preSplash : "splash-pre"),
                    trigger: (typeof wgCustomSplash !== "undefined" && typeof wgCustomSplash.preSplashButton !== "undefined" ? wgCustomSplash.preSplashButton : "pre-splash-btn"),
                },
                mid: {
                    splash: (typeof wgCustomSplash !== "undefined" && typeof wgCustomSplash.midSplash !== "undefined" ? wgCustomSplash.midSplash : "splash-mid"),
                    trigger: (typeof wgCustomSplash !== "undefined" && typeof wgCustomSplash.midSplashButton !== "undefined" ? wgCustomSplash.midSplashButton : "mid-splash-btn"),
                }
            },
            adTagURL: ['//pubads.g.doubleclick.net/gampad/ads?sz=730x400&iu=/1002212/dl-girls.com-AFG-Preroll&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&hl=' + (navigator.language || navigator.userLanguage) + '&url=' + encodeURIComponent(window.location.href) + '&description_url=' + encodeURIComponent(window.location.href) + '&corelator=' + Math.floor(Math.random() * 10000000), ],
            midrollAdTagURL: ['//pubads.g.doubleclick.net/gampad/ads?sz=730x400&iu=/1002212,21861266163/WGAFGMID/dl-girls.com&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1', '//pubads.g.doubleclick.net/gampad/ads?sz=730x400&iu=/1002212,21861266163/WGAFGMID2/dl-girls.com&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1', ],
        };
        var customValues = this.getCustom();
        for (var item in customValues) {
            defaultValues[item] = customValues[item];
        }
        return defaultValues;
    },
    set config(v) {
        for (var item in v) {
            this.custom[item] = v[item];
        }
    },
    getCustom: function() {
        return this.custom;
    },
    custom: {}
};

function removeAdHTML5FLASH() {
    console.debug("After preroll callback.");
}

function adEventCallback(ev, type) {
    console.debug("Ad event" + (type ? '[' + type + ']' : '') + ": ", ev);
}

function midrollCallback() {
    console.debug("After midroll callback.");
}
if (typeof wgplayer !== "undefined" && typeof wgplayer.afg !== "undefined") {
    (function(preroll, wgplayer) {
        preroll.config = wgplayer.afg;
    })(preroll, wgplayer);
}