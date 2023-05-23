import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import {
  faAccessibleIcon,
  faAccusoft,
  faAdn,
  faAdversal,
  faAffiliatetheme,
  faAlgolia,
  faAmazon,
  faAmazonPay,
  faAmilia,
  faAndroid,
  faAngellist,
  faAngrycreative,
  faAngular,
  faAppStore,
  faAppStoreIos,
  faApper,
  faApple,
  faApplePay,
  faAsymmetrik,
  faAudible,
  faAutoprefixer,
  faAvianex,
  faAviato,
  faAws,
  faBandcamp,
  faBehance,
  faBehanceSquare,
  faBimobject,
  faBitbucket,
  faBitcoin,
  faBity,
  faBlackTie,
  faBlackberry,
  faBlogger,
  faBloggerB,
  faBluetooth,
  faBluetoothB,
  faBtc,
  faBuromobelexperte,
  faBuysellads,
  faCcAmazonPay,
  faCcAmex,
  faCcApplePay,
  faCcDinersClub,
  faCcDiscover,
  faCcJcb,
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faCentercode,
  faChrome,
  faCloudscale,
  faCloudsmith,
  faCloudversify,
  faCodepen,
  faCodiepie,
  faConnectdevelop,
  faContao,
  faCpanel,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNcEu,
  faCreativeCommonsNcJp,
  faCreativeCommonsNd,
  faCreativeCommonsPd,
  faCreativeCommonsPdAlt,
  faCreativeCommonsRemix,
  faCreativeCommonsSa,
  faCreativeCommonsSampling,
  faCreativeCommonsSamplingPlus,
  faCreativeCommonsShare,
  faCss3,
  faCss3Alt,
  faCuttlefish,
  faDAndD,
  faDashcube,
  faDelicious,
  faDeploydog,
  faDeskpro,
  faDeviantart,
  faDigg,
  faDigitalOcean,
  faDiscord,
  faDiscourse,
  faDochub,
  faDocker,
  faDraft2digital,
  faDribbble,
  faDribbbleSquare,
  faDropbox,
  faDrupal,
  faDyalog,
  faEarlybirds,
  faEbay,
  faEdge,
  faElementor,
  faEmber,
  faEmpire,
  faEnvira,
  faErlang,
  faEthereum,
  faEtsy,
  faExpeditedssl,
  faFacebook,
  faFacebookF,
  faFacebookMessenger,
  faFacebookSquare,
  faFirefox,
  faFirstOrder,
  faFirstOrderAlt,
  faFirstdraft,
  faFlickr,
  faFlipboard,
  faFly,
  faFontAwesome,
  faFontAwesomeAlt,
  faFontAwesomeFlag,
  faFonticons,
  faFonticonsFi,
  faFortAwesome,
  faFortAwesomeAlt,
  faForumbee,
  faFoursquare,
  faFreeCodeCamp,
  faFreebsd,
  faFulcrum,
  faGalacticRepublic,
  faGalacticSenate,
  faGetPocket,
  faGg,
  faGgCircle,
  faGit,
  faGitSquare,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faGitkraken,
  faGitlab,
  faGitter,
  faGlide,
  faGlideG,
  faGofore,
  faGoodreads,
  faGoodreadsG,
  faGoogle,
  faGoogleDrive,
  faGooglePlay,
  faGooglePlus,
  faGooglePlusG,
  faGooglePlusSquare,
  faGoogleWallet,
  faGratipay,
  faGrav,
  faGripfire,
  faGrunt,
  faGulp,
  faHackerNews,
  faHackerNewsSquare,
  faHips,
  faHireAHelper,
  faHooli,
  faHotjar,
  faHouzz,
  faHtml5,
  faHubspot,
  faImdb,
  faInstagram,
  faInternetExplorer,
  faIoxhost,
  faItunes,
  faItunesNote,
  faJava,
  faJediOrder,
  faJenkins,
  faJoget,
  faJoomla,
  faJs,
  faJsSquare,
  faJsfiddle,
  faKeybase,
  faKeycdn,
  faKickstarter,
  faKickstarterK,
  faKorvue,
  faLaravel,
  faLastfm,
  faLastfmSquare,
  faLeanpub,
  faLess,
  faLine,
  faLinkedin,
  faLinkedinIn,
  faLinode,
  faLinux,
  faLyft,
  faMagento,
  faMandalorian,
  faMastodon,
  faMaxcdn,
  faMedapps,
  faMedium,
  faMediumM,
  faMedrt,
  faMeetup,
  faMicrosoft,
  faMix,
  faMixcloud,
  faMizuni,
  faModx,
  faMonero,
  faNapster,
  faNode,
  faNodeJs,
  faNpm,
  faNs8,
  faNutritionix,
  faOdnoklassniki,
  faOdnoklassnikiSquare,
  faOldRepublic,
  faOpencart,
  faOpenid,
  faOpera,
  faOptinMonster,
  faOsi,
  faPage4,
  faPagelines,
  faPalfed,
  faPatreon,
  faPaypal,
  faPeriscope,
  faPhabricator,
  faPhoenixFramework,
  faPhoenixSquadron,
  faPhp,
  faPiedPiper,
  faPiedPiperAlt,
  faPiedPiperHat,
  faPiedPiperPp,
  faPinterest,
  faPinterestP,
  faPinterestSquare,
  faPlaystation,
  faProductHunt,
  faPushed,
  faPython,
  faQq,
  faQuinscape,
  faQuora,
  faRProject,
  faRavelry,
  faReact,
  faReadme,
  faRebel,
  faRedRiver,
  faReddit,
  faRedditAlien,
  faRedditSquare,
  faRendact,
  faRenren,
  faReplyd,
  faResearchgate,
  faResolving,
  faRocketchat,
  faRockrms,
  faSafari,
  faSass,
  faSchlix,
  faScribd,
  faSearchengin,
  faSellcast,
  faSellsy,
  faServicestack,
  faShirtsinbulk,
  faSimplybuilt,
  faSistrix,
  faSith,
  faSkyatlas,
  faSkype,
  faSlack,
  faSlackHash,
  faSlideshare,
  faSnapchat,
  faSnapchatGhost,
  faSnapchatSquare,
  faSoundcloud,
  faSpeakap,
  faSpotify,
  faStackExchange,
  faStackOverflow,
  faStaylinked,
  faSteam,
  faSteamSquare,
  faSteamSymbol,
  faStickerMule,
  faStrava,
  faStripe,
  faStripeS,
  faStudiovinari,
  faStumbleupon,
  faStumbleuponCircle,
  faSuperpowers,
  faSupple,
  faTeamspeak,
  faTelegram,
  faTelegramPlane,
  faTencentWeibo,
  faThemeisle,
  faTradeFederation,
  faTrello,
  faTumblr,
  faTumblrSquare,
  faTwitch,
  faTwitter,
  faTwitterSquare,
  faTypo3,
  faUber,
  faUikit,
  faUniregistry,
  faUntappd,
  faUsb,
  faUssunnah,
  faVaadin,
  faViacoin,
  faViadeo,
  faViadeoSquare,
  faViber,
  faVimeo,
  faVimeoSquare,
  faVimeoV,
  faVine,
  faVk,
  faVnv,
  faVuejs,
  faWeibo,
  faWeixin,
  faWhatsapp,
  faWhatsappSquare,
  faWhmcs,
  faWikipediaW,
  faWindows,
  faWolfPackBattalion,
  faWordpress,
  faWordpressSimple,
  faWpbeginner,
  faWpexplorer,
  faWpforms,
  faXbox,
  faXing,
  faXingSquare,
  faYCombinator,
  faYahoo,
  faYandex,
  faYandexInternational,
  faYelp,
  faYoast,
  faYoutube,
  faYoutubeSquare,

} from '@fortawesome/free-brands-svg-icons';

import {
  faArrowLeftLong,
  faBlog,
  faBorderAll,
  faDashboard,
  faEnvelopeOpenText,
  faIcons,
  faLocation,
  faPhoneAlt,
  faRightToBracket,
  faAddressBook,
  faAddressCard,
  faAdjust,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faAllergies,
  faAmbulance,
  faAmericanSignLanguageInterpreting,
  faAnchor,
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleUp,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faArchive,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowCircleUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowsAlt,
  faArrowsAltH,
  faArrowsAltV,
  faAssistiveListeningSystems,
  faAsterisk,
  faAt,
  faAudioDescription,
  faBackward,
  faBalanceScale,
  faBan,
  faBandAid,
  faBarcode,
  faBars,
  faBaseballBall,
  faBasketballBall,
  faBath,
  faBatteryEmpty,
  faBatteryFull,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryThreeQuarters,
  faBed,
  faBeer,
  faBell,
  faBellSlash,
  faBicycle,
  faBinoculars,
  faBirthdayCake,
  faBlender,
  faBlind,
  faBold,
  faBolt,
  faBomb,
  faBook,
  faBookOpen,
  faBookmark,
  faBowlingBall,
  faBox,
  faBoxOpen,
  faBoxes,
  faBraille,
  faBriefcase,
  faBriefcaseMedical,
  faBroadcastTower,
  faBroom,
  faBug,
  faBuilding,
  faBullhorn,
  faBullseye,
  faBurn,
  faBus,
  faCalculator,
  faCalendar,
  faCalendarAlt,
  faCalendarCheck,
  faCalendarMinus,
  faCalendarPlus,
  faCalendarTimes,
  faCamera,
  faCameraRetro,
  faCapsules,
  faCar,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretSquareDown,
  faCaretSquareLeft,
  faCaretSquareRight,
  faCaretSquareUp,
  faCaretUp,
  faCartArrowDown,
  faCartPlus,
  faCertificate,
  faChalkboard,
  faChalkboardTeacher,
  faChartArea,
  faChartBar,
  faChartLine,
  faChartPie,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faChess,
  faChessBishop,
  faChessBoard,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook,
  faChevronCircleDown,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronCircleUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChild,
  faChurch,
  faCircle,
  faCircleNotch,
  faClipboard,
  faClipboardCheck,
  faClipboardList,
  faClock,
  faClone,
  faClosedCaptioning,
  faCloud,
  faCloudDownloadAlt,
  faCloudUploadAlt,
  faCode,
  faCodeBranch,
  faCoffee,
  faCog,
  faCogs,
  faCoins,
  faColumns,
  faComment,
  faCommentAlt,
  faCommentDots,
  faCommentSlash,
  faComments,
  faCompactDisc,
  faCompass,
  faCompress,
  faCopy,
  faCopyright,
  faCouch,
  faCreditCard,
  faCrop,
  faCrosshairs,
  faCrow,
  faCrown,
  faCube,
  faCubes,
  faCut,
  faDatabase,
  faDeaf,
  faDesktop,
  faDiagnoses,
  faDice,
  faDiceFive,
  faDiceFour,
  faDiceOne,
  faDiceSix,
  faDiceThree,
  faDiceTwo,
  faDivide,
  faDna,
  faDollarSign,
  faDolly,
  faDollyFlatbed,
  faDonate,
  faDoorClosed,
  faDoorOpen,
  faDotCircle,
  faDove,
  faDownload,
  faDumbbell,
  faEdit,
  faEject,
  faEllipsisH,
  faEllipsisV,
  faEnvelope,
  faEnvelopeOpen,
  faEnvelopeSquare,
  faEquals,
  faEraser,
  faEuroSign,
  faExchangeAlt,
  faExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faExpand,
  faExpandArrowsAlt,
  faExternalLinkAlt,
  faExternalLinkSquareAlt,
  faEye,
  faEyeDropper,
  faEyeSlash,
  faFastBackward,
  faFastForward,
  faFax,
  faFeather,
  faFemale,
  faFighterJet,
  faFile,
  faFileAlt,
  faFileArchive,
  faFileAudio,
  faFileCode,
  faFileExcel,
  faFileImage,
  faFileMedical,
  faFileMedicalAlt,
  faFilePdf,
  faFilePowerpoint,
  faFileVideo,
  faFileWord,
  faFilm,
  faFilter,
  faFire,
  faFireExtinguisher,
  faFirstAid,
  faFlag,
  faFlagCheckered,
  faFlask,
  faFolder,
  faFolderOpen,
  faFont,
  faFontAwesomeLogoFull,
  faFootballBall,
  faForward,
  faFrog,
  faFrown,
  faFutbol,
  faGamepad,
  faGasPump,
  faGavel,
  faGem,
  faGenderless,
  faGift,
  faGlassMartini,
  faGlasses,
  faGlobe,
  faGolfBall,
  faGraduationCap,
  faGreaterThan,
  faGreaterThanEqual,
  faHSquare,
  faHandHolding,
  faHandHoldingHeart,
  faHandHoldingUsd,
  faHandLizard,
  faHandPaper,
  faHandPeace,
  faHandPointDown,
  faHandPointLeft,
  faHandPointRight,
  faHandPointUp,
  faHandPointer,
  faHandRock,
  faHandScissors,
  faHandSpock,
  faHands,
  faHandsHelping,
  faHandshake,
  faHashtag,
  faHdd,
  faHeading,
  faHeadphones,
  faHeart,
  faHeartbeat,
  faHelicopter,
  faHistory,
  faHockeyPuck,
  faHome,
  faHospital,
  faHospitalAlt,
  faHospitalSymbol,
  faHourglass,
  faHourglassEnd,
  faHourglassHalf,
  faHourglassStart,
  faICursor,
  faIdBadge,
  faIdCard,
  faIdCardAlt,
  faImage,
  faImages,
  faInbox,
  faIndent,
  faIndustry,
  faInfinity,
  faInfo,
  faInfoCircle,
  faItalic,
  faKey,
  faKeyboard,
  faKiwiBird,
  faLanguage,
  faLaptop,
  faLeaf,
  faLemon,
  faLessThan,
  faLessThanEqual,
  faLevelDownAlt,
  faLevelUpAlt,
  faLifeRing,
  faLightbulb,
  faLink,
  faLiraSign,
  faList,
  faListAlt,
  faListOl,
  faListUl,
  faLocationArrow,
  faLock,
  faLockOpen,
  faLongArrowAltDown,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faLongArrowAltUp,
  faLowVision,
  faMagic,
  faMagnet,
  faMale,
  faMap,
  faMapMarker,
  faMapMarkerAlt,
  faMapPin,
  faMapSigns,
  faMars,
  faMarsDouble,
  faMarsStroke,
  faMarsStrokeH,
  faMarsStrokeV,
  faMedkit,
  faMeh,
  faMemory,
  faMercury,
  faMicrochip,
  faMicrophone,
  faMicrophoneAlt,
  faMicrophoneAltSlash,
  faMicrophoneSlash,
  faMinus,
  faMinusCircle,
  faMinusSquare,
  faMobile,
  faMobileAlt,
  faMoneyBill,
  faMoneyBillAlt,
  faMoneyBillWave,
  faMoneyBillWaveAlt,
  faMoneyCheck,
  faMoneyCheckAlt,
  faMoon,
  faMotorcycle,
  faMousePointer,
  faMusic,
  faNeuter,
  faNewspaper,
  faNotEqual,
  faNotesMedical,
  faObjectGroup,
  faObjectUngroup,
  faOutdent,
  faPaintBrush,
  faPalette,
  faPallet,
  faPaperPlane,
  faPaperclip,
  faParachuteBox,
  faParagraph,
  faParking,
  faPaste,
  faPause,
  faPauseCircle,
  faPaw,
  faPenSquare,
  faPencilAlt,
  faPeopleCarry,
  faPercent,
  faPercentage,
  faPhone,
  faPhoneSlash,
  faPhoneSquare,
  faPhoneVolume,
  faPiggyBank,
  faPills,
  faPlane,
  faPlay,
  faPlayCircle,
  faPlug,
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faPodcast,
  faPoo,
  faPortrait,
  faPoundSign,
  faPowerOff,
  faPrescriptionBottle,
  faPrescriptionBottleAlt,
  faPrint,
  faProcedures,
  faProjectDiagram,
  faPuzzlePiece,
  faQrcode,
  faQuestion,
  faQuestionCircle,
  faQuidditch,
  faQuoteLeft,
  faQuoteRight,
  faRandom,
  faReceipt,
  faRecycle,
  faRedo,
  faRedoAlt,
  faRegistered,
  faReply,
  faReplyAll,
  faRetweet,
  faRibbon,
  faRoad,
  faRobot,
  faRocket,
  faRss,
  faRssSquare,
  faRubleSign,
  faRuler,
  faRulerCombined,
  faRulerHorizontal,
  faRulerVertical,
  faRupeeSign,
  faSave,
  faSchool,
  faScrewdriver,
  faSearch,
  faSearchMinus,
  faSearchPlus,
  faSeedling,
  faServer,
  faShare,
  faShareAlt,
  faShareAltSquare,
  faShareSquare,
  faShekelSign,
  faShieldAlt,
  faShip,
  faShippingFast,
  faShoePrints,
  faShoppingBag,
  faShoppingBasket,
  faShoppingCart,
  faShower,
  faSign,
  faSignInAlt,
  faSignLanguage,
  faSignOutAlt,
  faSignal,
  faSitemap,
  faSkull,
  faSlidersH,
  faSmile,
  faSmoking,
  faSmokingBan,
  faSnowflake,
  faSort,
  faSortAlphaDown,
  faSortAlphaUp,
  faSortAmountDown,
  faSortAmountUp,
  faSortDown,
  faSortNumericDown,
  faSortNumericUp,
  faSortUp,
  faSpaceShuttle,
  faSpinner,
  faSquare,
  faSquareFull,
  faStar,
  faStarHalf,
  faStepBackward,
  faStepForward,
  faStethoscope,
  faStickyNote,
  faStop,
  faStopCircle,
  faStopwatch,
  faStore,
  faStoreAlt,
  faStream,
  faStreetView,
  faStrikethrough,
  faStroopwafel,
  faSubscript,
  faSubway,
  faSuitcase,
  faSun,
  faSuperscript,
  faSync,
  faSyncAlt,
  faSyringe,
  faTable,
  faTableTennis,
  faTablet,
  faTabletAlt,
  faTablets,
  faTachometerAlt,
  faTag,
  faTags,
  faTape,
  faTasks,
  faTaxi,
  faTerminal,
  faTextHeight,
  faTextWidth,
  faTh,
  faThLarge,
  faThList,
  faThermometer,
  faThermometerEmpty,
  faThermometerFull,
  faThermometerHalf,
  faThermometerQuarter,
  faThermometerThreeQuarters,
  faThumbsDown,
  faThumbsUp,
  faThumbtack,
  faTicketAlt,
  faTimes,
  faTimesCircle,
  faTint,
  faToggleOff,
  faToggleOn,
  faToolbox,
  faTrademark,
  faTrain,
  faTransgender,
  faTransgenderAlt,
  faTrash,
  faTrashAlt,
  faTree,
  faTrophy,
  faTruck,
  faTruckLoading,
  faTruckMoving,
  faTshirt,
  faTty,
  faTv,
  faUmbrella,
  faUnderline,
  faUndo,
  faUndoAlt,
  faUniversalAccess,
  faUniversity,
  faUnlink,
  faUnlock,
  faUnlockAlt,
  faUpload,
  faUser,
  faUserAlt,
  faUserAltSlash,
  faUserAstronaut,
  faUserCheck,
  faUserCircle,
  faUserClock,
  faUserCog,
  faUserEdit,
  faUserFriends,
  faUserGraduate,
  faUserLock,
  faUserMd,
  faUserMinus,
  faUserNinja,
  faUserPlus,
  faUserSecret,
  faUserShield,
  faUserSlash,
  faUserTag,
  faUserTie,
  faUserTimes,
  faUsers,
  faUsersCog,
  faUtensilSpoon,
  faUtensils,
  faVenus,
  faVenusDouble,
  faVenusMars,
  faVial,
  faVials,
  faVideo,
  faVideoSlash,
  faVolleyballBall,
  faVolumeDown,
  faVolumeOff,
  faVolumeUp,
  faWalking,
  faWallet,
  faWarehouse,
  faWeight,
  faWheelchair,
  faWifi,
  faWindowClose,
  faWindowMaximize,
  faWindowMinimize,
  faWindowRestore,
  faWineGlass,
  faWonSign,
  faWrench,
  faXRay,
  faYenSign,
  faSignature,
  faGear,
  faGears,
  faMessage,
  faLocationPin,
  faLocationPinLock,
  faLocationDot,
  faMapLocation,
  faMapLocationDot,
  faHouse,
  faHouseChimney,
  faHouseUser,
  faHouseLock,
  faHouseLaptop,
  faCircleDot,
  faTableColumns,
  faWater,
} from '@fortawesome/free-solid-svg-icons';

export class AlloyIcon {
  id: string;
  className: string;
  icon: IconDefinition;
  size: SizeProp;
  spin: boolean;
  static idGenerator: number = 0;
  constructor(res?: any) {
    if (res) {
      this.id = res.id ? res.id : "icon" + ++AlloyIcon.idGenerator;
      this.icon = res.icon
        ? AlloyIcon.getIcon(res.icon)
        : AlloyIcon.getIcon('faMicrochip');
      this.size = res.size
        ? AlloyIcon.getSizeProp(res.size)
        : AlloyIcon.getSizeProp('lg');
      this.spin = res.spin ? res.spin : false;
    } else {
      this.id = "icon" + ++AlloyIcon.idGenerator;
      this.icon = AlloyIcon.getIcon('faMicrochip');
      this.size = AlloyIcon.getSizeProp('lg');
      this.spin = false;
    }
  }

  static getAlloyIcon(icon): AlloyIcon{
    if(icon instanceof AlloyIcon){
      return icon;
    }else{
      return( new AlloyIcon(icon));
    }
  }

  static getIcon(icon: string): IconDefinition {
    switch (icon) {
      case 'faWater' :  return  faWater; 
      case 'faTableColumns' :  return  faTableColumns;
      case 'faCircleDot' :  return  faCircleDot;
      case 'faHouse' :  return  faHouse;
      case 'faHouseChimney' :  return  faHouseChimney;
      case 'faHouseUser' :  return  faHouseUser;
      case 'faHouseLock' :  return  faHouseLock;
      case 'faHouseLaptop' :  return  faHouseLaptop;
      case 'faSignature' :  return  faSignature;
      case 'faLocationPin' :  return  faLocationPin;
      case 'faLocationPinLock' :  return  faLocationPinLock;
      case 'faLocationDot' :  return  faLocationDot;
      case 'faMapLocation' :  return  faMapLocation;
      case 'faMapLocationDot' :  return  faMapLocationDot;
      case 'faGear' :  return  faGear;
      case 'faGears' :  return  faGears;
      case 'faMessage' :  return  faMessage;
      case 'faArrowLeftLong' :  return  faArrowLeftLong;
      case 'faBlog' :  return  faBlog;
      case 'faBorderAll' :  return  faBorderAll;
      case 'faDashboard' :  return  faDashboard;
      case 'faEnvelopeOpenText' :  return  faEnvelopeOpenText;
      case 'faIcons' :  return  faIcons;
      case 'faLocation' :  return  faLocation;
      case 'faPhoneAlt' :  return  faPhoneAlt;
      case 'faRightToBracket' :  return  faRightToBracket;
      case 'faAddressBook' :  return  faAddressBook;
      case 'faAddressCard' :  return  faAddressCard;
      case 'faAdjust' :  return  faAdjust;
      case 'faAlignCenter' :  return  faAlignCenter;
      case 'faAlignJustify' :  return  faAlignJustify;
      case 'faAlignLeft' :  return  faAlignLeft;
      case 'faAlignRight' :  return  faAlignRight;
      case 'faAllergies' :  return  faAllergies;
      case 'faAmbulance' :  return  faAmbulance;
      case 'faAmericanSignLanguageInterpreting' :  return  faAmericanSignLanguageInterpreting;
      case 'faAnchor' :  return  faAnchor;
      case 'faAngleDoubleDown' :  return  faAngleDoubleDown;
      case 'faAngleDoubleLeft' :  return  faAngleDoubleLeft;
      case 'faAngleDoubleRight' :  return  faAngleDoubleRight;
      case 'faAngleDoubleUp' :  return  faAngleDoubleUp;
      case 'faAngleDown' :  return  faAngleDown;
      case 'faAngleLeft' :  return  faAngleLeft;
      case 'faAngleRight' :  return  faAngleRight;
      case 'faAngleUp' :  return  faAngleUp;
      case 'faArchive' :  return  faArchive;
      case 'faArrowAltCircleDown' :  return  faArrowAltCircleDown;
      case 'faArrowAltCircleLeft' :  return  faArrowAltCircleLeft;
      case 'faArrowAltCircleRight' :  return  faArrowAltCircleRight;
      case 'faArrowAltCircleUp' :  return  faArrowAltCircleUp;
      case 'faArrowCircleDown' :  return  faArrowCircleDown;
      case 'faArrowCircleLeft' :  return  faArrowCircleLeft;
      case 'faArrowCircleRight' :  return  faArrowCircleRight;
      case 'faArrowCircleUp' :  return  faArrowCircleUp;
      case 'faArrowDown' :  return  faArrowDown;
      case 'faArrowLeft' :  return  faArrowLeft;
      case 'faArrowRight' :  return  faArrowRight;
      case 'faArrowUp' :  return  faArrowUp;
      case 'faArrowsAlt' :  return  faArrowsAlt;
      case 'faArrowsAltH' :  return  faArrowsAltH;
      case 'faArrowsAltV' :  return  faArrowsAltV;
      case 'faAssistiveListeningSystems' :  return  faAssistiveListeningSystems;
      case 'faAsterisk' :  return  faAsterisk;
      case 'faAt' :  return  faAt;
      case 'faAudioDescription' :  return  faAudioDescription;
      case 'faBackward' :  return  faBackward;
      case 'faBalanceScale' :  return  faBalanceScale;
      case 'faBan' :  return  faBan;
      case 'faBandAid' :  return  faBandAid;
      case 'faBarcode' :  return  faBarcode;
      case 'faBars' :  return  faBars;
      case 'faBaseballBall' :  return  faBaseballBall;
      case 'faBasketballBall' :  return  faBasketballBall;
      case 'faBath' :  return  faBath;
      case 'faBatteryEmpty' :  return  faBatteryEmpty;
      case 'faBatteryFull' :  return  faBatteryFull;
      case 'faBatteryHalf' :  return  faBatteryHalf;
      case 'faBatteryQuarter' :  return  faBatteryQuarter;
      case 'faBatteryThreeQuarters' :  return  faBatteryThreeQuarters;
      case 'faBed' :  return  faBed;
      case 'faBeer' :  return  faBeer;
      case 'faBell' :  return  faBell;
      case 'faBellSlash' :  return  faBellSlash;
      case 'faBicycle' :  return  faBicycle;
      case 'faBinoculars' :  return  faBinoculars;
      case 'faBirthdayCake' :  return  faBirthdayCake;
      case 'faBlender' :  return  faBlender;
      case 'faBlind' :  return  faBlind;
      case 'faBold' :  return  faBold;
      case 'faBolt' :  return  faBolt;
      case 'faBomb' :  return  faBomb;
      case 'faBook' :  return  faBook;
      case 'faBookOpen' :  return  faBookOpen;
      case 'faBookmark' :  return  faBookmark;
      case 'faBowlingBall' :  return  faBowlingBall;
      case 'faBox' :  return  faBox;
      case 'faBoxOpen' :  return  faBoxOpen;
      case 'faBoxes' :  return  faBoxes;
      case 'faBraille' :  return  faBraille;
      case 'faBriefcase' :  return  faBriefcase;
      case 'faBriefcaseMedical' :  return  faBriefcaseMedical;
      case 'faBroadcastTower' :  return  faBroadcastTower;
      case 'faBroom' :  return  faBroom;
      case 'faBug' :  return  faBug;
      case 'faBuilding' :  return  faBuilding;
      case 'faBullhorn' :  return  faBullhorn;
      case 'faBullseye' :  return  faBullseye;
      case 'faBurn' :  return  faBurn;
      case 'faBus' :  return  faBus;
      case 'faCalculator' :  return  faCalculator;
      case 'faCalendar' :  return  faCalendar;
      case 'faCalendarAlt' :  return  faCalendarAlt;
      case 'faCalendarCheck' :  return  faCalendarCheck;
      case 'faCalendarMinus' :  return  faCalendarMinus;
      case 'faCalendarPlus' :  return  faCalendarPlus;
      case 'faCalendarTimes' :  return  faCalendarTimes;
      case 'faCamera' :  return  faCamera;
      case 'faCameraRetro' :  return  faCameraRetro;
      case 'faCapsules' :  return  faCapsules;
      case 'faCar' :  return  faCar;
      case 'faCaretDown' :  return  faCaretDown;
      case 'faCaretLeft' :  return  faCaretLeft;
      case 'faCaretRight' :  return  faCaretRight;
      case 'faCaretSquareDown' :  return  faCaretSquareDown;
      case 'faCaretSquareLeft' :  return  faCaretSquareLeft;
      case 'faCaretSquareRight' :  return  faCaretSquareRight;
      case 'faCaretSquareUp' :  return  faCaretSquareUp;
      case 'faCaretUp' :  return  faCaretUp;
      case 'faCartArrowDown' :  return  faCartArrowDown;
      case 'faCartPlus' :  return  faCartPlus;
      case 'faCertificate' :  return  faCertificate;
      case 'faChalkboard' :  return  faChalkboard;
      case 'faChalkboardTeacher' :  return  faChalkboardTeacher;
      case 'faChartArea' :  return  faChartArea;
      case 'faChartBar' :  return  faChartBar;
      case 'faChartLine' :  return  faChartLine;
      case 'faChartPie' :  return  faChartPie;
      case 'faCheck' :  return  faCheck;
      case 'faCheckCircle' :  return  faCheckCircle;
      case 'faCheckSquare' :  return  faCheckSquare;
      case 'faChess' :  return  faChess;
      case 'faChessBishop' :  return  faChessBishop;
      case 'faChessBoard' :  return  faChessBoard;
      case 'faChessKing' :  return  faChessKing;
      case 'faChessKnight' :  return  faChessKnight;
      case 'faChessPawn' :  return  faChessPawn;
      case 'faChessQueen' :  return  faChessQueen;
      case 'faChessRook' :  return  faChessRook;
      case 'faChevronCircleDown' :  return  faChevronCircleDown;
      case 'faChevronCircleLeft' :  return  faChevronCircleLeft;
      case 'faChevronCircleRight' :  return  faChevronCircleRight;
      case 'faChevronCircleUp' :  return  faChevronCircleUp;
      case 'faChevronDown' :  return  faChevronDown;
      case 'faChevronLeft' :  return  faChevronLeft;
      case 'faChevronRight' :  return  faChevronRight;
      case 'faChevronUp' :  return  faChevronUp;
      case 'faChild' :  return  faChild;
      case 'faChurch' :  return  faChurch;
      case 'faCircle' :  return  faCircle;
      case 'faCircleNotch' :  return  faCircleNotch;
      case 'faClipboard' :  return  faClipboard;
      case 'faClipboardCheck' :  return  faClipboardCheck;
      case 'faClipboardList' :  return  faClipboardList;
      case 'faClock' :  return  faClock;
      case 'faClone' :  return  faClone;
      case 'faClosedCaptioning' :  return  faClosedCaptioning;
      case 'faCloud' :  return  faCloud;
      case 'faCloudDownloadAlt' :  return  faCloudDownloadAlt;
      case 'faCloudUploadAlt' :  return  faCloudUploadAlt;
      case 'faCode' :  return  faCode;
      case 'faCodeBranch' :  return  faCodeBranch;
      case 'faCoffee' :  return  faCoffee;
      case 'faCog' :  return  faCog;
      case 'faCogs' :  return  faCogs;
      case 'faCoins' :  return  faCoins;
      case 'faColumns' :  return  faColumns;
      case 'faComment' :  return  faComment;
      case 'faCommentAlt' :  return  faCommentAlt;
      case 'faCommentDots' :  return  faCommentDots;
      case 'faCommentSlash' :  return  faCommentSlash;
      case 'faComments' :  return  faComments;
      case 'faCompactDisc' :  return  faCompactDisc;
      case 'faCompass' :  return  faCompass;
      case 'faCompress' :  return  faCompress;
      case 'faCopy' :  return  faCopy;
      case 'faCopyright' :  return  faCopyright;
      case 'faCouch' :  return  faCouch;
      case 'faCreditCard' :  return  faCreditCard;
      case 'faCrop' :  return  faCrop;
      case 'faCrosshairs' :  return  faCrosshairs;
      case 'faCrow' :  return  faCrow;
      case 'faCrown' :  return  faCrown;
      case 'faCube' :  return  faCube;
      case 'faCubes' :  return  faCubes;
      case 'faCut' :  return  faCut;
      case 'faDatabase' :  return  faDatabase;
      case 'faDeaf' :  return  faDeaf;
      case 'faDesktop' :  return  faDesktop;
      case 'faDiagnoses' :  return  faDiagnoses;
      case 'faDice' :  return  faDice;
      case 'faDiceFive' :  return  faDiceFive;
      case 'faDiceFour' :  return  faDiceFour;
      case 'faDiceOne' :  return  faDiceOne;
      case 'faDiceSix' :  return  faDiceSix;
      case 'faDiceThree' :  return  faDiceThree;
      case 'faDiceTwo' :  return  faDiceTwo;
      case 'faDivide' :  return  faDivide;
      case 'faDna' :  return  faDna;
      case 'faDollarSign' :  return  faDollarSign;
      case 'faDolly' :  return  faDolly;
      case 'faDollyFlatbed' :  return  faDollyFlatbed;
      case 'faDonate' :  return  faDonate;
      case 'faDoorClosed' :  return  faDoorClosed;
      case 'faDoorOpen' :  return  faDoorOpen;
      case 'faDotCircle' :  return  faDotCircle;
      case 'faDove' :  return  faDove;
      case 'faDownload' :  return  faDownload;
      case 'faDumbbell' :  return  faDumbbell;
      case 'faEdit' :  return  faEdit;
      case 'faEject' :  return  faEject;
      case 'faEllipsisH' :  return  faEllipsisH;
      case 'faEllipsisV' :  return  faEllipsisV;
      case 'faEnvelope' :  return  faEnvelope;
      case 'faEnvelopeOpen' :  return  faEnvelopeOpen;
      case 'faEnvelopeSquare' :  return  faEnvelopeSquare;
      case 'faEquals' :  return  faEquals;
      case 'faEraser' :  return  faEraser;
      case 'faEuroSign' :  return  faEuroSign;
      case 'faExchangeAlt' :  return  faExchangeAlt;
      case 'faExclamation' :  return  faExclamation;
      case 'faExclamationCircle' :  return  faExclamationCircle;
      case 'faExclamationTriangle' :  return  faExclamationTriangle;
      case 'faExpand' :  return  faExpand;
      case 'faExpandArrowsAlt' :  return  faExpandArrowsAlt;
      case 'faExternalLinkAlt' :  return  faExternalLinkAlt;
      case 'faExternalLinkSquareAlt' :  return  faExternalLinkSquareAlt;
      case 'faEye' :  return  faEye;
      case 'faEyeDropper' :  return  faEyeDropper;
      case 'faEyeSlash' :  return  faEyeSlash;
      case 'faFastBackward' :  return  faFastBackward;
      case 'faFastForward' :  return  faFastForward;
      case 'faFax' :  return  faFax;
      case 'faFeather' :  return  faFeather;
      case 'faFemale' :  return  faFemale;
      case 'faFighterJet' :  return  faFighterJet;
      case 'faFile' :  return  faFile;
      case 'faFileAlt' :  return  faFileAlt;
      case 'faFileArchive' :  return  faFileArchive;
      case 'faFileAudio' :  return  faFileAudio;
      case 'faFileCode' :  return  faFileCode;
      case 'faFileExcel' :  return  faFileExcel;
      case 'faFileImage' :  return  faFileImage;
      case 'faFileMedical' :  return  faFileMedical;
      case 'faFileMedicalAlt' :  return  faFileMedicalAlt;
      case 'faFilePdf' :  return  faFilePdf;
      case 'faFilePowerpoint' :  return  faFilePowerpoint;
      case 'faFileVideo' :  return  faFileVideo;
      case 'faFileWord' :  return  faFileWord;
      case 'faFilm' :  return  faFilm;
      case 'faFilter' :  return  faFilter;
      case 'faFire' :  return  faFire;
      case 'faFireExtinguisher' :  return  faFireExtinguisher;
      case 'faFirstAid' :  return  faFirstAid;
      case 'faFlag' :  return  faFlag;
      case 'faFlagCheckered' :  return  faFlagCheckered;
      case 'faFlask' :  return  faFlask;
      case 'faFolder' :  return  faFolder;
      case 'faFolderOpen' :  return  faFolderOpen;
      case 'faFont' :  return  faFont;
      case 'faFontAwesomeLogoFull' :  return  faFontAwesomeLogoFull;
      case 'faFootballBall' :  return  faFootballBall;
      case 'faForward' :  return  faForward;
      case 'faFrog' :  return  faFrog;
      case 'faFrown' :  return  faFrown;
      case 'faFutbol' :  return  faFutbol;
      case 'faGamepad' :  return  faGamepad;
      case 'faGasPump' :  return  faGasPump;
      case 'faGavel' :  return  faGavel;
      case 'faGem' :  return  faGem;
      case 'faGenderless' :  return  faGenderless;
      case 'faGift' :  return  faGift;
      case 'faGlassMartini' :  return  faGlassMartini;
      case 'faGlasses' :  return  faGlasses;
      case 'faGlobe' :  return  faGlobe;
      case 'faGolfBall' :  return  faGolfBall;
      case 'faGraduationCap' :  return  faGraduationCap;
      case 'faGreaterThan' :  return  faGreaterThan;
      case 'faGreaterThanEqual' :  return  faGreaterThanEqual;
      case 'faHSquare' :  return  faHSquare;
      case 'faHandHolding' :  return  faHandHolding;
      case 'faHandHoldingHeart' :  return  faHandHoldingHeart;
      case 'faHandHoldingUsd' :  return  faHandHoldingUsd;
      case 'faHandLizard' :  return  faHandLizard;
      case 'faHandPaper' :  return  faHandPaper;
      case 'faHandPeace' :  return  faHandPeace;
      case 'faHandPointDown' :  return  faHandPointDown;
      case 'faHandPointLeft' :  return  faHandPointLeft;
      case 'faHandPointRight' :  return  faHandPointRight;
      case 'faHandPointUp' :  return  faHandPointUp;
      case 'faHandPointer' :  return  faHandPointer;
      case 'faHandRock' :  return  faHandRock;
      case 'faHandScissors' :  return  faHandScissors;
      case 'faHandSpock' :  return  faHandSpock;
      case 'faHands' :  return  faHands;
      case 'faHandsHelping' :  return  faHandsHelping;
      case 'faHandshake' :  return  faHandshake;
      case 'faHashtag' :  return  faHashtag;
      case 'faHdd' :  return  faHdd;
      case 'faHeading' :  return  faHeading;
      case 'faHeadphones' :  return  faHeadphones;
      case 'faHeart' :  return  faHeart;
      case 'faHeartbeat' :  return  faHeartbeat;
      case 'faHelicopter' :  return  faHelicopter;
      case 'faHistory' :  return  faHistory;
      case 'faHockeyPuck' :  return  faHockeyPuck;
      case 'faHome' :  return  faHome;
      case 'faHospital' :  return  faHospital;
      case 'faHospitalAlt' :  return  faHospitalAlt;
      case 'faHospitalSymbol' :  return  faHospitalSymbol;
      case 'faHourglass' :  return  faHourglass;
      case 'faHourglassEnd' :  return  faHourglassEnd;
      case 'faHourglassHalf' :  return  faHourglassHalf;
      case 'faHourglassStart' :  return  faHourglassStart;
      case 'faICursor' :  return  faICursor;
      case 'faIdBadge' :  return  faIdBadge;
      case 'faIdCard' :  return  faIdCard;
      case 'faIdCardAlt' :  return  faIdCardAlt;
      case 'faImage' :  return  faImage;
      case 'faImages' :  return  faImages;
      case 'faInbox' :  return  faInbox;
      case 'faIndent' :  return  faIndent;
      case 'faIndustry' :  return  faIndustry;
      case 'faInfinity' :  return  faInfinity;
      case 'faInfo' :  return  faInfo;
      case 'faInfoCircle' :  return  faInfoCircle;
      case 'faItalic' :  return  faItalic;
      case 'faKey' :  return  faKey;
      case 'faKeyboard' :  return  faKeyboard;
      case 'faKiwiBird' :  return  faKiwiBird;
      case 'faLanguage' :  return  faLanguage;
      case 'faLaptop' :  return  faLaptop;
      case 'faLeaf' :  return  faLeaf;
      case 'faLemon' :  return  faLemon;
      case 'faLessThan' :  return  faLessThan;
      case 'faLessThanEqual' :  return  faLessThanEqual;
      case 'faLevelDownAlt' :  return  faLevelDownAlt;
      case 'faLevelUpAlt' :  return  faLevelUpAlt;
      case 'faLifeRing' :  return  faLifeRing;
      case 'faLightbulb' :  return  faLightbulb;
      case 'faLink' :  return  faLink;
      case 'faLiraSign' :  return  faLiraSign;
      case 'faList' :  return  faList;
      case 'faListAlt' :  return  faListAlt;
      case 'faListOl' :  return  faListOl;
      case 'faListUl' :  return  faListUl;
      case 'faLocationArrow' :  return  faLocationArrow;
      case 'faLock' :  return  faLock;
      case 'faLockOpen' :  return  faLockOpen;
      case 'faLongArrowAltDown' :  return  faLongArrowAltDown;
      case 'faLongArrowAltLeft' :  return  faLongArrowAltLeft;
      case 'faLongArrowAltRight' :  return  faLongArrowAltRight;
      case 'faLongArrowAltUp' :  return  faLongArrowAltUp;
      case 'faLowVision' :  return  faLowVision;
      case 'faMagic' :  return  faMagic;
      case 'faMagnet' :  return  faMagnet;
      case 'faMale' :  return  faMale;
      case 'faMap' :  return  faMap;
      case 'faMapMarker' :  return  faMapMarker;
      case 'faMapMarkerAlt' :  return  faMapMarkerAlt;
      case 'faMapPin' :  return  faMapPin;
      case 'faMapSigns' :  return  faMapSigns;
      case 'faMars' :  return  faMars;
      case 'faMarsDouble' :  return  faMarsDouble;
      case 'faMarsStroke' :  return  faMarsStroke;
      case 'faMarsStrokeH' :  return  faMarsStrokeH;
      case 'faMarsStrokeV' :  return  faMarsStrokeV;
      case 'faMedkit' :  return  faMedkit;
      case 'faMeh' :  return  faMeh;
      case 'faMemory' :  return  faMemory;
      case 'faMercury' :  return  faMercury;
      case 'faMicrochip' :  return  faMicrochip;
      case 'faMicrophone' :  return  faMicrophone;
      case 'faMicrophoneAlt' :  return  faMicrophoneAlt;
      case 'faMicrophoneAltSlash' :  return  faMicrophoneAltSlash;
      case 'faMicrophoneSlash' :  return  faMicrophoneSlash;
      case 'faMinus' :  return  faMinus;
      case 'faMinusCircle' :  return  faMinusCircle;
      case 'faMinusSquare' :  return  faMinusSquare;
      case 'faMobile' :  return  faMobile;
      case 'faMobileAlt' :  return  faMobileAlt;
      case 'faMoneyBill' :  return  faMoneyBill;
      case 'faMoneyBillAlt' :  return  faMoneyBillAlt;
      case 'faMoneyBillWave' :  return  faMoneyBillWave;
      case 'faMoneyBillWaveAlt' :  return  faMoneyBillWaveAlt;
      case 'faMoneyCheck' :  return  faMoneyCheck;
      case 'faMoneyCheckAlt' :  return  faMoneyCheckAlt;
      case 'faMoon' :  return  faMoon;
      case 'faMotorcycle' :  return  faMotorcycle;
      case 'faMousePointer' :  return  faMousePointer;
      case 'faMusic' :  return  faMusic;
      case 'faNeuter' :  return  faNeuter;
      case 'faNewspaper' :  return  faNewspaper;
      case 'faNotEqual' :  return  faNotEqual;
      case 'faNotesMedical' :  return  faNotesMedical;
      case 'faObjectGroup' :  return  faObjectGroup;
      case 'faObjectUngroup' :  return  faObjectUngroup;
      case 'faOutdent' :  return  faOutdent;
      case 'faPaintBrush' :  return  faPaintBrush;
      case 'faPalette' :  return  faPalette;
      case 'faPallet' :  return  faPallet;
      case 'faPaperPlane' :  return  faPaperPlane;
      case 'faPaperclip' :  return  faPaperclip;
      case 'faParachuteBox' :  return  faParachuteBox;
      case 'faParagraph' :  return  faParagraph;
      case 'faParking' :  return  faParking;
      case 'faPaste' :  return  faPaste;
      case 'faPause' :  return  faPause;
      case 'faPauseCircle' :  return  faPauseCircle;
      case 'faPaw' :  return  faPaw;
      case 'faPenSquare' :  return  faPenSquare;
      case 'faPencilAlt' :  return  faPencilAlt;
      case 'faPeopleCarry' :  return  faPeopleCarry;
      case 'faPercent' :  return  faPercent;
      case 'faPercentage' :  return  faPercentage;
      case 'faPhone' :  return  faPhone;
      case 'faPhoneSlash' :  return  faPhoneSlash;
      case 'faPhoneSquare' :  return  faPhoneSquare;
      case 'faPhoneVolume' :  return  faPhoneVolume;
      case 'faPiggyBank' :  return  faPiggyBank;
      case 'faPills' :  return  faPills;
      case 'faPlane' :  return  faPlane;
      case 'faPlay' :  return  faPlay;
      case 'faPlayCircle' :  return  faPlayCircle;
      case 'faPlug' :  return  faPlug;
      case 'faPlus' :  return  faPlus;
      case 'faPlusCircle' :  return  faPlusCircle;
      case 'faPlusSquare' :  return  faPlusSquare;
      case 'faPodcast' :  return  faPodcast;
      case 'faPoo' :  return  faPoo;
      case 'faPortrait' :  return  faPortrait;
      case 'faPoundSign' :  return  faPoundSign;
      case 'faPowerOff' :  return  faPowerOff;
      case 'faPrescriptionBottle' :  return  faPrescriptionBottle;
      case 'faPrescriptionBottleAlt' :  return  faPrescriptionBottleAlt;
      case 'faPrint' :  return  faPrint;
      case 'faProcedures' :  return  faProcedures;
      case 'faProjectDiagram' :  return  faProjectDiagram;
      case 'faPuzzlePiece' :  return  faPuzzlePiece;
      case 'faQrcode' :  return  faQrcode;
      case 'faQuestion' :  return  faQuestion;
      case 'faQuestionCircle' :  return  faQuestionCircle;
      case 'faQuidditch' :  return  faQuidditch;
      case 'faQuoteLeft' :  return  faQuoteLeft;
      case 'faQuoteRight' :  return  faQuoteRight;
      case 'faRandom' :  return  faRandom;
      case 'faReceipt' :  return  faReceipt;
      case 'faRecycle' :  return  faRecycle;
      case 'faRedo' :  return  faRedo;
      case 'faRedoAlt' :  return  faRedoAlt;
      case 'faRegistered' :  return  faRegistered;
      case 'faReply' :  return  faReply;
      case 'faReplyAll' :  return  faReplyAll;
      case 'faRetweet' :  return  faRetweet;
      case 'faRibbon' :  return  faRibbon;
      case 'faRoad' :  return  faRoad;
      case 'faRobot' :  return  faRobot;
      case 'faRocket' :  return  faRocket;
      case 'faRss' :  return  faRss;
      case 'faRssSquare' :  return  faRssSquare;
      case 'faRubleSign' :  return  faRubleSign;
      case 'faRuler' :  return  faRuler;
      case 'faRulerCombined' :  return  faRulerCombined;
      case 'faRulerHorizontal' :  return  faRulerHorizontal;
      case 'faRulerVertical' :  return  faRulerVertical;
      case 'faRupeeSign' :  return  faRupeeSign;
      case 'faSave' :  return  faSave;
      case 'faSchool' :  return  faSchool;
      case 'faScrewdriver' :  return  faScrewdriver;
      case 'faSearch' :  return  faSearch;
      case 'faSearchMinus' :  return  faSearchMinus;
      case 'faSearchPlus' :  return  faSearchPlus;
      case 'faSeedling' :  return  faSeedling;
      case 'faServer' :  return  faServer;
      case 'faShare' :  return  faShare;
      case 'faShareAlt' :  return  faShareAlt;
      case 'faShareAltSquare' :  return  faShareAltSquare;
      case 'faShareSquare' :  return  faShareSquare;
      case 'faShekelSign' :  return  faShekelSign;
      case 'faShieldAlt' :  return  faShieldAlt;
      case 'faShip' :  return  faShip;
      case 'faShippingFast' :  return  faShippingFast;
      case 'faShoePrints' :  return  faShoePrints;
      case 'faShoppingBag' :  return  faShoppingBag;
      case 'faShoppingBasket' :  return  faShoppingBasket;
      case 'faShoppingCart' :  return  faShoppingCart;
      case 'faShower' :  return  faShower;
      case 'faSign' :  return  faSign;
      case 'faSignInAlt' :  return  faSignInAlt;
      case 'faSignLanguage' :  return  faSignLanguage;
      case 'faSignOutAlt' :  return  faSignOutAlt;
      case 'faSignal' :  return  faSignal;
      case 'faSitemap' :  return  faSitemap;
      case 'faSkull' :  return  faSkull;
      case 'faSlidersH' :  return  faSlidersH;
      case 'faSmile' :  return  faSmile;
      case 'faSmoking' :  return  faSmoking;
      case 'faSmokingBan' :  return  faSmokingBan;
      case 'faSnowflake' :  return  faSnowflake;
      case 'faSort' :  return  faSort;
      case 'faSortAlphaDown' :  return  faSortAlphaDown;
      case 'faSortAlphaUp' :  return  faSortAlphaUp;
      case 'faSortAmountDown' :  return  faSortAmountDown;
      case 'faSortAmountUp' :  return  faSortAmountUp;
      case 'faSortDown' :  return  faSortDown;
      case 'faSortNumericDown' :  return  faSortNumericDown;
      case 'faSortNumericUp' :  return  faSortNumericUp;
      case 'faSortUp' :  return  faSortUp;
      case 'faSpaceShuttle' :  return  faSpaceShuttle;
      case 'faSpinner' :  return  faSpinner;
      case 'faSquare' :  return  faSquare;
      case 'faSquareFull' :  return  faSquareFull;
      case 'faStar' :  return  faStar;
      case 'faStarHalf' :  return  faStarHalf;
      case 'faStepBackward' :  return  faStepBackward;
      case 'faStepForward' :  return  faStepForward;
      case 'faStethoscope' :  return  faStethoscope;
      case 'faStickyNote' :  return  faStickyNote;
      case 'faStop' :  return  faStop;
      case 'faStopCircle' :  return  faStopCircle;
      case 'faStopwatch' :  return  faStopwatch;
      case 'faStore' :  return  faStore;
      case 'faStoreAlt' :  return  faStoreAlt;
      case 'faStream' :  return  faStream;
      case 'faStreetView' :  return  faStreetView;
      case 'faStrikethrough' :  return  faStrikethrough;
      case 'faStroopwafel' :  return  faStroopwafel;
      case 'faSubscript' :  return  faSubscript;
      case 'faSubway' :  return  faSubway;
      case 'faSuitcase' :  return  faSuitcase;
      case 'faSun' :  return  faSun;
      case 'faSuperscript' :  return  faSuperscript;
      case 'faSync' :  return  faSync;
      case 'faSyncAlt' :  return  faSyncAlt;
      case 'faSyringe' :  return  faSyringe;
      case 'faTable' :  return  faTable;
      case 'faTableTennis' :  return  faTableTennis;
      case 'faTablet' :  return  faTablet;
      case 'faTabletAlt' :  return  faTabletAlt;
      case 'faTablets' :  return  faTablets;
      case 'faTachometerAlt' :  return  faTachometerAlt;
      case 'faTag' :  return  faTag;
      case 'faTags' :  return  faTags;
      case 'faTape' :  return  faTape;
      case 'faTasks' :  return  faTasks;
      case 'faTaxi' :  return  faTaxi;
      case 'faTerminal' :  return  faTerminal;
      case 'faTextHeight' :  return  faTextHeight;
      case 'faTextWidth' :  return  faTextWidth;
      case 'faTh' :  return  faTh;
      case 'faThLarge' :  return  faThLarge;
      case 'faThList' :  return  faThList;
      case 'faThermometer' :  return  faThermometer;
      case 'faThermometerEmpty' :  return  faThermometerEmpty;
      case 'faThermometerFull' :  return  faThermometerFull;
      case 'faThermometerHalf' :  return  faThermometerHalf;
      case 'faThermometerQuarter' :  return  faThermometerQuarter;
      case 'faThermometerThreeQuarters' :  return  faThermometerThreeQuarters;
      case 'faThumbsDown' :  return  faThumbsDown;
      case 'faThumbsUp' :  return  faThumbsUp;
      case 'faThumbtack' :  return  faThumbtack;
      case 'faTicketAlt' :  return  faTicketAlt;
      case 'faTimes' :  return  faTimes;
      case 'faTimesCircle' :  return  faTimesCircle;
      case 'faTint' :  return  faTint;
      case 'faToggleOff' :  return  faToggleOff;
      case 'faToggleOn' :  return  faToggleOn;
      case 'faToolbox' :  return  faToolbox;
      case 'faTrademark' :  return  faTrademark;
      case 'faTrain' :  return  faTrain;
      case 'faTransgender' :  return  faTransgender;
      case 'faTransgenderAlt' :  return  faTransgenderAlt;
      case 'faTrash' :  return  faTrash;
      case 'faTrashAlt' :  return  faTrashAlt;
      case 'faTree' :  return  faTree;
      case 'faTrophy' :  return  faTrophy;
      case 'faTruck' :  return  faTruck;
      case 'faTruckLoading' :  return  faTruckLoading;
      case 'faTruckMoving' :  return  faTruckMoving;
      case 'faTshirt' :  return  faTshirt;
      case 'faTty' :  return  faTty;
      case 'faTv' :  return  faTv;
      case 'faUmbrella' :  return  faUmbrella;
      case 'faUnderline' :  return  faUnderline;
      case 'faUndo' :  return  faUndo;
      case 'faUndoAlt' :  return  faUndoAlt;
      case 'faUniversalAccess' :  return  faUniversalAccess;
      case 'faUniversity' :  return  faUniversity;
      case 'faUnlink' :  return  faUnlink;
      case 'faUnlock' :  return  faUnlock;
      case 'faUnlockAlt' :  return  faUnlockAlt;
      case 'faUpload' :  return  faUpload;
      case 'faUser' :  return  faUser;
      case 'faUserAlt' :  return  faUserAlt;
      case 'faUserAltSlash' :  return  faUserAltSlash;
      case 'faUserAstronaut' :  return  faUserAstronaut;
      case 'faUserCheck' :  return  faUserCheck;
      case 'faUserCircle' :  return  faUserCircle;
      case 'faUserClock' :  return  faUserClock;
      case 'faUserCog' :  return  faUserCog;
      case 'faUserEdit' :  return  faUserEdit;
      case 'faUserFriends' :  return  faUserFriends;
      case 'faUserGraduate' :  return  faUserGraduate;
      case 'faUserLock' :  return  faUserLock;
      case 'faUserMd' :  return  faUserMd;
      case 'faUserMinus' :  return  faUserMinus;
      case 'faUserNinja' :  return  faUserNinja;
      case 'faUserPlus' :  return  faUserPlus;
      case 'faUserSecret' :  return  faUserSecret;
      case 'faUserShield' :  return  faUserShield;
      case 'faUserSlash' :  return  faUserSlash;
      case 'faUserTag' :  return  faUserTag;
      case 'faUserTie' :  return  faUserTie;
      case 'faUserTimes' :  return  faUserTimes;
      case 'faUsers' :  return  faUsers;
      case 'faUsersCog' :  return  faUsersCog;
      case 'faUtensilSpoon' :  return  faUtensilSpoon;
      case 'faUtensils' :  return  faUtensils;
      case 'faVenus' :  return  faVenus;
      case 'faVenusDouble' :  return  faVenusDouble;
      case 'faVenusMars' :  return  faVenusMars;
      case 'faVial' :  return  faVial;
      case 'faVials' :  return  faVials;
      case 'faVideo' :  return  faVideo;
      case 'faVideoSlash' :  return  faVideoSlash;
      case 'faVolleyballBall' :  return  faVolleyballBall;
      case 'faVolumeDown' :  return  faVolumeDown;
      case 'faVolumeOff' :  return  faVolumeOff;
      case 'faVolumeUp' :  return  faVolumeUp;
      case 'faWalking' :  return  faWalking;
      case 'faWallet' :  return  faWallet;
      case 'faWarehouse' :  return  faWarehouse;
      case 'faWeight' :  return  faWeight;
      case 'faWheelchair' :  return  faWheelchair;
      case 'faWifi' :  return  faWifi;
      case 'faWindowClose' :  return  faWindowClose;
      case 'faWindowMaximize' :  return  faWindowMaximize;
      case 'faWindowMinimize' :  return  faWindowMinimize;
      case 'faWindowRestore' :  return  faWindowRestore;
      case 'faWineGlass' :  return  faWineGlass;
      case 'faWonSign' :  return  faWonSign;
      case 'faWrench' :  return  faWrench;
      case 'faXRay' :  return  faXRay;
      case 'faYenSign' :  return  faYenSign;
      case 'faAccessibleIcon' :  return  faAccessibleIcon;
      case 'faAccusoft' :  return  faAccusoft;
      case 'faAdn' :  return  faAdn;
      case 'faAdversal' :  return  faAdversal;
      case 'faAffiliatetheme' :  return  faAffiliatetheme;
      case 'faAlgolia' :  return  faAlgolia;
      case 'faAmazon' :  return  faAmazon;
      case 'faAmazonPay' :  return  faAmazonPay;
      case 'faAmilia' :  return  faAmilia;
      case 'faAndroid' :  return  faAndroid;
      case 'faAngellist' :  return  faAngellist;
      case 'faAngrycreative' :  return  faAngrycreative;
      case 'faAngular' :  return  faAngular;
      case 'faAppStore' :  return  faAppStore;
      case 'faAppStoreIos' :  return  faAppStoreIos;
      case 'faApper' :  return  faApper;
      case 'faApple' :  return  faApple;
      case 'faApplePay' :  return  faApplePay;
      case 'faAsymmetrik' :  return  faAsymmetrik;
      case 'faAudible' :  return  faAudible;
      case 'faAutoprefixer' :  return  faAutoprefixer;
      case 'faAvianex' :  return  faAvianex;
      case 'faAviato' :  return  faAviato;
      case 'faAws' :  return  faAws;
      case 'faBandcamp' :  return  faBandcamp;
      case 'faBehance' :  return  faBehance;
      case 'faBehanceSquare' :  return  faBehanceSquare;
      case 'faBimobject' :  return  faBimobject;
      case 'faBitbucket' :  return  faBitbucket;
      case 'faBitcoin' :  return  faBitcoin;
      case 'faBity' :  return  faBity;
      case 'faBlackTie' :  return  faBlackTie;
      case 'faBlackberry' :  return  faBlackberry;
      case 'faBlogger' :  return  faBlogger;
      case 'faBloggerB' :  return  faBloggerB;
      case 'faBluetooth' :  return  faBluetooth;
      case 'faBluetoothB' :  return  faBluetoothB;
      case 'faBtc' :  return  faBtc;
      case 'faBuromobelexperte' :  return  faBuromobelexperte;
      case 'faBuysellads' :  return  faBuysellads;
      case 'faCcAmazonPay' :  return  faCcAmazonPay;
      case 'faCcAmex' :  return  faCcAmex;
      case 'faCcApplePay' :  return  faCcApplePay;
      case 'faCcDinersClub' :  return  faCcDinersClub;
      case 'faCcDiscover' :  return  faCcDiscover;
      case 'faCcJcb' :  return  faCcJcb;
      case 'faCcMastercard' :  return  faCcMastercard;
      case 'faCcPaypal' :  return  faCcPaypal;
      case 'faCcStripe' :  return  faCcStripe;
      case 'faCcVisa' :  return  faCcVisa;
      case 'faCentercode' :  return  faCentercode;
      case 'faChrome' :  return  faChrome;
      case 'faCloudscale' :  return  faCloudscale;
      case 'faCloudsmith' :  return  faCloudsmith;
      case 'faCloudversify' :  return  faCloudversify;
      case 'faCodepen' :  return  faCodepen;
      case 'faCodiepie' :  return  faCodiepie;
      case 'faConnectdevelop' :  return  faConnectdevelop;
      case 'faContao' :  return  faContao;
      case 'faCpanel' :  return  faCpanel;
      case 'faCreativeCommons' :  return  faCreativeCommons;
      case 'faCreativeCommonsBy' :  return  faCreativeCommonsBy;
      case 'faCreativeCommonsNc' :  return  faCreativeCommonsNc;
      case 'faCreativeCommonsNcEu' :  return  faCreativeCommonsNcEu;
      case 'faCreativeCommonsNcJp' :  return  faCreativeCommonsNcJp;
      case 'faCreativeCommonsNd' :  return  faCreativeCommonsNd;
      case 'faCreativeCommonsPd' :  return  faCreativeCommonsPd;
      case 'faCreativeCommonsPdAlt' :  return  faCreativeCommonsPdAlt;
      case 'faCreativeCommonsRemix' :  return  faCreativeCommonsRemix;
      case 'faCreativeCommonsSa' :  return  faCreativeCommonsSa;
      case 'faCreativeCommonsSampling' :  return  faCreativeCommonsSampling;
      case 'faCreativeCommonsSamplingPlus' :  return  faCreativeCommonsSamplingPlus;
      case 'faCreativeCommonsShare' :  return  faCreativeCommonsShare;
      case 'faCss3' :  return  faCss3;
      case 'faCss3Alt' :  return  faCss3Alt;
      case 'faCuttlefish' :  return  faCuttlefish;
      case 'faDAndD' :  return  faDAndD;
      case 'faDashcube' :  return  faDashcube;
      case 'faDelicious' :  return  faDelicious;
      case 'faDeploydog' :  return  faDeploydog;
      case 'faDeskpro' :  return  faDeskpro;
      case 'faDeviantart' :  return  faDeviantart;
      case 'faDigg' :  return  faDigg;
      case 'faDigitalOcean' :  return  faDigitalOcean;
      case 'faDiscord' :  return  faDiscord;
      case 'faDiscourse' :  return  faDiscourse;
      case 'faDochub' :  return  faDochub;
      case 'faDocker' :  return  faDocker;
      case 'faDraft2Digital' :  return  faDraft2digital;
      case 'faDribbble' :  return  faDribbble;
      case 'faDribbbleSquare' :  return  faDribbbleSquare;
      case 'faDropbox' :  return  faDropbox;
      case 'faDrupal' :  return  faDrupal;
      case 'faDyalog' :  return  faDyalog;
      case 'faEarlybirds' :  return  faEarlybirds;
      case 'faEbay' :  return  faEbay;
      case 'faEdge' :  return  faEdge;
      case 'faElementor' :  return  faElementor;
      case 'faEmber' :  return  faEmber;
      case 'faEmpire' :  return  faEmpire;
      case 'faEnvira' :  return  faEnvira;
      case 'faErlang' :  return  faErlang;
      case 'faEthereum' :  return  faEthereum;
      case 'faEtsy' :  return  faEtsy;
      case 'faExpeditedssl' :  return  faExpeditedssl;
      case 'faFacebook' :  return  faFacebook;
      case 'faFacebookF' :  return  faFacebookF;
      case 'faFacebookMessenger' :  return  faFacebookMessenger;
      case 'faFacebookSquare' :  return  faFacebookSquare;
      case 'faFirefox' :  return  faFirefox;
      case 'faFirstOrder' :  return  faFirstOrder;
      case 'faFirstOrderAlt' :  return  faFirstOrderAlt;
      case 'faFirstdraft' :  return  faFirstdraft;
      case 'faFlickr' :  return  faFlickr;
      case 'faFlipboard' :  return  faFlipboard;
      case 'faFly' :  return  faFly;
      case 'faFontAwesome' :  return  faFontAwesome;
      case 'faFontAwesomeAlt' :  return  faFontAwesomeAlt;
      case 'faFontAwesomeFlag' :  return  faFontAwesomeFlag;
      case 'faFonticons' :  return  faFonticons;
      case 'faFonticonsFi' :  return  faFonticonsFi;
      case 'faFortAwesome' :  return  faFortAwesome;
      case 'faFortAwesomeAlt' :  return  faFortAwesomeAlt;
      case 'faForumbee' :  return  faForumbee;
      case 'faFoursquare' :  return  faFoursquare;
      case 'faFreeCodeCamp' :  return  faFreeCodeCamp;
      case 'faFreebsd' :  return  faFreebsd;
      case 'faFulcrum' :  return  faFulcrum;
      case 'faGalacticRepublic' :  return  faGalacticRepublic;
      case 'faGalacticSenate' :  return  faGalacticSenate;
      case 'faGetPocket' :  return  faGetPocket;
      case 'faGg' :  return  faGg;
      case 'faGgCircle' :  return  faGgCircle;
      case 'faGit' :  return  faGit;
      case 'faGitSquare' :  return  faGitSquare;
      case 'faGithub' :  return  faGithub;
      case 'faGithubAlt' :  return  faGithubAlt;
      case 'faGithubSquare' :  return  faGithubSquare;
      case 'faGitkraken' :  return  faGitkraken;
      case 'faGitlab' :  return  faGitlab;
      case 'faGitter' :  return  faGitter;
      case 'faGlide' :  return  faGlide;
      case 'faGlideG' :  return  faGlideG;
      case 'faGofore' :  return  faGofore;
      case 'faGoodreads' :  return  faGoodreads;
      case 'faGoodreadsG' :  return  faGoodreadsG;
      case 'faGoogle' :  return  faGoogle;
      case 'faGoogleDrive' :  return  faGoogleDrive;
      case 'faGooglePlay' :  return  faGooglePlay;
      case 'faGooglePlus' :  return  faGooglePlus;
      case 'faGooglePlusG' :  return  faGooglePlusG;
      case 'faGooglePlusSquare' :  return  faGooglePlusSquare;
      case 'faGoogleWallet' :  return  faGoogleWallet;
      case 'faGratipay' :  return  faGratipay;
      case 'faGrav' :  return  faGrav;
      case 'faGripfire' :  return  faGripfire;
      case 'faGrunt' :  return  faGrunt;
      case 'faGulp' :  return  faGulp;
      case 'faHackerNews' :  return  faHackerNews;
      case 'faHackerNewsSquare' :  return  faHackerNewsSquare;
      case 'faHips' :  return  faHips;
      case 'faHireAHelper' :  return  faHireAHelper;
      case 'faHooli' :  return  faHooli;
      case 'faHotjar' :  return  faHotjar;
      case 'faHouzz' :  return  faHouzz;
      case 'faHtml5' :  return  faHtml5;
      case 'faHubspot' :  return  faHubspot;
      case 'faImdb' :  return  faImdb;
      case 'faInstagram' :  return  faInstagram;
      case 'faInternetExplorer' :  return  faInternetExplorer;
      case 'faIoxhost' :  return  faIoxhost;
      case 'faItunes' :  return  faItunes;
      case 'faItunesNote' :  return  faItunesNote;
      case 'faJava' :  return  faJava;
      case 'faJediOrder' :  return  faJediOrder;
      case 'faJenkins' :  return  faJenkins;
      case 'faJoget' :  return  faJoget;
      case 'faJoomla' :  return  faJoomla;
      case 'faJs' :  return  faJs;
      case 'faJsSquare' :  return  faJsSquare;
      case 'faJsfiddle' :  return  faJsfiddle;
      case 'faKeybase' :  return  faKeybase;
      case 'faKeycdn' :  return  faKeycdn;
      case 'faKickstarter' :  return  faKickstarter;
      case 'faKickstarterK' :  return  faKickstarterK;
      case 'faKorvue' :  return  faKorvue;
      case 'faLaravel' :  return  faLaravel;
      case 'faLastfm' :  return  faLastfm;
      case 'faLastfmSquare' :  return  faLastfmSquare;
      case 'faLeanpub' :  return  faLeanpub;
      case 'faLess' :  return  faLess;
      case 'faLine' :  return  faLine;
      case 'faLinkedin' :  return  faLinkedin;
      case 'faLinkedinIn' :  return  faLinkedinIn;
      case 'faLinode' :  return  faLinode;
      case 'faLinux' :  return  faLinux;
      case 'faLyft' :  return  faLyft;
      case 'faMagento' :  return  faMagento;
      case 'faMandalorian' :  return  faMandalorian;
      case 'faMastodon' :  return  faMastodon;
      case 'faMaxcdn' :  return  faMaxcdn;
      case 'faMedapps' :  return  faMedapps;
      case 'faMedium' :  return  faMedium;
      case 'faMediumM' :  return  faMediumM;
      case 'faMedrt' :  return  faMedrt;
      case 'faMeetup' :  return  faMeetup;
      case 'faMicrosoft' :  return  faMicrosoft;
      case 'faMix' :  return  faMix;
      case 'faMixcloud' :  return  faMixcloud;
      case 'faMizuni' :  return  faMizuni;
      case 'faModx' :  return  faModx;
      case 'faMonero' :  return  faMonero;
      case 'faNapster' :  return  faNapster;
      case 'faNode' :  return  faNode;
      case 'faNodeJs' :  return  faNodeJs;
      case 'faNpm' :  return  faNpm;
      case 'faNs8' :  return  faNs8;
      case 'faNutritionix' :  return  faNutritionix;
      case 'faOdnoklassniki' :  return  faOdnoklassniki;
      case 'faOdnoklassnikiSquare' :  return  faOdnoklassnikiSquare;
      case 'faOldRepublic' :  return  faOldRepublic;
      case 'faOpencart' :  return  faOpencart;
      case 'faOpenid' :  return  faOpenid;
      case 'faOpera' :  return  faOpera;
      case 'faOptinMonster' :  return  faOptinMonster;
      case 'faOsi' :  return  faOsi;
      case 'faPage4' :  return  faPage4;
      case 'faPagelines' :  return  faPagelines;
      case 'faPalfed' :  return  faPalfed;
      case 'faPatreon' :  return  faPatreon;
      case 'faPaypal' :  return  faPaypal;
      case 'faPeriscope' :  return  faPeriscope;
      case 'faPhabricator' :  return  faPhabricator;
      case 'faPhoenixFramework' :  return  faPhoenixFramework;
      case 'faPhoenixSquadron' :  return  faPhoenixSquadron;
      case 'faPhp' :  return  faPhp;
      case 'faPiedPiper' :  return  faPiedPiper;
      case 'faPiedPiperAlt' :  return  faPiedPiperAlt;
      case 'faPiedPiperHat' :  return  faPiedPiperHat;
      case 'faPiedPiperPp' :  return  faPiedPiperPp;
      case 'faPinterest' :  return  faPinterest;
      case 'faPinterestP' :  return  faPinterestP;
      case 'faPinterestSquare' :  return  faPinterestSquare;
      case 'faPlaystation' :  return  faPlaystation;
      case 'faProductHunt' :  return  faProductHunt;
      case 'faPushed' :  return  faPushed;
      case 'faPython' :  return  faPython;
      case 'faQq' :  return  faQq;
      case 'faQuinscape' :  return  faQuinscape;
      case 'faQuora' :  return  faQuora;
      case 'faRProject' :  return  faRProject;
      case 'faRavelry' :  return  faRavelry;
      case 'faReact' :  return  faReact;
      case 'faReadme' :  return  faReadme;
      case 'faRebel' :  return  faRebel;
      case 'faRedRiver' :  return  faRedRiver;
      case 'faReddit' :  return  faReddit;
      case 'faRedditAlien' :  return  faRedditAlien;
      case 'faRedditSquare' :  return  faRedditSquare;
      case 'faRendact' :  return  faRendact;
      case 'faRenren' :  return  faRenren;
      case 'faReplyd' :  return  faReplyd;
      case 'faResearchgate' :  return  faResearchgate;
      case 'faResolving' :  return  faResolving;
      case 'faRocketchat' :  return  faRocketchat;
      case 'faRockrms' :  return  faRockrms;
      case 'faSafari' :  return  faSafari;
      case 'faSass' :  return  faSass;
      case 'faSchlix' :  return  faSchlix;
      case 'faScribd' :  return  faScribd;
      case 'faSearchengin' :  return  faSearchengin;
      case 'faSellcast' :  return  faSellcast;
      case 'faSellsy' :  return  faSellsy;
      case 'faServicestack' :  return  faServicestack;
      case 'faShirtsinbulk' :  return  faShirtsinbulk;
      case 'faSimplybuilt' :  return  faSimplybuilt;
      case 'faSistrix' :  return  faSistrix;
      case 'faSith' :  return  faSith;
      case 'faSkyatlas' :  return  faSkyatlas;
      case 'faSkype' :  return  faSkype;
      case 'faSlack' :  return  faSlack;
      case 'faSlackHash' :  return  faSlackHash;
      case 'faSlideshare' :  return  faSlideshare;
      case 'faSnapchat' :  return  faSnapchat;
      case 'faSnapchatGhost' :  return  faSnapchatGhost;
      case 'faSnapchatSquare' :  return  faSnapchatSquare;
      case 'faSoundcloud' :  return  faSoundcloud;
      case 'faSpeakap' :  return  faSpeakap;
      case 'faSpotify' :  return  faSpotify;
      case 'faStackExchange' :  return  faStackExchange;
      case 'faStackOverflow' :  return  faStackOverflow;
      case 'faStaylinked' :  return  faStaylinked;
      case 'faSteam' :  return  faSteam;
      case 'faSteamSquare' :  return  faSteamSquare;
      case 'faSteamSymbol' :  return  faSteamSymbol;
      case 'faStickerMule' :  return  faStickerMule;
      case 'faStrava' :  return  faStrava;
      case 'faStripe' :  return  faStripe;
      case 'faStripeS' :  return  faStripeS;
      case 'faStudiovinari' :  return  faStudiovinari;
      case 'faStumbleupon' :  return  faStumbleupon;
      case 'faStumbleuponCircle' :  return  faStumbleuponCircle;
      case 'faSuperpowers' :  return  faSuperpowers;
      case 'faSupple' :  return  faSupple;
      case 'faTeamspeak' :  return  faTeamspeak;
      case 'faTelegram' :  return  faTelegram;
      case 'faTelegramPlane' :  return  faTelegramPlane;
      case 'faTencentWeibo' :  return  faTencentWeibo;
      case 'faThemeisle' :  return  faThemeisle;
      case 'faTradeFederation' :  return  faTradeFederation;
      case 'faTrello' :  return  faTrello;
      case 'faTumblr' :  return  faTumblr;
      case 'faTumblrSquare' :  return  faTumblrSquare;
      case 'faTwitch' :  return  faTwitch;
      case 'faTwitter' :  return  faTwitter;
      case 'faTwitterSquare' :  return  faTwitterSquare;
      case 'faTypo3' :  return  faTypo3;
      case 'faUber' :  return  faUber;
      case 'faUikit' :  return  faUikit;
      case 'faUniregistry' :  return  faUniregistry;
      case 'faUntappd' :  return  faUntappd;
      case 'faUsb' :  return  faUsb;
      case 'faUssunnah' :  return  faUssunnah;
      case 'faVaadin' :  return  faVaadin;
      case 'faViacoin' :  return  faViacoin;
      case 'faViadeo' :  return  faViadeo;
      case 'faViadeoSquare' :  return  faViadeoSquare;
      case 'faViber' :  return  faViber;
      case 'faVimeo' :  return  faVimeo;
      case 'faVimeoSquare' :  return  faVimeoSquare;
      case 'faVimeoV' :  return  faVimeoV;
      case 'faVine' :  return  faVine;
      case 'faVk' :  return  faVk;
      case 'faVnv' :  return  faVnv;
      case 'faVuejs' :  return  faVuejs;
      case 'faWeibo' :  return  faWeibo;
      case 'faWeixin' :  return  faWeixin;
      case 'faWhatsapp' :  return  faWhatsapp;
      case 'faWhatsappSquare' :  return  faWhatsappSquare;
      case 'faWhmcs' :  return  faWhmcs;
      case 'faWikipediaW' :  return  faWikipediaW;
      case 'faWindows' :  return  faWindows;
      case 'faWolfPackBattalion' :  return  faWolfPackBattalion;
      case 'faWordpress' :  return  faWordpress;
      case 'faWordpressSimple' :  return  faWordpressSimple;
      case 'faWpbeginner' :  return  faWpbeginner;
      case 'faWpexplorer' :  return  faWpexplorer;
      case 'faWpforms' :  return  faWpforms;
      case 'faXbox' :  return  faXbox;
      case 'faXing' :  return  faXing;
      case 'faXingSquare' :  return  faXingSquare;
      case 'faYCombinator' :  return  faYCombinator;
      case 'faYahoo' :  return  faYahoo;
      case 'faYandex' :  return  faYandex;
      case 'faYandexInternational' :  return  faYandexInternational;
      case 'faYelp' :  return  faYelp;
      case 'faYoast' :  return  faYoast;
      case 'faYoutube' :  return  faYoutube;
      case 'faYoutubeSquare' :  return  faYoutubeSquare;
      case 'faArrowLeftLong' :  return  faArrowLeftLong;
      case 'faBlog' :  return  faBlog;
      case 'faBorderAll' :  return  faBorderAll;
      case 'faDashboard' :  return  faDashboard;
      case 'faEnvelopeOpenText' :  return  faEnvelopeOpenText;
      case 'faIcons' :  return  faIcons;
      case 'faLocation' :  return  faLocation;
      case 'faPhoneAlt' :  return  faPhoneAlt;
      case 'faRightToBracket' :  return  faRightToBracket;    
      default:
        return faMicrochip;
    }
  }

  static getIconText(icon: IconDefinition): string { 
    switch (icon) {   
      case faWater : return "faWater" ;
      case faTableColumns : return "faTableColumns" ;
      case faCircleDot : return "faCircleDot" ;
      case faHouse : return "faHouse" ;
      case faHouseChimney : return "faHouseChimney" ;
      case faHouseUser : return "faHouseUser" ;
      case faHouseLock : return "faHouseLock" ;
      case faHouseLaptop : return "faHouseLaptop" ;
      case faSignature : return "faSignature" ;
      case faLocationPin : return "faLocationPin" ;
      case faLocationPinLock : return "faLocationPinLock" ;
      case faLocationDot : return "faLocationDot" ;
      case faMapLocation : return "faMapLocation" ;
      case faMapLocationDot : return "faMapLocationDot" ;
      case faGear : return "faGear" ;
      case faGears : return "faGears" ;
      case faMessage : return "faMessage" ;
      case faArrowLeftLong : return "faArrowLeftLong" ;
      case faBlog : return "faBlog" ;
      case faBorderAll : return "faBorderAll" ;
      case faDashboard : return "faDashboard" ;
      case faEnvelopeOpenText : return "faEnvelopeOpenText" ;
      case faIcons : return "faIcons" ;
      case faLocation : return "faLocation" ;
      case faPhoneAlt : return "faPhoneAlt" ;
      case faRightToBracket : return "faRightToBracket" ;
      case faAddressBook : return "faAddressBook" ;
      case faAddressCard : return "faAddressCard" ;
      case faAdjust : return "faAdjust" ;
      case faAlignCenter : return "faAlignCenter" ;
      case faAlignJustify : return "faAlignJustify" ;
      case faAlignLeft : return "faAlignLeft" ;
      case faAlignRight : return "faAlignRight" ;
      case faAllergies : return "faAllergies" ;
      case faAmbulance : return "faAmbulance" ;
      case faAmericanSignLanguageInterpreting : return "faAmericanSignLanguageInterpreting" ;
      case faAnchor : return "faAnchor" ;
      case faAngleDoubleDown : return "faAngleDoubleDown" ;
      case faAngleDoubleLeft : return "faAngleDoubleLeft" ;
      case faAngleDoubleRight : return "faAngleDoubleRight" ;
      case faAngleDoubleUp : return "faAngleDoubleUp" ;
      case faAngleDown : return "faAngleDown" ;
      case faAngleLeft : return "faAngleLeft" ;
      case faAngleRight : return "faAngleRight" ;
      case faAngleUp : return "faAngleUp" ;
      case faArchive : return "faArchive" ;
      case faArrowAltCircleDown : return "faArrowAltCircleDown" ;
      case faArrowAltCircleLeft : return "faArrowAltCircleLeft" ;
      case faArrowAltCircleRight : return "faArrowAltCircleRight" ;
      case faArrowAltCircleUp : return "faArrowAltCircleUp" ;
      case faArrowCircleDown : return "faArrowCircleDown" ;
      case faArrowCircleLeft : return "faArrowCircleLeft" ;
      case faArrowCircleRight : return "faArrowCircleRight" ;
      case faArrowCircleUp : return "faArrowCircleUp" ;
      case faArrowDown : return "faArrowDown" ;
      case faArrowLeft : return "faArrowLeft" ;
      case faArrowRight : return "faArrowRight" ;
      case faArrowUp : return "faArrowUp" ;
      case faArrowsAlt : return "faArrowsAlt" ;
      case faArrowsAltH : return "faArrowsAltH" ;
      case faArrowsAltV : return "faArrowsAltV" ;
      case faAssistiveListeningSystems : return "faAssistiveListeningSystems" ;
      case faAsterisk : return "faAsterisk" ;
      case faAt : return "faAt" ;
      case faAudioDescription : return "faAudioDescription" ;
      case faBackward : return "faBackward" ;
      case faBalanceScale : return "faBalanceScale" ;
      case faBan : return "faBan" ;
      case faBandAid : return "faBandAid" ;
      case faBarcode : return "faBarcode" ;
      case faBars : return "faBars" ;
      case faBaseballBall : return "faBaseballBall" ;
      case faBasketballBall : return "faBasketballBall" ;
      case faBath : return "faBath" ;
      case faBatteryEmpty : return "faBatteryEmpty" ;
      case faBatteryFull : return "faBatteryFull" ;
      case faBatteryHalf : return "faBatteryHalf" ;
      case faBatteryQuarter : return "faBatteryQuarter" ;
      case faBatteryThreeQuarters : return "faBatteryThreeQuarters" ;
      case faBed : return "faBed" ;
      case faBeer : return "faBeer" ;
      case faBell : return "faBell" ;
      case faBellSlash : return "faBellSlash" ;
      case faBicycle : return "faBicycle" ;
      case faBinoculars : return "faBinoculars" ;
      case faBirthdayCake : return "faBirthdayCake" ;
      case faBlender : return "faBlender" ;
      case faBlind : return "faBlind" ;
      case faBold : return "faBold" ;
      case faBolt : return "faBolt" ;
      case faBomb : return "faBomb" ;
      case faBook : return "faBook" ;
      case faBookOpen : return "faBookOpen" ;
      case faBookmark : return "faBookmark" ;
      case faBowlingBall : return "faBowlingBall" ;
      case faBox : return "faBox" ;
      case faBoxOpen : return "faBoxOpen" ;
      case faBoxes : return "faBoxes" ;
      case faBraille : return "faBraille" ;
      case faBriefcase : return "faBriefcase" ;
      case faBriefcaseMedical : return "faBriefcaseMedical" ;
      case faBroadcastTower : return "faBroadcastTower" ;
      case faBroom : return "faBroom" ;
      case faBug : return "faBug" ;
      case faBuilding : return "faBuilding" ;
      case faBullhorn : return "faBullhorn" ;
      case faBullseye : return "faBullseye" ;
      case faBurn : return "faBurn" ;
      case faBus : return "faBus" ;
      case faCalculator : return "faCalculator" ;
      case faCalendar : return "faCalendar" ;
      case faCalendarAlt : return "faCalendarAlt" ;
      case faCalendarCheck : return "faCalendarCheck" ;
      case faCalendarMinus : return "faCalendarMinus" ;
      case faCalendarPlus : return "faCalendarPlus" ;
      case faCalendarTimes : return "faCalendarTimes" ;
      case faCamera : return "faCamera" ;
      case faCameraRetro : return "faCameraRetro" ;
      case faCapsules : return "faCapsules" ;
      case faCar : return "faCar" ;
      case faCaretDown : return "faCaretDown" ;
      case faCaretLeft : return "faCaretLeft" ;
      case faCaretRight : return "faCaretRight" ;
      case faCaretSquareDown : return "faCaretSquareDown" ;
      case faCaretSquareLeft : return "faCaretSquareLeft" ;
      case faCaretSquareRight : return "faCaretSquareRight" ;
      case faCaretSquareUp : return "faCaretSquareUp" ;
      case faCaretUp : return "faCaretUp" ;
      case faCartArrowDown : return "faCartArrowDown" ;
      case faCartPlus : return "faCartPlus" ;
      case faCertificate : return "faCertificate" ;
      case faChalkboard : return "faChalkboard" ;
      case faChalkboardTeacher : return "faChalkboardTeacher" ;
      case faChartArea : return "faChartArea" ;
      case faChartBar : return "faChartBar" ;
      case faChartLine : return "faChartLine" ;
      case faChartPie : return "faChartPie" ;
      case faCheck : return "faCheck" ;
      case faCheckCircle : return "faCheckCircle" ;
      case faCheckSquare : return "faCheckSquare" ;
      case faChess : return "faChess" ;
      case faChessBishop : return "faChessBishop" ;
      case faChessBoard : return "faChessBoard" ;
      case faChessKing : return "faChessKing" ;
      case faChessKnight : return "faChessKnight" ;
      case faChessPawn : return "faChessPawn" ;
      case faChessQueen : return "faChessQueen" ;
      case faChessRook : return "faChessRook" ;
      case faChevronCircleDown : return "faChevronCircleDown" ;
      case faChevronCircleLeft : return "faChevronCircleLeft" ;
      case faChevronCircleRight : return "faChevronCircleRight" ;
      case faChevronCircleUp : return "faChevronCircleUp" ;
      case faChevronDown : return "faChevronDown" ;
      case faChevronLeft : return "faChevronLeft" ;
      case faChevronRight : return "faChevronRight" ;
      case faChevronUp : return "faChevronUp" ;
      case faChild : return "faChild" ;
      case faChurch : return "faChurch" ;
      case faCircle : return "faCircle" ;
      case faCircleNotch : return "faCircleNotch" ;
      case faClipboard : return "faClipboard" ;
      case faClipboardCheck : return "faClipboardCheck" ;
      case faClipboardList : return "faClipboardList" ;
      case faClock : return "faClock" ;
      case faClone : return "faClone" ;
      case faClosedCaptioning : return "faClosedCaptioning" ;
      case faCloud : return "faCloud" ;
      case faCloudDownloadAlt : return "faCloudDownloadAlt" ;
      case faCloudUploadAlt : return "faCloudUploadAlt" ;
      case faCode : return "faCode" ;
      case faCodeBranch : return "faCodeBranch" ;
      case faCoffee : return "faCoffee" ;
      case faCog : return "faCog" ;
      case faCogs : return "faCogs" ;
      case faCoins : return "faCoins" ;
      case faColumns : return "faColumns" ;
      case faComment : return "faComment" ;
      case faCommentAlt : return "faCommentAlt" ;
      case faCommentDots : return "faCommentDots" ;
      case faCommentSlash : return "faCommentSlash" ;
      case faComments : return "faComments" ;
      case faCompactDisc : return "faCompactDisc" ;
      case faCompass : return "faCompass" ;
      case faCompress : return "faCompress" ;
      case faCopy : return "faCopy" ;
      case faCopyright : return "faCopyright" ;
      case faCouch : return "faCouch" ;
      case faCreditCard : return "faCreditCard" ;
      case faCrop : return "faCrop" ;
      case faCrosshairs : return "faCrosshairs" ;
      case faCrow : return "faCrow" ;
      case faCrown : return "faCrown" ;
      case faCube : return "faCube" ;
      case faCubes : return "faCubes" ;
      case faCut : return "faCut" ;
      case faDatabase : return "faDatabase" ;
      case faDeaf : return "faDeaf" ;
      case faDesktop : return "faDesktop" ;
      case faDiagnoses : return "faDiagnoses" ;
      case faDice : return "faDice" ;
      case faDiceFive : return "faDiceFive" ;
      case faDiceFour : return "faDiceFour" ;
      case faDiceOne : return "faDiceOne" ;
      case faDiceSix : return "faDiceSix" ;
      case faDiceThree : return "faDiceThree" ;
      case faDiceTwo : return "faDiceTwo" ;
      case faDivide : return "faDivide" ;
      case faDna : return "faDna" ;
      case faDollarSign : return "faDollarSign" ;
      case faDolly : return "faDolly" ;
      case faDollyFlatbed : return "faDollyFlatbed" ;
      case faDonate : return "faDonate" ;
      case faDoorClosed : return "faDoorClosed" ;
      case faDoorOpen : return "faDoorOpen" ;
      case faDotCircle : return "faDotCircle" ;
      case faDove : return "faDove" ;
      case faDownload : return "faDownload" ;
      case faDumbbell : return "faDumbbell" ;
      case faEdit : return "faEdit" ;
      case faEject : return "faEject" ;
      case faEllipsisH : return "faEllipsisH" ;
      case faEllipsisV : return "faEllipsisV" ;
      case faEnvelope : return "faEnvelope" ;
      case faEnvelopeOpen : return "faEnvelopeOpen" ;
      case faEnvelopeSquare : return "faEnvelopeSquare" ;
      case faEquals : return "faEquals" ;
      case faEraser : return "faEraser" ;
      case faEuroSign : return "faEuroSign" ;
      case faExchangeAlt : return "faExchangeAlt" ;
      case faExclamation : return "faExclamation" ;
      case faExclamationCircle : return "faExclamationCircle" ;
      case faExclamationTriangle : return "faExclamationTriangle" ;
      case faExpand : return "faExpand" ;
      case faExpandArrowsAlt : return "faExpandArrowsAlt" ;
      case faExternalLinkAlt : return "faExternalLinkAlt" ;
      case faExternalLinkSquareAlt : return "faExternalLinkSquareAlt" ;
      case faEye : return "faEye" ;
      case faEyeDropper : return "faEyeDropper" ;
      case faEyeSlash : return "faEyeSlash" ;
      case faFastBackward : return "faFastBackward" ;
      case faFastForward : return "faFastForward" ;
      case faFax : return "faFax" ;
      case faFeather : return "faFeather" ;
      case faFemale : return "faFemale" ;
      case faFighterJet : return "faFighterJet" ;
      case faFile : return "faFile" ;
      case faFileAlt : return "faFileAlt" ;
      case faFileArchive : return "faFileArchive" ;
      case faFileAudio : return "faFileAudio" ;
      case faFileCode : return "faFileCode" ;
      case faFileExcel : return "faFileExcel" ;
      case faFileImage : return "faFileImage" ;
      case faFileMedical : return "faFileMedical" ;
      case faFileMedicalAlt : return "faFileMedicalAlt" ;
      case faFilePdf : return "faFilePdf" ;
      case faFilePowerpoint : return "faFilePowerpoint" ;
      case faFileVideo : return "faFileVideo" ;
      case faFileWord : return "faFileWord" ;
      case faFilm : return "faFilm" ;
      case faFilter : return "faFilter" ;
      case faFire : return "faFire" ;
      case faFireExtinguisher : return "faFireExtinguisher" ;
      case faFirstAid : return "faFirstAid" ;
      case faFlag : return "faFlag" ;
      case faFlagCheckered : return "faFlagCheckered" ;
      case faFlask : return "faFlask" ;
      case faFolder : return "faFolder" ;
      case faFolderOpen : return "faFolderOpen" ;
      case faFont : return "faFont" ;
      case faFontAwesomeLogoFull : return "faFontAwesomeLogoFull" ;
      case faFootballBall : return "faFootballBall" ;
      case faForward : return "faForward" ;
      case faFrog : return "faFrog" ;
      case faFrown : return "faFrown" ;
      case faFutbol : return "faFutbol" ;
      case faGamepad : return "faGamepad" ;
      case faGasPump : return "faGasPump" ;
      case faGavel : return "faGavel" ;
      case faGem : return "faGem" ;
      case faGenderless : return "faGenderless" ;
      case faGift : return "faGift" ;
      case faGlassMartini : return "faGlassMartini" ;
      case faGlasses : return "faGlasses" ;
      case faGlobe : return "faGlobe" ;
      case faGolfBall : return "faGolfBall" ;
      case faGraduationCap : return "faGraduationCap" ;
      case faGreaterThan : return "faGreaterThan" ;
      case faGreaterThanEqual : return "faGreaterThanEqual" ;
      case faHSquare : return "faHSquare" ;
      case faHandHolding : return "faHandHolding" ;
      case faHandHoldingHeart : return "faHandHoldingHeart" ;
      case faHandHoldingUsd : return "faHandHoldingUsd" ;
      case faHandLizard : return "faHandLizard" ;
      case faHandPaper : return "faHandPaper" ;
      case faHandPeace : return "faHandPeace" ;
      case faHandPointDown : return "faHandPointDown" ;
      case faHandPointLeft : return "faHandPointLeft" ;
      case faHandPointRight : return "faHandPointRight" ;
      case faHandPointUp : return "faHandPointUp" ;
      case faHandPointer : return "faHandPointer" ;
      case faHandRock : return "faHandRock" ;
      case faHandScissors : return "faHandScissors" ;
      case faHandSpock : return "faHandSpock" ;
      case faHands : return "faHands" ;
      case faHandsHelping : return "faHandsHelping" ;
      case faHandshake : return "faHandshake" ;
      case faHashtag : return "faHashtag" ;
      case faHdd : return "faHdd" ;
      case faHeading : return "faHeading" ;
      case faHeadphones : return "faHeadphones" ;
      case faHeart : return "faHeart" ;
      case faHeartbeat : return "faHeartbeat" ;
      case faHelicopter : return "faHelicopter" ;
      case faHistory : return "faHistory" ;
      case faHockeyPuck : return "faHockeyPuck" ;
      case faHome : return "faHome" ;
      case faHospital : return "faHospital" ;
      case faHospitalAlt : return "faHospitalAlt" ;
      case faHospitalSymbol : return "faHospitalSymbol" ;
      case faHourglass : return "faHourglass" ;
      case faHourglassEnd : return "faHourglassEnd" ;
      case faHourglassHalf : return "faHourglassHalf" ;
      case faHourglassStart : return "faHourglassStart" ;
      case faICursor : return "faICursor" ;
      case faIdBadge : return "faIdBadge" ;
      case faIdCard : return "faIdCard" ;
      case faIdCardAlt : return "faIdCardAlt" ;
      case faImage : return "faImage" ;
      case faImages : return "faImages" ;
      case faInbox : return "faInbox" ;
      case faIndent : return "faIndent" ;
      case faIndustry : return "faIndustry" ;
      case faInfinity : return "faInfinity" ;
      case faInfo : return "faInfo" ;
      case faInfoCircle : return "faInfoCircle" ;
      case faItalic : return "faItalic" ;
      case faKey : return "faKey" ;
      case faKeyboard : return "faKeyboard" ;
      case faKiwiBird : return "faKiwiBird" ;
      case faLanguage : return "faLanguage" ;
      case faLaptop : return "faLaptop" ;
      case faLeaf : return "faLeaf" ;
      case faLemon : return "faLemon" ;
      case faLessThan : return "faLessThan" ;
      case faLessThanEqual : return "faLessThanEqual" ;
      case faLevelDownAlt : return "faLevelDownAlt" ;
      case faLevelUpAlt : return "faLevelUpAlt" ;
      case faLifeRing : return "faLifeRing" ;
      case faLightbulb : return "faLightbulb" ;
      case faLink : return "faLink" ;
      case faLiraSign : return "faLiraSign" ;
      case faList : return "faList" ;
      case faListAlt : return "faListAlt" ;
      case faListOl : return "faListOl" ;
      case faListUl : return "faListUl" ;
      case faLocationArrow : return "faLocationArrow" ;
      case faLock : return "faLock" ;
      case faLockOpen : return "faLockOpen" ;
      case faLongArrowAltDown : return "faLongArrowAltDown" ;
      case faLongArrowAltLeft : return "faLongArrowAltLeft" ;
      case faLongArrowAltRight : return "faLongArrowAltRight" ;
      case faLongArrowAltUp : return "faLongArrowAltUp" ;
      case faLowVision : return "faLowVision" ;
      case faMagic : return "faMagic" ;
      case faMagnet : return "faMagnet" ;
      case faMale : return "faMale" ;
      case faMap : return "faMap" ;
      case faMapMarker : return "faMapMarker" ;
      case faMapMarkerAlt : return "faMapMarkerAlt" ;
      case faMapPin : return "faMapPin" ;
      case faMapSigns : return "faMapSigns" ;
      case faMars : return "faMars" ;
      case faMarsDouble : return "faMarsDouble" ;
      case faMarsStroke : return "faMarsStroke" ;
      case faMarsStrokeH : return "faMarsStrokeH" ;
      case faMarsStrokeV : return "faMarsStrokeV" ;
      case faMedkit : return "faMedkit" ;
      case faMeh : return "faMeh" ;
      case faMemory : return "faMemory" ;
      case faMercury : return "faMercury" ;
      case faMicrochip : return "faMicrochip" ;
      case faMicrophone : return "faMicrophone" ;
      case faMicrophoneAlt : return "faMicrophoneAlt" ;
      case faMicrophoneAltSlash : return "faMicrophoneAltSlash" ;
      case faMicrophoneSlash : return "faMicrophoneSlash" ;
      case faMinus : return "faMinus" ;
      case faMinusCircle : return "faMinusCircle" ;
      case faMinusSquare : return "faMinusSquare" ;
      case faMobile : return "faMobile" ;
      case faMobileAlt : return "faMobileAlt" ;
      case faMoneyBill : return "faMoneyBill" ;
      case faMoneyBillAlt : return "faMoneyBillAlt" ;
      case faMoneyBillWave : return "faMoneyBillWave" ;
      case faMoneyBillWaveAlt : return "faMoneyBillWaveAlt" ;
      case faMoneyCheck : return "faMoneyCheck" ;
      case faMoneyCheckAlt : return "faMoneyCheckAlt" ;
      case faMoon : return "faMoon" ;
      case faMotorcycle : return "faMotorcycle" ;
      case faMousePointer : return "faMousePointer" ;
      case faMusic : return "faMusic" ;
      case faNeuter : return "faNeuter" ;
      case faNewspaper : return "faNewspaper" ;
      case faNotEqual : return "faNotEqual" ;
      case faNotesMedical : return "faNotesMedical" ;
      case faObjectGroup : return "faObjectGroup" ;
      case faObjectUngroup : return "faObjectUngroup" ;
      case faOutdent : return "faOutdent" ;
      case faPaintBrush : return "faPaintBrush" ;
      case faPalette : return "faPalette" ;
      case faPallet : return "faPallet" ;
      case faPaperPlane : return "faPaperPlane" ;
      case faPaperclip : return "faPaperclip" ;
      case faParachuteBox : return "faParachuteBox" ;
      case faParagraph : return "faParagraph" ;
      case faParking : return "faParking" ;
      case faPaste : return "faPaste" ;
      case faPause : return "faPause" ;
      case faPauseCircle : return "faPauseCircle" ;
      case faPaw : return "faPaw" ;
      case faPenSquare : return "faPenSquare" ;
      case faPencilAlt : return "faPencilAlt" ;
      case faPeopleCarry : return "faPeopleCarry" ;
      case faPercent : return "faPercent" ;
      case faPercentage : return "faPercentage" ;
      case faPhone : return "faPhone" ;
      case faPhoneSlash : return "faPhoneSlash" ;
      case faPhoneSquare : return "faPhoneSquare" ;
      case faPhoneVolume : return "faPhoneVolume" ;
      case faPiggyBank : return "faPiggyBank" ;
      case faPills : return "faPills" ;
      case faPlane : return "faPlane" ;
      case faPlay : return "faPlay" ;
      case faPlayCircle : return "faPlayCircle" ;
      case faPlug : return "faPlug" ;
      case faPlus : return "faPlus" ;
      case faPlusCircle : return "faPlusCircle" ;
      case faPlusSquare : return "faPlusSquare" ;
      case faPodcast : return "faPodcast" ;
      case faPoo : return "faPoo" ;
      case faPortrait : return "faPortrait" ;
      case faPoundSign : return "faPoundSign" ;
      case faPowerOff : return "faPowerOff" ;
      case faPrescriptionBottle : return "faPrescriptionBottle" ;
      case faPrescriptionBottleAlt : return "faPrescriptionBottleAlt" ;
      case faPrint : return "faPrint" ;
      case faProcedures : return "faProcedures" ;
      case faProjectDiagram : return "faProjectDiagram" ;
      case faPuzzlePiece : return "faPuzzlePiece" ;
      case faQrcode : return "faQrcode" ;
      case faQuestion : return "faQuestion" ;
      case faQuestionCircle : return "faQuestionCircle" ;
      case faQuidditch : return "faQuidditch" ;
      case faQuoteLeft : return "faQuoteLeft" ;
      case faQuoteRight : return "faQuoteRight" ;
      case faRandom : return "faRandom" ;
      case faReceipt : return "faReceipt" ;
      case faRecycle : return "faRecycle" ;
      case faRedo : return "faRedo" ;
      case faRedoAlt : return "faRedoAlt" ;
      case faRegistered : return "faRegistered" ;
      case faReply : return "faReply" ;
      case faReplyAll : return "faReplyAll" ;
      case faRetweet : return "faRetweet" ;
      case faRibbon : return "faRibbon" ;
      case faRoad : return "faRoad" ;
      case faRobot : return "faRobot" ;
      case faRocket : return "faRocket" ;
      case faRss : return "faRss" ;
      case faRssSquare : return "faRssSquare" ;
      case faRubleSign : return "faRubleSign" ;
      case faRuler : return "faRuler" ;
      case faRulerCombined : return "faRulerCombined" ;
      case faRulerHorizontal : return "faRulerHorizontal" ;
      case faRulerVertical : return "faRulerVertical" ;
      case faRupeeSign : return "faRupeeSign" ;
      case faSave : return "faSave" ;
      case faSchool : return "faSchool" ;
      case faScrewdriver : return "faScrewdriver" ;
      case faSearch : return "faSearch" ;
      case faSearchMinus : return "faSearchMinus" ;
      case faSearchPlus : return "faSearchPlus" ;
      case faSeedling : return "faSeedling" ;
      case faServer : return "faServer" ;
      case faShare : return "faShare" ;
      case faShareAlt : return "faShareAlt" ;
      case faShareAltSquare : return "faShareAltSquare" ;
      case faShareSquare : return "faShareSquare" ;
      case faShekelSign : return "faShekelSign" ;
      case faShieldAlt : return "faShieldAlt" ;
      case faShip : return "faShip" ;
      case faShippingFast : return "faShippingFast" ;
      case faShoePrints : return "faShoePrints" ;
      case faShoppingBag : return "faShoppingBag" ;
      case faShoppingBasket : return "faShoppingBasket" ;
      case faShoppingCart : return "faShoppingCart" ;
      case faShower : return "faShower" ;
      case faSign : return "faSign" ;
      case faSignInAlt : return "faSignInAlt" ;
      case faSignLanguage : return "faSignLanguage" ;
      case faSignOutAlt : return "faSignOutAlt" ;
      case faSignal : return "faSignal" ;
      case faSitemap : return "faSitemap" ;
      case faSkull : return "faSkull" ;
      case faSlidersH : return "faSlidersH" ;
      case faSmile : return "faSmile" ;
      case faSmoking : return "faSmoking" ;
      case faSmokingBan : return "faSmokingBan" ;
      case faSnowflake : return "faSnowflake" ;
      case faSort : return "faSort" ;
      case faSortAlphaDown : return "faSortAlphaDown" ;
      case faSortAlphaUp : return "faSortAlphaUp" ;
      case faSortAmountDown : return "faSortAmountDown" ;
      case faSortAmountUp : return "faSortAmountUp" ;
      case faSortDown : return "faSortDown" ;
      case faSortNumericDown : return "faSortNumericDown" ;
      case faSortNumericUp : return "faSortNumericUp" ;
      case faSortUp : return "faSortUp" ;
      case faSpaceShuttle : return "faSpaceShuttle" ;
      case faSpinner : return "faSpinner" ;
      case faSquare : return "faSquare" ;
      case faSquareFull : return "faSquareFull" ;
      case faStar : return "faStar" ;
      case faStarHalf : return "faStarHalf" ;
      case faStepBackward : return "faStepBackward" ;
      case faStepForward : return "faStepForward" ;
      case faStethoscope : return "faStethoscope" ;
      case faStickyNote : return "faStickyNote" ;
      case faStop : return "faStop" ;
      case faStopCircle : return "faStopCircle" ;
      case faStopwatch : return "faStopwatch" ;
      case faStore : return "faStore" ;
      case faStoreAlt : return "faStoreAlt" ;
      case faStream : return "faStream" ;
      case faStreetView : return "faStreetView" ;
      case faStrikethrough : return "faStrikethrough" ;
      case faStroopwafel : return "faStroopwafel" ;
      case faSubscript : return "faSubscript" ;
      case faSubway : return "faSubway" ;
      case faSuitcase : return "faSuitcase" ;
      case faSun : return "faSun" ;
      case faSuperscript : return "faSuperscript" ;
      case faSync : return "faSync" ;
      case faSyncAlt : return "faSyncAlt" ;
      case faSyringe : return "faSyringe" ;
      case faTable : return "faTable" ;
      case faTableTennis : return "faTableTennis" ;
      case faTablet : return "faTablet" ;
      case faTabletAlt : return "faTabletAlt" ;
      case faTablets : return "faTablets" ;
      case faTachometerAlt : return "faTachometerAlt" ;
      case faTag : return "faTag" ;
      case faTags : return "faTags" ;
      case faTape : return "faTape" ;
      case faTasks : return "faTasks" ;
      case faTaxi : return "faTaxi" ;
      case faTerminal : return "faTerminal" ;
      case faTextHeight : return "faTextHeight" ;
      case faTextWidth : return "faTextWidth" ;
      case faTh : return "faTh" ;
      case faThLarge : return "faThLarge" ;
      case faThList : return "faThList" ;
      case faThermometer : return "faThermometer" ;
      case faThermometerEmpty : return "faThermometerEmpty" ;
      case faThermometerFull : return "faThermometerFull" ;
      case faThermometerHalf : return "faThermometerHalf" ;
      case faThermometerQuarter : return "faThermometerQuarter" ;
      case faThermometerThreeQuarters : return "faThermometerThreeQuarters" ;
      case faThumbsDown : return "faThumbsDown" ;
      case faThumbsUp : return "faThumbsUp" ;
      case faThumbtack : return "faThumbtack" ;
      case faTicketAlt : return "faTicketAlt" ;
      case faTimes : return "faTimes" ;
      case faTimesCircle : return "faTimesCircle" ;
      case faTint : return "faTint" ;
      case faToggleOff : return "faToggleOff" ;
      case faToggleOn : return "faToggleOn" ;
      case faToolbox : return "faToolbox" ;
      case faTrademark : return "faTrademark" ;
      case faTrain : return "faTrain" ;
      case faTransgender : return "faTransgender" ;
      case faTransgenderAlt : return "faTransgenderAlt" ;
      case faTrash : return "faTrash" ;
      case faTrashAlt : return "faTrashAlt" ;
      case faTree : return "faTree" ;
      case faTrophy : return "faTrophy" ;
      case faTruck : return "faTruck" ;
      case faTruckLoading : return "faTruckLoading" ;
      case faTruckMoving : return "faTruckMoving" ;
      case faTshirt : return "faTshirt" ;
      case faTty : return "faTty" ;
      case faTv : return "faTv" ;
      case faUmbrella : return "faUmbrella" ;
      case faUnderline : return "faUnderline" ;
      case faUndo : return "faUndo" ;
      case faUndoAlt : return "faUndoAlt" ;
      case faUniversalAccess : return "faUniversalAccess" ;
      case faUniversity : return "faUniversity" ;
      case faUnlink : return "faUnlink" ;
      case faUnlock : return "faUnlock" ;
      case faUnlockAlt : return "faUnlockAlt" ;
      case faUpload : return "faUpload" ;
      case faUser : return "faUser" ;
      case faUserAlt : return "faUserAlt" ;
      case faUserAltSlash : return "faUserAltSlash" ;
      case faUserAstronaut : return "faUserAstronaut" ;
      case faUserCheck : return "faUserCheck" ;
      case faUserCircle : return "faUserCircle" ;
      case faUserClock : return "faUserClock" ;
      case faUserCog : return "faUserCog" ;
      case faUserEdit : return "faUserEdit" ;
      case faUserFriends : return "faUserFriends" ;
      case faUserGraduate : return "faUserGraduate" ;
      case faUserLock : return "faUserLock" ;
      case faUserMd : return "faUserMd" ;
      case faUserMinus : return "faUserMinus" ;
      case faUserNinja : return "faUserNinja" ;
      case faUserPlus : return "faUserPlus" ;
      case faUserSecret : return "faUserSecret" ;
      case faUserShield : return "faUserShield" ;
      case faUserSlash : return "faUserSlash" ;
      case faUserTag : return "faUserTag" ;
      case faUserTie : return "faUserTie" ;
      case faUserTimes : return "faUserTimes" ;
      case faUsers : return "faUsers" ;
      case faUsersCog : return "faUsersCog" ;
      case faUtensilSpoon : return "faUtensilSpoon" ;
      case faUtensils : return "faUtensils" ;
      case faVenus : return "faVenus" ;
      case faVenusDouble : return "faVenusDouble" ;
      case faVenusMars : return "faVenusMars" ;
      case faVial : return "faVial" ;
      case faVials : return "faVials" ;
      case faVideo : return "faVideo" ;
      case faVideoSlash : return "faVideoSlash" ;
      case faVolleyballBall : return "faVolleyballBall" ;
      case faVolumeDown : return "faVolumeDown" ;
      case faVolumeOff : return "faVolumeOff" ;
      case faVolumeUp : return "faVolumeUp" ;
      case faWalking : return "faWalking" ;
      case faWallet : return "faWallet" ;
      case faWarehouse : return "faWarehouse" ;
      case faWeight : return "faWeight" ;
      case faWheelchair : return "faWheelchair" ;
      case faWifi : return "faWifi" ;
      case faWindowClose : return "faWindowClose" ;
      case faWindowMaximize : return "faWindowMaximize" ;
      case faWindowMinimize : return "faWindowMinimize" ;
      case faWindowRestore : return "faWindowRestore" ;
      case faWineGlass : return "faWineGlass" ;
      case faWonSign : return "faWonSign" ;
      case faWrench : return "faWrench" ;
      case faXRay : return "faXRay" ;
      case faYenSign : return "faYenSign" ;
      case faAccessibleIcon : return "faAccessibleIcon" ;
      case faAccusoft : return "faAccusoft" ;
      case faAdn : return "faAdn" ;
      case faAdversal : return "faAdversal" ;
      case faAffiliatetheme : return "faAffiliatetheme" ;
      case faAlgolia : return "faAlgolia" ;
      case faAmazon : return "faAmazon" ;
      case faAmazonPay : return "faAmazonPay" ;
      case faAmilia : return "faAmilia" ;
      case faAndroid : return "faAndroid" ;
      case faAngellist : return "faAngellist" ;
      case faAngrycreative : return "faAngrycreative" ;
      case faAngular : return "faAngular" ;
      case faAppStore : return "faAppStore" ;
      case faAppStoreIos : return "faAppStoreIos" ;
      case faApper : return "faApper" ;
      case faApple : return "faApple" ;
      case faApplePay : return "faApplePay" ;
      case faAsymmetrik : return "faAsymmetrik" ;
      case faAudible : return "faAudible" ;
      case faAutoprefixer : return "faAutoprefixer" ;
      case faAvianex : return "faAvianex" ;
      case faAviato : return "faAviato" ;
      case faAws : return "faAws" ;
      case faBandcamp : return "faBandcamp" ;
      case faBehance : return "faBehance" ;
      case faBehanceSquare : return "faBehanceSquare" ;
      case faBimobject : return "faBimobject" ;
      case faBitbucket : return "faBitbucket" ;
      case faBitcoin : return "faBitcoin" ;
      case faBity : return "faBity" ;
      case faBlackTie : return "faBlackTie" ;
      case faBlackberry : return "faBlackberry" ;
      case faBlogger : return "faBlogger" ;
      case faBloggerB : return "faBloggerB" ;
      case faBluetooth : return "faBluetooth" ;
      case faBluetoothB : return "faBluetoothB" ;
      case faBtc : return "faBtc" ;
      case faBuromobelexperte : return "faBuromobelexperte" ;
      case faBuysellads : return "faBuysellads" ;
      case faCcAmazonPay : return "faCcAmazonPay" ;
      case faCcAmex : return "faCcAmex" ;
      case faCcApplePay : return "faCcApplePay" ;
      case faCcDinersClub : return "faCcDinersClub" ;
      case faCcDiscover : return "faCcDiscover" ;
      case faCcJcb : return "faCcJcb" ;
      case faCcMastercard : return "faCcMastercard" ;
      case faCcPaypal : return "faCcPaypal" ;
      case faCcStripe : return "faCcStripe" ;
      case faCcVisa : return "faCcVisa" ;
      case faCentercode : return "faCentercode" ;
      case faChrome : return "faChrome" ;
      case faCloudscale : return "faCloudscale" ;
      case faCloudsmith : return "faCloudsmith" ;
      case faCloudversify : return "faCloudversify" ;
      case faCodepen : return "faCodepen" ;
      case faCodiepie : return "faCodiepie" ;
      case faConnectdevelop : return "faConnectdevelop" ;
      case faContao : return "faContao" ;
      case faCpanel : return "faCpanel" ;
      case faCreativeCommons : return "faCreativeCommons" ;
      case faCreativeCommonsBy : return "faCreativeCommonsBy" ;
      case faCreativeCommonsNc : return "faCreativeCommonsNc" ;
      case faCreativeCommonsNcEu : return "faCreativeCommonsNcEu" ;
      case faCreativeCommonsNcJp : return "faCreativeCommonsNcJp" ;
      case faCreativeCommonsNd : return "faCreativeCommonsNd" ;
      case faCreativeCommonsPd : return "faCreativeCommonsPd" ;
      case faCreativeCommonsPdAlt : return "faCreativeCommonsPdAlt" ;
      case faCreativeCommonsRemix : return "faCreativeCommonsRemix" ;
      case faCreativeCommonsSa : return "faCreativeCommonsSa" ;
      case faCreativeCommonsSampling : return "faCreativeCommonsSampling" ;
      case faCreativeCommonsSamplingPlus : return "faCreativeCommonsSamplingPlus" ;
      case faCreativeCommonsShare : return "faCreativeCommonsShare" ;
      case faCss3 : return "faCss3" ;
      case faCss3Alt : return "faCss3Alt" ;
      case faCuttlefish : return "faCuttlefish" ;
      case faDAndD : return "faDAndD" ;
      case faDashcube : return "faDashcube" ;
      case faDelicious : return "faDelicious" ;
      case faDeploydog : return "faDeploydog" ;
      case faDeskpro : return "faDeskpro" ;
      case faDeviantart : return "faDeviantart" ;
      case faDigg : return "faDigg" ;
      case faDigitalOcean : return "faDigitalOcean" ;
      case faDiscord : return "faDiscord" ;
      case faDiscourse : return "faDiscourse" ;
      case faDochub : return "faDochub" ;
      case faDocker : return "faDocker" ;
      case faDraft2digital : return "faDraft2Digital" ;
      case faDribbble : return "faDribbble" ;
      case faDribbbleSquare : return "faDribbbleSquare" ;
      case faDropbox : return "faDropbox" ;
      case faDrupal : return "faDrupal" ;
      case faDyalog : return "faDyalog" ;
      case faEarlybirds : return "faEarlybirds" ;
      case faEbay : return "faEbay" ;
      case faEdge : return "faEdge" ;
      case faElementor : return "faElementor" ;
      case faEmber : return "faEmber" ;
      case faEmpire : return "faEmpire" ;
      case faEnvira : return "faEnvira" ;
      case faErlang : return "faErlang" ;
      case faEthereum : return "faEthereum" ;
      case faEtsy : return "faEtsy" ;
      case faExpeditedssl : return "faExpeditedssl" ;
      case faFacebook : return "faFacebook" ;
      case faFacebookF : return "faFacebookF" ;
      case faFacebookMessenger : return "faFacebookMessenger" ;
      case faFacebookSquare : return "faFacebookSquare" ;
      case faFirefox : return "faFirefox" ;
      case faFirstOrder : return "faFirstOrder" ;
      case faFirstOrderAlt : return "faFirstOrderAlt" ;
      case faFirstdraft : return "faFirstdraft" ;
      case faFlickr : return "faFlickr" ;
      case faFlipboard : return "faFlipboard" ;
      case faFly : return "faFly" ;
      case faFontAwesome : return "faFontAwesome" ;
      case faFontAwesomeAlt : return "faFontAwesomeAlt" ;
      case faFontAwesomeFlag : return "faFontAwesomeFlag" ;
      case faFonticons : return "faFonticons" ;
      case faFonticonsFi : return "faFonticonsFi" ;
      case faFortAwesome : return "faFortAwesome" ;
      case faFortAwesomeAlt : return "faFortAwesomeAlt" ;
      case faForumbee : return "faForumbee" ;
      case faFoursquare : return "faFoursquare" ;
      case faFreeCodeCamp : return "faFreeCodeCamp" ;
      case faFreebsd : return "faFreebsd" ;
      case faFulcrum : return "faFulcrum" ;
      case faGalacticRepublic : return "faGalacticRepublic" ;
      case faGalacticSenate : return "faGalacticSenate" ;
      case faGetPocket : return "faGetPocket" ;
      case faGg : return "faGg" ;
      case faGgCircle : return "faGgCircle" ;
      case faGit : return "faGit" ;
      case faGitSquare : return "faGitSquare" ;
      case faGithub : return "faGithub" ;
      case faGithubAlt : return "faGithubAlt" ;
      case faGithubSquare : return "faGithubSquare" ;
      case faGitkraken : return "faGitkraken" ;
      case faGitlab : return "faGitlab" ;
      case faGitter : return "faGitter" ;
      case faGlide : return "faGlide" ;
      case faGlideG : return "faGlideG" ;
      case faGofore : return "faGofore" ;
      case faGoodreads : return "faGoodreads" ;
      case faGoodreadsG : return "faGoodreadsG" ;
      case faGoogle : return "faGoogle" ;
      case faGoogleDrive : return "faGoogleDrive" ;
      case faGooglePlay : return "faGooglePlay" ;
      case faGooglePlus : return "faGooglePlus" ;
      case faGooglePlusG : return "faGooglePlusG" ;
      case faGooglePlusSquare : return "faGooglePlusSquare" ;
      case faGoogleWallet : return "faGoogleWallet" ;
      case faGratipay : return "faGratipay" ;
      case faGrav : return "faGrav" ;
      case faGripfire : return "faGripfire" ;
      case faGrunt : return "faGrunt" ;
      case faGulp : return "faGulp" ;
      case faHackerNews : return "faHackerNews" ;
      case faHackerNewsSquare : return "faHackerNewsSquare" ;
      case faHips : return "faHips" ;
      case faHireAHelper : return "faHireAHelper" ;
      case faHooli : return "faHooli" ;
      case faHotjar : return "faHotjar" ;
      case faHouzz : return "faHouzz" ;
      case faHtml5 : return "faHtml5" ;
      case faHubspot : return "faHubspot" ;
      case faImdb : return "faImdb" ;
      case faInstagram : return "faInstagram" ;
      case faInternetExplorer : return "faInternetExplorer" ;
      case faIoxhost : return "faIoxhost" ;
      case faItunes : return "faItunes" ;
      case faItunesNote : return "faItunesNote" ;
      case faJava : return "faJava" ;
      case faJediOrder : return "faJediOrder" ;
      case faJenkins : return "faJenkins" ;
      case faJoget : return "faJoget" ;
      case faJoomla : return "faJoomla" ;
      case faJs : return "faJs" ;
      case faJsSquare : return "faJsSquare" ;
      case faJsfiddle : return "faJsfiddle" ;
      case faKeybase : return "faKeybase" ;
      case faKeycdn : return "faKeycdn" ;
      case faKickstarter : return "faKickstarter" ;
      case faKickstarterK : return "faKickstarterK" ;
      case faKorvue : return "faKorvue" ;
      case faLaravel : return "faLaravel" ;
      case faLastfm : return "faLastfm" ;
      case faLastfmSquare : return "faLastfmSquare" ;
      case faLeanpub : return "faLeanpub" ;
      case faLess : return "faLess" ;
      case faLine : return "faLine" ;
      case faLinkedin : return "faLinkedin" ;
      case faLinkedinIn : return "faLinkedinIn" ;
      case faLinode : return "faLinode" ;
      case faLinux : return "faLinux" ;
      case faLyft : return "faLyft" ;
      case faMagento : return "faMagento" ;
      case faMandalorian : return "faMandalorian" ;
      case faMastodon : return "faMastodon" ;
      case faMaxcdn : return "faMaxcdn" ;
      case faMedapps : return "faMedapps" ;
      case faMedium : return "faMedium" ;
      case faMediumM : return "faMediumM" ;
      case faMedrt : return "faMedrt" ;
      case faMeetup : return "faMeetup" ;
      case faMicrosoft : return "faMicrosoft" ;
      case faMix : return "faMix" ;
      case faMixcloud : return "faMixcloud" ;
      case faMizuni : return "faMizuni" ;
      case faModx : return "faModx" ;
      case faMonero : return "faMonero" ;
      case faNapster : return "faNapster" ;
      case faNode : return "faNode" ;
      case faNodeJs : return "faNodeJs" ;
      case faNpm : return "faNpm" ;
      case faNs8 : return "faNs8" ;
      case faNutritionix : return "faNutritionix" ;
      case faOdnoklassniki : return "faOdnoklassniki" ;
      case faOdnoklassnikiSquare : return "faOdnoklassnikiSquare" ;
      case faOldRepublic : return "faOldRepublic" ;
      case faOpencart : return "faOpencart" ;
      case faOpenid : return "faOpenid" ;
      case faOpera : return "faOpera" ;
      case faOptinMonster : return "faOptinMonster" ;
      case faOsi : return "faOsi" ;
      case faPage4 : return "faPage4" ;
      case faPagelines : return "faPagelines" ;
      case faPalfed : return "faPalfed" ;
      case faPatreon : return "faPatreon" ;
      case faPaypal : return "faPaypal" ;
      case faPeriscope : return "faPeriscope" ;
      case faPhabricator : return "faPhabricator" ;
      case faPhoenixFramework : return "faPhoenixFramework" ;
      case faPhoenixSquadron : return "faPhoenixSquadron" ;
      case faPhp : return "faPhp" ;
      case faPiedPiper : return "faPiedPiper" ;
      case faPiedPiperAlt : return "faPiedPiperAlt" ;
      case faPiedPiperHat : return "faPiedPiperHat" ;
      case faPiedPiperPp : return "faPiedPiperPp" ;
      case faPinterest : return "faPinterest" ;
      case faPinterestP : return "faPinterestP" ;
      case faPinterestSquare : return "faPinterestSquare" ;
      case faPlaystation : return "faPlaystation" ;
      case faProductHunt : return "faProductHunt" ;
      case faPushed : return "faPushed" ;
      case faPython : return "faPython" ;
      case faQq : return "faQq" ;
      case faQuinscape : return "faQuinscape" ;
      case faQuora : return "faQuora" ;
      case faRProject : return "faRProject" ;
      case faRavelry : return "faRavelry" ;
      case faReact : return "faReact" ;
      case faReadme : return "faReadme" ;
      case faRebel : return "faRebel" ;
      case faRedRiver : return "faRedRiver" ;
      case faReddit : return "faReddit" ;
      case faRedditAlien : return "faRedditAlien" ;
      case faRedditSquare : return "faRedditSquare" ;
      case faRendact : return "faRendact" ;
      case faRenren : return "faRenren" ;
      case faReplyd : return "faReplyd" ;
      case faResearchgate : return "faResearchgate" ;
      case faResolving : return "faResolving" ;
      case faRocketchat : return "faRocketchat" ;
      case faRockrms : return "faRockrms" ;
      case faSafari : return "faSafari" ;
      case faSass : return "faSass" ;
      case faSchlix : return "faSchlix" ;
      case faScribd : return "faScribd" ;
      case faSearchengin : return "faSearchengin" ;
      case faSellcast : return "faSellcast" ;
      case faSellsy : return "faSellsy" ;
      case faServicestack : return "faServicestack" ;
      case faShirtsinbulk : return "faShirtsinbulk" ;
      case faSimplybuilt : return "faSimplybuilt" ;
      case faSistrix : return "faSistrix" ;
      case faSith : return "faSith" ;
      case faSkyatlas : return "faSkyatlas" ;
      case faSkype : return "faSkype" ;
      case faSlack : return "faSlack" ;
      case faSlackHash : return "faSlackHash" ;
      case faSlideshare : return "faSlideshare" ;
      case faSnapchat : return "faSnapchat" ;
      case faSnapchatGhost : return "faSnapchatGhost" ;
      case faSnapchatSquare : return "faSnapchatSquare" ;
      case faSoundcloud : return "faSoundcloud" ;
      case faSpeakap : return "faSpeakap" ;
      case faSpotify : return "faSpotify" ;
      case faStackExchange : return "faStackExchange" ;
      case faStackOverflow : return "faStackOverflow" ;
      case faStaylinked : return "faStaylinked" ;
      case faSteam : return "faSteam" ;
      case faSteamSquare : return "faSteamSquare" ;
      case faSteamSymbol : return "faSteamSymbol" ;
      case faStickerMule : return "faStickerMule" ;
      case faStrava : return "faStrava" ;
      case faStripe : return "faStripe" ;
      case faStripeS : return "faStripeS" ;
      case faStudiovinari : return "faStudiovinari" ;
      case faStumbleupon : return "faStumbleupon" ;
      case faStumbleuponCircle : return "faStumbleuponCircle" ;
      case faSuperpowers : return "faSuperpowers" ;
      case faSupple : return "faSupple" ;
      case faTeamspeak : return "faTeamspeak" ;
      case faTelegram : return "faTelegram" ;
      case faTelegramPlane : return "faTelegramPlane" ;
      case faTencentWeibo : return "faTencentWeibo" ;
      case faThemeisle : return "faThemeisle" ;
      case faTradeFederation : return "faTradeFederation" ;
      case faTrello : return "faTrello" ;
      case faTumblr : return "faTumblr" ;
      case faTumblrSquare : return "faTumblrSquare" ;
      case faTwitch : return "faTwitch" ;
      case faTwitter : return "faTwitter" ;
      case faTwitterSquare : return "faTwitterSquare" ;
      case faTypo3 : return "faTypo3" ;
      case faUber : return "faUber" ;
      case faUikit : return "faUikit" ;
      case faUniregistry : return "faUniregistry" ;
      case faUntappd : return "faUntappd" ;
      case faUsb : return "faUsb" ;
      case faUssunnah : return "faUssunnah" ;
      case faVaadin : return "faVaadin" ;
      case faViacoin : return "faViacoin" ;
      case faViadeo : return "faViadeo" ;
      case faViadeoSquare : return "faViadeoSquare" ;
      case faViber : return "faViber" ;
      case faVimeo : return "faVimeo" ;
      case faVimeoSquare : return "faVimeoSquare" ;
      case faVimeoV : return "faVimeoV" ;
      case faVine : return "faVine" ;
      case faVk : return "faVk" ;
      case faVnv : return "faVnv" ;
      case faVuejs : return "faVuejs" ;
      case faWeibo : return "faWeibo" ;
      case faWeixin : return "faWeixin" ;
      case faWhatsapp : return "faWhatsapp" ;
      case faWhatsappSquare : return "faWhatsappSquare" ;
      case faWhmcs : return "faWhmcs" ;
      case faWikipediaW : return "faWikipediaW" ;
      case faWindows : return "faWindows" ;
      case faWolfPackBattalion : return "faWolfPackBattalion" ;
      case faWordpress : return "faWordpress" ;
      case faWordpressSimple : return "faWordpressSimple" ;
      case faWpbeginner : return "faWpbeginner" ;
      case faWpexplorer : return "faWpexplorer" ;
      case faWpforms : return "faWpforms" ;
      case faXbox : return "faXbox" ;
      case faXing : return "faXing" ;
      case faXingSquare : return "faXingSquare" ;
      case faYCombinator : return "faYCombinator" ;
      case faYahoo : return "faYahoo" ;
      case faYandex : return "faYandex" ;
      case faYandexInternational : return "faYandexInternational" ;
      case faYelp : return "faYelp" ;
      case faYoast : return "faYoast" ;
      case faYoutube : return "faYoutube" ;
      case faYoutubeSquare : return "faYoutubeSquare" ;
      case faArrowLeftLong : return "faArrowLeftLong" ;
      case faBlog : return "faBlog" ;
      case faBorderAll : return "faBorderAll" ;
      case faDashboard : return "faDashboard" ;
      case faEnvelopeOpenText : return "faEnvelopeOpenText" ;
      case faIcons : return "faIcons" ;
      case faLocation : return "faLocation" ;
      case faPhoneAlt : return "faPhoneAlt" ;
      case faRightToBracket : return "faRightToBracket" ;
      default:     
      return "faMicrochip";    
    }     
  }     

  static getSizeProp(size: string): SizeProp {
    switch (size) {
      case 'xs':
        return 'xs';
      case 'sm':
        return 'sm';
      case 'lg':
        return 'lg';
      case '1x':
        return '1x';
      case '2x':
        return '2x';
      case '3x':
        return '3x';
      case '4x':
        return '4x';
      case '5x':
        return '5x';
      default:
        return 'lg';
    }
  }

  tostring(){
    return { 
      id:this.id ?? "icon1",
      classname: this.className ?? "",
      icon:AlloyIcon.getIconText(this.icon) ?? "faMicrochip",
      size:this.size ?? "lg",
      spin:this.spin ?? false
    }
  }
}