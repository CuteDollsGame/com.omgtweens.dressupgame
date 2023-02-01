(function(lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtFilters = {};
    var rect; // used to reference frame bounds

    // library properties:
    lib.properties = {
        width: 800,
        height: 600,
        fps: 32,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [{
                src: "library/images/storage_atlas_.png",
                id: "storage_atlas_"
            },
            {
                src: "library/images/storage_atlas_2.png",
                id: "storage_atlas_2"
            },
            {
                src: "library/images/storage_atlas_3.png",
                id: "storage_atlas_3"
            },
            {
                src: "library/images/storage_atlas_4.png",
                id: "storage_atlas_4"
            },
            {
                src: "library/images/storage_atlas_5.png",
                id: "storage_atlas_5"
            },
            {
                src: "library/images/storage_atlas_6.png",
                id: "storage_atlas_6"
            },
            {
                src: "library/images/storage_atlas_7.png",
                id: "storage_atlas_7"
            },
            {
                src: "library/images/storage_atlas_8.png",
                id: "storage_atlas_8"
            },
            {
                src: "library/images/storage_atlas_9.png",
                id: "storage_atlas_9"
            },
            {
                src: "library/images/storage_atlas_10.png",
                id: "storage_atlas_10"
            },
            {
                src: "library/images/storage_atlas_11.png",
                id: "storage_atlas_11"
            },
            {
                src: "library/images/storage_atlas_12.png",
                id: "storage_atlas_12"
            },
            {
                src: "library/images/storage_atlas_13.png",
                id: "storage_atlas_13"
            },
            {
                src: "library/images/storage_atlas_14.png",
                id: "storage_atlas_14"
            },
            {
                src: "library/images/storage_atlas_15.png",
                id: "storage_atlas_15"
            },
            {
                src: "library/images/storage_atlas_16.png",
                id: "storage_atlas_16"
            },
            {
                src: "library/images/storage_atlas_17.png",
                id: "storage_atlas_17"
            },
            {
                src: "library/images/storage_atlas_18.png",
                id: "storage_atlas_18"
            },
            {
                src: "library/images/storage_atlas_19.png",
                id: "storage_atlas_19"
            },
            {
                src: "library/images/storage_atlas_20.png",
                id: "storage_atlas_20"
            },
            {
                src: "library/images/storage_atlas_21.png",
                id: "storage_atlas_21"
            },
            {
                src: "library/images/storage_atlas_22.png",
                id: "storage_atlas_22"
            },
            {
                src: "library/images/storage_atlas_23.png",
                id: "storage_atlas_23"
            }
        ]
    };



    lib.ssMetadata = [{
            name: "storage_atlas_",
            frames: [
                [0, 0, 1200, 600],
                [0, 602, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_2",
            frames: [
                [0, 602, 1200, 600],
                [0, 0, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_3",
            frames: [
                [0, 0, 1200, 600],
                [0, 602, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_4",
            frames: [
                [0, 602, 1200, 600],
                [0, 0, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_5",
            frames: [
                [0, 0, 1200, 600],
                [0, 602, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_6",
            frames: [
                [0, 0, 1200, 600],
                [0, 602, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_7",
            frames: [
                [0, 602, 1200, 600],
                [0, 0, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_8",
            frames: [
                [0, 602, 1200, 600],
                [0, 0, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_9",
            frames: [
                [0, 0, 1200, 600],
                [0, 602, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_10",
            frames: [
                [0, 0, 1200, 600],
                [0, 602, 1200, 600]
            ]
        },
        {
            name: "storage_atlas_11",
            frames: [
                [538, 0, 483, 812],
                [0, 0, 536, 818]
            ]
        },
        {
            name: "storage_atlas_12",
            frames: [
                [401, 0, 397, 749],
                [0, 0, 399, 806],
                [800, 733, 433, 556],
                [800, 0, 392, 731]
            ]
        },
        {
            name: "storage_atlas_13",
            frames: [
                [0, 202, 620, 360],
                [0, 0, 1200, 200],
                [336, 564, 334, 551],
                [672, 559, 334, 550],
                [0, 564, 334, 551],
                [622, 202, 600, 355]
            ]
        },
        {
            name: "storage_atlas_14",
            frames: [
                [336, 552, 244, 744],
                [0, 552, 334, 550],
                [0, 0, 334, 550],
                [336, 0, 334, 550],
                [672, 0, 614, 266],
                [672, 536, 614, 266],
                [672, 268, 614, 266],
                [582, 804, 614, 266]
            ]
        },
        {
            name: "storage_atlas_15",
            frames: [
                [616, 268, 614, 266],
                [616, 536, 614, 266],
                [0, 268, 614, 266],
                [0, 536, 614, 266],
                [616, 0, 614, 266],
                [0, 0, 614, 266],
                [0, 804, 614, 266],
                [616, 804, 614, 266]
            ]
        },
        {
            name: "storage_atlas_16",
            frames: [
                [615, 614, 260, 603],
                [662, 0, 258, 606],
                [402, 0, 258, 612],
                [877, 608, 258, 603],
                [0, 402, 261, 604],
                [922, 0, 258, 603],
                [263, 614, 350, 450],
                [0, 0, 400, 400]
            ]
        },
        {
            name: "storage_atlas_17",
            frames: [
                [502, 0, 241, 602],
                [0, 684, 245, 581],
                [247, 1027, 857, 120],
                [0, 0, 500, 300],
                [764, 658, 308, 367],
                [745, 0, 396, 327],
                [764, 329, 396, 327],
                [0, 302, 380, 380],
                [382, 604, 380, 380]
            ]
        },
        {
            name: "storage_atlas_18",
            frames: [
                [970, 636, 326, 243],
                [979, 881, 250, 274],
                [484, 915, 240, 318],
                [0, 962, 240, 318],
                [0, 642, 240, 318],
                [242, 915, 240, 318],
                [254, 610, 254, 303],
                [726, 881, 251, 300],
                [0, 0, 320, 320],
                [322, 248, 248, 360],
                [970, 384, 327, 250],
                [0, 322, 252, 318],
                [572, 384, 396, 217],
                [572, 603, 396, 211],
                [322, 0, 396, 246],
                [720, 0, 472, 190],
                [720, 192, 472, 190]
            ]
        },
        {
            name: "storage_atlas_19",
            frames: [
                [0, 806, 169, 401],
                [0, 0, 169, 401],
                [171, 0, 169, 401],
                [0, 403, 169, 401],
                [614, 0, 258, 233],
                [171, 900, 300, 207],
                [891, 304, 236, 247],
                [645, 496, 244, 244],
                [429, 239, 236, 255],
                [891, 553, 241, 237],
                [473, 798, 200, 300],
                [443, 496, 200, 300],
                [1074, 0, 216, 251],
                [675, 792, 233, 196],
                [667, 235, 195, 236],
                [874, 0, 198, 302],
                [171, 1109, 263, 181],
                [436, 1109, 397, 117],
                [342, 0, 270, 237],
                [171, 661, 270, 237],
                [910, 792, 282, 161],
                [910, 955, 282, 160],
                [171, 403, 256, 256]
            ]
        },
        {
            name: "storage_atlas_20",
            frames: [
                [742, 0, 240, 182],
                [984, 173, 224, 188],
                [84, 192, 136, 288],
                [867, 565, 272, 135],
                [426, 408, 228, 167],
                [0, 777, 236, 155],
                [765, 945, 236, 149],
                [0, 0, 236, 190],
                [84, 575, 185, 200],
                [918, 363, 185, 200],
                [222, 383, 202, 190],
                [1105, 363, 185, 200],
                [384, 961, 190, 190],
                [577, 598, 190, 190],
                [385, 577, 190, 190],
                [0, 961, 190, 190],
                [0, 1153, 360, 100],
                [576, 961, 187, 190],
                [656, 419, 209, 177],
                [1181, 565, 113, 299],
                [742, 184, 174, 233],
                [271, 575, 112, 329],
                [0, 192, 82, 525],
                [522, 0, 218, 204],
                [984, 0, 250, 171],
                [362, 1153, 250, 137],
                [1003, 882, 170, 200],
                [238, 160, 200, 221],
                [953, 1096, 226, 154],
                [238, 0, 282, 158],
                [577, 790, 232, 153],
                [765, 1096, 186, 188],
                [811, 702, 194, 178],
                [192, 934, 190, 190],
                [385, 769, 190, 190],
                [440, 206, 200, 200]
            ]
        },
        {
            name: "storage_atlas_21",
            frames: [
                [373, 161, 134, 187],
                [0, 540, 149, 198],
                [646, 260, 149, 160],
                [0, 740, 200, 146],
                [0, 1096, 168, 168],
                [182, 185, 189, 164],
                [0, 0, 181, 183],
                [469, 842, 150, 150],
                [913, 69, 150, 150],
                [621, 842, 150, 150],
                [317, 1119, 150, 150],
                [797, 373, 150, 150],
                [469, 1146, 150, 150],
                [1065, 221, 150, 150],
                [621, 1146, 150, 150],
                [621, 994, 150, 150],
                [1101, 373, 150, 150],
                [1065, 69, 150, 150],
                [317, 967, 150, 150],
                [721, 690, 150, 150],
                [913, 221, 150, 150],
                [797, 525, 150, 150],
                [469, 994, 150, 150],
                [949, 525, 150, 150],
                [417, 690, 150, 150],
                [569, 690, 150, 150],
                [949, 373, 150, 150],
                [1101, 525, 150, 150],
                [1025, 829, 150, 150],
                [773, 981, 150, 150],
                [873, 677, 150, 150],
                [1025, 677, 150, 150],
                [925, 1133, 150, 150],
                [873, 829, 150, 150],
                [773, 1133, 150, 150],
                [925, 981, 150, 150],
                [0, 185, 180, 180],
                [183, 0, 175, 171],
                [170, 1075, 145, 165],
                [321, 351, 134, 206],
                [0, 888, 140, 206],
                [294, 736, 121, 229],
                [189, 351, 130, 223],
                [142, 888, 150, 185],
                [761, 69, 150, 151],
                [509, 161, 250, 97],
                [548, 0, 200, 125],
                [797, 0, 397, 67],
                [335, 621, 397, 67],
                [1077, 981, 150, 149],
                [151, 576, 182, 158],
                [0, 367, 187, 171],
                [457, 350, 187, 132],
                [360, 0, 186, 159],
                [335, 559, 460, 60]
            ]
        },
        {
            name: "storage_atlas_22",
            frames: [
                [1167, 272, 128, 143],
                [769, 1147, 132, 64],
                [1142, 1234, 130, 51],
                [945, 1236, 116, 55],
                [1090, 1083, 50, 195],
                [421, 1219, 400, 20],
                [339, 1145, 80, 109],
                [970, 0, 63, 335],
                [486, 945, 185, 77],
                [1044, 420, 137, 113],
                [210, 1080, 127, 83],
                [738, 419, 164, 103],
                [0, 412, 159, 108],
                [1035, 0, 159, 128],
                [705, 524, 162, 89],
                [848, 985, 153, 92],
                [667, 1029, 164, 81],
                [405, 408, 156, 110],
                [0, 0, 236, 94],
                [398, 0, 236, 92],
                [0, 1160, 100, 79],
                [0, 610, 180, 80],
                [1032, 880, 120, 120],
                [128, 1060, 80, 144],
                [1057, 535, 120, 120],
                [473, 1104, 100, 99],
                [540, 122, 140, 140],
                [142, 142, 140, 140],
                [398, 94, 140, 140],
                [1035, 130, 140, 140],
                [284, 236, 140, 140],
                [824, 144, 140, 140],
                [682, 144, 140, 140],
                [0, 96, 140, 140],
                [0, 938, 120, 120],
                [364, 918, 120, 120],
                [122, 938, 120, 120],
                [910, 863, 120, 120],
                [0, 522, 130, 85],
                [1008, 1083, 80, 127],
                [1142, 1120, 150, 60],
                [1183, 1002, 100, 116],
                [1196, 0, 100, 127],
                [676, 1112, 91, 105],
                [903, 1147, 96, 87],
                [784, 337, 220, 80],
                [127, 284, 150, 126],
                [784, 286, 165, 40],
                [1142, 1182, 151, 50],
                [1035, 272, 130, 146],
                [563, 479, 140, 109],
                [0, 1060, 126, 98],
                [279, 378, 124, 141],
                [0, 238, 125, 156],
                [564, 375, 172, 102],
                [238, 0, 158, 140],
                [823, 1236, 120, 55],
                [344, 1040, 127, 103],
                [904, 420, 138, 113],
                [364, 607, 136, 61],
                [486, 1024, 179, 78],
                [336, 521, 173, 84],
                [1003, 1002, 178, 79],
                [161, 521, 173, 87],
                [673, 945, 173, 82],
                [833, 1083, 173, 62],
                [564, 286, 218, 87],
                [426, 264, 136, 142],
                [244, 938, 98, 140],
                [102, 1206, 69, 94],
                [210, 1165, 100, 73],
                [575, 1112, 99, 100],
                [818, 0, 150, 142],
                [1235, 417, 50, 210],
                [1183, 417, 50, 297],
                [636, 0, 180, 120],
                [284, 142, 100, 86],
                [1177, 130, 120, 120],
                [1154, 880, 120, 120],
                [161, 412, 100, 100],
                [910, 699, 180, 80],
                [182, 692, 180, 80],
                [869, 535, 180, 80],
                [364, 836, 180, 80],
                [728, 699, 180, 80],
                [875, 617, 180, 80],
                [182, 774, 180, 80],
                [546, 781, 180, 80],
                [910, 781, 180, 80],
                [182, 610, 180, 80],
                [693, 617, 180, 80],
                [728, 781, 180, 80],
                [511, 590, 180, 80],
                [0, 692, 180, 80],
                [364, 672, 180, 80],
                [546, 699, 180, 80],
                [0, 856, 180, 80],
                [364, 754, 180, 80],
                [728, 863, 180, 80],
                [182, 856, 180, 80],
                [1092, 716, 180, 80],
                [546, 863, 180, 80],
                [1092, 798, 180, 80],
                [0, 774, 180, 80]
            ]
        },
        {
            name: "storage_atlas_23",
            frames: [
                [184, 91, 124, 48],
                [313, 42, 98, 61],
                [153, 141, 94, 62],
                [371, 105, 40, 24],
                [65, 539, 53, 22],
                [185, 532, 53, 22],
                [52, 500, 64, 30],
                [218, 500, 64, 30],
                [311, 417, 80, 42],
                [310, 105, 59, 23],
                [249, 141, 54, 29],
                [428, 289, 60, 60],
                [300, 216, 100, 50],
                [125, 318, 60, 60],
                [362, 289, 64, 64],
                [0, 451, 50, 50],
                [166, 456, 50, 50],
                [248, 448, 50, 50],
                [413, 42, 65, 91],
                [468, 0, 40, 39],
                [0, 247, 61, 78],
                [184, 42, 50, 47],
                [82, 42, 100, 60],
                [352, 461, 50, 48],
                [458, 135, 50, 101],
                [62, 442, 50, 56],
                [454, 475, 48, 48],
                [404, 475, 48, 48],
                [402, 238, 100, 49],
                [0, 0, 80, 79],
                [0, 104, 109, 54],
                [218, 255, 60, 75],
                [0, 160, 60, 85],
                [242, 0, 69, 89],
                [280, 268, 80, 54],
                [114, 442, 50, 52],
                [310, 135, 146, 40],
                [313, 0, 153, 40],
                [63, 255, 153, 31],
                [82, 0, 158, 40],
                [249, 177, 151, 37],
                [63, 288, 148, 28],
                [153, 216, 145, 37],
                [402, 177, 54, 54],
                [351, 525, 65, 29],
                [118, 508, 65, 29],
                [284, 513, 65, 29],
                [0, 81, 63, 21],
                [418, 525, 63, 21],
                [0, 532, 63, 21],
                [0, 503, 35, 26],
                [62, 217, 44, 23],
                [62, 160, 40, 55],
                [463, 413, 40, 43],
                [65, 81, 10, 11],
                [404, 413, 57, 60],
                [480, 41, 23, 38],
                [240, 532, 31, 31],
                [300, 461, 50, 50],
                [111, 104, 40, 147],
                [280, 324, 60, 60],
                [0, 327, 60, 60],
                [186, 394, 60, 60],
                [124, 380, 60, 60],
                [342, 355, 60, 60],
                [249, 386, 60, 60],
                [428, 351, 60, 60],
                [62, 380, 60, 60],
                [187, 332, 60, 60],
                [0, 389, 60, 60],
                [63, 318, 60, 60]
            ]
        }
    ];


    lib.webfontAvailable = function(family) {
        lib.properties.webfonts[family] = true;
        var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
        for (var f = 0; f < txtFilters.length; ++f) {
            txtFilters[f].updateCache();
        }
    };
    // symbols:



    (lib.adrian_body_shadow = function() {
        this.spriteSheet = ss["storage_atlas_14"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_bottom_shadow1 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_bottom_shadow2 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_bottom_shadow3 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_bottom_shadow4 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_bottom_shadow5 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_bottom_shadow6 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_bottom_shadow7 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_bottom_shadow8 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_dress_shadow1 = function() {
        this.spriteSheet = ss["storage_atlas_16"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_dress_shadow2 = function() {
        this.spriteSheet = ss["storage_atlas_17"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_dress_shadow3 = function() {
        this.spriteSheet = ss["storage_atlas_16"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_dress_shadow4 = function() {
        this.spriteSheet = ss["storage_atlas_16"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_dress_shadow5 = function() {
        this.spriteSheet = ss["storage_atlas_16"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_dress_shadow6 = function() {
        this.spriteSheet = ss["storage_atlas_16"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_dress_shadow7 = function() {
        this.spriteSheet = ss["storage_atlas_17"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_dress_shadow8 = function() {
        this.spriteSheet = ss["storage_atlas_16"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_eyes_shadow1 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_eyes_shadow2 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_eyes_shadow3 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_eyes_shadow4 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hair_shadow1 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hair_shadow2 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hair_shadow3 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hair_shadow4 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hand_accessory1 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hand_accessory2 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hand_accessory3 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hand_accessory4 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hand_accessory5 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hand_accessory6 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hand_accessory7 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_hand_accessory8 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_head_accessory_1 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_head_accessory_2 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_head_accessory_3 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_head_accessory_4 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_head_accessory_5 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_head_accessory_6 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_head_accessory_7 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_head_accessory_8 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_lips_1 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_lips_2 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_lips_3 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_lips_4 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_lips_5 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_lips_6 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_lips_7 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_lips_8 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_mask_shadow1 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_mask_shadow2 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_mask_shadow3 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_mask_shadow4 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_mask_shadow5 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_mask_shadow6 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_mask_shadow7 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_mask_shadow8 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_shoes_shadow1 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_shoes_shadow2 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_shoes_shadow3 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_shoes_shadow4 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_shoes_shadow5 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_shoes_shadow6 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_shoes_shadow7 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_shoes_shadow8 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_tale_1 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_tale_2 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_tale_3 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_tale_4 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_top_shadow1 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_top_shadow2 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_top_shadow3 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_top_shadow4 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_top_shadow5 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_top_shadow6 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_top_shadow7 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.adrian_top_shadow8 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.again_1_img = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.background_10_img = function() {
        this.spriteSheet = ss["storage_atlas_4"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_11_img = function() {
        this.spriteSheet = ss["storage_atlas_5"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_12_img = function() {
        this.spriteSheet = ss["storage_atlas_5"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_13_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_14_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_15_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_16_img = function() {
        this.spriteSheet = ss["storage_atlas_6"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_17_img = function() {
        this.spriteSheet = ss["storage_atlas_10"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_18_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_19_img = function() {
        this.spriteSheet = ss["storage_atlas_8"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_1_img = function() {
        this.spriteSheet = ss["storage_atlas_7"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_20_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_2_img = function() {
        this.spriteSheet = ss["storage_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_3_img = function() {
        this.spriteSheet = ss["storage_atlas_2"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_4_img = function() {
        this.spriteSheet = ss["storage_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_5_img = function() {
        this.spriteSheet = ss["storage_atlas_2"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_6_img = function() {
        this.spriteSheet = ss["storage_atlas_3"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.background_7_img = function() {
        this.spriteSheet = ss["storage_atlas_3"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_8_img = function() {
        this.spriteSheet = ss["storage_atlas_4"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.background_9_img = function() {
        this.spriteSheet = ss["storage_atlas_9"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.banner_1_img = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.banner_2_img = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_category_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon0 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon1 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon10 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon11 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon12 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon13 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon14 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon15 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon16 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon17 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon18 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon19 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon2 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon20 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon3 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon4 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon5 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon6 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon7 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon8 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_icon9 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_large_buttons_img = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_long_button_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_navigation_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_option_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_panel_img = function() {
        this.spriteSheet = ss["storage_atlas_16"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_small_buttons_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_subcategory_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.bg_title_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.body_base = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.broken_glass_img = function() {
        this.spriteSheet = ss["storage_atlas_17"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.check_category_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.color_picker_img = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.copyright_img = function() {
        this.spriteSheet = ss["storage_atlas_17"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.credits_1_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.done_1_img = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.earring1 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.earring10 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.earring11 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.earring12 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.earring3 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.earring4 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.earring5 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.earring6 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.earring7 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.earring8 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.earring9 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.earring_2 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_1_2_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_1_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_2_2_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_2_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_3_2_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_3_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_4_2_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_4_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_5_2_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_5_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_6_2_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_6_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_7_2_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_7_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_8_2_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.example_shoes_8_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.facebook_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.free_games_1_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.free_games_2_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.full_screen_1_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.full_screen_2_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.gravity_explosion_1_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.gravity_explosion_2_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.hero_1_0_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.hero_2_0_img = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.hero_3_0_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.hero_4_0_img = function() {
        this.spriteSheet = ss["storage_atlas_11"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.icon12 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.icon13 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_1 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_2 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_4 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_dress = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_eyebrows = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_hair = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_hand = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_ico10 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_ico11 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_ico7 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_ico8 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_ico9 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();



    (lib.icon_top = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.instruction_1_img = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.logo_1_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();



    (lib.logotype_img = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.lower_shadow_img = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.marinet_dress_shadow1 = function() {
        this.spriteSheet = ss["storage_atlas_14"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.marinet_dress_shadow2 = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.marinet_dress_shadow3 = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.marinet_dress_shadow4 = function() {
        this.spriteSheet = ss["storage_atlas_14"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.marinet_dress_shadow5 = function() {
        this.spriteSheet = ss["storage_atlas_14"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.marinet_dress_shadow6 = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.marinet_dress_shadow7 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.marinet_dress_shadow8 = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_body_shadow = function() {
        this.spriteSheet = ss["storage_atlas_12"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_bottom_shadow_1 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_bottom_shadow_2 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_bottom_shadow_3 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_bottom_shadow_4 = function() {
        this.spriteSheet = ss["storage_atlas_17"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_bottom_shadow_5 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_bottom_shadow_6 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_bottom_shadow_7 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_bottom_shadow_8 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_eyes1_shadow = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(36);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_eyes2_shadow = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(37);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_eyes3_shadow = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_eyes4_shadow = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_eyes5_shadow = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_eyes6_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(47);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_eyes7_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(48);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_eyes8_shadow = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_fringe_1_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(49);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_fringe_2_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(50);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_fringe_3_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(51);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_fringe_4_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(52);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_fringe_5_shadow = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_fringe_6_shadow = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(38);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_fringe_7_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(53);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_fringe_8_shadow = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(39);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hair_1_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(54);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hair_2_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(55);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hair_3_shadow = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hair_4_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(56);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hair_5_shadow = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hair_6_shadow = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hair_7_shadow = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hair_8_shadow = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(40);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hand_accessory5 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(41);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hand_accessory7 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hand_accessory8 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(42);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hand_accessory_1 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hand_accessory_2 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(43);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hand_accessory_3 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hand_accessory_4 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_hand_accessory_6 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_head_accessory1 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_head_accessory2 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_head_accessory3 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(57);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_head_accessory4 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_head_accessory5 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_head_accessory6 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(58);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_head_accessory7 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_head_accessory8 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(59);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_lips_1 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(44);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_lips_2 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(45);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_lips_3 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(46);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_lips_4 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(47);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_lips_5 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(48);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_lips_6 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(49);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_lips_7 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(50);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_lips_8 = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(51);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_mask1_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(60);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_mask2_shadow = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_mask3_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(61);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_mask4_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(62);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_mask5_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(63);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_mask6_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(64);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_mask7_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(65);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_mask8_shadow = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(66);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_shoes_shadow1 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_shoes_shadow2 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_shoes_shadow3 = function() {
        this.spriteSheet = ss["storage_atlas_17"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_shoes_shadow4 = function() {
        this.spriteSheet = ss["storage_atlas_17"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_shoes_shadow5 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_shoes_shadow6 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(47);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_shoes_shadow7 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(48);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_shoes_shadow8 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_tail_1 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_tail_2 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_tail_3 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_tail_4 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(49);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_tail_5 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_tail_6 = function() {
        this.spriteSheet = ss["storage_atlas_18"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_tail_7 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(27);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_tail_8 = function() {
        this.spriteSheet = ss["storage_atlas_13"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_top_shadow_1 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(67);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_top_shadow_2 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_top_shadow_3 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(28);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_top_shadow_4 = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_top_shadow_5 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(29);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_top_shadow_6 = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(68);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_top_shadow_7 = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(30);
    }).prototype = p = new cjs.Sprite();



    (lib.marinett_top_shadow_8 = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(50);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_10_img = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(31);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_11_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(52);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_12_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(53);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_13_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(54);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_14_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(69);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_15_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(70);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_16_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(55);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_17_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(71);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_18_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(56);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_19_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(57);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_1_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(58);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_2_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(59);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_3_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(72);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_4_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(73);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_5_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(74);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_6_img = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(32);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_7_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(51);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_8_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(52);
    }).prototype = p = new cjs.Sprite();



    (lib.more_games_9_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(53);
    }).prototype = p = new cjs.Sprite();



    (lib.nav_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(75);
    }).prototype = p = new cjs.Sprite();



    (lib.nav_navigation_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(76);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_0_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(60);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_1_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(61);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_2_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(62);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_3_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(63);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_4_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(64);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_5_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(65);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_6_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(66);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_7_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(67);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_8_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(68);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_9_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(69);
    }).prototype = p = new cjs.Sprite();



    (lib.numbers_separator_img = function() {
        this.spriteSheet = ss["storage_atlas_23"];
        this.gotoAndStop(70);
    }).prototype = p = new cjs.Sprite();



    (lib.photo_1_img = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(33);
    }).prototype = p = new cjs.Sprite();



    (lib.play_1_img = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(34);
    }).prototype = p = new cjs.Sprite();



    (lib.redirect_0_img = function() {
        this.spriteSheet = ss["storage_atlas_16"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.redirect_1_img = function() {
        this.spriteSheet = ss["storage_atlas_17"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.redirect_2_img = function() {
        this.spriteSheet = ss["storage_atlas_17"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.remove_1_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(77);
    }).prototype = p = new cjs.Sprite();



    (lib.smoke_1_img = function() {
        this.spriteSheet = ss["storage_atlas_19"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.sound_1_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(78);
    }).prototype = p = new cjs.Sprite();



    (lib.sound_2_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(79);
    }).prototype = p = new cjs.Sprite();



    (lib.star = function() {
        this.spriteSheet = ss["storage_atlas_20"];
        this.gotoAndStop(35);
    }).prototype = p = new cjs.Sprite();



    (lib.title_ar_img = function() {
        this.spriteSheet = ss["storage_atlas_15"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.title_de_img = function() {
        this.spriteSheet = ss["storage_atlas_15"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.title_en_img = function() {
        this.spriteSheet = ss["storage_atlas_14"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.title_es_img = function() {
        this.spriteSheet = ss["storage_atlas_14"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.title_fr_img = function() {
        this.spriteSheet = ss["storage_atlas_14"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.title_hi_img = function() {
        this.spriteSheet = ss["storage_atlas_15"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.title_id_img = function() {
        this.spriteSheet = ss["storage_atlas_15"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.title_it_img = function() {
        this.spriteSheet = ss["storage_atlas_15"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.title_ja_img = function() {
        this.spriteSheet = ss["storage_atlas_15"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.title_pt_img = function() {
        this.spriteSheet = ss["storage_atlas_14"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_ar_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(80);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_de_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(81);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_en_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(82);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_es_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(83);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_fr_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(84);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_hi_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(85);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_id_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(86);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_it_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(87);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_ja_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(88);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_pt_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(89);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(90);
    }).prototype = p = new cjs.Sprite();



    (lib.title_random_tr_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(91);
    }).prototype = p = new cjs.Sprite();



    (lib.title_redirect_img = function() {
        this.spriteSheet = ss["storage_atlas_21"];
        this.gotoAndStop(54);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_ar_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(92);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_de_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(93);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_en_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(94);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_es_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(95);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_fr_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(96);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_hi_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(97);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_id_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(98);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_it_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(99);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_ja_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(100);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_pt_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(101);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(102);
    }).prototype = p = new cjs.Sprite();



    (lib.title_reset_tr_img = function() {
        this.spriteSheet = ss["storage_atlas_22"];
        this.gotoAndStop(103);
    }).prototype = p = new cjs.Sprite();



    (lib.title_ru_img = function() {
        this.spriteSheet = ss["storage_atlas_15"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.title_tr_img = function() {
        this.spriteSheet = ss["storage_atlas_15"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.title_redirect_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.title_redirect_img();
        this.instance.setTransform(-230, -30);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-230, -30, 460, 60);
    p.frameBounds = [rect];


    (lib.redirect_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.redirect_2_img();
        this.instance.setTransform(-190, -190);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-190, -190, 380, 380);
    p.frameBounds = [rect];


    (lib.redirect_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.redirect_1_img();
        this.instance.setTransform(-190, -190);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-190, -190, 380, 380);
    p.frameBounds = [rect];


    (lib.redirect_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.redirect_0_img();
        this.instance.setTransform(-200, -200);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -200, 400, 400);
    p.frameBounds = [rect];


    (lib.redirect_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhdvAu3MAAAhdtMC7fAAAMAAABdtg");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.preloader_18_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F77EBB").s().p("AiVAAICVhiICWBiIiWBjg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // graph
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F82991").s().p("AkqAAIEqjGIErDGIkrDHg");

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-30, -20, 60, 40);
    p.frameBounds = [rect];


    (lib.preloader_15_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0)", "#FFFFFF"], [0, 1], 5.8, 10.1, -7.6, -13.1).s().p("AhHCHQhAgCgYgqQgXgoAdg2QAeg5BEgmQBAgmA/ACQBAACAYApQAXApgeA2QgdA4hCAnQg+Akg9AAIgGAAg");
        this.shape.setTransform(-54, -91.1, 1.97, 1.97);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0)", "#FFFFFF"], [0, 1], -2.2, 5.9, 3, -7.9).s().p("AgUA7QglgHgUgVQgUgVAKgXQAJgZAggMQAhgOAjAHQAlAFAUAVQATAWgJAWQgKAZggAMQgXAKgYAAQgKAAgKgBg");
        this.shape_1.setTransform(0.2, -117.4, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

        // graph
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFFFFF", "rgba(255,255,255,0)"], [0, 0.976], -0.8, -102.7, -0.7, 33.2).s().p("AmUFDQioiGABi9QgBi9CoiGQCoiGDsAAQDtAACoCGQCnCGAAC9QAAC9inCGQioCGjtABQjsgBioiGg");
        this.shape_2.setTransform(0.5, -47.8, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // graph
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(152,172,255,0)", "#BFC2FF"], [0, 1], 0.5, 4.5, 0.5, 38.5).s().p("Am5B1QivitgIjzQALC0CsB/QC3CKECAAQEDAAC4iKQCph/ANiyQgJDyitCsQi4C3kDAAQkCAAi3i3g");
        this.shape_3.setTransform(0, 64.1, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

        // graph
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.rf(["rgba(255,145,175,0)", "#E023A0", "rgba(205,24,144,0)"], [0, 0.667, 1], 17, -23, 0, 17, -23, 112.1).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
        this.shape_4.setTransform(0, 0, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

        // graph
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["#F252BC", "#F87BCE"], [0, 1], 0, 63, 0, -69).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
        this.shape_5.setTransform(0, 0, 1.97, 1.97);

        this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

        // graph
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
        this.shape_6.setTransform(4.7, 4.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-140, -140, 284.7, 284.7);
    p.frameBounds = [rect];


    (lib.preloader_13_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFFFFF", "#FFCCFF"], [0, 1], 0, -59.9, 0, 60).s().p("AmoJIQgZgRgPgbQgOgeAAggIAAu7QAAggAOgeQAPgbAZgRQAZgQAdAAQAdAAAaAQILkHfQAZARAPAcQAOAcAAAfQAAAggOAcQgPAcgZARIrkHfQgaAQgdAAQgdAAgZgQg");
        this.shape.setTransform(2, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46, -60, 96, 120);
    p.frameBounds = [rect];


    (lib.preloader_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("A07FeQigAAAAihIAAl5QAAihCgAAMAp3AAAQCgAAAAChIAAF5QAAChigAAg");
        this.shape.setTransform(150, 35);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 300, 70);
    p.frameBounds = [rect];


    (lib.preloader_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("A0TgGIAAhkMAonAAAIAABkQqGBxqKAAQqIAAqPhxg");
        this.shape.setTransform(130, 10.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 260, 21.5);
    p.frameBounds = [rect];


    (lib.preloader_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#F77EBB", "#F82991"], [0, 1], 0, 17, 0, -17).s().p("Ax8CqQhHAAgygyQgygyABhGQgBhFAygyQAygyBHABMAj5AAAQBHgBAyAyQAxAyAABFQAABGgxAyQgyAyhHAAg");
        this.shape.setTransform(130, 15);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // graph
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#F77EBB", "#F82991"], [0, 1], 0, -25, 0, 25).s().p("AyvD5QhTABg6g7Qg6g7AAhTIAAhiQAAhTA6g6QA6g6BTAAMAlfAAAQBTAAA6A6QA6A6ABBTIAABiQgBBTg6A7Qg6A7hTgBg");
        this.shape_1.setTransform(130, 15);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-10, -10, 280, 50);
    p.frameBounds = [rect];


    (lib.preloader_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#66CCFF", "#6699FF", "#66CCFF"], [0, 0.494, 1], 20, 15, 20, -15).s().p("A0TCVIAAkqMAonAAAIAAEqg");
        this.shape.setTransform(130, 15);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 260, 30);
    p.frameBounds = [rect];


    (lib.preloader_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -150, 300, 300);
    p.frameBounds = [rect];


    (lib.preloader_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F82991").s().p("AgKDkQgUgHgWgOQhZgygrgmQgygsgdgwQgkg5ABg4QAAhRA/glQApgZAxAAQA5AAAnAZQAcAQAVAgQAVggAdgQQAmgZA6AAQAyAAAoAZQBAAlAABRQAAA4gkA5QgdAwgyAsQgrAmhZAyQgWAOgTAHQgHACgFAAQgFAAgFgCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-30, -23, 60, 46.1);
    p.frameBounds = [rect];


    (lib.preloader_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F77EBB").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.orientation_lock_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhFAtIEQAAQAAjMiRiRQiPiRjPAAQiqAAiABjIk1k0QEBjiFeAAQGAAAEQERQEQERABF/IEHAAInmNIg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -88.5, 180, 177.1);
    p.frameBounds = [rect];


    (lib.orientation_lock_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AhTBUQgkgjABgxQgBgxAkgiQAjgjAwAAQAyAAAiAjQAjAiAAAxQAAAxgjAjQgiAjgyAAQgwAAgjgjg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-12, -12, 24, 24);
    p.frameBounds = [rect];


    (lib.orientation_lock_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AkgA8QgaAAgRgSQgSgRAAgZQAAgYASgRQARgSAaAAIJBAAQAZAAASASQASARAAAYQAAAZgSARQgSASgZAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35, -6, 70, 12);
    p.frameBounds = [rect];


    (lib.orientation_lock_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AiwCwQhIhJgBhnQAAgWAFgWQAMhLA4g5QA5g4BLgMQAQgEASAAIAKgBIAOABQBeAEBEBEQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKgAgKikQg+ADgsAtQgxAxAABDQAAATAEASQAJAuAkAiQAxAxBDAAQBEAAAxgxQAxgxAAhEQAAhDgxgxQgigkgugJQgLgDgMAAIgOgBIgKABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25, -25, 50, 50);
    p.frameBounds = [rect];


    (lib.orientation_lock_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("A1FbVMAAAg2pMAqLAAAMAAAA2pg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-135, -175, 270, 350);
    p.frameBounds = [rect];


    (lib.orientation_lock_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("EgRzAnEQiVgBhphpQhqhpAAiVMAAAhC3QAAiVBqhpQBphpCVgBMAjnAAAQCVABBpBpQBqBpAACVMAAABC3QAACVhqBpQhpBpiVABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -250, 300, 500);
    p.frameBounds = [rect];


    (lib.instruction_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.text = new cjs.Text("text", "100px 'Arial'");
        this.text.lineHeight = 114;
        this.text.lineWidth = 317;
        this.text.setTransform(-158.4, -55.8);

        this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-160.4, -57.8, 321, 115.8);
    p.frameBounds = [rect];


    (lib.instruction_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCCFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.nav_navigation_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_navigation_img();
        this.instance.setTransform(32, -28, 0.64, 0.64, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiLFdQhWABg+g+Qg9g9gBhYIAAkWQABhWA9g+QA+g+BWABIEXAAQBWgBA+A+QA9A+ABBWIAAEWQgBBYg9A9Qg+A+hWgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35, -35, 70, 70);
    p.frameBounds = [rect];


    (lib.marinett_top_base_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AnFIuIgBAAQgJgJgJAHQgQAMgRgWIgJgMIgLAQIAAABIgBAAIgEAJIgCgBIAAgKQgXgFgggQQgjgQgVgGIgCgBIgBgDIgDgXIgBgHIAAAAIgDgdQAAgfAfg/IABgCQANgbAKgRIACgCIADAAQAigCBYgKIAFgBIAFAhIABAAQAJgBARAMQgEgmgCgyIgFAAIgngIIgEgBIACh+QAGg7AchrIAAgBQgVgvAAgZQAAgfAMgYQAKgVAcgZIABgBQAKgEA7gUIAJgNIgFgRIgBgCIABgCQAfg5BPg3QBFgwBJgbIAKgEIgDAKQgFAOgFANIAAAAQgXAugzAiIghAgQAIAPAXAKQAhAPAtAAQBNAABNgzIAYgQIALgbIAAABIAJgVIAAAAQAWg3AOgxIgCgFQgFgMAAgUIAAAAIAAgNIAAgCIAAgFIAGAAIADAAQAJAAAHABQAqAIAXA0IAMgCQApgJAsgDQApgDApAlIABAAIAJAIQAuAsAQBYQAQBWApCBQAoCAgeApIAJAIQAUAVAAAQIgDAbQgDAUAAALIAAAAIAvAFIACABIAOAQIAHAHIgIACQgKACgHADQgFAfABAmQgBBIARArIAcgSIAJgGIgCALQgBAMgFAOIAAABIgLAXIAAABIABADIgDAAIgCAEIgDgEQg5AOheAlIgEABIgCgEIgGgMIAAAAIgKgcIgDABIgCAAQgagKgegcQgUgRgGgRQgDgLAAgKQgRADgPgNQgPgPgMgkQgPgvgBgpIAAAAIAAgDIAAgDQAAgEAHgHIALgOIgBgBIgBgBQgqgBgMg8QgEgWgEghQgqBHgRAvIAAAAIgCACIABABIgBADQgHAggIAUIgCAFIgBgBIgBAFIAAABIgHALQgPAVgqAUQgSAJg0AUQgDALAAAIQABAZAUAWIAFAFIgGADQkHCmi6ggIAAAAIgOgDIgDAWIAAAAIgCAOIgBAJIAAAAQgDAagFADIAAABQgCABgDAAQgGAAgMgKgAE3CIIAAAAIAAAAgAAqiEQABAAADgJIgBgBIgDAKg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-65.4, -56.9, 130.8, 113.8);
    p.frameBounds = [rect];


    (lib.marinett_top_base_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AmVISQhrgehvgiQhtgihXgWIgOgEIAAAAIANgFQA4gWgDhBIAAgHIAAgBIAFgKIAFACQAVANApAGIBZAOIAAABIBfAJIBnAIIgBgGQgJhBgDhxIgBgFIAAgBQgDgaABgaIAAAAQADgkAOheQgIgKgOgjQgVgwAAgZQAAgfAMgYQAKgVAcgZIABAAQAKgFA7gUQANgXAcgPIBEgnIAvgdIAGgDIACAHQAFASAMAMQAWAVAvAAQA+AABQhVQAugxAzhIIAFgHIAEAHQAHAOASgBQANAAAVgCIAbgGQApgJAsgCQAtgEAvAuQAtArARBYQAPBWAbChQAZCaAUCAQAPgGASgFQAqgOBWgVIAGgBIAAAGQAAAmATATQATASAmAAIALAAIgHAJQgvAxhTA7Qh0BTg8gBQgFAAgCgBQhOgSgniEQgniCgZhbIgghyQgvAshZB6Qh0ChABAyQAAAYAVAWIAEAGIgFACQkSCti9gpIgGAsIAAAGg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-83.4, -53.3, 167, 106.6);
    p.frameBounds = [rect];


    (lib.marinett_top_base_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AksHvIgEgBIAAgFQACgcAAgMQAAgegHgyIAAgBIgBgLQgKhBgChxIgBgFIAAgBQgDgZAAgbIAAAAQADgjAOhfQgIgKgOgiQgUgxAAgYQAAgfALgZQAKgVAcgYIABgBIApgPIABAAIAcgKIAQgMIAAgBQAagVANgJIAAAAQARgNBRgwIABAAIAMgIIAEAFIgKAKQhLBQg9AUIgUAHIgNAEIgEABQAaANAfAbIAQAOQAZgcAegTQA0ghA6AAQBCAABBAiQAcgkAkg7IBBhtQAWgkAVgYIABgCIACAAQAOgBAUgEIAMgCIgIALQgeAlhBBsQg2BbgfAuQAOAJAOALIABABIAHAFIAAAAQBFA5BXBtIACADIgCADIgOAPIAAAAQggAngpA5Qh0ChABAyQABAYAVAXIAEAFIgFADQjeCLimAAQgrAAgmgJg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35.2, -50.4, 70.6, 100.9);
    p.frameBounds = [rect];


    (lib.marinett_top_base_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AmgI3QhrgfhvgiQhRgZhFgTIgugMIgCgBQgLgJhNhLIgBgBIgmgjQglgjABgNIABgGIgGgMIgJgSIAAgBQgDgHAAgTQgBgVA5gkQATgMARgIIACAAIABAAQAQADAEAKQAEAGgEAMQASAJgDAYQAdANgHAoIAAACIgCABIgXAOIAYAKIAagMIgBABQATgMABgHQAAgJgLgXIgBgEIgFgOIACgBIALAJQAVATASgJIAFgCIAFAMIAAABIAAABQAAAJAGAcQAFAdAAAHQAAAGgDAOIgCAMQAJAFANAEQAPAFAWADIBZAOIAAABIBfAJIBnAIIgBgGQgJhBgDhxIgBgFIAAgBQgDgaABgaIAAAAIACgWIgXgDIgBAAIgBAAIgEAAIgBgDQgDgJAAgPQAAgaAMg6QAEgXAHgUIAAgCQgSgrAAgYQAAgfAMgYQAKgVAcgZIABAAQAKgFA7gUQANgXAcgPIAXgOIAAAAIAmgWIAsgaIASgjQAeg/AngbIgBAAIAngcIgDAOQgSBJg3AuIAAABIgFADQgvBMhJAZIAAAMQAAA3AKAeIAGAPQAhgmApgYQBNgwB2gNIAGgIQAXgkA/hXIA5hQQgMgHgGgPQgFgPABgeIABgWIABgCIACgCIACgBIABAAQANgFAOAAQAeAAAVAVQAVAXAAAmIAAABQAngIAqgCQAfgDAgAVQAOAKAPAOQAtArARBYQAPBWAbChQAZCaAUCAQAPgGASgFQApgOBRgUIgBgCQAAgPAngoIAPgQQATgWABgEQAAgIgOgVIgBgBIAAgCQACgjAoACQALghAbADQACgLAIgFQAHgHAOABQAIgaAagBIACABIABAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAIAqAYQAqAZgFAaQgDAWgNAVQgOATgdAlQgeAkghArQgjAtgZAOIgRATQguAxhSA7Qh0BSg8gBQgFAAgCgBQhOgSgniEQgniCgZhbIgfhuQhECBgSAsIgBADIgDAAIgOADQgeAIgPAAIgGAAQhiCLABAvQAAAYAVAWIAEAGIgFADQkSCsi9gpIgGAsIAAAGg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-101.4, -56.8, 202.8, 113.7);
    p.frameBounds = [rect];


    (lib.marinett_top_base_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AmgI+QhrgfhvgiQhtghhXgXIgCgBQgLgJhNhLIgBAAIgmgkQglgkABgMIABgGIgGgMIgJgSIAAgBQgDgHAAgTQgBgVA5gkQA3gjAvAAIACAAIAAgEIABAAIAAgBQABgGAIAAQALAAAiARQAmATgBAOIgFAhQgGAbAAAKQAAAJAGAcQAFAdAAAHQAAAGgDAOIgCAMQAUAMAnAFIBZAOIAAABIBfAJIBnAIIgBgGQgJhBgDhxIgBgFIAAgBQgDgaABgaIAAAAQADgkAOhgQgIgKgOghQgVgwAAgZQAAgeAMgZQAKgVAcgYIABgBQAKgFA7gUQANgXAcgPIB2hGQAhgUAXgXQAkgnAHg0IABgIIAHAGQAHAFAHAAQAXAABlg/QAngYArgWIAEgCIAEAIIAAABIgCAlQgBAcAFAOQADAJAHAFQAGAEALABQAVAAAogJQApgIAsgDQAtgEAvAtQAtAtARBXQAPBWAbChIAnD3IABAFIgFABQhmASg4BxIgFALIgEgMIgGgTQgniCgZhcIgghxQgWAUgfAlQgkArgvBCQh0ChABAyQAAAYAVAXIAEAEIgFAEQkSCsi9gqIgGAtIAAAGgAs1C5IACAHIAAgJgAH+HAQgFAAgCgBQgTgFgQgKIgBgBIgBgBQgkg/BChlIAAgBQAUgbAvgUQARgIAWgGQApgOBRgTIgBgCQAAgQAngoIAMgNQgGgHgHgTQgKgcAAgNQAAgVAIgLIACgdIAAgBIABAAQADgRANgFIADgCIACAAIgCgCIABgDQAEgHAFgGQAEgFAIgCIgFgLIAAAAQgBgSAdgIQAQgEAWAAQAMAAADACIgBAAQAIABAFAJIABAAIAMAUIADABIABAAQAgAQAkAWQAqAZgFAYQgDAYgNAVQgOATgdAlQgeAkghArQgiAsgaAPQgvA5hiBGQhzBRg9AAIAAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-101.4, -57.5, 202.8, 115.1);
    p.frameBounds = [rect];


    (lib.marinett_top_base_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AmoInQhrgehwgjQhZgahJgUIgGgCIADgGQAbgqgFg4IAAgBIADgKIAEABQAYAIApAHIBYANIABAAIBfAJIBnAIIgBgFQgHgsgDhDIgEAAIgUABIgFABIAAgFQgCgOAAgUQAAg0AUh0IANhDIgNgbQgUgxAAgYQAAggALgYQALgVAbgZIABgBQAKgEA8gTQANgYAcgQIAwgcIgEgTIABgCQAjhJCIhIIABAAIAJACIgBAEQgLAygqAtQATAiA8gCQA/gCBwgsQAdgsAXgrQgZgDgIgXQgFgOABgcIABgEIADAAIAMgBQBcAAAnAvIACgBIAlgEIABAAQAsgDAwAuQAtAsARBXQAPBWAaChQAaCaATCBQAQgHARgGQArgNBVgVIAEgBIACADQAuBDAhAIIAGACIgEAGQgfAqhkBGQhzBSg8AAQgGAAgBgCQhPgRgmiDQgniCgZhcIgghuQhLCBghBLQgOAegGAUIgBADIgCABIhGAaIgTAHQggA3AAAaQABAZAVAWIAEAFIgFADQkSCti+gpIgFAsIgBAGg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-81.3, -55.3, 162.6, 110.7);
    p.frameBounds = [rect];


    (lib.marinett_top_base_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AmgJBQhrgehvgjQhtghhXgWIgCgBQgLgJhNhLIgBgBIgmgjQglgkABgNIABgFIgGgMIgJgTIAAAAQgDgHAAgUQgBgUA5gkQALgIAMgFIABgBIACABQAMADADAKQADAHgDAKQAVAJgBAYQAaAIgCAuIAAACIgCACIgMAGIAYAKQAGgCAUgKIgBAAQATgMABgGQAAgJgJgVIgBgBIAAgBQAAgMACgFIABgEIACgIIAGAFQARAOAYgIIAIgDIgBAIQgEASAAAHQAAAJAGAbQAFAdAAAIQAAAGgDAOIgCAMQAUALAnAGIBZAOIAAAAIBfAJIBnAIIgBgFQgJhBgDhxIgBgGIAAAAQgDgaABgaIAAgBQACgeALhNQgKgLgKgNQgsg8AAhXQAAhYAsg9QAtg/A/AAQA1AAAoAsIA7gjQBYg0ALhSIABgIIAHAFQAHAGAHAAIABAAIAGACIAAAEQgFA8gmAuQgiAnhWArIgCABIABABIgBADQgnA8gDArIACAaQAhgaAigUQAcgTAdgOQBOgoBLgMQAMgZAVgeQAWghANgaIABgPQAAgRgJgXQgLgaAAgYQAAgNAfgiIAEgEQAGgGAmgfIALgJIAAAAIgDAOIgBADIAAAAIgCAlQgBAcAFANQAGATAVAAQAVAAAogIQApgJAsgDIACAAQAigWAoAAQBKgBA0BKQA0BIAABmQAABng0BIIgIALIACAKQAZCaAUCAQAPgGASgGQApgNBRgUIgBgCQAAgPAngoIAPgQQATgWABgEQAAgIgOgVIgBgCQgDgQALgKQAJgJAUgEQAEgQAKgIQAJgHAQACQABgNAIgFQAHgGAOADQABgNAJgGQAKgIAVABIABAAIABABIAtAaQAqAYgFAZQgDAYgNAVQgOATgdAlQgeAjghAsQgjAtgaAOIgBAAIgBADQgvA3hfBEQh0BSg8AAQgFAAgCgCQhOgRgniEQgniCgZhcIgghxQgvAphZB9IgPAWIgDADIAAABQhiCLABAtQAAAZAVAWIAEAFIgFADQkSCsi9gpIgGAtIAAAGg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-101.4, -57.9, 202.8, 115.9);
    p.frameBounds = [rect];


    (lib.marinett_top_base_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("Am2H2IgEgBIAAgFIACgoQAAgegHgyIAAgBIgBgLQgKhBgChxIgBgFIAAgBQgDgZAAgbIAAAAQADgjAOhfQgIgKgOgiQgUgxAAgYQAAgfALgZQAKgVAcgYIABgBIARgGIA2gTIABAAIADgIIABgCQANgQAWgMIARgKIAngXIA8gjIAMgHIADADIgJALQgOATgSAQIABADIAAgBIABAEQADgEAFgCIABAAQAIgEAKADQAKACAEAIQAEAHgDAIQAIgCAHACQAKADAEAIQAEAJgEAJQgDAHgGAEQB5ADBjAkQARgYATghQBPiKBghmIABgBIACAAIAngEQAtgEAvAuQAuAsAQBXQAOBNAXCKIAAABIgBACQhEB/iNgOIgDAAIgBgEIgPgzQgVAUgeAlQgkApgxBEQh0ChABAyQABAYAVAXIAEAFIgFADQjeCLimAAQgrAAgmgJgAjykYIAAgCIgCACIACAAIAAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-49, -51.1, 98.2, 102.3);
    p.frameBounds = [rect];


    (lib.marinett_tail_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.instance = new lib.marinett_tail_1();
        this.instance.setTransform(-135, -118.5);

        this.instance_1 = new lib.marinett_tail_2();
        this.instance_1.setTransform(-134, -114);

        this.instance_2 = new lib.marinett_tail_3();
        this.instance_2.setTransform(-40.7, -156.7, 0.58, 0.58, 60);

        this.instance_3 = new lib.marinett_tail_4();
        this.instance_3.setTransform(-131, -224);

        this.instance_4 = new lib.marinett_tail_5();
        this.instance_4.setTransform(-102.4, -221.4, 0.898, 0.898, 9.5);

        this.instance_5 = new lib.marinett_tail_6();
        this.instance_5.setTransform(-45.3, -159.6, 0.568, 0.568, 60);

        this.instance_6 = new lib.marinett_tail_7();
        this.instance_6.setTransform(-111.8, -158.1, 0.306, 0.306, 15);

        this.instance_7 = new lib.marinett_tail_8();
        this.instance_7.setTransform(-321, -363.1, 0.643, 0.775);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-135, -118.5, 270, 237);
    p.frameBounds = [rect, new cjs.Rectangle(-134, -114, 270, 237), new cjs.Rectangle(-136.2, -156.7, 232.5, 292.5), new cjs.Rectangle(-131, -224, 150, 149), new cjs.Rectangle(-131.9, -221.4, 180, 202.1), new cjs.Rectangle(-138.7, -159.6, 227.5, 286.1), new cjs.Rectangle(-129.3, -158.1, 76.6, 81.1), new cjs.Rectangle(-321, -363.1, 386.1, 275.2), null];


    (lib.marinett_shoes_shadow5_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_shoes_shadow5();
        this.instance.setTransform(-143.2, -88, 0.725, 0.725);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-143.2, -88, 287.1, 178.4);
    p.frameBounds = [rect];


    (lib.marinett_shoes_shadow4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_shoes_shadow4();
        this.instance.setTransform(-143.1, -117.6, 0.725, 0.725);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-143.1, -117.6, 287.1, 237.1);
    p.frameBounds = [rect];


    (lib.marinett_shoes_shadow3_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_shoes_shadow3();
        this.instance.setTransform(-141.9, -117.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-141.9, -117.1, 285.1, 235.5);
    p.frameBounds = [rect];


    (lib.marinett_shoes_shadow2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_shoes_shadow2();
        this.instance.setTransform(-142.6, -75.2, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.6, -75.2, 285.1, 151.9);
    p.frameBounds = [rect];


    (lib.marinett_shoes_shadow1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_shoes_shadow1();
        this.instance.setTransform(-142.1, -77.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.1, -77.5, 285.1, 156.3);
    p.frameBounds = [rect];


    (lib.marinett_shoes_base8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("ATsGVQglgSgFgUIAAAAQgFgSgHgRQgHgRgMggIAAgBIgBgCQgEgLAAgKQAAghAFgqQAFglADg0QgPgxAAgYQAAgKAFgYQAFgZAAgJQAAgKgJggIgKgmQgZgGgLgEIgBgBIgBgBQgXgagEgPIgHgWQgZhCAAgWQAAgmAWgSIABAAIAUgPIAGgEIACAGIAQAuQAKADAQAAQA2AAAhgVIgGgwIAAgGIAFAAIAEAAQAogBAMAyQAFAVAAAiQAAAgAJAUIAAAAQAIAWAIAXIABACIgCADIgSASQANAiAEAkQAIBPAHAVIAIAVIAhBXQAgBRAAAcIgBAKIAEA8QACAPgjA1QgjA3ghAAIgDAAQgeAAgigPgA1nElIgDAAIgkheIAAgBQgFgLAAgGQgBgfA/gwQBIgzAZgXIAAAAIBThKQAtgqAfgfQARgbAVgsIgNgTQgOgUAJgWIAAAAQAIgVANgZIAAAAIAphLQAdg2AiAIIAGABIgDAFIgHAUIAAAAIgMAeQAOALARALQAoAZAnAKQAHgMAVgrIAEgIIAEAIIARAfIAAAAQADAFAAAMQABABgKATIgfA5QggA+gSApIgBADIgDAAIgDAAIgQgBQgKAwAKAXQARAlgFArIgCAKIAACCIgBACQgZAagnALIAAAAQgnALgXgEIgEgBIAAhDQgZAIgJAXQgSAwgXAdIgBABIgCABQgoAPg5APQgyAOhXAAIgXAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.8, -42.1, 285.8, 84.2);
    p.frameBounds = [rect];


    (lib.marinett_shoes_base7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AUxDxQgRAAgigMQgjgNgNgMQgOgNgLgWQgEgIgLggIAAAAIgBgBIgBgCQgEgLAAgKQAAggAFgrQACgLAOgeIAFgNIACAAIACAOQALA+AGAJQAHAKAfAOQAfAOAhgTIAAABQAjgUAGgMQAEgNgCgjQgEgjADgVIACgOIABAAIAHAMIALAYQAfBOAAAcIgCALQAEAvgKARIAAAAIgaAjQguA6gSAAIAAAAgA1mB2IgBAAIglhJQgGgLAAgHQAAgdA+gwIABAAIAegVIADgBIACACIArAgQAPALAjgBQAkgCA2glQA3gmAfgaQAdgaA4g/QAKgNAFgEQAFgDADAAQAEgBACAEQAMAGAIASQARAlgFAtIgCAMIAAgBIgVCaIhKAVIgKhcQhKAdgHAvIAAACIgBABQgvAzhXAeQgpANgiAAQgoAAgfgSg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -24.1, 285.4, 48.3);
    p.frameBounds = [rect];


    (lib.marinett_shoes_base6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AUxDxQgRAAgigMQgjgNgNgMQgOgNgLgWQgEgIgLggIAAAAIgBgBIgBgCQgEgLAAgKQAAggAFgrQACgLAOgeIAFgNIACAAIACAOQALA+AGAJQAHAKAfAOQAfAOAhgTIAAABQAjgUAGgMQAEgNgCgjQgEgjADgVIACgOIABAAIAHAMIALAYQAfBOAAAcIgCALQAEAvgKARIAAAAIgaAjQguA6gSAAIAAAAgA1mB2IgBAAIglhJQgGgLAAgHQAAgdA+gwIABAAIAegVIADgBIACACIArAgQAPALAjgBQAkgCA2glQA3gmAfgaQAdgaA4g/QAKgNAFgEQAFgDADAAQAEgBACAEQAMAGAIASQARAlgFAtIgCAMIAAgBIgVCaIhKAVIgKhcQhKAdgHAvIAAACIgBABQgvAzhXAeQgpANgiAAQgoAAgfgSg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -24.1, 285.4, 48.3);
    p.frameBounds = [rect];


    (lib.marinett_shoes_base5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AUxNxQgRgBgigMQgjgNgNgMQgOgMgLgWQgEgJgMgfIAAgBIAAAAIgBgCQgEgLAAgLQAAgdAEgmIABgHQAFglACg1QgPgwAAgZQABgKAFgaQAEgYAAgKQAAgJgHggIgBgBIAAgBQgIgaAAgMIgMhBIgBgMIAAgBIgCgSIgBgJQgihohWjqQgZhDgXg5IgkhSIgFgNQgkhSgWhZIgLgtIABAAIgIglIgBgIIAIADIAfAHQgKgIgKgJQgogpAAg5QAAg5AogoIAHgGQAWgUAagIQATgGAWgBIACAAQAeAAAaAMQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAUAKASASQAoAoAAA5QAAAlgRAeQAXgSAVgXIAFgGIADAHIARAoIARAqQATAzAEAiQAKBSAJC7IAGCIQAKDOAeBpIACALIAAAAIAKAdIAAAAIABABQAYAkAKApQAFASACAUQAIBPAHAXIApBsQAYA+AGAfIAAAAIACAPIgCALQAEAwgKAQIAAABIgaAiQguA7gSAAIAAAAgA1dLSQgTgEgXgbIAAgBIgFgFIAAAAQgGgMAAgHIABgGIAAgBQAFgcA4grQBJgzAYgXIABAAIBShMIBNhJQAbguArhbQArhcASgvQAUgxBKj+IAAAAQARhAAdhFQA4iKBhiaIAHgMIADgIIADgHIAAAAQAHgPARgWIAJgNQAng1AGgMIAIgXIAPgwQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAHgTIACgFIAFACQALAFALAIQAIAHAJAIQAoApAAA5QAAA5goAoQgjAjgwAFQA1AlA1ANIAcAFQAXADAVgCIAHAAIgBAHIgIAiIAAAAQgMAtgIAZQgVA9geA6QgEALgMASQgjA2hbB1IgtA6QhWBtgkA2IgBAAQgtBCghBEQgSAkgHAXIgBACIgBAEIAAABQgYBIADAnQABAMADAKIAAgBQAQAlgEAtIgCALIAABZQgFAWgnAJQglAJgbgDQgYgCgaASIAAABIgsAdQgYAXhPAVQhLATg2AAIgBAAQgLAAgMgeg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -88.1, 285.4, 176.3);
    p.frameBounds = [rect];


    (lib.marinett_shoes_base4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AUxSUQgRgBgigMQgjgNgNgMQgMgKgJgQIgCgEIAKgHQgVgSgHgTIAAgBIAAgBIgBgBQgEgLAAgLQAAgcAEgkIABgKQAFglACg1QgPgwAAgZQABgKAFgaQAEgYAAgKQAAgJgHggQgIgbgBgNIgIgtIgBgBIgFgkIgBgOIgBgJQgihohWjsQgsh4gohUQgnhXgYhhIgCgIQgGgZgGgdIABABIgFgVQgPhQgPhvIhejBIgBgCIAAAAIgCgEIglhNIgmhPIAAgBIAAgBQgIi4BEimIADgFIAFADQCFBZBeCoIABABIAAABIAOBPIAAADIgBABIACAFIAAABIANBEQARBcAPAzQBYCXAvBoQAwBoAJA4IAAgCIAAAHIABACIgBAAQAMBuANElQAMD9ApBkQAiA2AHA+QAIBPAHAXIApBsIALAcQAUA6ABAWIgCALQAEAwgKAQIAAABIgaAiQguA7gSAAIAAAAgASTJdIgDgDIABABIACACgA1dP1QgUgFgagfIgBgBQgGgMAAgHQAAgOAOgRQAPgVAhgaQBJgzAYgXIABAAIBShMIBNhJQAWgmAhhDIAPggQArhcASgvQAUgxBKkAIAAAAQA5jLCej2QAng/AuhAQgDgTACgEIBQjQIAihcIAAAAIACgHQAVhCAQg6QALgtAXhpIADgOIADAAIAEAOQBQEfBvBwIADADIgCADIgeAwIgMATIhHBuIAAAAIgLAQIgBAAQgfAsgLAVQgMAUgOAfQgPBLgMA2QgQBHgMAiQgVA9geA6QgUAph6CdIgBAAIgBADIAAAAIgBAAIhbB2QggApgEAGIgUAeIAAAAIgRAZIgBAAQgRAZgQAZQgZAqgUAqQgUApgHAZQggBhAPAjQAHAPADAQQAEAYgCAbIgCAaIAABhIgDABIgLADIgCAAQhCACg/AaQgdALgcARQgXAXhQAVQhLATg2AAIgBABQgLAAgMgfg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -117.2, 285.4, 234.5);
    p.frameBounds = [rect];


    (lib.marinett_shoes_base3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AUxSOQgRgBghgMQghgMgNgMQgKgJgJgQIALgIQgXgTgIgVIAAgBIgBgBQgEgKAAgKQAAggAFgqQAFglADg1QgQgxABgYQAAgJAEgaQAGgZgBgKQAAgKgIghQgIgagBgNIgHguIgBAAIgFgkIgCgNIgBgKQghhohWjtQgth4gnhUQgnhXgYhhIgDgIIgLg1IgEgUQgQhQgPhvIislkQgGi3BDilQCEBZBdCnIAPBPIACAKQAYCPAVBEQBXCYAwBoQAxBrAHA4IAAABIAAABQAMBuAOElQALD/ApBkQAiA1AGA9QAJBQAHAXIAqBtQAeBPAAAbIAAAKQADAvgKAQIgZAiQgtA5gPAAIAAAAgA1ZPwIgDAAQgSgFgZgfQgGgKAAgGQAAgcA9guQBIgzAZgYIBThMQAtgqAggfQAWgmAhhEIAPggQArhcATgwQATgwBKkBQA6jKCcj2QApg/AuhBQgCgUABgCIBPjRQAUgzAQgvQAsiEAeioQBJE1B2B1IgeAwQg/BjggAuQgfAtgMAUQgLAVgPAfQgPBMgNA2QgPBGgMAjQgVA8gdA6QgUAph6CcIgCADIhcB2IglAvIgUAeIgRAZQgSAZgPAaQgZApgVArQgUApgHAZQghBkARAkQAQAkgFAsIgCALIgGA1QgaATgiAIIg6AOQgXAFgTAYIgjAtQgWAXhPAUQhJATg2AAQgJAAgLgdg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.2, -116.6, 284.4, 233.3);
    p.frameBounds = [rect];


    (lib.marinett_shoes_base2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AUxLyQgRgBgigMQgjgNgNgMQgLgKgKgQIAAAAIgEgIQgEgIgLgfIAAgCIgBAAIgBgCQgEgLAAgLQAAggAFgqQAFglADg1QgPgwgBgZQABgKAFgaQAEgYAAgKQAAgJgHggQgIgbgBgNQgNhLgCgVIgBgJQgihohWjqIgbhHIgIgUQgYg8gVgxIgCgEIADgCQB/heBajOIAFgLIAFALQAcBIAFArIAAAAIABACIAAABIAFBEQAIBZAHCTIACA2IACAsQAEBJAFA9QAOCRAdBIQAjA2AHA+QAIBPAHAXIAqBsQAfBRAAAbIgCALQAEAwgKAQIAAABIgaAiQguA7gSAAIAAAAgAS+KlIAEAHIADgCIgIgHIABACgA1dJTQgUgFgagfIgBgBQgGgMAAgHQAAgeA+gwQBJgzAZgXIAAAAIBShMIABAAIAhgfIALgLIAggfQAbguArhbQArhcASgtQANggAihyIADgKIAAABQADgMAEgNIAlh9IAAAAQAchiAyhsIAcg4QAihEArhGIAHgMIABAAIABAOQAQEFBdCSIACADIgCACIg2BHIgNARIgUAZQhfB7goA6QgtBAghBEQgUApgHAZQggBhAPAjQARAlgFAtIgCALIgFA4IgDABQgaATgkAJIAAAAIg5AOQgWAFgSAWIgiAtIgBAAQgXAYhQAVQhLATg2AAIgBABQgLAAgMgfg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -75.4, 285.4, 150.9);
    p.frameBounds = [rect];


    (lib.marinett_shoes_base1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AUxMIQgRgBgigMQgjgNgNgMQgOgMgLgWQgEgJgMgfIAAgBIAAgBIgBgBQgEgLAAgLQAAgbADgiIACgNQAFglACg1QgPgwAAgZQABgKAFgaQAEgYAAgKQAAgJgHggQgIgbgBgNQgNhLgCgVIgBgJIgCgFIgRgzIgQgwIgRgxIAAABIhEi6IgmhiQgXg8gXgwQgnhXgYhhQgKgkgIguIgCgHIAJACQAcAHAcADQAdACAcgEQAWgDAUgGQAggLAdgTQAegVAcgeIAFgFIADAGQAzBuAGA5QAIBIAJCZIAGCHIACAsIAAABQAMD7ApBkQAiA2AHA+QAIBNAGAYIABABIAGARIAjBbQAfBRABAbIgCALQAEAwgKAQIAAABIgaAiQguA7gSAAIAAAAgA1dJqQgIgDgGgEIgEgCIAAgBQgNgJgPgSIgBgBIgBgEQgEgJgBgGIACgIQAGgdA2gpQBJgzAYgXIABAAIBShMIBNhJQASgeAXgxIAdg6QArhcASgtQAUgxBKkAIAAAAQA5jNCej2IACgFIAFAEIAlAfIAAABQAXATAZAPQArAZAsALQAiAHAigCIAHAAIgBAGQgQBHgMAiQgVA9geA6QgUArh6CdQh6CcguBDQgtBAghBEQgMAagHATIgBAAQgFALgCAKQggBhAPAjQAQAlgEAtIgCALIgFA4IgDABQgaATgkAJIAAAAIg6AOQgVAFgSAWIgiAtIgBAAQgXAYhQAVQhLATg2AAIgBABQgLAAgMgeg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -77.6, 285.4, 155.3);
    p.frameBounds = [rect];


    (lib.marinett_mask8_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask8_shadow();
        this.instance.setTransform(-39.8, -15, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-39.8, -15, 80.7, 32.2);
    p.frameBounds = [rect];


    (lib.marinett_mask8_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("ABrCWQgRAAgQgDIAAAAQg8gLgTgrQgNgcgPhAIgJgCIgEgBIAAAAQgEAAgHACQgMBfgaAXIAAAAQgVATg8AAIgBAAQgPAAgMgBQgZgDgSgIQgSgIgNgNIgHgHIAAgBQgagfgZhdQgJACgHAAQgQAAgKgHIAAAAQgNgJAAgUQAAgMAIgRQAGgMgBgMIAAAAQgBgOANgKQALgKARgBQAIAAAJAGIAAAAQAIAEACAFQBEgDA/AMQAUAFAUAGIAdAKIAAAAIAVAIIAYALIAIgEIABAAQAHgGAGAAIADgBIABAAQAFABANAFIAAAAIAJAEIAWgIQA0gPAygIIASgDQAggEAfgBQARgBAQAAIANAAIAAAAIAhACIAAAAIAXACQAKgPAIgCQADgBARAAQASAAANAFIAAAAQARAJgBAPQAAAJAEALIAAAAIAAABIADAGIAAAAQAEAIABAHQACAIgBAFIAAAAQgBAKgVAQQgTAQgRAAQgIAAgJgHQggBhgsAmQgYATghAKIAAAAIgZAGIgBAAIgVACIgBAAIgTABIgKgBgABkgtIAAAAQgyALgbAZIAAAhIAAAAQABAiAZAdQAKALAQAHQAWAJAggBIABAAIAEAAQALAAALgDQANgDALgGQAXgLASgWQAkgrAFg+QgUgJgcgEIAAAAIgQgCIgZgBIgEAAQgnABgeAHgAjEBeQALACANABIAQABQAeAAAMgTQALgSgCgwQgCgigUgSQgGgFgIgEIgBAAIgBgBQgRgHgRgDQgVgFgWABIAAAAIgCAAQgbACghAIQAABGAVAjIAIANIAAgBQAIAJAJAGIAAAAQARAKAXAFg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-39.3, -15.1, 78.6, 30.2);
    p.frameBounds = [rect];


    (lib.marinett_mask7_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask7_shadow();
        this.instance.setTransform(-31.6, -10.3, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.6, -10.3, 64, 23);
    p.frameBounds = [rect];


    (lib.marinett_mask7_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("ABzBqIgBAAQgPgBgPgCIgBAAIAAAAIgHgCIgBAAQgNgFgMgGQgZgPgJgWIABAAQgKgVgCgWQgIgHgLgCQgKgBgLACIAAAAQgKACgKAGQgCAWgIAVIAAgBQgHAXgUAOQgNAJgQAFIAAAAQgqAIgpgPQgcgKgWgVIgPgQIAAAAIAAgBIgEgFIgMgQIAAgBQgHgMgFgNIAAAAQgMgcgBgiQABgJADgHQADgHAGgDIABgBQAGgEAHgBIAAgBIAfgGQAngHAlADIABAAIALABQAOABAPAFIAAAAQASAHASAMIAAAAQAVAPANAaQAFAKADAKQAPgKAQgBQAMAAANAFIAIAGQADgJAEgGIAAAAIANgTQAHgKAKgIIAOgJQAqgZAxgBQAUgBATAAQAaABAcAEIAkAGIAAAAQAJACAIAEIAAABQAHADAEAGIAAAAIAAABQAFAHAAAJQAAAjgPAcQgHAMgJANQgIALgLALQghAiguANIAAAAQgfAKghAAIgDAAgAAogcIAAABQgMASACAPIAAAAQACATAIARQAHAQASALQAKAFAJAEIAIABQAQADAPAAQAbAAAagIIAAAAQAlgLAdgcIAQgSQAHgJAFgJQAMgYAAgcQAAgFgCgEIAAAAIgBAAQgBgEgDgBIAAAAIgBAAQgGgDgHgCIgegEIgBgBIAAAAQgagEgZAAIgeAAQgpACgkATIAAAAQgUAMgMAUgAkWhDIAAAAQgDABgBADIgBAAQgCAFAAAFQAAAcAKAYIABAAQAEAJAGAKIAGAJIABAAIAGAJIAAAAIALALIAAAAQATATAYAIIAAAAQAhAMAkgHIgBABQAMgEAKgHIAAAAQAPgKAGgRIAAAAQAGgRACgTQACgPgLgTQgJgUgRgMQgQgLgSgFIAAAAQgOgEgOgBIgBAAQghgCghAGIgaAFIAAAAIgKAFg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.1, -10.6, 62.2, 21.3);
    p.frameBounds = [rect];


    (lib.marinett_mask6_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask6_shadow();
        this.instance.setTransform(-31.6, -14.7, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.6, -14.7, 64, 30.4);
    p.frameBounds = [rect];


    (lib.marinett_mask6_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("ACXCRIAAAAQgagCgWgKQgQgIgPgMIgLgKQglglgFgzQgHgJgKAAQgIAAgNAKQgEAygmAlQgqArg9AAQgXAAgUgGQgMgEgLgFQgTgKgRgQIgCgCQgMgMgJgOQgVgiAAgrQAAg7AqgrQArgrA9AAIAOABQAUABATAIQASAGAQANQAIAGAIAIIABABIABAAIAAABQAHAHAGAHQAFAIAFAJQANAWAEAaQAMgJAJAAQAKAAAJAIQAGguAigiQArgrA9AAQAZAAAVAHQAUAGARANIAAAAQAKAHAKAKIAAgBQAHAGAEAHIADAEQAHAIAFAKIAAgBIADAIIAAAAQAOAcAAAhQAAA8grArQgkAlgyAFIAAAAIgRABIgOgBgACkBvIACAAQAQAAANgDQAcgIAVgVQAgggAAguIAAgBQAAgOgEgPIAAAAQgFgRgJgNIAAAAQgGgIgIgIIAAAAQgHgHgIgGQgQgLgSgFQgOgDgPAAQguAAgfAgQghAfAAAsIAAABQAAAuAhAgIADADQANAMAPAIIAAAAQAUAJAYAAgAjxhLQggAfAAAsIAAABQAAAZAJAVQAHAPANANIAAAAIAAABIADACIAAABQANANAPAIQALAFAMADQAMADAPAAQAuAAAgggQAgggAAguIAAgBQAAgogcgeIAAAAIAAAAIgEgFIgMgLQgPgLgRgFQgQgFgSAAIgEAAQgrABgfAfg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.2, -14.6, 62.4, 29.3);
    p.frameBounds = [rect];


    (lib.marinett_mask5_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask5_shadow();
        this.instance.setTransform(-31.7, -15.5, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.7, -15.5, 64, 32.2);
    p.frameBounds = [rect];


    (lib.marinett_mask5_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("ABeCQQgNgMAAgSQAAgIADgHQglgBgSgFQgdgJgUgKQgWgLgIgGIgPgLQgGgEgGAFIAAAAIglAbQgaATgeAAQADAIAAALQAAARgMANQgMAMgSAAQgRAAgNgMQgMgNAAgRQgBgFACgFIgBAAIABgEIglAAIABgGIADgQIAAgBIAAgBIABgbQAAgWgFgdQgFghgLgqIAAgBIgFgXIgDgGIAHAAIAVgBQAYABAXAEQARADAQAGQAOAFANAHIAAABQAVALAWAHQAVAGAXABQAOABAMgCQAMgCALgFIAAAAQAPgGAOgIQAcgUAdgRIAAAAQAcgPAfgKIATgGIAAAAQAMgDALgCQAmgGAmAIQAsAKAkAfIAGAGIADACIgBADIgCAIIgCAHIAAABIgCAFQgkBjhsBHQAFAKABAMQAAASgNAMQgMANgSAAQgRAAgNgNg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.2, -15.7, 62.4, 31.5);
    p.frameBounds = [rect];


    (lib.marinett_mask4_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask4_shadow();
        this.instance.setTransform(-32.1, -14, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32.1, -14, 65.9, 29.3);
    p.frameBounds = [rect];


    (lib.marinett_mask4_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AA1CJIgVgEIAAAAQgUgEgTgHQg7gUgWAAQgVAAgfAOIAAAAQggAQgZAEIgZACQgQABgTgBIgVgCQgTgEgCgKIAAgBIAAAAIABggIABgRIAAAAIAAgIQAAgqgKgpIAAAAIgBgGIgBgEIgFgVIgDgQIgBgDIACgCQALgMATgKIAFgDIAAgBIAAAAQAlgTAkgCIAKgBQARAAAYAEQAZAEATAAQArAAApgMQAogNAvgEIAEgBIAAAAQAogCBDAaIABAAIABABQAKAEArAbQArAbAYAhQAYAfADAPIABACIgCACQggAjgdAZQgiAcgdANQgkAQg0AAIgBAAIgBAAQgYAAgagFg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.9, -14.2, 63.9, 28.5);
    p.frameBounds = [rect];


    (lib.marinett_mask3_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask3_shadow();
        this.instance.setTransform(-31.8, -14.9, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.8, -14.9, 64, 31.1);
    p.frameBounds = [rect];


    (lib.marinett_mask3_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AAACDQg7gTgVgBQgWABgeAOIAAAAQghAQgUgBQgcAAghgJIgqgMIgEgBIAAgEQACgYAAgRQAAgZgDgZQgDgVgFgTIAAAAQgDgPgGgRIAAgBIAAgBQAJggAZgXQAkgiArACQArADAhAdQAfAaAVAIIgBAAQASAGAngkQAogpA2gHQA3gIA8AmQBNAvAlBeIABACIgBADQgQAYgPATIAAABIgBAAQgmAvgoARQgkAQg1AAIAAAAQg1AAg6gUg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.1, -15.2, 62.3, 30.4);
    p.frameBounds = [rect];


    (lib.marinett_mask2_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask2_shadow();
        this.instance.setTransform(-47.2, -32.9, 0.365, 0.365);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-47.2, -32.9, 96, 66.1);
    p.frameBounds = [rect];


    (lib.marinett_mask2_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("ABME7QAMgQACgGQAEgMAAgEQAAgmgigWIAAAAIgDgCIgBAAQgcgRggACIAAAAIgCAAQgfABgsgPQgtgSgHAAQgGAAgKAKIAAAAIgSAOIAAAAIAAABQgMAEgPADIgBAAIgbADQgSABgPALIAAABIgDABIAAAAQgKAIgIANQgSAbAeAfIAKAKIgCADIgNgEQgxgRgQgWQgNgRgCgZQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAgLIAHhIIACgNIgBgEIAAgCQgFgTgLgTIABABQgIgMgKgFIAAgBIgFgDIAAAAIgBgBQgcgVgpgzIAAABQgwg7AyiYIAEgOIACAAIADAPQAJAoACAEIAAABQAIAgAWAqQAWArAUAXIgBgSQAAgcANgQIAGgJIADALQAJAoALALQAKAJAHgBQAKgDASgEIAAABQASgEAIgBQAYAAAhANQAfAMAdAFQALACAQgCIAAAAIALgDQARgEAWgLIAOgGQAbgMATgGIAAAAQAKgDAKgCQAfgFAxALIAAAAIABAAQAmgeABgkIABgOIADgBIAGANIAJAVQAEALAAAMQAAAPgCARQAQgVASgOQAQgOBBgkQA2gdAbgdQAmgsAIhEIACgOIAFAAIADAOQAPBTAEARQADARAAANQAABGgmBBQgSAegXAXQAeAEBAAZIANAFIAAACIgOACQgSAEgkAhQgmAkgVANQgWAMgWAHQgWAFgdAAIgCAAIgNgBIgRgCQgBAQgDAOQgJApgVAgIgHAJIAAAAQgjArg+AQIgOADg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-47.4, -32.6, 94.9, 65.3);
    p.frameBounds = [rect];


    (lib.marinett_mask1_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.marinett_mask1_shadow();
        this.instance.setTransform(-32.4, -13.7, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32.4, -13.7, 66.3, 28.9);
    p.frameBounds = [rect];


    (lib.marinett_mask1_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("ACdCNQgsAAhFgdQhAgdgbAAQgQAAgVAGIgDABIAAAAQgQAFgSAHIAAAAQgwATggAAQgTAAgRgEIgCgBIAAAAQgbgHgWgRIgBgBIAAgBIABABIgDgFQABgJAAgQIAAgOQgBgtgJgkIgThJIgBgEIADgCIAigOIgBAAQAagLAhgCQAKAAANAEQAcAJAnAhQAUARAUAFIADABIAJABIAAAAQAYABAVgRQAigaAjgLQAkgMAkAAQAuAAAqASQATAJATANIAAAAQA5AnAiBDIABACIgBACQgVA0gmAgIAAAAIgLAIQgKAIgMAGQgjAUgkAAIAAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32.1, -14.1, 64.4, 28.3);
    p.frameBounds = [rect];


    (lib.marinett_lips_8_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_lips_8();
        this.instance.setTransform(-8.4, -4.4, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-8.4, -4.4, 16.3, 8.5);
    p.frameBounds = [rect];


    (lib.marinett_lips_7_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_lips_7();
        this.instance.setTransform(-6.3, -4.9, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-6.3, -4.9, 13, 9.6);
    p.frameBounds = [rect];


    (lib.marinett_lips_6_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_lips_6();
        this.instance.setTransform(-11.4, -3.7, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-11.4, -3.7, 23.3, 7.8);
    p.frameBounds = [rect];


    (lib.marinett_lips_5_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_lips_5();
        this.instance.setTransform(-11.5, -3.8, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-11.5, -3.8, 23.3, 7.8);
    p.frameBounds = [rect];


    (lib.marinett_lips_4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_lips_4();
        this.instance.setTransform(-11.7, -3.7, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-11.7, -3.7, 23.3, 7.8);
    p.frameBounds = [rect];


    (lib.marinett_lips_3_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_lips_3();
        this.instance.setTransform(-11.5, -5.2, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-11.5, -5.2, 23.4, 10.5);
    p.frameBounds = [rect];


    (lib.marinett_lips_2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_lips_2();
        this.instance.setTransform(-11.6, -5.1, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-11.6, -5.1, 23.4, 10.5);
    p.frameBounds = [rect];


    (lib.marinett_lips_1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_lips_1();
        this.instance.setTransform(-12, -5.6, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-12, -5.6, 24.1, 10.8);
    p.frameBounds = [rect];


    (lib.marinett_head_accessory8_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_head_accessory8();
        this.instance.setTransform(-47.9, -21.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-47.9, -21.5, 97.9, 43.9);
    p.frameBounds = [rect];


    (lib.marinett_head_accessory2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_head_accessory2();
        this.instance.setTransform(-45.6, -30.8, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45.6, -30.8, 92.5, 63.3);
    p.frameBounds = [rect];


    (lib.marinett_head_accessory1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_head_accessory1();
        this.instance.setTransform(-39.4, -35.9, 0.37, 0.37);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-39.4, -35.9, 80.7, 75.5);
    p.frameBounds = [rect];


    (lib.marinett_hand_accessory8_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hand_accessory8();
        this.instance.setTransform(-46.3, -80.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46.3, -80.5, 93.6, 160.6);
    p.frameBounds = [rect];


    (lib.marinett_hand_accessory7_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hand_accessory7();
        this.instance.setTransform(-51.8, -13.7, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-51.8, -13.7, 104.4, 26.7);
    p.frameBounds = [rect];


    (lib.marinett_hand_accessory5_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hand_accessory5();
        this.instance.setTransform(-43.9, -80.9, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-43.9, -80.9, 87.1, 164.9);
    p.frameBounds = [rect];


    (lib.marinett_hand_accessory3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.marinett_hand_accessory_3();
        this.instance.setTransform(10.5, -118.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(10.5, -118.1, 80.6, 236.9);
    p.frameBounds = [rect];


    (lib.marinett_hair8_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AFKLZQAFgvgugcQgcgRgJgIQgRgSgBgaQABgbAGgMQAFgKAPgOIgHgHQgNgOgCgNIABAAQgDgJACgJIgPgMIAAgBQgugsAAgqQgBgrAMgSQAFgKATgPQgSgIgMgMIAAABQgpgnABg0QABgyAsgjIgEgIQhjBuhVAPQhOANhDhDQACALAAALQACA0gpAnIAAgBQgMAMgRAIQASAPAFAKQAMASgBArQAAAqguAsIAAABIgPAMQAFAWgTAXIgFABIAAABIAEgCIgHAHQAQAOAEAKQAGAMABAbQgBAagRASQgJAIgcARQguAcAFAvIABANIgJgIIgHgHIgBgBIgDgBIAAgBQgqgmgLgZQgHgUgBgeQAAg5AnglQgGgGgCgHQgIgQACgaIgIgKQgRgbAAgXQAAgYAHgMQAEgHAOgQIgXgaQgWgZgCglQgCglARgkQASgmAhgOIgRgQQgcgYgKgPQgNgWAAgeQgBgOAFgJQhJhvABhGQAAg+AUhPIACgIQANg1AnhDIgBAAQALgSANgUIAggwIAAgBQAIgLAcgfQAdgiBEg0QBUhBAfgDQAggEAYAGIABAAQAUAFAHAHIAFgEQA2gpCCAzQB9AxBTBqIAQAVIAPAWIgBAAIATAbQAlA7AVAyIAAAAQAKAaAGAXQAWBUAABBQABBGhJBvQAFAJgBAOQAAAegNAWQgKAPgbAYIgSAQQAhAOASAmQARAkgCAlQgCAlgVAZIgYAaQAOAQAEAHQAHAMAAAYQgBAXgQAbIgIAKQABAXgFAQQgEAJgFAHQAmAlAAA5QAAAegIAUQgLAZgrAnIAAAAIgBABIgBAAIgBABIgHAHIgJAIgAlTLbIAEgCIgEgEIAAAGgAlNLYIADgCIgEgDIABAFgAklIUIABAAIAAgBIgBABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50.2, -74.2, 100.5, 148.5);
    p.frameBounds = [rect];


    (lib.marinett_hair7_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("ABTNHQiUgGhfiNQgTgdguhXQgig/gXgUQgcgZhCgeQhdgqgTgKIAAgBQiIhLABiKQgBglAHgiIABgHIAAAAIAAAAIALgjIAAAAIAAgCIAAgBIAKgcQASgoAqg5QAggrARgZIAAABIAKgUQARgeAGggQAEgXAAgWIAAgVQgDghgOghQgSguAAgXQABgnAXgcIAAAAQATgXAagEQgGgRgBgXQgCgMABguQgBiBB7g6QAsgVA3gKQA0gKA9ABQBTgBBoA5QBJAnBGA6IAnAjIAAAAIAIAHQBbBXA4BcIAIAOIAAAAQAxBWACBFIAAAAIAAAHQABAOgIAzQgHAygBAUQAAApAYAfQAaAgAoAAQAUABAQgMIAAAAIAHgFIAGgFIACAHQAFAOgBAGQABAoglAuQgoA0gsAAIgDAAIACABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCgDQAZAjANAfQAWAwABA3QAAAQgMAwIAAABQgKAtgEAHIgHAMIgDgBIABgOQADghgvgvQgVgVgbgUIAQAcQAVAmAAAkQAAATgCATQgIBhgyA9QgpAxhaAnQhrAvgVAPQgzAmgFBOIAAABIAAAAIgBABIAAADIgBAHg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-62.5, -84, 125, 168);
    p.frameBounds = [rect];


    (lib.marinett_hair6_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AGdR3QgpAAgkgcQglgeAAgpQAAgnAnghQA4gwAHgJQARgYACgpQgDg4AAglQAAgUAXg/IgdAUQgaAYAAAdQAAAFAEATQAFAVABAQQAABghYBFIg5AuQgZAZgBAZQABADAFAHIABABIAAABIABABIABAAIABADIAFAIIgSAAIgBAAQg3gbgWgVQgPgQgFgRQgMAQgdATQgtAegkgwIgDgHIAHgBQASgBAJgGQAGgGgBgJIAAAAIgCgJQgHgUgWgVQgbgZgZgBQgcAAgMALQgHAGgFAOQAGAGAIADIADACIAFADIgEAFIgBABIAAAEIgDAAIgJAKQgaAZgoAAQgzAAgegvQgHgKgOhHIAAgBQgdBVg1gBQglAAgugSQgrgRgTAAIAAAAQgIAAgJAGQAFANgBAOIAAAAQgGAlglAAQgYAAgWgVQgVgWAAgbQAAgPAEgMIABgDQAGgQANgNIABAAQAIgIAKgGIAAAAQATgLAHgHQALgMAAgWQAAgZgEgLIAAAAIgBgCIgTAKQgGADgMACIgBAAQgPADgZACIgBAAIgLgBQgPgBgMABQgJADgEAMIAAAAIABABIAAADIAFAMIAEADQAwAngBAdQABAZgRAdQgQAcgVALIgBAAQgVAdgmAAQgUAAgOgKIgGAAQgSAAgOgOQgPgOAAgSQAAgMAKgNIABgBIAFgGQACgPAEgFQAGgJARgEIAOgDIABACIgKAKQgGAGgBAEQAAAPAPALIAAgBQAOAKAMAAQAIAAAFgCIABgBIAEgDIAAAAQAGgHAAgLQAAgUgOgMIAAgBQgGgGgZgNQgygbAAgyQAAgcAJgSQAPgeAsgVIAZgMQgNgOgOglQgVg0AAgwQAAgcAGgUIAAAAIAIgUIgbgPQhEgogdgbQgtgrAAgzQAAg0AfguQAOgWA1g2IAXgZIgNgZIAAAAQgfhBABgtQgBgmAmhNIAHgOQgMgdAAgTQAAg1Aeg7QAbg3A7gTQgSgMgLgUQgOgYgBgeQAAgyAqgsIABAAQAzguAWgdQAVgaAVhDQAahQA/hfQA/hfBMguQBMguAmgMQAlgMBTAAQArAABEAMIBxAXQA8ALAsAVIBMAkQAkARAgA8QAfA4A0ASIgBAAQA4ATAiAlQAiAmASAsQASAugSAcQgPAZABAOQAAANAIANIAEADQASAKARAPIAAAAIACABIAAAAIABABQBPBEAABWQAAAhgQAtIADABQAbAfAVASIABACIAQANIABAAIABABIAEACIAAAAIAAAAQAfAVAKAJIgCAAQAqAYASAQQAhAeAAAnQAAAsguBAIAAAAIgIAKQAKAnAcBDQAaA7AAAwQAAArg7BTQg4BOAAAVQAAAOAKAIIAAAAIAAABIACABIAGADQALAFAPAAQAGgBAGgFIABAAQAIgIAAgLQAAgFgJgIIAAAAIAAAAQgIgHgRAKIgNAHIgDgFIAKgKQAkgjASANQATAMAAAVQgBAWgKAPIgBABQABAfgXAbQgNAPgPAHIAAAAQgMAGgOAAQgWAAgLgGIAAAAIAAAAIgIgGQAFANAHAMIAAAAQAYAtAAApQAABVhuAcQhDARgGADIAAAAIgMAFIADAEQAFAEAJAAIAVgDQATgEAFAAQAQAAAKAIQAMAKAAATQAAAKgGAKIgEAFQAXAOgBAYQABAjgsAAQgYAAgJgJIgFgFIAHgDQAGgDAIAAIADgCIACgBQAAgDgLgEIAAAAIgKgEIgTAEQgPABgNAAQgIAjg4AjIAAAAIgIAEIgWAMQgVAKgyAVQgkAVgBAmQAAALAHAJIAAAAQAHAIAKAAQAFAAAGgFQAIgEAAgFQAAgEgEgHQgEgHgEgBQgCABgEAIIgFAOIgEgBIgBgOQgBgRAFgIQAGgKANAAQAXAAANARIABAAQANAQAAAbQAAAXgZASQgVAQgRAAIgBAAgAKqNHIAEACQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBAAIgEACgAKKMvQgFADAAAGIABABIANACIAEgEQAEgGAAgDIgBgDIgDAAIgBAAQgHAAgFAEgApAMHIABAAIgBgCgANAHMIACAAIABgEIgNgBIAKAFgApQGNIACACIAAgDgAjKwiIABgBIgBAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90.7, -114.3, 181.5, 228.8);
    p.frameBounds = [rect];


    (lib.marinett_hair5_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AmAQyQBWiLAhh+IAOg7QAUhbgBhHIAAgCQABgXgDgeQgIAcgLAdQggBRgyBQIgKAOQg/BdhYBNIg1AqQgVARgYAOIgFADIgLAJIgCgDIAGgMIACgEQAphhAPhCQAHgcAFgdQgoBAhAApIgNAHIgCgCIAIgMQAeg1AOhAQAHgfADgmQAEgrgBg1IAAglQgEj6g4luQg8mNAAiJIAAgWQACg+AOg5IAAAAIAEgSQAVhOAjgnQAUhSBghBQBqhHBvAAQCHAABpBCQBeA8AoBKIAAAAIAHAOQAZA3AjBdIAiBkQA4CmAqBIQAqBJBdCIIDGEgIAAAAQAvBEAaBKQAcBMAEBSIABAjQABAzgMBMIgIAmIgCAPIgEAOIgGgBIAAgOIAAgBIAAgQQAAhZgMhNQgNhVgZhGIgMgeQgrhhhih6QAPAlAVA9QAcBOAICDIADA8QADBKgBA6QgCBLgGAuQgMBRgtCIIgEAOIgHgBIABgOQADgrAAhQQAAhXgLhSQgLhegYhVQgpiOhOh5QAwBrAOBAQAKAyADBCIABAsQAABEgRBgQgIApgKAvIAAAAQggCDghBGIgGAMIgGgBIACgOQAGg5AAgQQAAhigLhRQgKhIgRg6IADAbQAGA5ABAVIgBAhQgDBIgOA1QgVBNgyBRIgIAMIgDgBIABgOIAFgjQABgRAAhKQAAg+gGhDQgFgwgHgyQgHgugIgpQgJgmgKghQgEAogGAqQgQBhgkBmQgQArgTAsQg0B9gpA9IgIAMIgEgCIADgOQAQhXAAhkIgBhFQgBgpgDgpQgLAqgPAsQgLAigPAkQgoBmhBBFIgBAAQhCBFhSAZIgNAEg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-71.2, -108.5, 142.4, 217.2);
    p.frameBounds = [rect];


    (lib.marinett_hair4_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AlgCzIAAgBQgLgGgJgIIgCgBIgLgLIgLgPQgVgJAAglIgDgSQgLgUAFgKIAAAAIADgJQABg5AwgtIABAAQAygwBKAAIAFABIADABIAAgBIAAABIABAAIABAAIACABQAhARAVAYQAjARgBAzQAEAQAAAVIAAAAQAMAigVAeQgIAYgNAUQgKAQgMALIAAAAQggAcgvAAQgtAAgfgRgAD6CZQgyABgugnQgwgqAAgpQAAgoAKgUIATgnQAKgVAIgDIABgBIABgBQAFgJANgFIAAgBIAAAAIAKgCIACAAQAGgNASgJIAFgCQAGgRAUgKIABAAIAHgCIABgDQASgdAqAAQAcAAAVANIAAAAQAbARgBAeIAAABQAtAiAAAuIAAAAQgBAQgEAMIgBAAIAAAAQgFAMgKAGQAEANAAARQAAAegRAXQgRAXgaADQgGANgNAJIAAAAQgMAJgbAIIgDAAIgBABQgMANgaAAIgCgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-42.9, -19.6, 85.9, 39.3);
    p.frameBounds = [rect];


    (lib.marinett_hair3_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AAsQzQgqAAgdgYQglgcAAgvQAAhdBHgkIAAAAIAAgBQAjgOANgGIAAAAQASgIABgMQAAgIgDgGQgRAJgfAKQguAQgfAAQhLAAg9guQg6gsgJhDQgCgNAAgOQAAhOBNg6QA9guBWgRQAUgEASgDIA7gCQAWgMARgQIAAABQAMgNAKgOQATgdACgfIAAgFQAAgHgGgPIgGgTIgCAAQgiAAhIAPQhHAPg+gGQhAgGgZg4QgYg3AAhQQAAhFAVgwIAAAAIAKgWIAJgQQARgaBChLIgGgDIgBAAQgzgThDhRQhDhRgrhsQgrhrgPhQQgPhNAAhSQAAgwARgsQAGgRAIgNIAAAAIABgBIAyg7IABAAIAXgUQAtglAlgRQAugXBLgCQBJgDB8BRICVBmIAHgBIACAIIADAEIABABIAFAGIAAABIAtA0QAaAdAOAZQAWAnAKAcQALAhAAAjQAAAogQAiQgIARgMANIAAABIgEAEIAAAAIAAAAIgRAPQgGAEgTAIQgJARgBAMIAAAAIAAABIgBABQABAQAiAbIAAAAQAnAggBAVQAAAUgMAQIABAAQgIAMgOAJIAHAKQAQAVARA9IAAACIAAgBIAAABIAAABIAAACIABAAIAAAAIAAADIACADIAAABIAAAAIAHAQIAAAAIAAABIACAGIAAgBQANAjABAYIAAABQABAfgBAQIAAAAQgBAMgJAkIgNA2IAAgBQgFASgJARQgMAWgOAOIgWAWQAQAIAOALQASAPALAUIAAAAQASAgAAAtQAAAwgWA9QgTA0gmAtIAAABIgDADIAAAAIgCACIAAABIgBAAIgBACIAAAAIAAABIgOANIAAABQgpAtgrAEIgzAEQgMAHgPAHQgXAJhFAQQgVAFgQAFIgBADIAAAGIAAAAIgBATQAAAhAaAQQAPAJAoAKIAAAAIAFABIAAAAIABAAQAtALASAMIAAABQAcATACAmIAFACQAyAUAAA3QAAAUgJAOIAHAPIAAAAQAMAbAAAbQAAAxgeAoQgeAogfADQgdAEgdgPQgcATgeAAIAAAAgAB8P/IgBAAIACACIABgBIABgCgACIPcIAAAJIAAAFIAAABIAAAHQAMgGAOgVQATgdAAgdQAAgMgFgOIAAgBIAAgBIgBAAIgZAGQgsAIgPAIQgYAMgBAYQAAATAKABQAUAAAAgTQAAgHgBgEIgEgKIAKADQATAHAJANIgBAAQAIALAAATg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-40.8, -107.5, 81.6, 215);
    p.frameBounds = [rect];


    (lib.marinett_hair2_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("Ag1HyQgYgQgVhEIgIgdQglBNg7gBQgNAAgCgDIgDgDIACgEQANgVAPgnQgxA4hCABQgRAAgPgGQgKgEgOgHQgWAKgUgBQgPAAgOgEIgCgBQgRAGgcgBIgPAAIgBgHIAPgCQATgDAOghIABgBQgcAVggAAIgFAAIgBAAIgDgBIgPAAIALgJIAFgDIAAAAQAZgWAPgyIAAAAQAMgsAFhGQgYAOgWgFIgJgBIAHgIQAKgLAJgLQgVANgVAAQgiAAgEgKIgBgDIADgDQAagTAWhLQAOg7AIgeIgMAAQgKAAgOgDIgCgDQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAIABgBIgBgCQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAdgpAahfQAhh+AyhLQArhCBogwQA2gYAygLQAWgFAVgCIADACIAAgBIACgBIAEgBIABAAIAEAAIAAAAIACAAIACAAIAEAAIAGgBIADAAQB/AACJBZQBwBGApBEIAtBDQAgAwAMAiQALAcAhAoQAhAnApAJIAMACIgLAHIgYANQgNAKgbgHQgKgCgIgFQAKATAMAFIAKAEIgJAFQgIAFgLAAIgDAAIgLAJIgBAAQgKAFgHAAIgBAAQAKAWAMAUQAfA1AeAEIAKACIgIAHQgHAHgMAFQgSAGgPAAIgCAAIAOALIAKAHIgMACIgTABIgNgBIgQAGIgBAAQgPAEgeAAQgBAaAOAOIAQAQIAHAIIgKABQgbADgQgDIgLgDQAcAeAqALIANAEIAAABIgNAFQgWAGgKAFQgFADgJACIgKAHIgfAVIAAAAQgLAHgUABQgSABgagLIgLgFIAHAHQAYAZAcAAIAPABIAAAAIgMAIQgdAUgUAGQgXAGgcgOIgZgOQAOAWAQALIAFAEIAOAFIgBAEIgYAAQgYAAgTgGQgMgEgJgEIABABIAIAKIgMgCQgsgEgrhcQAAARgEAiQgFAjAAAKIACARIACAOIgKgJIg2guIAAABQgLgNgIgMIgcBbIgCAIg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-56.9, -50.3, 113.8, 100.6);
    p.frameBounds = [rect];


    (lib.marinett_hair1_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AmSFuIgDgPIgDgWQgHgXgZgZQgLgKgMgKQgngGgngdQg5gqgNg2QgNg1AKg1QAKgzANglIAEgOQAKgfAZgbQAignArgLQBigaBQA3QBEAvAUBLQAPA1gZBkQgXBhAOA3QAIAeARAOIAAAAQAHAGAKADIANAGIAAABIgOADIgJACQg/ARgsgIQgogGgsgiIgDAXQAAAIgFARIgEAOgAE6BBQg3gBgwgYQgwgYgigSIgLgHQgcgUgUgeQgcgrAAgtQAAhmBKg+QA/g2BOAAQA4ABBbAxQBYAwA4AAQAgAAARgMIAAAAQAHgGAGgIIAJgLIAAAAIAAAOIAAAJQAABCgSAoQgRAlgtAiIAXAIQAHADAPAJIAMAHIgBAEIgOgCIgXgCQgXAAgeASQgOAIgMAJQgQAkgmAdQg2Aqg3AAIgCAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-61.9, -36.6, 124, 73.2);
    p.frameBounds = [rect];


    (lib.marinett_hair_8_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_8_shadow();
        this.instance.setTransform(-49.6, -73.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-49.6, -73.6, 100.8, 148.3);
    p.frameBounds = [rect];


    (lib.marinett_hair_7_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_7_shadow();
        this.instance.setTransform(-61.7, -83.2, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-61.7, -83.2, 125.3, 167.8);
    p.frameBounds = [rect];


    (lib.marinett_hair_6_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_6_shadow();
        this.instance.setTransform(-89.7, -114.3, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89.7, -114.3, 181.5, 229);
    p.frameBounds = [rect];


    (lib.marinett_hair_5_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_5_shadow();
        this.instance.setTransform(-70.8, -109, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-70.8, -109, 142.6, 217.5);
    p.frameBounds = [rect];


    (lib.marinett_hair_4_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_4_shadow();
        this.instance.setTransform(-42.8, -19, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-42.8, -19, 86.4, 39.6);
    p.frameBounds = [rect];


    (lib.marinett_hair_3_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_3_shadow();
        this.instance.setTransform(-40.3, -107.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-40.3, -107.5, 81.4, 215.3);
    p.frameBounds = [rect];


    (lib.marinett_hair_2_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_2_shadow();
        this.instance.setTransform(-55.4, -49.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-55.4, -49.6, 113.8, 100.8);
    p.frameBounds = [rect];


    (lib.marinett_fringe_8_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_8_shadow();
        this.instance.setTransform(-47.5, -73.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-47.5, -73.1, 96.5, 148.3);
    p.frameBounds = [rect];


    (lib.marinett_fringe_8_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AE1LZIACgHIAAgEQgBgngpgZQgdgRgIgJQgRgRgBgbQABgaAGgNQAEgKAQgNIgHgIQgUgWAFgWIgPgNIAAAAQgugtAAgqQgBgqAMgSQAGgKARgQQgRgIgMgLIAAAAQgpgnACgzQAAgzAsgiQgSgjAAgrQgBhGAmhiQAmhggBgjQAAg+gfgsIgBgBIgug0QA4BWAAAxQAAAmgVAyQgOAigQAVIgGAKIgDgMQgJg4gqgfQgOgKgVgIQgNgFgPgEQhBgQgpgQQg5gXgkg6QgQgbgJgaQgZAkgKAMQgVAZgpAeQgiAagTAjQgSAjACAxQABAyADAeIAHA5IAAAAIAAABIAAAJIgHgEIgCgCIgOgKQhWhAgNg0QgIghAAgzQAAiQBWh1QA0hGBUhAQA1gpAggQQASgJAMgCQAggDAYAGIAAgBQARAEAIAGIAEACIADgCIAAAAIABgBQA3gpCBAzQCJA1BXB7IAAAAQBWB6AVBVQAWBUAABBQAABFhIBwQAEAIAAAPQAAAegNAVQgKAPgcAZIgRAPQAhAOASAnQARAkgCAlQgCAkgVAaIgYAaQAOAPAEAIQAGAMAAAXQAAAXgQAbIgIAKQABAngOAQQAlAlAAA5QAAAegHAUQgLAZgrAnIgBABIgBAAIAAABIAAAAIgIAHIgKAJgAEeigQglBGABBKQgBARADASQAOgTAmgiQAtgsgJgkQgJgjgRgFQgQgGgLgCIgBACgAFZgVIAEAAIAAgBIgEABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-48.2, -74.3, 96.5, 148.6);
    p.frameBounds = [rect];


    (lib.marinett_fringe_7_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_7_shadow();
        this.instance.setTransform(-44.9, -55.7, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-44.9, -55.7, 90, 112.3);
    p.frameBounds = [rect];


    (lib.marinett_fringe_7_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("ACaIvQgjAAgYgHIgDgBIAAAAQgegMghgdIgBAAIgDgEIAAAAIgBgBIABABIACgKIADAAIAFAAIAHAAQA3gGAmhBQAMgVALgdQALggAJgkIgBAAQARhNAAhdIgDhfIgEhnIgBgTIAAgBIgUgIIAAAAIgWgHIAAAAIAAgBIgMgEQgvgRgkgPQgzgWgggTIgJgGQg3gkgRgsIgMALIAAAAIgbAYIgBAAIgEADIghAbIAAAAIgBAAIgDADIAAAAIAAABIgmAdIgJAIIgBABQg2AwgUAtIgFAQIAAAAQgHATAAATIABASQACAJgBAEQAAAFgCACIABABIAUCAIAEAfIABAFIAAAAIACAFIAAAAIAGAbIABABQAOArAeAaIAAABQAbAfAyAqIAHAGIAcAYIACAEQgBARgFAOIgCACIAAADQgMAcgiAKIAAAAIAAAAIgKACIgJAAIgOALQguAig/AAIgRAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgBIgBAAIgKAAIgDgBIgCAAIgIgBIAAAAQgNgDgMgFQgPgFgRgLIgBAAIAAgBIgBAAIgCgBIgEgCQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAIACACIABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAgBQARAAAOgMIACgBIABgCQAQgSAMgmIAAAAQAFgRADgTQAGglAAgqIgBg+QgCglgDgnIgEgsQgGg0gNhOIgCgCQgJgNgHgNQgTgjAAgfIACgVIAAgBQAFgrAZhYIAAgCIAHgXIABgCIAAgDIACgHIAAgBIABgCIAAgBQAXhOANgRQASgXAWgTIAIgHIACgBIACgCQAigdAsgWIBGgkQAkgSANABIABAAIAhABQAWAAAOARQAbgYArAAQAqgBBvA+QA7AhAqAlQAgAbAWAdIAAABIAFAGIAAAAQAvBEATA4IACAGIAHAdIADARIAAAAQAHAqABA5IAAATQAAAIgCAMIgGAfIAAAAIgFAYIgCACIAAADIgDAMIgBACIAAACIgIAlIgDANIgCADIgBACIgNAdIgBADIgBAAIgBABIAAAAIgDABIgBgBIgCgBIgBgBIAAgBIAAgCQADgkgFgWQgJgOgKgIIgBgBIgDgBQgXgPgeAMQAGAaAKATIAtA8IABADIACACIAEAFIAAABIAPAXIABADIACACIAUAiQANAYAGAVIAAAAQAEARAAAOQAAAkgNAVQgLAQgVAOQgHARgJAMQgRAWgzAXIgBAEIgBABIAAAAIgNAVQg8BfhTgBIAAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-44.7, -56, 89.4, 112);
    p.frameBounds = [rect];


    (lib.marinett_fringe_6_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_6_shadow();
        this.instance.setTransform(-51.6, -58.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-51.6, -58.8, 104.4, 118.8);
    p.frameBounds = [rect];


    (lib.marinett_fringe_6_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AFZJIIgTgNIAAAAQgGgEAAgLQAAgVAPgIQARgMAIgIQgLgOgPgWIgKgQIgRgaIgBgCIgBgBQhNg3gCg2IAAgDIgBgDQADgZAHgnIAAgGQABgjARgsIABgCIAAgCIALggIADgLIAAgCQAHghACgPIAAAAIAAgFQAAgNgCgUQgDgUgYg5IgBgBIgOgNIAAAAIgJgJIgBAAQgigfgRgqIgGgTQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgEgPIgEgTQgRgdgTg9QgYhKg1gOQg1gNgaAFIgUAFIAAAAIgFACIgBAAQgFAEgMgHQgKgEgGAAQhqAAgTBzIgDAaIgDAXIgCAsIgBADIAAACQgDA3gKAUIAAAAQgEAIgFAIQgIAMgNALIgIANIgCABIAAABQgBANAAAQQABAaAIAeIAJAaIABAEIAAgBQAaBGAAAfIAAAIIAAAAIABACIAFALIAAABIADADIAAABIAAAAIABABIADAGIABADIANAhQAIAXAAAIQAAA9hRA+QgqAggMALQgKALgFAKQgIAOAAANIABAEIAAACIABAFIAFANIgDACIgKgKIgEgDIgBgBIgCgBIAAgBQgbgYgIgLIgBgCQgMgTAAgbQAAgrAcgiIABAAQAIgLAOgMQAGgOAAgIIAAgFIgEgCQhNgdgGgzQgKgLgFgRIgBgBIgBgGIgGgDIAAgBQgWgPgHgJQgFgFgDgHQgIgRAAgdIAAgOQACgVAGgSQALggAbgYIAAAAIAOgKQACgbAdgPQAcgOAhgFIAAgBQAagxAMhLIATh6QAOg/AcgeQAGgGAHgFQALgQARgKQAQgKASgEQATgWAXgSIAAAAIABgBIAJgGIABgBQASgNATgJIAZgLIgBAAQArgRApgBIADAAQAsAAAoAMQAOADASAIIANgEIAAABQAOgEAaABQAXACAgAGQAtAHAqATQAXAKAXAPIAAAAQA/AmA9CKQAJALAEAnQAEAlgCAiQgCAigTA5QgRA2gOAbIAJAOQAOAIAVAYQAVAWADAcIAAABIAAAOQAAARgDANQgEAPghBBQAAAQgOARIAAABIAAACQgNAngYAUIgBAAIghAYQgFAWAXASIAAAAQAbAWgBAVQARApgBAMQAAAUgBAFIAAABQgBAIgXAdIgIATIAAABIgCABQgEACgCAEIAAAAIgCADIAAABIgBAAIgBADIgBABIAAABQgGAFgHACQgBAXgbABQgSABgBAIQAAAFACACIAIANIgDADgAk/gkIAAAAIADgBgABZnjIAAgBIgIAAIAIABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-52.1, -59.2, 104.2, 118.5);
    p.frameBounds = [rect];


    (lib.marinett_fringe_5_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_5_shadow();
        this.instance.setTransform(-70, -84, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-70, -84, 140.4, 169.9);
    p.frameBounds = [rect];


    (lib.marinett_fringe_5_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AKdNRIAAgOIAAgBIABgyIAAgBIABg4QABhlg0h3Qg0h4hlh/IAAAAIgXgcIgBAAIhZhuQhXhrhGhPIhIhUQAjAxAfAyQA2BRAuBYIANAWIAAABQAfA8AaBBIAQApQAkBiAXBmQAOA9AIBBIACAOIgHABIgEgNQgSgtgOgxQgfhkgphjIgZg7IAAAAQgeg+gjg9IgBAAIgEgJIAAAAQg0hWg5hOQg5hQg9hLIgBAAQhChUg8hZQghgxgbgyIgohCQgbgrgfgoIgFAGQgNAWgIgBQgCAAgKgHIgBAAIgFgFIgBAAIAAgBIAAAAIgBAEIgOAPIgEAFIgFgGIgFgFIgBgBIgFgDIgBgBIAAgBIgBABQgGAEgNADQgGADgHgEIAEALQALAcAcA8IAFALIA7B+QAGAUALAYQAhAcAsAhQCQBuBIBTQBMBSAsBbIAAABIAGAMIgHAEIgIgMQg7hbhdhYQhBhBiEhnIgXgRQAPAbASAfQAQAaBgCTQA2BUAlBpQAcBMAUBZQAUBZAMBlIACAPIgKABIgCgOIAAgBQgLhSglhnQgSg0gWg4IgZg5QhajGhliYQgxhLgkg/QgvglghgeIAAAAQgvgrgdgoQgjgugJgqIABABQgDgJgBgKIgMAaIAAAAQgZAzgLAuIgBADQgYBkABC7QAAB4AKBMIABAGQADAdAGAfIAlCfQAaBzAQBeIAKBTIAAABIgBADIgEABIAAAAIgDAAIgCgDIAAgBQgHglgJgrQgdiCg1i8Qh7msAAiGQABggADgdQADgiAGgfIAIggQAVhNAigmQAUhQBehAQBohHBuAAQCEAABoBCQASALAQANQBHA2AfA+IADAGIAAAAQAlBPA3CkQA3CkAqBHQApBJBcCDIAZAmIAAAAIBRB1IAAAAQArBAAtBDQBqCYAACxQgBAzgLBKIgKA0IgDAPgAnDoVIABAKIAAABQABAMADAOIAAACQAIAbAUAeQATAeAfAeIATASQgSglgNghIAAAAIgFgOQgTgwgLgsQgIgXgGgXQgHAIgEAGIAAAAQgLAPAAATg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-70.1, -85.1, 140.2, 170.2);
    p.frameBounds = [rect];


    (lib.marinett_fringe_4_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_4_shadow();
        this.instance.setTransform(-44.2, -50.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-44.2, -50.5, 89.3, 101.5);
    p.frameBounds = [rect];


    (lib.marinett_fringe_4_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("ADXH6IAEgOIAAgBQARguABgJIAAAAQAOg9AAgRQAAgmgKgqQgKAxgZApIAAABQgfAxgWARIgEAFIgEACQAAABAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAIAEgHQAUgfAPgtQAQg6ABg/QgBgugdhSQgQgZgQgXQgYghgZgXQgOgJgRgJIgBAAQhlg5hPg0QhPgyglggQgdgagTgkQgFAtgZA5QgpBfgGATQgGAWgFAkIgIBCIgDBDIAAABQgFAagKATIgGAJIgIAMIgDgBIABgOIABgKQAFgaAAgPQAAgjgQhNQgPhMAAgpQAAgvAFgZIAAgBQAFggAVgoIABgBQBMh7AVAJQAJADAGAGIABgBIABgDIgCgDIAEgCQAKggAZgZIACgCQAkgjA8gYIAAAAQAngQAigJQA/gRAxAHIAAAAQBNAIA9ASIAoAMQAYAHAFAEIAAAAQA8AcAzA0QBVBYARBvQAFAbAAAdQAABNgaBJQgWA+gkAuQgCAYgEATIAAgBQgNA7gOATIgeBNIAAAAQgHAdgMAiIgBAAQgLAbgoBJIgGANg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-44.6, -50.9, 89.3, 101.9);
    p.frameBounds = [rect];


    (lib.marinett_fringe_3_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_3_shadow();
        this.instance.setTransform(-44.4, -35, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-44.4, -35, 90.7, 70.6);
    p.frameBounds = [rect];


    (lib.marinett_fringe_3_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AAJCOQhAhVgyhbIgSgjIAAABIgFgMIAAAAQgcg5gPgqQhLA2hHB9QhKCAAABYQAAAhALAgIAAAAQAMAiASATIAKAKIgCADIgNgFQgsgRgYguQgYgsAAg+QAAgQADgVQgIgeAAgZQAAhoBUhxIAGgRIgBAAQATgyA7gvQAwgnAwgRIAAAAIADgBQAMgLAVgIQAbgLAcAAQAOAAAKACIARgJIAAAAQAMgGANAAQASAAAcAHIAAAAQAcAHAKAHQAWgKBHAVQBMAVBIBZQBHBZAWB0IAAANIABAAIATAIIAAAAQAkAOgCAMIgBAKIAAABIAAAAIgCAFIAAAAIgJAOQAKAIAGAKIAAABQAJARAAAgQAAAHgHAUIAAANIAAABQgCA0gkAzIAAAAQgsBBg6AAIAAAAQiEAAiljRgAhVkRIAAAAIAAAAIAAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45.3, -35.1, 90.7, 70.3);
    p.frameBounds = [rect];


    (lib.marinett_fringe_2_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_2_shadow();
        this.instance.setTransform(-49.9, -39.4, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-49.9, -39.4, 100.8, 78.5);
    p.frameBounds = [rect];


    (lib.marinett_fringe_2_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAABg");
        this.shape.setTransform(34.8, 32.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#071156").s().p("AFRGFIAGgNQAVgnAAguIAAgGIgBgQQgDAQgRAjIgEgCIgBACQgDAYgDAGIAAAAIgHANIgHgDIAFgOQACgGADgWIAAAAIABAAIAAgDIAAAAQACgWgBgYIgGgBQgLAAgLACQABAQADAKIAAABIAAAAIAAABIAEAOIgIADIgFgOIgKgYQgRAMgQAsIgFAOIgEgBIgBgOQAAgigEgQIgEAHIgIAMIgDgBIABgOIADgNIABgGIABgHIAAgBQgag9gPgfIgCAEIgPAZIAAAAIgHANIgHgDIAFgPIABAAQAEgKADgSQAFgYAAgRIAAgDQgLgLgKgNQgkgugFgzQgLASgPASQgfAigZATQgYAUgfANIABgBQgNAHgOAEIgBAAIgJACQgjAHgkABIgygCIgMAAIAIgIIAPgPQhAAogvACIgOABIgBgDIAMgHIABgBQgXAFgRgKQgTAFgIAAIAAAAIgYgEIgBAAIgiAEIgDgBIgJALQgYAZgjAAIgOgCIgJgBIAHgHQASgRAMgfIABgDQAIgXAEgdQAJg0AOggQgUgBgWgKIgIgDIAIgFQAmgaAVgRIAMgLQAFgeAdgpQAXggAZgUQgRgGgSgQQgIgHgIgKQgGgHgFgKIgIgLIADgDIAMAIIAQALQAJAGALgBQAxAABhgnQBkgpBQAAQANAAAqAJIAAAAIAAAAIAJADIgCgFIAAABQgNgcgBgUIgBgPIADgBIAHAOQAUAmBLAeQAoAQATAPQAUAPADAgIAAAAIADAAIAFgCIgBAAQAPgHAJAAQAYAAAuAeQAZARAYAAIAMAAIgJAJIgOALIgOAIQAdAZATAdQAiA+AUAeQATAZAVAOIALAIIgBADIgOgCQgigEgpgaQAUA6AABDQAABegTA2QgLAdgxBQIgBABIgIAOgAgdBwIADgCIAAAAIgDACg");

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50.2, -39.4, 100.6, 78.8);
    p.frameBounds = [rect];


    (lib.marinett_fringe_1_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#071156").s().p("AluIFQgzgggYgyQgYgvAAg7QAAg9Arg9IAng1QAZghAUgrIAGgMIAEAMQAFATACAgQACAggDAgIAAACIgBABIgCADIAAABQgXAjghBHQgaA4AAAYQAAAhALAiQANAnAWARIAMAJIgFAHgAB6IAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgIIgDgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgTgxQgLgfgFghQgFghAOguQAOguATgaIAAABQASgbAwg1QAogtAIgjIgEABIgGgMQgdgzgIglQgIgogCgxIgBg3IAAgYQgdA2hAAjQg3AehpATIgOACIgBgDIAMgIIBKgxQhsAohMATQhcAVgiATQgiAPgWAWQgXAwgDA+IAAAOIgBAAIgIgLQgPgXgLgcQgLgbgJgmQgIgkgBg7QgBg8AnhaQAMgeARgbIgUASQgZAfgHAOIgHANIgIgEIAGgOIABgBQBBidBxhDQBcg4BPgKQBOgKBGABIABAAQA/AKAtANQAtAMAeAKQAeAKA5A4QA8A8ABAbQABARgDAeQAqAKAZBEQAYBDAABQQAACehzBhIgLAKIgBgBIAEgOQAJgkgBggIABgDQgMgKgJgLQgOgSgFgVQgDAZABAeQACAeAGAZIADAOIgEACIgIgMIgOgTIgBgCIgBAAIgWgfQgMBCgXAcQgqAtgLATIAAABQgfAvgLAgQgNAjAAApIADBDIgBADQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBgADsA8IACANIABgLIAAAAIgBgCIgDgKIABAKg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46.6, -52.5, 93.3, 105.1);
    p.frameBounds = [rect];


    (lib.marinett_eyes8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_eyes8_shadow();
        this.instance.setTransform(-27, -5.2, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27, -5.2, 53.3, 10.1);
    p.frameBounds = [rect];


    (lib.marinett_eyes7_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.marinett_eyes7_shadow();
        this.instance.setTransform(-27.2, -8.9, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.2, -8.9, 54.4, 18);
    p.frameBounds = [rect];


    (lib.marinett_eyes7_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0165FE").s().p("ABrApQgOgTAAgaQAAgZAMgSQANgIALgDQAIgCAGAAIAJABQALAAAJADIAEAEQAOAUAAAcQAAAagOATQgPAUgTAAQgUAAgPgUgAivApQgOgTAAgaQAAgZALgSIADgFIAGgHIAMADQAQAGATAPQAOAKAKALIAGAGIAAAEQAAAZgOAUIgDACQgRANgXAEQgOgDgMgQg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-19, -6.1, 38.1, 12.3);
    p.frameBounds = [rect];


    (lib.marinett_eyes6_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinett_eyes6_shadow();
        this.instance.setTransform(-29.5, -7, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.5, -7, 59.4, 14.4);
    p.frameBounds = [rect];


    (lib.marinett_eyes6_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0066FF").s().p("ACQA7QgVgDgQgQQgSgSAAgYQAAgYAPgSIAUgGQAVgGAQgBIAKAAIAJgBIACAAQAHAFAHAGQATATAAAaQAAAYgTASQgPAPgUADIgJABIgIAAgAiiA7QgTgEgOgOQgTgSAAgYQAAgaATgTQAHgHAIgEIABAAQAJAAAKACQASADAaAMIALAGQAHAEAGAFQAEALAAANQAAAYgSASIgJAIIgKADQgVAHgQAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-21.5, -5.9, 43, 11.9);
    p.frameBounds = [rect];


    (lib.marinett_eyes5_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.marinett_eyes5_shadow();
        this.instance.setTransform(-27.3, -6.6, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.3, -6.6, 54.4, 13.3);
    p.frameBounds = [rect];


    (lib.marinett_eyes5_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0065FE").s().p("ABrApQgRgSAAgXQAAgPAJgOQADgGAFgFQASgRAYAAQAYAAARARIAHAIQAKAPAAARQAAAXgRASQgRARgYAAQgYAAgSgRgAi9ApQgRgSAAgXQAAgRAKgPIAHgIQARgRAYAAQAYAAARARQAOAOADASIABAIQAAAXgSASQgRARgYAAQgYAAgRgRg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20.8, -5.8, 41.6, 11.7);
    p.frameBounds = [rect];


    (lib.marinett_eyes4_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinett_eyes4_shadow();
        this.instance.setTransform(-28.6, -7.4, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.6, -7.4, 56.9, 14.4);
    p.frameBounds = [rect];


    (lib.marinett_eyes4_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0066FF").s().p("AilA4QgTgCgOgOQgQgQAAgXQAAgUAQgQQAFgGAHgDQAMgIAPAAQAXABAPAQQAMALADARIABAIQAAAXgQAQQgPAQgXAAIgGAAgACcA1QgUgCgOgPQgQgPAAgVQAAgXAQgQQAGgGAJgFQAKgFAOAAQAXAAAPAQQAKAJAEAMQACAJAAAJQAAAPgIANIgIAIQgPAQgXABIgFAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-21.5, -5.6, 43.2, 11.3);
    p.frameBounds = [rect];


    (lib.marinett_eyes3_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.marinett_eyes3_shadow();
        this.instance.setTransform(-27.5, -5.3, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.5, -5.3, 55.1, 11.1);
    p.frameBounds = [rect];


    (lib.marinett_eyes3_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0066FF").s().p("ABnAsQgQgPgBgXIAAgDQAAgNAHgMQAEgHAGgGQAFgGAHgDIAZgIIAEAAQARAAANAIIAKAJQAJAJAEAKQAEAKAAAJQAAANgEALIgNAIIgCAAQgZAOgfADIgFABIgHAAQgGgEgFgFgAiIAwQgbgBgWgMIgFgDIgHgFIgCgCQgBgHAAgHQAAgLAEgIQADgJAGgHIADgEQAHgGAHgEIALADIAdAIIAcAKIALADIAEAMQACAFAAAIIgBAIQgBANgHALIgMADQgKACgMAAIgIAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20.2, -5.3, 40.3, 10.7);
    p.frameBounds = [rect];


    (lib.marinett_eyes2_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0066FF").s().p("ABrAqQgSgSAAgYQAAgXASgSQARgRAZAAQAYAAASARQARASAAAXQAAAYgRASQgSARgYAAQgZAAgRgRgAi+AqQgRgSAAgYQAAgXARgSQANgNARgCQA+AkAHAlIgBADQgEAMgKAKQgRARgZAAQgYAAgSgRg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20.8, -5.9, 41.8, 11.9);
    p.frameBounds = [rect];


    (lib.marinett_eyes1_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0066FF").s().p("AgpAqQgRgSAAgYQAAgXARgSQASgRAXAAQAYAAASARQARASAAAXQAAAYgRASQgSARgYAAQgXAAgSgRg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-5.9, -5.9, 11.9, 11.9);
    p.frameBounds = [rect];


    (lib.marinett_bottom_base8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AgpJ9QgKAAgcgNQgYgMgDAAQgRAAgdAMQgeANgTAAQgfAAgegVQgcgTgOAAQgGAAgZAHQgbAIgHAAQgbAAgggdQgbgagQAAIgUAHQgWAIgLAAQgXAAgUggQgSgcgVAAQgGAAgSAFQgTAFgHAAQglAAgNghQgOghgZgJIgFgCIACgFQAIgTAKgZIAHgYIgCgDIgCgCIABgCQAShHAahTQBOkGBmiuIAAgBQAAgbgCg7IAAAAQAAgrAHg9IADgaIABgKIAGgxIABgGIAFABQAaAGAcACQAbACAcgCQCagLDJh9IADgCIADACQAQAUAgARIACABIABAAIACABQCYBJCpDAQCqDBCnDwIABACIAAACIgHARIAoA3IAOASIADAFIgFADQgcAMgPAOQgTAPgHAmQgJAwgEAHQgNAWgqABQgmACgMAQQgSAZgQAVQgkApgUAAQgGAAgZgFQgWgFgHAAQgTAAgOANIAAAAQgFAGgQAZQgdAsg1gNQgjgKgYAfQghAnglAAQgGAAgdgFQgcgFgHAAQgbAAghAaIABAAQgiAdgVAAIgBAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75.1, -63.7, 150.4, 127.5);
    p.frameBounds = [rect];


    (lib.marinett_bottom_base7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AkqGmQirgxgggGIgmAAIACgHQBKjwBfigIAAgBQAAgbgCg6IAAgBQAAg0AKhOIABgKIAGgxIABgGIAGACQC7ArESisIADgCIADADQATAVAkASQBOApAuAuQAtAvAnBOQAmBMA+CTQAYA9AfBmIABADIgDADQh2BZiwBLQhCAcg6AUIgBAAQhkAihJAJQgZACgWAAQhVAAhvgeg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-54.1, -45.2, 108.2, 90.5);
    p.frameBounds = [rect];


    (lib.marinett_bottom_base6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AFSKrIgDAAIgBgCIj0n6Qg0hsgMgbIgGAAQgLARgMARQgJAKgJAHIgVAxIAAAAQgUAxgOAcIgiBKQgUAsg5BoIAAAAIgGANIAAABQgyBhgtBWIgCACIgCABQjWAkiailIgBgCIAAgCQAZiDBAjTQBPkFBmiuIAAgCQAAgbgDg6IAAgBQAAgnAGg4IAEgjIACgJIAGgyIABgFIAFABQC7ArESisIADgCIAEADQASAVAlASQAXAMAUANIABAAQAvAeAgAhQAuAuAnBOQAmBMA9CVQA8CVBhGNIAAAAIAtDFIAAACIgCACQh8CNiwAAIgWgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-66.2, -68.4, 132.6, 136.9);
    p.frameBounds = [rect];


    (lib.marinett_bottom_base5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AjQJDIhbgZQjSg8hEAAQgKAAgWADIgBAAIgJACIgIACIADgJIABgDQAZhsAtiUQAKglAMgiIgmARIAEgLQBNjVAyhZIAQgfIATh4QADgaAThIQAShHAFgZIACgFIAFABQA6AOBEgIIAFAAQCSgTC4h0IACgBICFA3QC8BNCgICIACAHIg6gDQAoCHAzDNIAAADIgCACQiOCAiQA3QgfALgfAJQhuAdiEAAQhfAAiVgjg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-62.9, -61.5, 125.8, 123);
    p.frameBounds = [rect];


    (lib.marinett_bottom_base4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AibUoQijgIhhgyQgjgTgSgTIgCgCIAAgCIAShRIgKABQhBAHgWAAQhXAAhGgaQghgNgdgSIAAAAIgNgIQgcgTgegfIgHgGIgCgDIABgCIASg4QipgegMgDIABAAQg1gOgogtIAAAAIgDgDIgCgCIABgDICgltIDCm2QDEm3Azh3QBZjUAqiMQApiLAkjCIAAgFIABgFIAGABQAeAHAiACQAyACA4gMQBMgQBUgoIAAAAQAlgSAogWIA1ggIADgBIACAAQCEAtBfBvQBmB5B4EJQCTFFCBG0QAnB9BREYQAsCaArCKIABACIgBACQgIAPgOAMQgXAVgyATIgbAKIgBAAQhkAhgPAHQgdANgTAQIATBfIABACIgBABQgXAxgpAcIgTALQg8Afh+ACQiWACgqAJQgyAMghAdIAMBoIAAACIgBABQgVAqiPAnQh0AgiCAAIg0gBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110.9, -132.2, 221.8, 264.4);
    p.frameBounds = [rect];


    (lib.marinett_bottom_base3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("Ak2KXQgMgFg8glQg8glgygPQgzgQgmgEQgngDhMgbQhMgdg/hTIgCgCIABgCQAbhLAUgzQAehJAuhiIBTixQAnhSArhRIBeiwIAAAAIBVieIAAgGIAHABQC7ArESirIACgCIADACQAxAeB0BZQB1BbCaDHIAAABQCgDmCJHLIABADIgCACQhIBVhiAiQgcAKgeAGQgdAGhTAHQhEAIgnAKQgmALgkANQgfALgdANIhgArQhnAtiYgBQhgAAh2gpg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-83.8, -70.5, 167.6, 141);
    p.frameBounds = [rect];


    (lib.marinett_bottom_base2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AlKNgIAAAAQhqgMiqiXIgBAAQhXhSgkgeQg6gygaAAIgCAAIg8BpIABAAQgDAGgEADIABAAQgLALgVgFQgogJgWgZIAAgBIgGgGQjBgtAAhUIAAgBIAAgBQBXjiB7j3QD1nrEzj9IAAgFIAGACQAXAFAZACQArADAvgFQBpgPB+hCQApgWAugcIAEgDIACgBIACAAIABAAIABAAIAAABQBoArBQA0QB+BRCMCKQCNCJCtEDQCJDMCOElQAjBKAjBOIACAEIgDACIhHAuQieBlgnASQgkAQglAAQgxAAgYgVIgBAAIAAgBIgFgGIABAAQgDgEgBgFIgdhXQgHAFgGAHQgZAVhEBMQgsAwhsAbQhBAQhYAIQglAHgxAAQhKgBh7gcIgLgCQhtgZgNAAQgpAAgUANIAAABQgFADgDAEIgBAAIgBACQgCADgCAHIgBAAQgFANgFAXQgHAkgSAQQgcAYhEAAIgQAAgAi9LjIAAABIACgCIgCAAIAAABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-117.5, -86.4, 235.2, 172.9);
    p.frameBounds = [rect];


    (lib.marinett_bottom_base1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AoeOIQhagEhHgkQg1gbgTgbIgCgBIABgDIAsh0IAjhiQAwiPAPhmQAHgxAOg/QAah2A0irQBPkIBmiuIAAgCQAAgbgDg6IAAgBQABgzAJhPIACgJIAGgyIABgFIAGABQC7ArERirIAEgDIADAEQASAUAlASQBOApAuAvQAtAuAnBOQAmBNA9CVQA7CQBeF+IAFATQBEEnAeCxIACAJIAAAAQAMBGAKAzIABAEIgDACQhJA4hPAfQgjANgfAHIgDABIgCgDIhzjvIisljIgLAEQiQA7hMAUQhDAQhLABQgwAAg0gGQhMCShCBzQg3BigvBNQg4BXgeAtIgCADg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-77.8, -90.5, 155.7, 181);
    p.frameBounds = [rect];


    (lib.marinett_body_shadow_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_body_shadow();
        this.instance.setTransform(-141, -263.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-141, -263.6, 282.3, 526.3);
    p.frameBounds = [rect];


    (lib.marinett_body_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F7DDCD").s().p("EATQAoxQghgbAAgqQAAgOARhkIAHgnQgOgQgEgKIAAAAQgIgTAAgRQAAgRAKgnIAGgiIgKgYQgLgcgCgLQgDgLABgeIAAAAQABgbgbhdQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgVhbg4iAQg4iChIivQhIiugUjmIAAgEIAAgCQhkjfjLmfQjMmeg1hyIgBgDIgUABIgCAAQgFAMgWAXQgMAMgJAHIABABQABADgBADQgyCclXJuQg4Bmg/BgQg3BUgaAiIgOAgQgJAVgJAJQguDjg4BvQg5Bwh2CLQhgBwhBBnIgbAvQhEB4gPBRIgBABIgBADIgDAEQACAAgCAUQgCAXAMAXQAOAbAAAmQABAphXAXIgCAAQgpAEgZAIQgYAHgLAUQgNAWgOAgIgCADQgWASguARQgtAQg0ADQg2ADgXgJQgcgKAAgWQgCgVArgjQAnggAxgkQAxgkAtgzQAvgzAigdIAAAAQAggcAUg7IAAgCQAvhPAshuIATg0QAjhjAvirQAjh+BQidQBVilBgh5IgBgDQgDgvAWg1IABAAQAhhEAWg1QA9i2AeiXIACgIQA2jpAniUQBIkSB3jEIgDhGIgCgyQAAgpAIhIQgRgDhBgWQhegghzgeQhzgfgBgCIgCAAQgDgBgCgCQgVgZgrgsQgmgmgSgQIAAAAIgUgSQgLgMgCgNQgBgJgHgLQgIgOAAgMQAAgIADgHIAAgCQAJgPAZgPIAMgIIAWgLIANgGIAAAAIARgHQAegNAOAAIAJABIABABQACgQAMACQAGgBAhATIASAMIAAABQAIAGAAAPQAAAJgGAXQgGAVAAAPQAAASAFAVQAEAXAAALIgBANIgDAPIAFAEQAnAXAwABQAwAADhAgQgCgngGgwQgJhCAAhEIABgyQABgaAShiQgOgPgKgfQgLgjAAghQAAgrAXgXQAPgSAngPIAjgOQANgjAlgYIAAAAQAIgFAfgOIAogSIAAgBQAegNAVgNIAQgNIAAAAIAfgeQAYgaAIg4IAAAAIgRgLIgBAAQhhhXg3g0Qg6g3AAhjIAAAAIAFg6QgCgWAAgMQgGgsgOhQQgShWAAgaQgBipCihkQA9gmBLgUQA/gSAxAAQCbgBCACeQB+CbhdDkQAcANAAAlQAAAhgOAYIAAAAQgMAXggAcIAAAAQhNA/gbgBQgEAAgHgDIgEgBQgRAqgnAjIAAAAIgqAgQACACAAADQAAARgCAkIAAABQAAAcAGAMQAKAQAeAAQAOAAAJgEIABgBQAzgPAyADQAxAEAvAkQAvAjAjC9QAhC5AFAyQAFAxAMBPIANBSQAOgHAQgGQAkgNAngMQAqgOAXgEQAAgLAGgLIABgBIAWgfIAUgdQgKgCgGgZQgEgSAAgOQAAgVAGgJIADgDIgBgCQgCgEAAgLQAAgQAKgMQAEgFAFgDIAAgDQAAgLAKgIIAAgBQAGgFAIgBQgDgFAAgDQgBgYA4AAQAagBAIAhIAAADIAKAEQAJACAMAIQALAGAgANQAkAPgBAxQADATg/BEQg9BAgHAKIAAAAQghAtgjAXIgEABIgCABIhLBEIgaAXIgoAeQgVAOgtAYQgvAZgSgBIgiAAQgeAAgeg0IgBgDQgBABgIgUQgJgYgghiQgdhZgRg4QgVhSgLgeIgKglQg6AthkCUQhwClgBAvQAAATAGALQADAIAMALIACADIACABQAwAgBCAmQBDAmAkBDQAjBBAdA6QAcA5APArQAPAqAtBuQAsBsAbB0QAbBxAiB9QAiB9AzEFQAyEDALAfQALAfAyBZQAzBZAsBpQAtBpABBYQACBWAEBXIAGCRQADA8ANBgQAMBgAOA6IgBAEIACAEQALA7AXAfIABADQAOAuAAAYIAAABQACAtALAnQAGAYAPAsIABAAQABAGAfBYQAPAuABAdQABAegaAhQgaAigvAFIgPAAQgmAAgbgVgAhwp9QAAACACAEIAAgEIABgDIgCgBIgBACgARmzuIAHACIgEgFQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-141, -263.1, 282.2, 526.2);
    p.frameBounds = [rect];


    (lib.marinet_eyebrows_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#191931").s().p("AjpADQAUgUAcgFQAagDATAIQAYALAJAXIgbgRQgVgLgfACQggAAgiAxQAIgWALgPgACSgbQguADgeAQIgmASQAJgYAigNQAcgMAoAAQAqAAAgAUQAVAMAPATQg7grgwAEg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.4, -4, 50.8, 8.1);
    p.frameBounds = [rect];


    (lib.marinet_dress_shadow5_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.marinet_dress_shadow5();
        this.instance.setTransform(-120.2, -198, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.2, -198, 240.5, 396);
    p.frameBounds = [rect];


    (lib.marinet_dress_shadow4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinet_dress_shadow4();
        this.instance.setTransform(-120.2, -198.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.2, -198.5, 240.5, 396);
    p.frameBounds = [rect];


    (lib.marinet_dress_shadow3_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinet_dress_shadow3();
        this.instance.setTransform(-120.2, -198.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.2, -198.5, 240.5, 396);
    p.frameBounds = [rect];


    (lib.marinet_dress_shadow2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.marinet_dress_shadow2();
        this.instance.setTransform(-119.8, -198.2, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-119.8, -198.2, 240.5, 396.7);
    p.frameBounds = [rect];


    (lib.marinet_dress_shadow1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinet_dress_shadow1();
        this.instance.setTransform(-119.7, -197.7, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-119.7, -197.7, 240.5, 396);
    p.frameBounds = [rect];


    (lib.marinet_dress_base8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AybeoIgBAAIgTgOIgDgCIABgDQAFgVAphXIAAAAIADgGIAAAAIAphaIAAgBIADgHIAAAAIAAgBIACgFIAAAAIABAAIAPgkIgBAAQAIgTAQgyIAFgQIAjh3IAAAAIAdhkIAFgSIAAAAIABgBIAAgBQATg/AdhDQAZg6Afg9QAbg0Agg2IAHgNIAAAAIAAAAIA+hjIAEAFIAVAXQA7A6BJARIAAAAIAdAFQAXADAYgCIAHAAIgCAGIgEAVQgOA+gLAlIAAABIgBABIAAABIgBACIAAAAIgEANIgFANIgcBHIAAABIAAAAIgLAXIAAAAIgGALIAAAAQgGANgPAVIgiAyIAAABIgPAUIgLAPIgMAPIgyBBIgHAJIguA7IgaAiIAAAAIgNAQIgmAyIAAAAIgRAZIgQAXQgyBLgTAgIAAABIgBAAIgBABIAAABIgCADIgiBCIgJAUIAAAAIgJAVIAAAAIgQA+IgCABIgLAFIAAAAIgDABIgBAAIgHACIgBAAIgLADIgMACIAAAAIgKAAQgiAAghgUgARCeDIgBAAIAAgBIgBAAIgBAAIgJgCIgBAAIgBAAIABAAIgCgBIgBAAIAAAAIgJgCIAAgBIgBAAIgKgEIgCgBIgBgDIgGgxIgBgJIgFgOIgBgEIgMgkIgXhCIAAAAIgDgKIgCgFIgCgGIAAAAIgGgQIgDgKIAAAAIgKgaIAAAAIgEgNIAAAAIgDgIIgCgFIAAAAIgchOIgJgYIAAAAIgGgPIAAAAIAAgBIgBgDIAAAAIglhgIgFgNIABABIgFgMIgOggIgXg2IAAAAIgDgFIABAAQgYg2gTg7IgIgZIgLgqQgHgZgGgfIAAAAIgDgOQgJgwgJg8IAAAAIgCgIIgCgLIAAgBIgBgMIgJg+IgMgZIgBAAIAAAAIgCgGIgHgQIAAAAIgXgvIAAAAIgIgPIAAAAIgIgQIAAAAIgGgNIAAAAIgqhYIgxhmIgUgoIgag3IgJgSIAAAAIgGgNIAAAAIgTgmIghhFIg1htIAAAAIgHgPIgGgMIAAAAIgmhPIgIgQIAAAAIgHgQIAAAAIgCgEIgOgcIgTglIgBgBIgEgIQioAvgqAAQgoAAghgRIAAABIgIgFIgNgKIAAAAIgRgMQgGAAgGADIgFADIgHAFQgPAOgQAAIAAAAIgCAAQgmAAgmgJIAAAAQgSgEgTgHIAAAAQg/gagrgOQgLgEgqgTIAAAAIgvgWIgBAAQgIgDgGgFQgJgGgGgHIgEgFIAAAAIAAAAQgFgIgEgKQgHgUgQgBIgCABIgBAAIgDAEIAAAAQgGAKgLAAQgvABhRhPQgxgvgOgfQgQgiAWgRIABgBQAZgiAzhAIAMgQQgcgZgVgVIgDgDIADgDIANgRIAAAAIAGgHIAAAAQAegiAigiQAjgjAqgdIAAAAQBjhHCKgoIABgIIAAAAIACgMIAAgFQhogehtgiQhtghhYgWIgBAAIgBgBIgKgJIAAAAIgJgJIgJgIIgEgEIg4g2IAAAAIgmgjQglglABgMIAAgFIgFgNIgFgLIAAAAIgEgIIAAAAQgDgHAAgTQgBgVA5gkQA3gjAvAAIABAAIABgEIAAgBIAAAAQACgGAIAAQALAAAhARIAUALQATAMgBAKQAAAEgFAdQgGAbAAAKQAAAJAGAcQAFAcAAAIQAAAGgDAOIgCAMQAUAMAnAGIBSAMIAGABIABAAQAFACBaAIIBnAHIgBgFQgJhBgDhxIgBgGIAAAAQgDgaABgaIAAAAQADgkANhgQgHgKgOgiQgVgxAAgYIAAgBIAAgBIAAgBIAAgBIABgMQABgQAFgNIABAAIAAgDIAEgIQAIgRAVgUIAJgJIABAAQAHgEAjgMIAdgJIAMgEIABAAIAHgDIgBAAQANgEASgKQArgaBFhBIAAAAQASgLAOgNQAWgSAOgWIAJgPQALgYAEgbIABgIIAHAFQAHAGAHABQAXgBBng/IAAAAIAmgVIgBAAIASgKIAAAAIAagPIACgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBABIAAACIAAABIgCAkIAAAAIAAAFIAAABIAAAAIAAACIAAAIQAAAQADAJIAAABQADAIAHAFIAGAFIgHADIgfASIAAAAIgiASIgLEpQAAAQgDAPQBcApASCFIAAACIgBACIgCADIgBAAQgHAJgSARQAAAHgKAPIABgBIgCADQh0ChABAxIAAABQAAAiAoAeIAAAAIAKAHIAaAPIAbAPIAXAOIABAAIAAAAQCjA/BiA9IAAAAQBjA8AmAtIAAAAIAEAFIABAAIARAVIACADIgCADIgUAcQAiAdA9A2QBAA4ArArIACACIgBADIgJATIAAAAQgUAsgbAfQgcAgguALIgKADQgcAJACAOQACAFgGALQgOAXhAAvIAcBrIAAAAIACAHIAAABIAcBxIAHAdIAhCQIAXBuIADAOIAEATQANA/AJA1IAHAoIAAAAIACAKIAAAAIAKA4IAOBKIAEARIAEAQIAGAaIAGAVIAcAxIAIANIAAAAIAuBVIAAAAIAFALIAGALIAlBKIAAAAIAMAbQAnBXAJA0IAAAAIABAGIABAEIgBAAIABACIAAACQAFAlAEA7IAAAAIABARIAIB4IAGB4IABATIABAgIADA/IACAUQADAxAFAqIADATIAHA1IAHAjIAAAAIABAHIABAAIAAAAIABAGIAUA/IgCACQgdAqgvAAIgQgBgAK7u7QgFAAgCgBQgTgFgQgKQgJgGgIgIIAAAAIgKgKIgJgKQgcglgSg/QgniDgZhcIgGgUIgFgRIgCgKIgBgDIACgBQAMgMALgJIABAAQAVgSAWgMQA4ghA6ABQAQAAAQADIADAAIABAEIADATIAnD4QAPgGASgGQApgNBQgUIAAgBQgBgQAogoIAMgMQgGgIgHgTQgLgcABgNQAAgNADgKIAAAAIAFgIIACghIAAAAIAAgBIAEgJIABgBIAAgBQAEgHAIgDIADgBIABgBIgBgCIABgDIAJgNQAEgFAIgCIgFgKIAAgBQgBgTAdgHQAQgEAWAAQAMAAACABIAAAAQAIACAFAIIAAAAIANAVIADABIAAAAIABAAQAgARAkAVQAqAYgFAbIAAABIgCAHIABAAQgDANgGAMIgHAMQgNATgdAlIgBAAQgdAkghAsQgXAcgSAQIAAAAIgMAJIAAAAIgIAFIgCACIgKALQgWAaggAbIgYAUIAAAAIgRANIAAAAIgeAXIgIAFIABAAQhzBRg9AAIAAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198, 240.6, 396.1);
    p.frameBounds = [rect];


    (lib.marinet_dress_base7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("Ah/UEQh8gKgygBQg0gCiAhUQk/hYhZhgIgCgCIAAgDQA7kRBqjzQCAkoC+lKQAIhGAAgUQAAgfgHgyIAAAAIgBgLQgKhBgChxIgBgGIAAAAQgDgaAAgaIAAgBQADgjAOhgQgIgLgOgiQgUgwAAgZQAAgfALgYQAKgVAcgZIABgBQAKgEA8gUQANgXAcgQIB2hFQBXg0ALhSIACgIIAHAFQAHAGAHAAIABAAIAFAAIAAAHQgPBOghAkQghAjgdAPIgfAPQADAdAmANQAeAKAsAAQApAAAtgZIAAAAQAbgPAbgWIABgBIAAgBIAAAAQBChbgKgyQgLgygQgNQgMgJAIgRQAFgOAVgVIABAAIAAAAQARgLARgJIAKgFIgDALIAAADIAAAAIgCAlQgCAcAFANQAHATAVAAQAUAAAogIQApgJAsgDQAtgDAvAtQAuAsAQBYQAQBWAaChIApECIABAGIgGAAQg/gHgwAvQgaAagVApIAAAAIgDAGIgFAMIgEgNIgDgKQgLghgIgfQgbhZgShFIghhzQguArhaB9IgSAaIgEAGIgBABQhdCFABAsQABAiAmAdIABABIAAAAIAIAGQE0B4EMIoQBaC5BVDrIArB3IAAADIgBACQg/Bfg6ARQgoALhDAOIgfAGQhKAPglAOQhVAeg+AqIgCABIAAAAIhXBDQguAkgrAPQg5AThdAAQgxAAh8gKg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89.2, -129.4, 178.6, 258.9);
    p.frameBounds = [rect];


    (lib.marinet_dress_base6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("A14eaIgCgCIABgDQAFgVArhdQArhcATgwQATgwBKkAIAAAAQBJkBDjlCQgCgSACgEIBPjRQAUgzAQgvIATg6QhBgZg4gdIgEgCIABgEIAahNQgsglhQgfQhSghhNgIIgVAlIgCAFIgEgCIg2gYQh8g4g3gsQhDg1g9g6IgUgVIgDgDIADgEQBghpCqifQD+juHzkyIhwgjQhagbhLgUIgfgIIgBAAIgBgBQgLgJhNhLIAAAAIgmgjQglgkABgNIAAgFIgFgNIgJgTIAAAAQgEgHAAgTQgBgUA5glQA3gjAvAAIACAAIABgEIAAgBIAAAAQACgGAIAAQAKAAAiARQAnATgBAOQAAAEgGAdQgFAcAAAJQAAAJAFAcQAGAdAAAHQAAAGgDAOIgDAMQAUAMAnAGIBZANIAAAAQAGACBaAIIBmAHIAAgFQgKhBgChxIgBgGIAAAAQgDgaAAgaIAAAAQADgjAOhhQgIgKgOgiQgUgxAAgYQAAgfALgZIAAAAQAKgVAcgZIAAAAIABAAIAggMQgVgtAAg3QAAhXA1g9QA1g+BMAAQBMAAA1A+IAEAEIABgLIABgIIAHAFQAIAHAHAAQAEAAAIgDIAGgCIACALIAAABQAAAvgjAnQAOADAVACIABAAQAzAEAwgLIADgkIAFhBQAAgmAHgVIABgCIACgBIBCgmIAEgCIAFAGIABACIAAACIgCAkQgCAdAFAMQAHAUAVAAQAUAAAogJIAAAAIACAAIABgBIAAgBQA/hJBaAAQBZAAA/BJQA/BKAABnQAABog/BIQgPASgQANIAEAbIAtEcQAPgGASgGQApgNBRgUIAAgBQgBgQAngoIAMgMQgGgIgHgTQgKgcAAgNQAAgVAIgKIADghIAAAAIAAgBQAEgPAMgGIADgBIACgBIgCgCIACgDQADgHAFgGQAFgFAHgCIgEgKIAAgBQgBgSAcgIQAQgEAWAAQAMAAADABIgBAAQAIACAGAIIAAAAIAMAVIAEABIAAAAIAAAAQAgARAlAVQApAZgEAaQgEAZgNAUQgNATgeAlIAAAAQgeAkghAsQgiAsgaANQguA6hjBGQhzBSg9gBQgFAAgCgBQhOgSgniDQgmiCgahdIgghzQgZAYgnAwQgbAjgjAwIgKANQh0ChABAxQABAlAsAfQG0BTEsC4QFyDkF4GSIADADIgCAEQiyDkkFBWIAvBGIADAEIgEADQjOB0jwApIgEABIgCgEIgPgrIAAAAIgDgLIgmAEIAKA4IAAAAIADASIAAAAIABAKIAAAAQAYCPAVBDQCzE4ANBvQAMBuANEmQAMD+AoBkIABADIgBACQgtBAhTgiIgDgBIAAgDIgHgxIgBgJQghhohXjsQgsh4gnhWQgnhXgZhiQgYhhgYivIiUkyIgPAEIAAAAQhmAXhXAAQhtAAhVgSQg0gMgjgQIgEgCIABgDIAFhAQgsgWg5gGQgVgChBAAIgqADIgFAzIAAADIgEABQgeAHgQAAIg1gBQg1BdguBJQg/BkggAtQgfAtgMAVQgLAUgOAeQgjCugVA9QgUA9geA6QgUArh6CdQh6CcgJAMQhTB6gXAnQg3BfgMBHIAAADIgDABQgcANgcAAQgsAAgrgig");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-155.7, -198.1, 311.5, 396.2);
    p.frameBounds = [rect];


    (lib.marinet_dress_base5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AyvebIgCgCIABgDQAEgVAshcIAAgBQArhcATgvQATgxBKkAIAAAAQBIkBDklBQgCgTACgEIBPjQIAkhjQAviOAPhnQAUiKBQkHQBOkHBmiuIAAgCQAAgbgCg6IAAgBQAAgZACghIADghIAFgnIABgFQhpgehtghQhtghhXgXIgCgBQgLgJhNhLIgBAAIgmgjQglgkABgNIABgFIgGgNIgJgSIAAgBQgDgHAAgTQgBgUA5glQA3gjAvAAIACAAIAAgEIABAAIAAgBQABgGAIAAQALAAAiARQAmATgBAOIgFAhQgGAcAAAJQAAAJAGAcQAFAdAAAHQAAAGgDAOIgCAMQAUAMAnAGIBZANIAAABIBfAJIBnAIIgBgGQgJhBgDhxIgBgFIAAgBQgDgZABgbIAAAAQADgjAOhhQgIgKgOgiQgVgxAAgYQAAgfAMgZQAKgVAcgYIABgBIAbgKIAqgOQAIgOANgLIAAAAQAJgJALgGIAAABIAVgMIBfg5QAsgaAZgiQAYgiAGgoIABgJIAHAGQAHAGAHAAQAXgBBng+QAngYAqgXIAAAAIADgBIAJgDIgCAJIgBACIAAABIgCAlQgBAcAFANQACAIAGAFQAHAGAMAAQAVAAAogJQApgIAsgDQAtgEAvAuQAtAsARBXIAeCxIAHAoIAEAXIABAHIAAABIAAABIAAABIAPBZIABAIIAAABIAdC4QAPgHASgFQApgOBRgTIgBgCQAAgQAngoIAMgMQgGgIgHgTQgKgcAAgNQAAgVAIgKIACggIAAgBIABAAQADgQANgFIABgBIAEgHIgBABQAEgIAFgFQAEgGAIgBIgFgLIAAgBQgBgSAdgHQAQgFAWAAQAMAAADACIgBAAQAIABAFAJIABAAIAMAUIADABIABAAQAgARAkAVQAqAZgFAaQgDAZgNAUQgOATgdAlQgeAkghAsQgiAsgaAOQgvA5hiBGQh0BSg8gBQgFAAgCgBQhOgSgniDQgchfgVhKIgPg1IAAgBIAAgBIgghyQgQAOgTAXQgVAZgbAjIgPAUIAAAAIgmAzQgRAXgNAUIAAAAQhWB9ABArQABAwBLAmIAgASQAUAMARAMQAgAWAXAYQAtAuAnBOQAmBMA+CVQA8CVBhGNQBEEnAeCwIACAKIAAAAQAYCPAVBEQCzE3AMBvQANBuANEnQALD9ApBkIABADIgCACQgsBAhTghIgDgBIgBgDIgGgyIgBgJQghhohXjsQgsh4gnhWQgnhXgZhhQgZhhgXiwIiylwIk2p/QgzhrgMgcIgGAAIgZAiQgJAKgKAHIgUAxIAAAAQgVAxgNAcIgjBKQgUArg2BnIgHANIAAABQhqDQhXCbQg4BigvBNQhABjgfAuQggAsgLAVQgLAUgPAfQgiCtgVA9QgVA9gdA6QgVArh6CdQh6CcgIAMQhTB6gXAnQg4BfgLBHIgBADIgCABQgdANgbAAQgtAAgqgig");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.2, 240.6, 396.4);
    p.frameBounds = [rect];


    (lib.marinet_dress_base4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AyvebIgCgCIABgDQAEgVAshdQArhcATgvQATgxBKkAIAAAAQBIkBDklBQgCgTACgEIBPjQIAkhjQAviOAPhnQALhOAeh1QAQg8AVhJIAAABQAKgkAMgmQANgtAOgqQANgpAPgmQA5icBEhzIAAgCQAAgbgCg6IAAgBQAAgzAKhPIABgFQhpgehtghQhtghhXgXIgCgBQgLgJhNhLIgBAAIgmgjQglgkABgNIABgFIgGgNIgJgSIAAgBQgDgHAAgTQgBgUA5glQAhgVAegIQAUgGATAAIACAAIAAgEIABAAIAAgBQABgGAIAAQALAAAiARQAVAKAJAJQAIAHgBAHIgFAhQgGAcAAAJQAAAJAGAcQAFAdAAAHQAAAGgDAOIgCAMQAUAMAnAGIBZANIAAABIBfAJIBVAHIASABIgBgGIgFgzQgEglgBgwIgCgqIgBgFIAAgBQgDgZABgbIAAAAIADghIAOhjQgFgGgGgNIgBgDIgBgCIgJgUQgVgxAAgYQAAgfAMgZQAKgVAcgYIABgBIAkgNIAjgMQAGgCAAgIIABgBIABgBQAMgQATgKIBng8IACgBIACgCIAJgGQAqgZAYgfQAbgjAGgrIABgJIAHAGQAHAGAHAAQAXgBBng+QAngYAqgXIAAAAIADgBIAJgDIgCAJIgBACIAAABIgCAlQgBAcAFANQAGATAVAAIAIAAQAUgCAhgHQApgIAsgDQAtgEAvAuQAtAsARBXIANBOIAdCpQAZCcAUCBQAPgHASgFQApgOBRgTIgBgCQAAgQAngoIAMgMQgGgIgHgTQgKgcAAgNQAAgVAIgKIACggIAAgBIABAAQADgQANgFIABgBIAEgHIgBABQAEgIAFgFQAEgGAIgBIgFgLIAAgBQgBgSAdgHQAQgFAWAAQAMAAADACIgBAAQAIABAFAJIABAAIAMAUIADABIABAAIADACIAAAAQAfAQAiAUQAqAZgFAaQgDAZgNAUQgOATgdAlQgeAkghAsQgiAsgaAOQgvA5hiBGQh0BSg8gBQgFAAgCgBQhOgSgniDQgniCgZhcIgJggIgXhUQgnAkhDBcIgeAoQg0BHgcAyQgYAqgIAaQgEANABAJQAAAUAOASQASAZAsAXIARAKIAAgBQA3AfAmAiIAOAOIAAAAQAtAuAnBOQAmBMA+CVQA8CVBhGNIACALIAPBAIAPBBIAVBjQAcCGARBiIACAKIAAAAQAYCPAVBEQCzE3AMBvQANBuANEnQALD9ApBkIABADIgCACQgsBAhTghIgDgBIgBgDIgGgyIgBgJQghhohXjsQgsh4gnhWQgnhXgZhhQgZhhgXiwIiylwIgrhZIgrhYIgfhCIgfg/IiilNQg0hsgLgbIgEAAIgbAiQgJAKgKAHIgUAxIAAAAQgVAxgNAcIgjBKQgUArg2BnIgHANIAAABQhHCMg/B0IgaAwIgfA3IgCAEIgnBFIhABqQhABjgfAuQggAsgLAVQgLAUgPAfQgiCtgVA9QgVA9gdA6QgVArh6CdQh6CcgIAMQhTB6gXAnQg4BfgLBHIgBADIgCABQgdANgbAAQgtAAgqgig");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.2, 240.6, 396.4);
    p.frameBounds = [rect];


    (lib.marinet_dress_base3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AyvebIgCgCIABgDQAEgVAshdQArhcATgvQATgxBKkAIAAAAQBIkBDklBQgCgTACgEIBPjQIAkhjQAviOAPhnQAUiKBQkHQBOkHBmiuIAAgCQAAgbgCg6IAAgBQAAgzAKhPIABgFQhpgehtghQhtghhXgXIgCgBQgLgJhNhLIgBAAIgmgjQglgkABgNIABgFIgGgNIgJgSIAAgBQgDgHAAgTQgBgUA5glQA3gjAvAAIACAAIAAgEIABAAIAAgBQABgGAIAAQALAAAiARQAmATgBAOIgFAhQgGAcAAAJQAAAJAGAcQAFAdAAAHQAAAGgDAOIgCAMQAUAMAnAGIBZANIAAABIBfAJIBnAIIgBgGQgJhBgDhxIgBgFIAAgBQgDgZABgbIAAAAQADgjAOhhQgIgKgOgiIgJgWIgBgBIAAgBIgBgCIAAgBIAAgBQgKgcAAgRQAAgfAMgZQAKgVAcgYIABgBQAHgEAlgMIABAAIAigWIABAAQAMgPASgKIApgYIBLgtQAYgPATgQIAKgLIAEgEQAbgeAagvIADgCIACgBIgBgDQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIADBEQBchzAcgRQAngYAqgXIAAAAIADgBIAJgDIgCAJIgBACIAAABIgCAlQgBAcAFANQADAKAJAGIAAAAQAHADAIAAIAKgBIALgBQAQgCAYgFQApgIAsgDQAtgEAvAuQAtAsARBXQAPBWAaCeIABADIAcCuIARBvQAPgHASgFQApgOBQgTIAAgCQAAgQAngoIAMgMQgGgIgHgTQgKgcAAgNQAAgVAIgKIACggIAAgBIABAAQADgQANgFIABgBIAEgHIgBABQAEgIAFgFQAFgGAIgBIgFgKIgBgBIAAgBQgBgSAdgHQAQgFAWAAQAMAAADACIgBAAQAIABAFAJIABAAIAMAUIADABIABAAQAgARAkAVQAqAZgFAaQgDAZgNAUQgOATgdAlQgeAkghAsQgiAsgaAOQgvA5hiBGQhnBJg7AHIgOABQgFAAgCgBQhOgSgniDQgniCgZhcIgDgOIgdhmQguArhaB9Qh0ChABAyQABAwBLAmQBOApAuAvQAtAuAnBOQAmBMA+CVQA8CVBhGNQBEEnAeCwIACAKIAAAAQAYCPAVBEQCzE3AMBvQANBuANEnQALD9ApBkIABADIgCACQgsBAhTghIgDgBIgBgDIgGgyIgBgJQghhohXjsQgsh4gnhWQgnhXgZhhQgZhhgXiwIg4h0Ih6j8Ik2p/Qg0hsgLgbIgEAAIgbAiQgJAKgKAHIgUAxIAAAAQgVAxgNAcIgjBKQgUArg2BnIgHANIAAABQhqDQhXCbQg4BigvBNQhABjgfAuQgYAhgMAUIAAABIgFAIIAAAAIgCADIAAAAQgLAUgPAfQgiCtgVA9QgVA9gdA6QgVArh6CdQh6CcgIAMQhTB6gXAnQg4BfgLBHIgBADIgCABQgdANgbAAQgtAAgqgigAOTzLIACAAIABgEIAAgBIgBgBIAAABIgEABIABACIgBgBIACADg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.2, 240.6, 396.4);
    p.frameBounds = [rect];


    (lib.marinet_dress_base2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("Axke7QgMgBgLgDQgNgFgNgGQgOgIgMgKIgDgCIABgDQAFgWAshcQAqhcAUgwQAMggAkh5IAAAAIADgJIAAAAQABgGADgFIAliEIAAABQAFgVAIgUQAGgVAIgVQAmhmA7hvIABgBIAKgSIgBAAQAuhUA7hYQAdguAhguQgCgSABgEIBQjRIAihfIABgDIAKgfQAoh7ANhbQAHg0ARhFIgBAAQAXhnAriNIAAABQAEgTAGgSQAXhOAahGQAphxAuhdQAUgpAWglIADgGIAAgBIgBgxIgBgYIAAAAIAAgNIAAAAQgBg0AKhOIABgFIg1gPIgTgGIgBAAIh+gmIgOgFIgBAAIhKgWIABAAIghgJIgCAAIgwgOIgngKIgDgBQgLgKhNhLIgCgBIgkgiQglgkABgNIAAgFIgEgMIgBAAIgDgGIgGgNQgEgHAAgUQAAgUA5gkQA2gjAwAAIABAAIABgEIAAgBIAAAAQACgGAIAAQALgBAhARQAnAUgBANIgFAiQgGAbAAAKQAAAJAGAbQAFAdAAAIQAAAGgDAOIgCAMQAUALAnAGIADABIBVANIABAAIANACIAmADIAsAEIA3AFIAVABIAbACIgBgFIgEgpIgDgcQgEgvgBg+IgBgGIAAAAQgDgWAAgXIAAgFIABAAIgBgBIAAgCQAEgjANhhQgGgIgLgZIgEgLQgVgwAAgZQAAgfAMgYQAEgLAMgNIAAAAQAIgLANgLIABgBQALgEA7gUQANgXAcgQIB0hFQAogYAZgeIAAAAIALgQQAMgUAHgXIAEgVIABgJIAHAGQAHAGAHAAQAWAABog/QAngXApgXIACgBIAIACIAAADIAAADIAAAAIgBAYIgBANIAAAAQgBAcAEANQAHATAVAAQAUAAApgIQAogJAsgDQAugDAvAtQAtAsARBYIAXCGIASBxIAHAoIAbCkIADAaIAIA0IAAABIAAABQAQgHASgFIARgFIAAAAIAcgIIAAAAIAKgDIAAAAIAVgFIAEgBIAcgIIAAABIANgEIAAgCQAAgHAJgOIAAgBQAKgNATgUIAEgEIAIgJQgFgHgHgTQgLgcAAgNQAAgWAJgKIACggIAAAAIABgBQADgQAMgFIACgBIADgGIAAAAQAEgHAFgGQAEgFAIgCIgFgLIAAgBQgBgSAdgHIABAAQAPgEAVAAQAMAAAEABIgBAAQAIACAFAIIAAAAIAMAVIAEABIABAAQAgAQAkAWIABAAIABABIABAAIAAAAQAiAVABAXIgBAGIAAAAQgDAYgNAVQgOATgeAlQgdAjghAsQgjAtgaANIgWAaQgeAfgsAjIgIAGIgOAKIgbATIgWARIgZAPIABAAQhBAogrAIIAAAAIgIABIgBAAIgMABQgGAAgCgCIgKgDQgYgIgTgSIAAgBQgbgZgTguQgJgVgIgbIgGgUQgjh1gXhVIghhzQghAfg5BLIgHAKIgnA0QglAzgYApIgBAAIgCAFIAAAAQgzBRAAAgQACAwBLAnQA/AgApAlIAUASIAAAAQAtAvAnBNQAmBNA+CVQAyB7BLEqIADAMIAAAAIAcBwIANA3IAIAhQAaB1AUBhQATBfANBLIACAJIAAABIADAQIAAAAIABAOQAWB4ATA8QBYCaAwBpIAKAXQAoBaAFAyIAGA/IADAiQAFBJAGBrIADBLIAAAIIAAABIADAsQAEBWAHBFQAOCFAbBCIABADIgCACQgLAOgLAKIAAAAQgJAGgJAEIAAAAQgkAQg0gUIgCgBIgBgDIgHgxIAAgJQghhphXjrIAAgBIgDgHIAAAAQgrhzgmhUIAAABIgCgGIgBgCIgBgFIgJgVQgehIgUhPQgZhhgXivIgRgiIiOknIgTgoIAAABIgDgIIgBAAIg+iBIj0n2IgphXIAAAAIgKgVIAAAAIgMgcIgFAAIAAABIAAABIgBAAIgKANIgKANIgBABIAAABIgBAAIgBABIgDADIAAAAQgJAKgJAHIgUAxIAAAAQgVAxgOAdIgiBJQgUAsg2BnIgHANIAAAAIggA/IgCABIgBAEIAAABQguBYgpBOIgHAGIACACIgCAEIhAB1IgxBVIg3BZIhIBwIgHALIgPAWQggAtgLAUQgLAUgPAfQgiCugVA9QgQAugUAsIAAAAIgPAdQgNAcg6BNIgGAKIgJAMIg4BIIhiB+QgcAlgEAGQhUB6gWAnQg4BfgLBHIgBACIgDABQgdANgcAAIgKAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198, 240.6, 396);
    p.frameBounds = [rect];


    (lib.marinet_dress_base1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AyvebIgCgCIABgDQAEgVAshdQArhcATgvQAKgaAZhRIAKghIACgHIAAgBIAIgcIAAABIAYhSIABgFIAAABIANgsIAAAAQA7jQChj8QAlg6Arg8QgCgUACgDIAJgYIAAgBIADgHIAQgqIAVg3IACgFIAchKIAkhjQAviOAPhnQAUiKBQkHQBOkHBmiuIAAgCQAAgbgCg6IAAgBQAAgzAKhPIABgFQhpgehtghIgigKIAAAAIgNgEIgBAAIAAgBIgBAAIhsgeIgngLIgCgBQgLgJhNhLIgBAAIgmgjQglgkABgNIABgFIgGgNIgJgSIAAgBQgDgHAAgTQgBgUA5glQA3gjAvAAIACAAIAAgEIABAAIAAgBQABgGAIAAQALAAAiARQAmATgBAOIgFAhQgGAcAAAJQAAAJAGAcQAFAdAAAHQAAAGgDAOIgCAMQAUAMAnAGIBZANIABABIAmAEIAoADIABAAIAPACIA/AFIAAAAIAoADIgBgGQgGgugEhIIgCg8IgBgFIAAgBQgCgXAAgWIAAgHIAAAAQADgjAOhhQgIgKgOgiQgVgxAAgYQAAgfAMgZQAKgVAcgYIABgBQAKgFA7gTQANgYAcgPIAFgDIADgCIABgBIAEgCIABAAIArgZIAfgSIAcgSQAzgeAZgoQASgdAFgjIABgJIAHAGQAHAGAHAAQAMgBAlgSIAzgcIAagQQAbgRAcgPIAagPIAAAAIADgBIAJgDIgCAJIgBACIAAABIgCAlQgBAZAEANIAAACIABABQADAJAHAFQAHAFAKAAQASAAAhgHIAJgCIABAAQApgIArgDIAKAAQAYAAAYAPQARAKASARQAtAsARBXQAPBWAbChIACAPIAAAAIAFAfIAMBGIAEAZIANBTIAJA9QAPgHASgFIApgMIgBAAIAugMIAkgJIgBgCQAAgQAngoIAMgMQgGgIgHgTQgKgcAAgNQAAgVAIgKIACggIAAgBIABAAQADgQANgFIABgBIAEgHIgBABQAEgIAFgFQAEgGAIgBIgFgLIAAgBQgBgSAdgHQAQgFAWAAQAMAAADACIgBAAQAIABAFAJIABAAIAMAUIADABIABAAQAgARAkAVQAqAZgFAaQgDAZgNAUIglAwIgGAIIAAAAIgPATIAAAAIgHAIIgpA1IgIAKIgIAKIAAAAQgZAbgTALQgvA5hiBGQg+AsguAUQgaALgVAEQgLACgKAAIAAAAQgFAAgCgBIgCAAQgggJgZgaQgkgmgWhMIgsiXIgQg5IgEgOQgFgPgDgOIgCgIIgWhPQgvArhZB9Qh0ChABAyQABAwBLAmQBOApAuAvQAtAuAnBOQAmBMA+CVQAjBZAyCzIAFAQIAAAAIATBLIAGAVIAqCmIAQBIIAUBXIAWBoIAFAVIAAACQAVBpAOBQIACAKIAAAAIAJAxQAQBcAPA2QACAIADAIIAoBGIAAAAIAKATQAoBIAcA8QBCCHAHBCIAFAxIABAHIAEA0IADA2QAGBjAHCQIADA5QAFBTAJBAIAHAuIAAABQAGAiAIAbIAAAAQAHAXAHASIABADIgCACQgsBAhTghIgDgBIgBgDIgGgyIgBgJIgFgPIAAgBIgQgxIAAABIgVg8IhOjYIgVg4QgZhBgXg2IgOgfIgMgbQgNgggMgiIAAAAQgQgtgLguQgShIgRhwIgIg2IgFgjIgNgaIgYgzIiIkYIAAAAIgFgLIAAAAIghhFIgcg5Igdg8IiYk4IghhEIgXgxIAAABIgMgZQgzhrgMgcIgGAAIgZAiQgJAKgKAHIgUAxIAAAAQgVAxgNAcQgNAZgSAqIAAAAIgBABIAAABIgBAAIAAABIgBACIAAABIAAABIgBAAQgQAigjBGIAAAAIgCADIgCAEIAAABIgTAiIgHANIAAABQhCCCg7BtIgBACIgwBYIgPAcIAAAAIgBAAIgCAEIgBABIAAAAIAAABQg4BigvBNQhABjgfAuQggAsgLAVQgLAUgPAfQgiCtgVA9QgVA9gdA6QgJATgeAqIABAAIgCADIgBABIAAAAIgBACIgBAAIAAABIg/BUIAAAAIgIALIAAABIgBAAIgCADIAAAAIgaAhQh6CcgIAMQhTB6gXAnIgCAEIAAABIgBABQgRAcgMAaIAAABIgBACQgNAagIAZIgBAEQgJAZgDAXIgBADIgCABQgdANgbAAQgtAAgqgigAp2y6IACgFIgEgCIACAHgAgm6JIAAgBIgEgGg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.2, 240.6, 396.4);
    p.frameBounds = [rect];


    (lib.lower_shadow_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.lower_shadow_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 1200, 200);
    p.frameBounds = [rect];


    (lib.icon_eyebrows_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.icon_eyebrows();
        this.instance.setTransform(-26.3, -10.5, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-26.3, -10.5, 54, 21.6);
    p.frameBounds = [rect];


    (lib.hero_4_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hero_4_0_img();
        this.instance.setTransform(-134, -204.5, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-134, -204.5, 268, 409);
    p.frameBounds = [rect];


    (lib.hero_3_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hero_3_0_img();
        this.instance.setTransform(-120.7, -203, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.7, -203, 241.5, 406);
    p.frameBounds = [rect];


    (lib.hero_2_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hero_2_0_img();
        this.instance.setTransform(99.8, -201.5, 0.5, 0.5, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-99.7, -201.5, 199.5, 403);
    p.frameBounds = [rect];


    (lib.hero_1_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.hero_1_0_img();
        this.instance.setTransform(-142.9, -269.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.9, -269.6, 285.9, 539.3);
    p.frameBounds = [rect];


    (lib.earring_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.instance = new lib.earring1();
        this.instance.setTransform(-4, -4, 0.16, 0.16);

        this.instance_1 = new lib.earring_2();
        this.instance_1.setTransform(-4.5, -4.4, 0.17, 0.17);

        this.instance_2 = new lib.earring3();
        this.instance_2.setTransform(-6.5, -2.2, 0.169, 0.169);

        this.instance_3 = new lib.earring4();
        this.instance_3.setTransform(-3.7, -4.6, 0.188, 0.188);

        this.instance_4 = new lib.earring5();
        this.instance_4.setTransform(-5.2, -2.5, 0.123, 0.123);

        this.instance_5 = new lib.earring6();
        this.instance_5.setTransform(-4.5, -2, 0.14, 0.14);

        this.instance_6 = new lib.earring7();
        this.instance_6.setTransform(4, -2.1, 0.139, 0.139, 90);

        this.instance_7 = new lib.earring8();
        this.instance_7.setTransform(-5.5, -2.2, 0.23, 0.23);

        this.instance_8 = new lib.earring9();
        this.instance_8.setTransform(-4.5, -1.5, 0.14, 0.14);

        this.instance_9 = new lib.earring10();
        this.instance_9.setTransform(-5, -1.7, 0.25, 0.25);

        this.instance_10 = new lib.earring11();
        this.instance_10.setTransform(-7.8, -2, 0.162, 0.162);

        this.instance_11 = new lib.earring12();
        this.instance_11.setTransform(-4.7, -2.7, 0.21, 0.21);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-4, -4, 8, 8);
    p.frameBounds = [rect, new cjs.Rectangle(-4.5, -4.4, 8.5, 9.5), new cjs.Rectangle(-6.5, -2.2, 11, 15.4), new cjs.Rectangle(-3.7, -4.6, 7.5, 7.3), new cjs.Rectangle(-5.2, -2.5, 7.5, 9.6), new cjs.Rectangle(-4.5, -2, 7, 6.6), new cjs.Rectangle(-4.3, -2.1, 8.3, 13.9), new cjs.Rectangle(-5.5, -2.2, 11.5, 11.1), new cjs.Rectangle(-4.5, -1.5, 7, 14.1), new cjs.Rectangle(-5, -1.7, 12.5, 12.5), new cjs.Rectangle(-7.8, -2, 16.2, 16), new cjs.Rectangle(-4.7, -2.7, 10.5, 10.5), null];


    (lib.color_picker_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.color_picker_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 320, 320);
    p.frameBounds = [rect];


    (lib.check_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // graph
        this.instance = new lib.star();
        this.instance.setTransform(-16.2, -16.1, 0.162, 0.162);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-16.2, -16.1, 32.5, 32.5);
    p.frameBounds = [rect, null];


    (lib.check_category_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // graph
        this.instance = new lib.check_category_img();
        this.instance.setTransform(-32, -32);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect, null];


    (lib.broken_glass_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.broken_glass_img();
        this.instance.setTransform(-357, -100, 0.833, 0.833);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-357, -100, 714.2, 100);
    p.frameBounds = [rect];


    (lib.body_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            en: 0,
            ru: 1,
            de: 2,
            fr: 3,
            it: 4,
            es: 5,
            pt: 6,
            tr: 7,
            ja: 8,
            hi: 9,
            ar: 10,
            id: 11
        });

        // graph
        this.instance = new lib.title_en_img();
        this.instance.setTransform(-307, -133);

        this.instance_1 = new lib.title_ru_img();
        this.instance_1.setTransform(-307, -133);

        this.instance_2 = new lib.title_de_img();
        this.instance_2.setTransform(-307, -133);

        this.instance_3 = new lib.title_fr_img();
        this.instance_3.setTransform(-307, -133);

        this.instance_4 = new lib.title_it_img();
        this.instance_4.setTransform(-307, -133);

        this.instance_5 = new lib.title_es_img();
        this.instance_5.setTransform(-307, -133);

        this.instance_6 = new lib.title_pt_img();
        this.instance_6.setTransform(-307, -133);

        this.instance_7 = new lib.title_tr_img();
        this.instance_7.setTransform(-307, -133);

        this.instance_8 = new lib.title_ja_img();
        this.instance_8.setTransform(-307, -133);

        this.instance_9 = new lib.title_hi_img();
        this.instance_9.setTransform(-307, -133);

        this.instance_10 = new lib.title_ar_img();
        this.instance_10.setTransform(-307, -133);

        this.instance_11 = new lib.title_id_img();
        this.instance_11.setTransform(-307, -133);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-307, -133, 614, 266);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.body_nav_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_img();
        this.instance.setTransform(-90, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -60, 180, 120);
    p.frameBounds = [rect];


    (lib.bg_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bg_title_img();
        this.instance.setTransform(-310, -180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-310, -180, 620, 360);
    p.frameBounds = [rect];


    (lib.bg_subcategory_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bg_subcategory_img();
        this.instance.setTransform(-30, -30);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-30, -30, 60, 60);
    p.frameBounds = [rect];


    (lib.bg_panel_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bg_panel_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect];


    (lib.bg_option_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bg_option_img();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -75, 150, 150);
    p.frameBounds = [rect];


    (lib.bg_navigation_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bg_navigation_img();
        this.instance.setTransform(-50, -25);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -25, 100, 50);
    p.frameBounds = [rect];


    (lib.bg_category_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.bg_category_img();
        this.instance.setTransform(-30, -30);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-30, -30, 60, 60);
    p.frameBounds = [rect];


    (lib.background_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.background_1_img();
        this.instance.setTransform(-200, 0);

        this.instance_1 = new lib.background_2_img();
        this.instance_1.setTransform(-200, 0);

        this.instance_2 = new lib.background_3_img();
        this.instance_2.setTransform(-200, 0);

        this.instance_3 = new lib.background_4_img();
        this.instance_3.setTransform(-200, 0);

        this.instance_4 = new lib.background_5_img();
        this.instance_4.setTransform(-200, 0);

        this.instance_5 = new lib.background_6_img();
        this.instance_5.setTransform(-200, 0);

        this.instance_6 = new lib.background_7_img();
        this.instance_6.setTransform(-200, 0);

        this.instance_7 = new lib.background_8_img();
        this.instance_7.setTransform(-200, 0);

        this.instance_8 = new lib.background_9_img();
        this.instance_8.setTransform(-200, 0);

        this.instance_9 = new lib.background_10_img();
        this.instance_9.setTransform(-200, 0);

        this.instance_10 = new lib.background_11_img();
        this.instance_10.setTransform(-200, 0);

        this.instance_11 = new lib.background_12_img();
        this.instance_11.setTransform(-200, 0);

        this.instance_12 = new lib.background_13_img();
        this.instance_12.setTransform(-200, 0);

        this.instance_13 = new lib.background_14_img();
        this.instance_13.setTransform(-200, 0);

        this.instance_14 = new lib.background_15_img();
        this.instance_14.setTransform(-200, 0);

        this.instance_15 = new lib.background_16_img();
        this.instance_15.setTransform(-200, 0);

        this.instance_16 = new lib.background_17_img();
        this.instance_16.setTransform(-200, 0);

        this.instance_17 = new lib.background_18_img();
        this.instance_17.setTransform(-200, 0);

        this.instance_18 = new lib.background_19_img();
        this.instance_18.setTransform(-200, 0);

        this.instance_19 = new lib.background_20_img();
        this.instance_19.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).to({
            state: [{
                t: this.instance_13
            }]
        }, 1).to({
            state: [{
                t: this.instance_14
            }]
        }, 1).to({
            state: [{
                t: this.instance_15
            }]
        }, 1).to({
            state: [{
                t: this.instance_16
            }]
        }, 1).to({
            state: [{
                t: this.instance_17
            }]
        }, 1).to({
            state: [{
                t: this.instance_18
            }]
        }, 1).to({
            state: [{
                t: this.instance_19
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.adrian_top_base_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("As3MKIgCgEIAFhMQgogSgBhMQgBhMAmiGQAThJAsh2QApiEAhhMQAhhOAohnQAnhnAhidIAAAAQAqisAggRQAdgSADgDIAAAAQAqg8A5gIIA5gJIAZgJIAAAAIAPgFQAhgOAegRIADgBIACABIACADIAYAyIACAEIAaAvIAcAvQAUAfAVAdQASAYATAWIAkAoQAXAXAXAUQAVARAWAQQAZASAZAQIAkATIAbANIAZgaIAAABIAOgQIAAAAIAWggQAMgUALgXQALgWAJgYIAOgsIAAABQAIgeAGggQAFgdAEgeIAFg2IAAAAIAAgGIABgDQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIADAAIA9AaIAnAEIAwAFQAhACAFAqQAdAIAmAvQAnAvgDBdQgDBaAXC5QAXC2AfBxQAgBvAnBmQAmBnAJBNQAJBNgcAYQAHAiAKAgIAAADIgCADIgEAAIgCgBQgWgagaAIQgNADgMAKIAAAAQgQAMgRAWIgDABQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgCgDQgIgZgOggQgLAFgMgJQgNgJgOgbQgcg0gZhmIgsizIgsi4QgYhig0hiIgMBGQAAAvAKBnQAKBkAIAsQAJAxAXBiIACAKIAAABIAOA8IgBAEIgDACIhKAQIg/AJIgBAAIgoAEIg9AFIgeABIAAAAIgQAAIgygBQgmgCglgEQghgDgggGQgngGgngLQgfgHgdgJQgbgJgbgKIgCgCIgBgDIAJguIAFgdQAIgsAGg6QgHgpgKhoQgJhdgEg7QhXidgdhuQgGgEgEAAQgDAAgCAEIAAAAQgXAggSAnQgkBWgeBBQgcA9g6BzQgzBngQAZQADAzgLAuIAAgBQgEASgeBeQgcBiAJBSQAFArgOAUQgNASgegCIgBAZQAAAVABATIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgEgBQgLgKgLgFQgRgIgRAAQgZgBgbAOQgPAJgQAMIgDABQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.2, -78, 172.5, 156);
    p.frameBounds = [rect];


    (lib.adrian_top_base_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("ArlQsIgCAAQgMACgOgCQgPgCgGgHQggAAgJgMQgDgEgCgJIgCAAIgEgBQgVgQgEgMIAAAAQgBgFAAgjQAAgiADgUQADgUAIgmIADhBIACg0QgdgWgWhfIgBgCIABgCQAegsAeACQAPj+AXh/IABgDIADgBQBxgPBLCZIAAAEIgLAkIAAAAQghBfgOAwQgKAigGAeIAXAPIAAAAQAFACgBATQAAAKgFAHIgeBDIgCACIACABIABADQADAcAHAUQAGAVAKANIABABQAsBOAQAiQARAiABAVQADAWgHAQQgEALgSAiIgBACIgBAAQgDAagRAJQgSAKgkAAIgDAAQghAAgRgLgAtQLdIAEAEIAAgEIABAAIgBAAIAAAAIgCgBgALOQKQgoAAgNgTIAAgBIgDgGIgegZIgBgBQgHgJAAgcQABgeACgLQADgNAIgJQgEgLABgIQgBgSAog5QAigxAKgIQAJgQgCgbIhAhGIgBgCIAAgCQAEgkAWgMIgPggQhPibgPg2QgHgagGgjIABgDQBQiBBQgHIADABIACACQAdA6AMA1QASBXALBjQAHA5ALA1IANgBQAZAAARAGQAbAIABASIAAACIgEANIAAACIgFAMIAAAAIgBABIgGAXIAAABIgCAGIAAABIgXBJQAFAbgBAXIAAADQABA3gCAfQgDBLgLAkQgCBDg4AMQgXAFgxAAIgBAAgAA1I0IgDgCIhqjEIiwA/QAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBIBKiuIAFg1QgGgpgKhnQgDgggMgtIhjg6IgDgDIAAgDIAyiBQgfhNgfhIQgGgFgEAAQgDAAgCAEIgBABQgMARgLATQAHAagBAKQABAOgIAJIAAAAQgLALgKANIgBABIgCACQANAOAMAQIAAADIgBADQgfAgggAoQgTAYgQAUQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgIgFIAAgBIgegUIAAgBQgigXgmgWQgkgVgrALIgDAAIgCgBIgBgDIgCgLIAAgBIAMiKIACgDIACgCIARgBIgOg1IgBgCQAAgWAhg4QANgWAOgVIACgKIAAgBQAqjNAlgMQAjgNAYgDQAtgdBIgWQBMgYA9gnIAAAAQAegWgRhUIAAgDIABgBIgCgDIgCgDIgIghIgBgBQgGgqA6gNQAegIAkADIADACIABADIAAAZQgBAggHAaIAMABQARACAyASIADABIAAADIAFBfIACAaIABAAQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAJAJAiAVIAAAAQAmAXANAAQASAAAmgjQAUgSAXgYQgVgZACgfIAAAAIABgDIACgCIBdgsIACgBIAAAAIAhgQIADAAIACABIAMAJIAAAAQBFA1APAoIAAADIgCADQgrAZgjA0IA5AYQA9AIArAeQAtgFAjBCQAjBAgEBOIAAAhIAVAWQAXAZgBAhQABATgVAlIAAAAIgQAaIAAADQAUgDAVgBIADABIACACIAAADIgKA/QgJA3gHAbIgBACIgCACIgIACQgYAIgVAIQgdAKgXAMIAMAWIAAACIAAADQgTAegZAWQgPAMgSALQggASgoAIIAHA+QAJBlAIArQAJAxAXBjIAAAAIAQBGIAAABIAACQIgBADIgCACIgDAAIgCgBIhdhqIhEA9IgDABIgDAAIgCgCIg3hTIguBTIgCACIgDAAIgDgBIhag/Ig0B0IgDADIgCAAIgBAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90.2, -108, 180.4, 216);
    p.frameBounds = [rect];


    (lib.adrian_top_base_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("ArtQ4IgCABQgMACgOgDQgPgCgGgHQggAAgJgMQgDgEgCgIIgCAAIgCAAIgCgBQgVgQgEgMIAAAAQgBgGAAgjQAAghADgUQADgUAIgmIACgkIACgwIABgPIAAAAIAAgCIgkgtIAAABQgWgbAAgeQABgiAagYIAAAAQAOgOAWgKIAAAAIAHgCQAlgQApgCIAKAAQAnAAAYANQAHADAFAFIABAAQAaAWAAAnQABAVgLAdQgMAjgOAaQAFARAHANIAGAJIABAAQAsBPAQAhQARAiABAWQADAWgHAQQgDAKgQAdIgBACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgDAdgRAJQgTALgkAAIgDAAQghAAgRgMgALGQXQgoAAgNgUIAAAAIgDgGIAAAAIgegZIgBgBQgHgKABgbQAAgfACgLQADgMAIgKQgEgKABgJQgBgRAog6QAjgxAJgIIAEgIIAAAAQAEgMAAgQIAAgBIgBgIIAAgEQgJgOgbgVQghgZAAgeQABgfAUgVIAAgBQANgOANgLIgBAAQANgMAhgEIA3gJQAVgDAgAKIASAHIAAAAQAvASACAmQADAkgLASQgJAOgSAaIgdAnQAEAVABASIAAAAIAAAUQAAA5gBAgQgDBLgKAkQgDBDg4AMQgXAFgxAAIgBAAgAi/GGIgDgCIgBgEIAJguQALgyAIhRQgGgogKhoIgEgrQgpgIgxgQQgegLgcgNQgagLgYgMIgCgCIAAgEQAKgYAYgxQAhhHAAgKQAAgQgWgcIgOgSIgRgTIgBgDIAAgDQARgiAVgdQAFgKAJAAQAHAAAKAJIACACIAEAPQAGgIAGgOQACgUAAgYQAAhFgHgnQgIgngUguIgGgOIAAAAIgDgGIAAAAQgFgLgIgLIAAAAQgRgagcgWIgBgBIgBAAIAAgBQgSgOgOgOIgwA+IgDACIgEgBQgigXAJgWQAHgSgIgaQgJgbgDhGQgFhHBxhCQBshABDgXQA5gUAUAAQAtAAAvAPIADABIABACQALA5gLAsQgTBRhdApQAjB7AgBFQBtBRAHAxQA1AbBGAAQA7AAAsglIAAgDQgBgXApgqIAZgWQAcg+AOhaQikgeAOhsIACgDIACgBIADAAIALABQAeAAA7giIAugdIA5goIAEgBIACABQA9BAAbAfQAoAtAKAvQAEAQAAARQAAAHgDAKQgGAegdA9IAAABIgOApQgKAigGAoQgPBbADBIIA7CjIAAAAQApB7AABBQAAAPggAUIABAAQgSAKgbAMIgSAHIAAABQgnAOgeAIIADAiQAJBkAIArQAJAxAXBjIABAAIAPBHQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQiVAjiNAAQjDAAi2hEgAGarRQAOgLAIgKIgTgLgAjXrfIgMhSIg4AkIAJAGIAAAAIAWAPIAAAAIAlAZg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-91.6, -109.2, 183.2, 218.5);
    p.frameBounds = [rect];


    (lib.adrian_top_base_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AgQK9IAAAAQhfgRhcgiIgDgCIgBgEIAJguQALgyAIhRQgGgpgKhnQgJhdgFg+QhWicgdhsQgGgEgEgBQgDABgCAEIgBAAQgXAggSAnIgRAnQATASAPAXIABADIgBADQgfAgghAoQgSAXgQAVIgCABIgCABIgDgBIglgaIAAAAQgigYgmgVQglgWgsAMIgDAAIgDgCIgBgDIANiUIABgDIADgBIAZgBQAOg/AZh8IABgBQAxiaAwgwQAxgxBSgZQBRgZAZgOIABAAIAzgeIAegSQADgjAWgXQASgUAugaIADgBIADACIABAEQgFA1gXARQgIAHgCAFQASA1AiAdIAAAAQA/BDCtCAQAxhBALgwIAAAAQALgwAJgSQgJgKgNgKQghgagYg5IAAgEIACgCIAEgBIADACQATAXAvAZIBGAlQAYAMAGAKIAAAAIAGALIAmAPQBwAOAxBaQAwBZACBFQABA2AKB7QAUgCAVgBIADABIACACIAAADIgKA+QgJA1gHAcIgBACIgCABIgIADQgYAHgVAIQhcAigkArIgDACIgDgBIgDgCQgSgkgagwIgLBHQAAAxAKBnQAJBkAIArQAJAxAXBjIAAAAIAQBHQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABQgkAIgkAHQhvAUhrAAQhiAAhcgRgAFLjNIAAgBIAAgBIAAAAIAAACIAAAAIAAAAIAAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-66.7, -71.8, 133.4, 143.6);
    p.frameBounds = [rect];


    (lib.adrian_top_base_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("ADUKsQgjAAgjgDIgBAAQgngDgngGIhAgMIgygMIg5gRIgqgPIgDgCIgBgDIAJguIAEgTQAJguAGhDQgEgYgFgtIgHhKQgKhdgEg/IgNgYIAAABQhMiLgahmQgGgEgEAAQgDAAgCAEIgBABQgXAfgSAnQgkBUgeBBQgcA9g6B1IgUAoQgjBFgBASIgCADIgDABIgEgBQgMgLgBgMQgJgKgKgJQgXgUgZgLQgWgKgYgDQgYgDgZAFIgDgBIgDgCIAAgDIABgDQATgSAdg6QAMgWAXhAQAmhmAahrQAOg7AgidIABAAQAxiaAwgwQAwgxBtgiQBSgZBBgsIAAgBQATgMARgPIABAAQANgHAKgLIADgBIADAAIACADQAKAXAVAXQAPASAUASIAAAAIAMALQAVAQAWAKIgBAAQAdANAfADIAbAAQAUgBAQgDQAbgFASgJQAJgFAHgHIABAAIAKgMQAKgMALgTIACgCIADAAIADABQASAPAcANIB7A0QBwANAxBaQAvBaADBEQACBEAOCzQAMCLARB1QAFAgAPAuQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgNgGgNgBQgTgBgTAIIAAAAQgVAJgWAUIAAAAQgNANgNAQIgDACQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQgIgpgNgrQgMgmgQgnQgPgjgeg7IgcgzIgIAyIgDAVQAAAxAKBmIAIBSQAFAnAEAXQAJAwAXBiIABAFIAPBDQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAIglAIIghAHQgnAHgnAFIAAAAIhHAGQgkACgkAAIgOAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-72.8, -68.5, 145.6, 137);
    p.frameBounds = [rect];


    (lib.adrian_top_base_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AjGJQIgCgCIgCAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAJguQALgzAIhQQgGgpgKhnQgKhdgEg+QhXibgdhuIgCgBQgHgEgDADIgCABIgBACQgXAggSAnIgMAdIABAKQAAAjggAYIgBACIgWAxIgDAIIgCACIgEABIgCgCQggghglgTQgzgYhGgDIgCgBIgCgCIAAgDIAMguQACgQgKgLIgBgDQgDgYACgPIABgBQARgnAYgfIAAgBIABAAIAWhtIAAgBQAyiaAwgwQAwgxBtghQBLgYA9gnQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAcAoAjAlQBvBzBrABQBUgBBRg7QAngdAhgoIACgCIAEABIA9AZQBwAOAxBaQAvBZADBFQABAyAJBuQAhBBgBAZQAAAcgBAGIAAABQgDARgQAGIAEApIgBADIgDACQgyAJgwATIABAAQgvATgfAXIgDABIgDgBIgCgCQgSglgbgxIgLBHQAAAwAKBoQAJBkAIArQAJAtAUBZIAAACIAAAAIADAMIAAAAIAQBHQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQiUAkiOAAQi/AAi1hCgAFMJKIAtgIIgPgWIhJgYgAEOJAIgYgeIgJASIAhAMgAGgIzIASgYIgjgCgAAAIcIAUAJIAngMIgvgPgAh7IFIAtATIAmgGIgzgXgAEsHtIAxANIAsgaIgcgoIgVAeIgCABIgDAAIgngMgAgpHBIghAdIA6AcIAQgSIABgBIACAAIAfAEIgEgdIgegUgADuHvIAggDIAAgggABDHuIAdgRIgggNgAh0HEIgXAVIAWAKIAeghgAhWGlIAcgJIgOgNIgigEgAAYGcIgNgKIgNAEIAaAGg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-65.2, -65.8, 130.6, 131.6);
    p.frameBounds = [rect];


    (lib.adrian_top_base_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AgQK9IAAAAQhfgRhcgiIgDgCIgBgEIAJguQALgyAIhRQgGgpgKhnQgJhdgFg+QhWicgdhsQgGgEgEgBQgDABgCAEIgBAAQgXAggSAnIgRAnQATASAPAXIABADIgBADQgfAgghAoQgSAXgQAVIgCABIgCABIgDgBIglgaIAAAAQgigYgmgVQglgWgsAMIgDAAIgDgCIgBgDIANiUIABgDIADgBIAZgBQAOg/AZh8IABgBQAxiaAwgwQAxgxBSgZQBRgZAZgOIABAAIAzgeIAegSQADgjAWgXQASgUAugaIADgBIADACIABAEQgFA1gXARQgIAHgCAFQASA1AiAdIAAAAQA/BDCtCAQAxhBALgwIAAAAQALgwAJgSQgJgKgNgKQghgagYg5IAAgEIACgCIAEgBIADACQATAXAvAZIBGAlQAYAMAGAKIAAAAIAGALIAmAPQBwAOAxBaQAwBZACBFQABA2AKB7QAUgCAVgBIADABIACACIAAADIgKA+QgJA1gHAcIgBACIgCABIgIADQgYAHgVAIQhcAigkArIgDACIgDgBIgDgCQgSgkgagwIgLBHQAAAxAKBnQAJBkAIArQAJAxAXBjIAAAAIAQBHQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABQgkAIgkAHQhvAUhrAAQhiAAhcgRg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-66.7, -71.8, 133.4, 143.6);
    p.frameBounds = [rect];


    (lib.adrian_top_base_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AgQK9IAAAAQhfgRhcgiIgDgCIgBgEIAJguQALgyAIhRQgGgpgKhnQgJhdgFg+QhWicgdhsQgGgEgEgBQgDABgCAEIgBAAQgXAggSAnIgRAnQATASAPAXIABADIgBADQgfAgghAoQgSAXgQAVIgCABIgCABIgDgBIglgaIAAAAQgigYgmgVQglgWgsAMIgDAAIgDgCIgBgDIANiUIABgDIADgBIAZgBQAOg/AZh8IABgBQAxiaAwgwQAxgxBSgZQBRgZAZgOIABAAIAzgeIAegSQADgjAWgXQASgUAugaIADgBIADACIABAEQgFA1gXARQgIAHgCAFQASA1AiAdIAAAAQBRBWBdAAQBPAAAugxIAAAAQAIgJAJgMQgJgKgNgKQghgagYg5IAAgEIACgCIAEgBIADACQATAXAvAZIBGAlQAYAMAGAKIAAAAIAGALIAmAPQBwAOAxBaQAwBZACBFQABA2AKB7QAUgCAVgBIADABIACACIAAADIgKA+QgJA1gHAcIgBACIgCABIgIADQgYAHgVAIQhcAigkArIgDACIgDgBIgDgCQgSgkgagwIgLBHQAAAxAKBnQAJBkAIArQAJAxAXBjIAAAAIAQBHQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABQgkAIgkAHQhvAUhrAAQhiAAhcgRg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-66.7, -71.8, 133.4, 143.6);
    p.frameBounds = [rect];


    (lib.adrian_tale_4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_tale_4();
        this.instance.setTransform(-86.4, -113, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.4, -113, 172.8, 229);
    p.frameBounds = [rect];


    (lib.adrian_tale_3_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_tale_3();
        this.instance.setTransform(-86.4, -113, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.4, -113, 172.8, 229);
    p.frameBounds = [rect];


    (lib.adrian_tale_2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_tale_2();
        this.instance.setTransform(-86.4, -113, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.4, -113, 172.8, 229);
    p.frameBounds = [rect];


    (lib.adrian_tale_1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_tale_1();
        this.instance.setTransform(-85.4, -113, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.4, -113, 172.8, 229);
    p.frameBounds = [rect];


    (lib.adrian_shoes_base8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("AsLOQQgbgHgngUIgCgCIAAgDIgBgqIgCg5QAAhDA5gjIAQgIIAAAAIAlgWIABAAQAigUAYgZIATgVQAkgrASgyQAXhAAhjUIADgRIAci0IAAgBIAXiRQAMhSADipQACiJALheIAAgBIAGgsIAEgYIAAgBQA7iXBigiIACAAIACABQBbBOAODoIgBABIgMAwIAAAAIgBAFIgBAAQgmCKgbBqIAAACQgbBogQBJIAAAAIgFAYQgiCag5FLIAAAJIAAAAQgDAnAGAdQAFAdAAASQAAAMgEAeQgFAZACAPIAAAAIAFAgIgBAEQgZAngrANIgBAAIgRAAIgBABQgiARgJAxQgMA/gLALQgKAMgsATQgtATguABIgIAAQgpAAgYgFgAJ4KmIAAAAQgsgSgfgKQgjgLgSgsQgOgmgRgHIggAFIgCAAIhHgYIgBAAQgrgQgRgWIgBgDQgBgWgDgSIgEgVQgFgaAAgSQAAggATg7QARgzgBhGQADiXgPifQgJhTgMhVIgDgQIgci+IgIg6IAAgCQBok+COgaQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAIAHAhQAPBGACAnQADAuAEAWIAAACIgBAEIABABIABACQAAAjgTCSIgEAdQgaDDAABgQAABgACAiQACAmABCPIAAABQADB6AcA4IAAAAQAFALAHAJQASAXBUA3IAAAAIAHAFQAjATBQAgIAAABQAYAMASAPQAoAiAGAwIAAABIAABcIgBADIgCACQhOAhg/AAIgBAAQgjAAgngPg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -91.7, 170.3, 183.4);
    p.frameBounds = [rect];


    (lib.adrian_shoes_base7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("AsLFHQgbgHgngUIgCgCIAAgDIgBgqIAAAAIgCg5QAAhDA5gjIAAAAIA2geQAigUAYgZQAzgyAWg+IAAAAIADgHIABgDIACAAQAMgDAlALQAnALgDAaIAAABQgDAUAFAJIAAAAQAEAHASABQAegBAlgnIAAAAIAJgKIADgCIAEABIACADQADAYAAAQQAAAMgEAcIAAABIgBACIAAAAIAAABIAAABQgEAWACANIAAAAIAFAgIgBAEQgZAngrANIgBAAIgRAAIgBABQgiARgJAxQgMA/gLALQgKAMgsATQgtATguABIgIAAQgpAAgYgFgAJ4BdIAAAAQgsgSgfgKQgjgLgSgsQgOgkgRgHIggAFIgCAAIhHgYIgBAAQgrgQgRgWIgBgDQgBgWgDgSIgEgVQgEgUAAgPIAAgBIgBgIQAAgaANgrIACgDIADgBIADABIAWAQQAlAXAMABQAWAAAHgJQAIgLAJgiQAIgmBDgIIAEAAIACADQAKAoARAWQASAXBUA3QAgAVBaAjIAAABQBPAoAJBFIAAABIAAAgIAAABIAAA5IgBADIgCACQhOAhg/AAIgBAAQgjAAgngPg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -33.2, 170.3, 66.4);
    p.frameBounds = [rect];


    (lib.adrian_shoes_base6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("AsLFMQgbgGgngVIgCgCIAAgDIgBgqIgCg5QAAhCA5gjIAAgBIAtgZIAIgFIABAAQAigUAYgZQAzgxAWg/IAAABIACgFQAGgTAGgbIACgDIADgBIADABIAKAFIgBAAIAQAGIAAAAQAjAMAeAAIACAAQAagBAcgPQALgGAIgGIADgBIADACIACADIAAAEIAAABQgCAgAEAZIAAAAIABAKQAFAdAAASQAAANgEAcQgFAZACAOIAFAhIgBADQgZAogrAMIgBAAIgRAAIgBABQgiARgJAxQgMBAgLALQgKALgsATQgtATguABIgIAAQgpAAgYgFgAJ4BjIAAgBQgsgSgfgKQgjgKgSgsQgOgkgRgHIggAEIgCAAIhHgYIgBAAQgrgPgRgWIgBgDQgBgWgDgSIgEgWQgFgZAAgTQAAggATg7IACgGQAGgTAEgXIABgDIADgBIADABQAuAZA0AAIARgBQAWgCAVgJIAPgHIADAAIACABIACADQAFAXAIASQAHAOAIAKQASAXBUA3QAeAUBSAhIgBAAIALAEIAAAAQBPApAJBEIAAABIAABaIgBADIgCACQhOAhg/AAIgBAAQgjAAgngOg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -33.7, 170.3, 67.5);
    p.frameBounds = [rect];


    (lib.adrian_shoes_base5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("AsLKnQgTgEgYgMIgDgBIgUgLIgCgBIAAgDIgBgqIgCg5QAAgLACgKQAIgzAvgeIAAAAIA2geIAHgEIABgBIAHgBIAAgCQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAYgQARgSQAzgzAWg/QAXhAAhjRIA2laQAMhSADipIAChBIABgDIAEgCIADACQBGA9CfgJIADABIACACIAAADQg6DZgZB3QgiCdg5FIIAAAJIAAABQgDAmAGAdQAFAdAAASQAAAMgEAeQgFAZACAPIAAAAIAFAgIgBAEQgZAogrAMIgBAAIgRAAIgBABQgiARgJAxQgMA/gLALQgEAFgLAHQgOAJgZAKQgtATguABIgMAAIgBAAQglAAgXgFgAJ4G9IAAAAIgwgTIgbgJQgjgKgSgtQgOglgRgIIggAFIgCAAIhHgYIgBAAQgrgQgRgVIgBgEQgBgWgDgRIgEgWQgFgZAAgTQAAggATg7QARgzgBhEQAFjrgpkFIgKhBIABgDIACgCIADgBQCMAiBJhCIACgBIADAAIADADIAAACQgSCUAABQQAABhACAhQACAmABCSIAAAAQAECRAnAzQASAXBUA3QASALAkARIBEAcIAAABQBPApAJBEIAAABIAABXIgBADIgCACQgmAVgjAIQgkAJggAAIgBAAQgjAAgngPg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -68.4, 170.3, 136.9);
    p.frameBounds = [rect];


    (lib.adrian_shoes_base4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("AsONqIAAAAIgSgFIAAAAQgVgIgZgOQgTAAgJgpQgIgnAJgqQAJgsAWgNQAVgNAOgGIALgHIAAgBIAmgUIAAAAIAQgKQAWgNASgPIABAAIARgRQAzgzAWg/QAXhAAhjTIA2lYQAMhSADipIAChPQgpgWg2gjIgDgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIARgfIAAABQAfg5AdhWQAahLANgZIAAAAQAZgtAdABQAFAAAKAGIACADIgBADIgOAaQASAVAXAOQBDAqB7AAIAIAAIAEgjIABgDIACgBIADgBQAeAEAIAjQAFASAABJQAABQAQA/IAFATIAAADIgBACIgZAYQgxAqhEACQg8DhgaB5QgiCbg5FKIAAAJIAAABQgCAnAFAcQAGAdgBASQABANgFAeQgEAZABAOIAAAAIAFAhIgBADQgZAogrAMIgBAAIgQAAIgBABQgbANgLAgIgEANIgBABIgBAGIAAABIgFAaQgJAogIAJQgLALgsATQgiAPgkAEIgVABIgIAAQgpAAgYgFgALAKPQgkAAgmgOIgBgBQgsgSgfgKQgjgKgRgsQgPgmgRgHIgfAEIgDAAIhHgYIAAAAQgrgPgSgWIgBgDIgCgeIgCgLIgEgVQgFgZAAgTQAAggAUg7QAQgzgBhGQAFjpgpkEIgMhTIgIgyQghgLgggOQgfgOgXgNIgCgDIAAgDIAMgbQAag9ANhaQAMhMAGgSIAAAAQAMgrAaABIAHAAQAAABABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgDAWgDAZQAVAPAuAQQAwARBKgBQBCgBAIgDIgEgoIAAgBIAAgDIABgDIACgCQAFgCAIAAQAagBARAuQANAjAEAyQADAlAZBGIAGAPIAAAAIAJAVIAAAEIgCACQgXASgXAMIAAAAQgmAVgrAKQgVCjAABVQAABhACAhQACAmABCQIAAAAQAECUAnAyQASAXBUA3QAMAIAUAJQAgAQA2AWIgBAAIAFABQBOAMAdA3QAeA3gyBUIgCACIgVAJQgfALgcAGIgBAAQgfAHgcAAIgBAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-87.9, -87.9, 175.8, 175.9);
    p.frameBounds = [rect];


    (lib.adrian_shoes_base3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("AsLITQgbgGgngVIgCgCIAAgCIgBgqIgCg5QAAhDA5gjIAAAAIA2geQAigVAqg3QApg3ADgHIAAABIAGgSIABAAIABgDIACgFIAAgBIAGgPIABgCIgBgBIAAgDQAShCAGhhQAIiBAMgxIAAAAQAGgdANgIQANgKAUAOIAAABQApAtAIBvIAAAAIAEBdQACArAFAfQALgVAQgvQAOgqAKgYIAFgbIAAgBQAWh+AShaIABgCIABgBQAGgEAFAAQAOAAANAXIAAAAQAfAVADAMQACAHAAARQAAAbgXA1IgHAQIAAABIgpBXIAAABQgNAcgLAaIAAACIgMAdIABgCIgBACIAAABIgIASIAAACQgRAzgFApIACAQQAFAdAAASQAAAMgEAeQgFAZACAPIAFAgIgBAEQgOAVgSANQgQAMgUAGIgBAAIgRAAIgBAAIAAAAQgHAEgGAFIAAAAQgTAPgIAcIAAAAIgDAOQgMBAgLALQgKAMgsATQgtATguAAIgIABQgpAAgYgGgAJ4EqIAAAAIgagKIgjgNIAAAAIgOgFIAAAAQgjgLgSgsQgOgmgRgHIgaAEIgDAAIgCABIgDAAIgfgLIgogNIgBAAQgrgQgRgWIgBgDQgBgWgDgSIgEgWQgFgZAAgSQAAgVAKglIAGgWIABgBIABgCIAAgBQAGgLgBgDIAAgCQACgeAAgwQAAhzgcg5Qgcg7gOgsQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIgCgDIgBgCQgKgmAOgVQACgIAJgGQAIgGAHAAQASAAAdAjIABAAIAEAFIABADIAHBmIAXAhQAdAsAnBjQAlhlAWgjIAAgtIAAgCIACgCQAxgmANgEIAFgCIACABIACACIACACIAEAHIAAAAQAEAGAAAPQAAAQgcBRQgbBQAAAaQAAAaAHBCQAPAyADAGIABAAQAPASA9AqIAaAQQAgAVBaAjIAAAAQBPApAJBFIAAAAIAABdIgBADIgCABQgtATgoAIIgdAFIgbABIgBAAQgjAAgngOg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -53.7, 170.3, 107.4);
    p.frameBounds = [rect];


    (lib.adrian_shoes_base2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("AsLN0QgbgGgngVIgCgCIAAgDIgBgqIgCg5QAAhCA5gjIAAgBIA2geQAOgIANgKQARgMAOgPQAmgmAWgtQAIgPAFgQIAAAAQAXhAAhjTIA2lYQAMhSADipIAChVIABgKIAMh2QACgzACgMIAAAAQACgPADgOQAfhtAzAEIACABIACACQAfBCAACOQAjh2BChIIAAAAQAKgKAKAJQAIAFAIAUQAOAjAOBVIAAACIgMAwIgUBKQhSEsgfCTQgiCbg5FKIAAAJIAAABQgDAmAGAdQAFAdAAASQAAANgEAeIgBAAIgBAEIABACQgEAVACAMIAAAAIAFAhIgBADQgZAogrAMIgBAAIgRAAIgBABIAAAAQgHADgFAFIAAAAQgYATgHAnQgMBAgLALQgKALgsATQgtATguABIgJAAQgoAAgYgFgAJ4KLIAAgBQgsgSgfgKQgjgKgSgsQgOgmgRgHIggAEIgCAAIhHgYIgBAAQgrgPgRgWIgBgDQgBgXgDgRIgEgWQgFgZAAgTQAAggATg7IACgCIACgBIABAAIgBgGIAAgBQANgwgBg/QAFjpgpkEQgpkGgCg0QgBgTAAgZIABgjIABgDQBAhUAogjQArgmARATIABABIBZCnIAVhaIAAgCIAFgUQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAABQAAAAABAAIAIABIADACIABADQAAAZgTDAIgMBfQgaDDAABgQAABhACAhQACAmABCQQAECUAnAyQAKANAfAXQAYASAlAYQAMAIAUAKQAhAQA5AXIAAAAQBPApAJBEIAAABIAABcIgBADIgCACQhOAhg/AAIgBAAQgjAAgngOg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -88.9, 170.3, 177.9);
    p.frameBounds = [rect];


    (lib.adrian_shoes_base1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("ArkIuQgXgCgQgCQgQgFgTgIQgOgGgRgIIgBgDIgBgCIAAgQIgBgaIAAgBIgCg4IAAgEQABgnAVgbQANgSAWgNIAAgBIA2geQAdgRAWgVIAHgHIAAAAQAtguAXg2IAAAAIAFgOQAMghAPhJIALg7IAAgFIAAgRQAAgVgGgbQgGgdgNgmQgJgZgFgWQgLgtAAgmQAAgrAUgwQAOghATgPIAAAAQAGgEAGgDQAKgFALAAQAPAAAUAMIACACIABADIgDAUIAAABIgRBuQAOAUAVAXIAAABQA/BFApAEIALg6IABgDIAGggIABgDIADgCIADABIACACQAVAgAJAaQAHAWAAARQAAANgGAJIAAAAIgBABIgEAEIAAABIgVAcQgYAhgUAjIgKA6IgOBKIAAAKIAAAAQgDAmAGAdIAAABIAAABIADAQQACARAAANQAAAMgEAfQgFAYACAPIAFAhIgBADIgBACQgPAWgTANQgQAKgRAFIgBAAIgQAAIgBABQgjARgJAwQgMBAgKAMIgIAGQgPAKggAOIAAABIgWAIIgBAAQghAKgjAAIgiAAgAqpD9IAAgBIgDAAIADABgAJ5FBIgBgBQgqgSgegJIgEgCQgigKgRgsQgPglgRgIIgfAFIgDAAIghgLIgUgHIgOgFIgEgBQgXgJgOgJQgKgGgGgGIgDgBIgFgHIgBgCQgBgXgDgSIgEgVQgFgaAAgSIABgPQADgbAQgvQAPgvAAhAIAAgLIABgNIAAAAIAAhCQgUgRgLgQQgMgSgCgSIgBgLIACghIABgKIAAgCIAAgDIAAgBIACgPIAAAAIACgRIABgJIAAgBIgBgIQAAgJADgIIAAAAIAAgBIAFgOQAHgQANgHIADgCQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIACADIAIBtIABARQAgAbArAAQAkAAAbgOIAMgGIAAgCIgBgoIgBgRQgCgbAAhBIAAgfIAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIABgDIABgFIACgCIADAAIAAAAIACAAQASAFAQAMQAOAKALATIAAADIADADQAIAQAGAWIACAOQAEAXAAAaQAAA8gPAwIgDAJQgUA4gkAQIgCABIAAAKIACAaIAAABIABACIAAAAQADAoAIAeIAAABIAEAOQAJAfAOATIAAACIABAAQARAWBSA0IACABIABABQALAHARAJIAJAEIABAAIABABIABABIACABIAjAPIAEACIApARIABAAQAsAWAWAgIAAABQAMARAGAVIADAQIAAAjIAAABIAAA5IgBADIgCACIgHADIgKADIAAABIgJADQg/AXg0gBQgkABgmgOgAHvlrIAAgBIAAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -55.9, 170.3, 111.8);
    p.frameBounds = [rect];


    (lib.adrian_mask_base1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("ABeC4IgDgBIgBgDIAAgDIAKgQIhKgmQgJgEgLgDIAAAAQgRgGgYgBQgagBggADQhWAIg8gsQg0glgCg4IAAAAQgFg8ALgVQALgWAHgGIAAAAQAegbAggPQAggPA+AAQBbAAA7BHQAiAnAKAHQAaAVAhAAQANAAApgQQArgRAbAAIAMAAIAIABIAAAAIAIACIACABIACADIgBACQgaA7gTA1QgPAsgHAkIgBACIgKAKIgBABIgWAQIAAAAQgWAOgPgBQgQABgXgOIAHAMIAAAAIABABIABABIAAAAIAAACIAAABIAAABIAAAAIgDACIgbANIgDABIAAgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.6, -18.5, 59.2, 37);
    p.frameBounds = [rect];


    (lib.adrian_mask_base_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("AiJEnQg7gkghgjQghgkABgnIAAAAQAAglgHg+IgKhhIgBgDQgGgcgSgZIAAAAQgLgQgKgCIgDgBIgCgEQAAgWgKhOIABgDIABgBQgBgkAtgQQAhgNAuAAQBMAABUBLIAvAqIAAABQATAZAZAHQABgIAHgKQAKgMAJAAQAQAAANAMIAAAAQAIAIACAIIAFgGQAKgMAOABQAZgBAAAYIAAACQAGACAGAAQAUgBAugrQAxgvAPgBQAQgBAMAGQANAHAAAMQgBANgCADQAAABAAAAQgBABAAAAQAAAAAAAAQAAAAAAgBIAAgCQgCADgEABQgOAsgXA1IACABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIABACIgBAFQAAAHgDACIgBAAIgCABIgDAHIAAAAIgBACIAAABIgeBQQgTAzgNBGIgCADIgDABIgfACQg0gBgXgeIAAAAIgNgUQgCgEgEgCIgDgBIgCAAQgDABgQARIgBABIgDADIgBAAQgFAEgDABIgKAAQgjABicgiIgdgHIgBAAQgMgEgJgIIgCgCIACAGIAAAAQAPArAFAYQAPBDAdBVIAAADIgCACIgCABIgBABIgCgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-34, -29.6, 68.1, 59.2);
    p.frameBounds = [rect];


    (lib.adrian_mask_base_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("ACkDGIgDgCIgBgDIABgDQAIgMAAgUQgOAdgSAGIgEAAIgCgCIgBgEQALgmgdgTQgLgDgOAmIgCADIgDAAIgDgBQgkgtg0gBQgHAdAUAWIABADIAAADIgDACIgCABQhRgOg5hAQgMAoAOAUIABADIgBADIgDACIgDAAQhQgXg0hPIAAgCQgehaB8hZIAMhRIACgDIACgBIADAAIBTAoIACACIABADIADA9ICWBgIBehBIAAgmIABgCIACgCIBGgoIADAAIADABIACADIALBNIAQATIABADIAAACQgQAkgYBCQgMAfgJAnIAAAAQgRA0gkALIgCAAIgBAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.1, -19.9, 56.3, 39.8);
    p.frameBounds = [rect];


    (lib.adrian_mask_base_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("ACxCQQgsgIgKgVIgUgmQgHgOgHADIAAAAQgTAIgmANQglALgpAFQgqAFgdgFQgfgEgug7QgPgUgJgUIAAAAQgcgtgcgKIgDgCIgPgcIgBgDIACgDIADgBIBBAAQAcgVATgLQAjgVAbAAQAzAABHA1QBFAyA2AAQAZAAAtgJQAugJAIAAQAHAAAeAWIACACIAAAEIgNAiIAAAZQgBAkgeAlIgEAZIgBADQgSASgeAAQgJAAgLgCgACoAAQgmASAGAaIAAAAQAGAbANAQQANAPAbAAQAbABAIgDIAAAAIAMgGIAAAAQAcgiABghIAAgXQgkgNgcAAQgWAAgRAJgAg6BAIABAAQApgEAigUIAAgBQANgGAGgOQAKgUgPgVQgMgQgRgMQgkgbgrgOQgWgIgUABQgSABgRAIIAAAAQgVAKgEAVQgEAVAEAUIAAAAQAHAaAWAVIAAAAQARASAWAKIAAAAQAYAMAcgGg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.4, -14.6, 58.9, 29.3);
    p.frameBounds = [rect];


    (lib.adrian_mask_base_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("ADJCmQgxgNggglIAAAAQgVgbgJgKIAAAAQgNgNgNAAQgRAAgvAVQgzAVgaAAQgXAAgdgJIABAAQgdgKgtgVIAAAAQghgVgFgIIAAAAQgGgJgLgZIABAAQgLgXgEgWQgEgXAEgSQADgSAUgUQATgTAJgHIgBAAQAJgHAOgGIAAAAQAOgHATAAQAzAABYA7QBUA4AzAAQAZAAAhgKQAjgLBDgIIADABIACADIAAADIgfBSQgXBBgNBXIgBACIgCACIgCAAIgBAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.4, -16.6, 54.9, 33.3);
    p.frameBounds = [rect];


    (lib.adrian_mask_base_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("ABQCfIgxgdQiaAbh4g4IgCgBQhZh5BZh7IADgCQClgyCdCZQBwhVBgAuIACADIAAADQgaA9gYBCQgOAkgKAwIgBACIgCACQhCAigqgiIgTATIgDABIgBAAIgCAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.1, -16, 58.2, 32);
    p.frameBounds = [rect];


    (lib.adrian_mask_base_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("ADFDlQglgdg6AEIgCgBIgCgBQgLgPgMgCQgNgBgPALIgCABIgDAAQhxgyhrAXIgCAAIgCgBQhQg7gWhsIAAgBQBIiZB7hLIADgBIADABIACADQAvCoBvBcQBXgyBFh8IABgCIADgBIADABQArAbACBPIAAABIgqByQgZBDgNBPIgBADIgEABIAAAAIgDgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.5, -23.1, 57.2, 46.2);
    p.frameBounds = [rect];


    (lib.adrian_mask_base_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("AChDAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAMgTgIgbQgcADgcgEIgCgBIgCgDIgEgPIAAAAQgEgIgMgBQgJAAgGAFQgFAFgEAKIgCACIgEABQhCgKg8gUIgBAAIgKgDQgfAhAHAaIAAADIgCADIgDAAIgDgBQgqghgDhAQgdgOgagSQgTgMgSgOIgBgBQgOgZgIgcIAAAAQgEgagCgFIgBgBQgEgcACgcIABgDIACgBQC8hHCRAUIADACIACAEQgHBpAmBNQAyg9AYhfQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQBnAcAPBgIgBACIgNAiIAAAAIgMAiQgKAbgJAhIgGAaIgBADIgCABIgQAFQgGA4gtAIIgBAAIgDgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.6, -19.3, 57.2, 38.7);
    p.frameBounds = [rect];


    (lib.adrian_lips_1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.adrian_lips_1();
        this.instance.setTransform(-6.4, -3.8, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-6.4, -3.8, 14.4, 8.6);
    p.frameBounds = [rect];


    (lib.adrian_head_accessory_5_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.adrian_head_accessory_5();
        this.instance.setTransform(-48.8, -40.7, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-48.8, -40.7, 98.7, 81.4);
    p.frameBounds = [rect];


    (lib.adrian_head_accessory_4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.adrian_head_accessory_4();
        this.instance.setTransform(-33.7, -22.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-33.7, -22.1, 67.7, 44.7);
    p.frameBounds = [rect];


    (lib.adrian_head_accessory_3_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.adrian_head_accessory_3();
        this.instance.setTransform(-34, -21, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-34, -21, 70.6, 43.9);
    p.frameBounds = [rect];


    (lib.adrian_head_accessory_2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.adrian_head_accessory_2();
        this.instance.setTransform(-32.5, -13.3, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32.5, -13.3, 66.6, 27.7);
    p.frameBounds = [rect];


    (lib.adrian_head_accessory_1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.adrian_head_accessory_1();
        this.instance.setTransform(-48, -24, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-48, -24, 97.9, 48.6);
    p.frameBounds = [rect];


    (lib.adrian_hand_accessory7_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_hand_accessory7();
        this.instance.setTransform(-22.5, -119.9, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-22.5, -119.9, 45.4, 241.2);
    p.frameBounds = [rect];


    (lib.adrian_hand_accessory2_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.adrian_hand_accessory2();
        this.instance.setTransform(-40.3, -33.9, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-40.3, -33.9, 80.7, 67.7);
    p.frameBounds = [rect];


    (lib.adrian_hair_base4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCC00").s().p("ADQGiIAIgNQADgEgDgNIABABIgIgeIAAgBIgCgLIAAgCQAJgyAThCIAAgBQAOgwAYg5QAHgcAAgJQAAgwgUgnQgGgNgPgVQgTAygrAlQgyApgnADIgLABIAHgJQAZggAJgeIADgTQg8gpgYgzQgFgLgDgMIgFAJIAAgBQggA4hpApIgNADIgCgBIAKgKQAZgXAHgpIAFgoQgLANgNAMQgbAagUAIIgKAEIgDAKIAAABIgBADQgCAGAAAFQAAAHAFAEIAMAIIAAABIgOAAQgRAAgLgGQggAigMA1IgBAFIgWgFIgBgDQgJghgGgKQgLgRgUAAQgOAAgKAWQgKAUAAAYIABATIAAACQAEAfAPAZQAPAYAXAOIADACIAHBxIgJgIQgOgNgHgNIAAABQgHgLgDgLQgBAFABAGIAAACIAAABIAAAMIgIgIIgBAAIgBgBQgZgXgYgsIABAAQgbgvAAgfIAAgUIABgDIgRgIIgFgDIAEgFQAWgXAEgcQgNAKgOAAQgTgBgWgVIgFgFIAHgDQAqgPAFggQAEgkATg1QATg1AYgiQAVgeA7gpIgKgGIgHgGIgYgSIAfAAQAtAABLg0QBPg4ApABQA+AAATAgQAcgUAmAAQA9AAAoAeQAbATAdAtQAgAwANAOQAaAZAlACIAKABIgGAHIgKAKQAaAWAHAnQAEAWgCA5QgCAxAHASQAIAbAaAJIADABIAMAGIgBAEIgMgBIgCABIAAABIAAAAQgLAHgTAAIgKgBQAAALACARIAAABQAAAwg5A4Qg1A0AAAbQABAKAZAQIABAAIAAAAIABABIAJAJIgMAAIgBAAQgFABgNAAIgOgBIgDARQgDAVgXAfQgXAggSAHIgNAFgAHAAyIABgBIgBAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46.3, -41.8, 92.8, 83.8);
    p.frameBounds = [rect];


    (lib.adrian_hair_base3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCC00").s().p("AjkD9QgGgGgJgFQgKgGgFgFIgCgCIAAgCQAAgggIgZIAAABQgIgYgLgGQgMgFgGgBQgFAAgaAYIgGAFIgCgIQgIgXgEgXQgEgZAFgmQAFgmAVgwQAUgzApgdIgPgjIArAEQAUgkA9ghQBNgqBSAAIAAAAIBOAJIgXATQAWgDAPAAQAnAAA6AXQBDAbAfAoIAFAFIgPAFQAaASAVAhQAeAxAEBCIABAHIgMgEIABAlQAAANgEASQgFASgHAOIgDAHIgFgGQgdgogWgEQgPAEAAASIAAAGIgGgBQgZgDgNg0QgTABgMAfIgCAFIgFgCQgrgMgYhDIgTAaIgEgCQgWgJgJgXQgfAgglAAIgEAAIgBgEQgDgpgUgcQgPAfgXACIgGACIAAgEQgDgegHgIQgOAqgWAIIgDABIgWgYQgmAngMBNQgIAygGBfIAAAMg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35.9, -26.2, 71.9, 52.5);
    p.frameBounds = [rect];


    (lib.adrian_hair_base2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCC00").s().p("ADvE0QgRgRAAgVQAAgQAQglQAJgVADgOQgcgGgYgQQgPgLgIgJQgqgBgTggIAAAAIgGgOQhEheg4AZIgCABIgBAAQgigGhLAHQhMAGgrBQQgdA4gRBwIgDAOIgDABIgEgOQgThAgFgLQgNgbgkgFIgGgBIACgFQAGgQgBgNIAAgBIAAgFIgGgFIgBgBQgDgDgIABQgKAAgGAEIgLAJIgJAKIABgNQAAgaAVghQAPgXANgKQgWgFgMgdIgBAAIAAAAIgEgqIgCgMIAKAIQAVASAKABQAFgBAFgDQgZgGgQgcQgNgYAAgQIAAgNIAJAKIAGAFQAIAFAJABQAYgBAQgaQAFgHAag4QAshgBQAAIAfABIAAAAQAGABAWAHQAQgbAlgQQApgSA1AAQB/AACPBnQCWBtAABtQAAAzgvBPQgtBMgBASQAAARAJANIABAAQAHALAKABIALADIgJAGIgEADIgBAAQgTAOgdAAQgRAAgOgLQABARAJAHQAIAGASABIAMABIgJAIQgHAFgOAEQgJACgFAAQgdAAgSgTg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-43, -32.7, 86.1, 65.5);
    p.frameBounds = [rect];


    (lib.adrian_hair_base1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCC00").s().p("AEKG0IACgOQACgVgMgiQgPgmgBgMQgBgMADgUQADgVALghQAIgfATgnQgTgLgSgNQg4gogkgsQAXBSAoAgIAGAEIgHAFIgCACIgBgBQhVgGgyhXQgvhNgQhMQgbA2g6AnQg8AsgzAGQgJAXACAwQACA0AQAoQAQAoASAkIAHAMIAAAAIgNgGQgmgSgQgKQgPgKgMgLQABAiAMA3QAKAyAHAPIADAGIgKACIgBAAQg2gRgug9IgFAGQgeAngfAGIgvAAIgBgBIANgJQALgGADgiIAAgpIAAgQQgEARgCACIgDAFIgDgEQgGgEgGgUQAAANAFATIACANIgKgIQgegVgPg1QgMgqAAgyIABgJIgPABQgdAAgPgIIgLgGIAMgDQAPgEAagiIAMgPIgLAAQgQAAhHgNIgLgCIAJgHQAzglAcgoQAggzAPgmQgegHgfgOQgqgSgageIgHgIIAKgBQBSgCAigRQAVgLArgmIgMgEIgBAAIAAAAQgVgJgNgJIgLgJIAOAAQAegBAogZQARgKA7gsQBthOBKAAQAnAAAjAQQASAJAkAWQAJgKAJgGQAngcAhABIAAAAQAKAAA/AVIANAFIgNAEQhEAcgOALIgEAEQAlgEA0ACQA9ABBKAtQBJAtAPA7QAOA6AOAwQANAwAMAoQAMAkAfAoQAdAmAqALIAKADIgJAGQgFADgIACIgBAAIgWAAQgmAAgcgMQARAXAOAHIANAHIgBADIgaAAQgwgBg7gVIgcgMIANATQArA3ApAaIANAHIgBAEIgPgCQghgGghgLQADARAAAPQABAfgHAaQgHAfgPANIgIAGIgBgJQgCgTgKgTIAAAAIgDgDQgEAcgKAXQgLAVghA3IgHANg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-58.6, -43.7, 117.2, 87.5);
    p.frameBounds = [rect];


    (lib.adrian_eyes_base4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#00CC00").s().p("ABjAqQgJgIgDgIIgCgGQAKgLAQgGQAXgIAfAAIANACIgCAKQgDAPgHAMQgOAVgZAAQgOAAgOgNgAifAAQgRgQgBgYIAAgEIABgIQAHgBAWgBQAcgBAnAUIAIAFQgDAKgFAJIgHAKQgOAQgUAAQgWAAgQgPg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-17.8, -5.5, 35.6, 11.1);
    p.frameBounds = [rect];


    (lib.adrian_eyes_base3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#00CC00").s().p("ABhA3QgPgRgDgLQgEgLgHgOIACAAIAAgCIA3gIIATgBQAPANAAAWQAAAVgPAPQgMAMgIABQgNgDgOgRgAiPAKQgPgNAAgVQAAgWAPgPQAKgKANgDQAPAEAKAFQATANANAGQAEAKAAAMQAAAVgOANQgPAPgUABQgVgBgOgPg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-15.9, -7.5, 31.9, 15.1);
    p.frameBounds = [rect];


    (lib.adrian_eyes_base2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#00CC00").s().p("ABRA3QgQgQAAgXQAAgJADgHQAIgDAOgLQAYgIAKgCIAjABQAQASAAAVQAAAXgQAQQgQARgXAAQgXAAgQgRgAieARQgQgRAAgWQAAgXAQgRQAGgGAIgDQAdAAAnATIAKAFQAGALAAAOQAAAWgRARQgRAQgXABQgYgBgRgQg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-17.5, -7.3, 35.2, 14.6);
    p.frameBounds = [rect];


    (lib.adrian_eyes_base1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#00CC00").s().p("ACCBSIgBAAQgRgEgGgEQAGgeATgVIABAAQAMgNAOgFQALgFAMAAIADAAQAJABAUAFIADABIgQA0QgMAcgcAAQgKAAgUgFgAhcAiIhBgVQgRgFgNgIQgWgIgGgKQgBgMAEgKIABgBIABgCQAHgOARgMQAZgRAeAAQAWAAAWALQANAHANAKIABACQAJAHAOAPQAAAGACANIAFAdIAJAnQgagFgtgOg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-21.7, -8.7, 43.3, 17.4);
    p.frameBounds = [rect];


    (lib.adrian_dress_base_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("EgKMAhmIgDgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQARgtAejjIApk7QAMhWADipQADirAQhpQAPhpBIhvQAMhLAOh3QAWi+AkkoQAkknAkiAIAiiCIAAAAIA8iwQAKhLALgzQALgyAIhRQgHgpgKhnQgJhdgEg+QhXicgdhuQgGgEgEgBQgDABgCAEIAAAAQgXAggSAnQgkBWgeBBQgcA9g6B1QgzBmgQAZQADA0gLAtIgCADIgDABIAAAAIABAMIAAACIgJAdIgVBBIAAABQggBegPAxIgEAPQgVBJAAAyIAAACQAABHAQAnQAGANAHAJIAAAAQAsBOAQAiQARAiACAWQACAWgGAQQgEAKgRAdIgDACIAAAAIAAABQgCAcgSAJQgTAKgkABQgjAAgRgMIgCABQgNABgNgCQgQgCgGgHQggAAgJgKQgDgEgCgIIgCAAIgDgBQgWgRgDgLQgCgGAAgjQAAgiADgTQADgSAHggIAAAAIACgIIABgpIAGh/IABgDIACgCIADAAIAAgBIgBAAIABAAQAQldAeiXQADgMAIgLIgBAAIAAABIgDACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBgBIgCgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAQhGATgQIAAAAQAlgjAwiBQAlhnAbhsIAPhGIABAAIAHgmIAXhsIAAgBQAdhYAbg1QAVgoAVgVQARgRAZgPIACgBIACgCQAsgbBCgUIAxgRIAAAAIAYgLQArgUAmgaIAegXIAAgBQBMgqgLilIABgDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABIADACQAhAxBUA5QBSA4BCAVQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIABADIAAADQgBA5BQAlIB6AzQBBAIArAhQAhAZAUAmIARAiQAfBFACA3IABAYIADAsQAEBDAJBwQAOCyAZCNIALASIARAcQAeA2AQAxQAHAWAFAUQAIApAIAtQAIAwAGA0QALBiAaBUQAbBWAAA6IgBBKIAAABIgBAOIgBAeQgEA0gIAdQgDBDg3AMQgYAFgyAAQgnAAgNgUIgEgGIgdgZIgBgBQgHgKAAgbQAAgfADgLQACgMAIgKQgDgLAAgIQgBgSAog5QAjgxAKgIQAEgHACgKQAHgqgkhTQgLgagOgdIgQgfIAAgDIAAgBIgBgBIgCgCQgrhXgTgwQgJgVgDgOIgFgSIAAAAQgMgzgIhSQgKhfgvhzQgUgxg0hgIgCALIgKA8IABAXQABAvAIBSQAKBkAIArQAJAxAXBjQAVBbAHAsQA4GpgQESQgREUgtCjIgBABIAAABIgRB9QgDAOgFAkQgGAegIAKQAUBcADAvQADAuAEAWQAEAWgaDFIAAAAQgaDDAABiQgBBhgCA7QgCA6AKBiIAAAAQACBAgCA4IgBADQgeAmgqAAQgqAAg2glIgCgCIAAgDQAEgfgBgjQAFjrgpkEQgpkGgCg0QgDg0AHhXQAHhXAXg9QAChRgIh2QgIh9gTinIgSidIgNhtIgajDQgNATgKAWQgnBNgsCNIgEAMQgOAugOA6QgoCIg3DOIgGAWQhLESgfBRQgMB1hFDnQhFDmgiCrQgjCqgVCVIgVCZIAAABQAAALgqAYQgQAKgZAAQgjAAg0gUgAsNuCIAAADIAAABIACgEIgBgBIgBABg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.7, -217, 173.5, 434.1);
    p.frameBounds = [rect];


    (lib.adrian_dress_base_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("EgJMAgrQgMgBgOgCIAAgBIgOgDQgSgFgWgIQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQASgsAejkIApk7QALhVADiqQADirAQhpQAQhpBHhvQANhLAOh2QAVi+AlkpQAkknAjiAIAiiCIABAAIAJgeQh4g1AKhNIAAgBQAPg0AXilQAXilAGg3QAFg3gJiSQgKhWgEhbIgCgFIgBABQgIAHgPAaQgfA2g6CIQh0EPgjB7QgjB7gWBWQgjCGAABXIgBADIgCACIgTAIQAEAlANAXIAAAEIgCADQhFAugjgBQgTAAghgIIgQgDIgEgCIgBgDIAEhQIgOgCQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIASkxQALi1AZhXQANgtAihHIAAgBIBAiHQBXjCAxjcIAAAAQAyiaAggmQAaggAQgLQAIgGAGgBQAGAAADADQArgaBBgUIAAAAIAKgDIABAAQAlgMAhgQQA4gbAugnIABAAQAIgEAGgGIABAAIAigsIADgCIAEABIACADQAQA0ADAWQBZBSBnAeQAtgqAagwQgGgJAAgZIAAgBIAAgCIABgBIADgCIAAAAIACAAIACABIABABIBaBHIBuAwQAeADAaAJQAZAJAVAPQACgFADgDQAFgFAJAFQALAHATAiIAAgBQA5BaAHA3IAOBwQAGA4AMCjIAAAAQAMCjAkBtQAnBzAWBYQAWBYAkBqQAkBpAKAjIAQA+IAAADIgBACIglAfQAJAtAAAiIAAAPIgBACIgCACQhHAjhIhCIgBgDIAAgEQAOgWgKgrIgXgHIgCgCIgBgCQgLhKguhaQguhcgPhAQgPhAgKhgQgIhMgehXIgEAoIASBfQA4ECAfCdIAAABQgFA4g8AuIgDABIgDgBIgCgDIgFg6IgVAAIADAZQAiE+gODcQgREVgtCiIAAAAIAAABIAAABIgSB9IAAAAQgDAOgFAkIAAAAQgGAegIAKQAVBdADAuQADAuAEAWQAEAWgaDFQgbDDAABiQAABigCA6QgDA6AKBiIAAAAQACBAgBA4IgBADQgMAOgNAJQg3AnhZg9IgBgCIgBgDQAEgeAAgkQAEjqgokFQgqkGgCg0QgDgzAIhXQAHhYAXg9QADimgllEQgjk2gWiYQgNAUgKAVQgoBRgtCWQguCYhPElQhQElggBUQgLB1hGDnQhFDngiCqQgiCqgVCVIgWCaIAAAAQAAALgpAYQgRAKgYAAIgIAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-88.1, -209.1, 176.2, 418.3);
    p.frameBounds = [rect];


    (lib.adrian_dress_base_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("EgJyAhrIgEgCIABgFQARgsAejkIApk6QAMhWADiqQADirAQhoQAPhqBIhuQAMhMAOh2QAWi+AkkpQAkknAkiAIAiiBIAAgBIA8iwQAGgvAHglIAAgBIAIgoQALgzAIhQQgHgpgKhnQgJhdgEg+QhCh4ghhcQgKgcgHgaQgGgFgEAAQgDAAgCAEIAAABIAAAAQgXAfgSAnQgkBWgeBBQgcA9g6B1Ig0BmIAcgSIABAAIgNAiIgDAGIAHgCIAggKIgFALIgNATIgEAGIAHgCIABAAIAigDIgJAKIgPAQIgGAFIAHAAIABAAIAWACIANACIglAYIAsAIIgfARIgHADIAHADIAVAHIAMAFIgoAPIAbALIAMAGIgpAMQANAGANAHIAMAHIgqAJIAlAWIgqAHIAkAYIgrAEIAjAaIgrADIAiAaIgrACIAhAbIgrABIAhAcIgsAAIAhAdIgrgBIAgAcIgrgBIAfAeIgrgDIAeAeIgrgDIAeAeIgqgDIAeAeIgrgDIAeAeIgNgBIgdgCIAWAUIAKAIIgOAAIgcABIAFAEIABABQAIAGAIAIIAKAIIgjAAIgHAAIAEAGIABAAQAGAJAEAMIABADIgDACQAmBEAOAfQARAiACAVQACAWgGAQQgFALgRAiIgBACIgBAAQgEAYgQAJQgTAKgkAAQgiABgSgMIgCAAQgNACgNgCQgQgCgGgHQggAAgJgLQgDgDgCgJIgEAAIgBgBQgWgQgDgMQgCgGAAgiQAAgiADgUQADgUAJgmIABgeIABgWIgyAAIAhgcIgegBIgNgBIAigaIgrgDIAjgZIgqgFIAkgYIgrgHIAlgWIgdgGIgNgDIAlgUIgqgKIAmgUIgqgKIAogTIgqgMIAngRIgpgOIAogQIgcgKIgMgFIAngPIgogOIAogPIgogOIAngQIgogOIAogQIgpgPIAogPIgogPIApgOIgogRIAqgNIgogSIANgDIAdgIIgmgUIANgDIAdgGIgZgQIgLgHIANgCIAdgEIgjgaIAtgBIgggeIANAAQAQABAHACIgBgBIAIABIgFgGIgNgRIgHgLIAMADIAVAFIAIADIgEgIIAAABQgFgIgFgMIgFgMIAfAOIABAAIAGADIgCgHIAAAAIgGgVIgDgNIAdAUIAAAAIAGAFIgBgIIgBgWIAAgMIAXAYIAAABIAGAGIAEgrIAAAAIAYAmIADgOIAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAAgBIAFgEIAAgBQAfgiAohlIAIgWIAFgNIAGgSIAchXIg+AAIAigdIgtgDIAlgZIgqgJIALgGQAJgGAKgFIAIgDIgdgJIgMgFIAMgFIAcgLIgcgMIgMgFIAqgMIgngVIArgJIgagPIgKgHIAMgDIAdgEIgYgSIgLgIIArgDIgigaIAOgBIAdgCIgggbIANgBIAdAAIgfgdIArACIgegfIArAEIgdggIAqAFIgcggIArAGIgcgiIArAIIgbgjIArAJIgagjIAqAKIgZgkIAqALIgYgkIAqAMIgYglIAqAMIgXglIApAOIgWglIApAOIgVgmIApAPIgVgnIApAQIgUgmIAoAQIgSgnIAnASIgSgoIAnASIgQgnIALAGIAbANIgPgpIAmAVIgOgpIAlAXQgEgPgDgPIgDgNIAjAaIgIgqIAKAIIAXATIgCgeIgBgNIAJAJIAVAVIAAgeIAAgNIAJAKIATAXIACgeIACgMIAHAKIASAYIAIgrIAVAoIANgrIABAAIAPArIAUgmIADALIAEAQQAAgcgCggIAAgOIABgBIAJAMQAfAxBWA6QBSA4BCAUIACABIAEAIIAAACQgCAaASAXIgNgZIANAFIAbALIgMgbIgGgMIAMAFIAbANIgKgcIgEgLIALAFIATAMIAHAEIgCgIQgDgGgCgPIgBgNIAaAWIAFAEIABgHQABgLADgLIADgKIAGAJQAHALAEAIIAAABIADAHIADgHIAJgUIAGgMIAKArIAXgnIABAAIAFAsQAIgMAKgMIAIgKIACArIAcghIAAArIAdgfIgCAiIgBAJIAjgbIABAAIgNArIAogVIAAABIgTAoIApgOIgHALIgQAZIArgKIgaAiIAqgJIgaAiIArgKIgaAjIAqgIIgJAKIgSAXIAqgGIgIAKIgUAWIAqgEIgJAKIgVAVIAegBIANAAIgfAcIAdAAIANABIgKAIIgXATIArAEIgLAHIgYARIAqAGIgLAIIgZAPIAcAGIAOADIgmAUIApAKIgmAUIApAJIgkAUIAcAFIAOACIgMAHQgNAHgMAJIAeACIAOABIgMAIIgWASIAqAAIggAcIAdAAIAOAAIghAbIAdACIAOACIgLAHIgYARIAIABIAVAEIAOADIgnAVIAIACQAKACALAFIANAFIgqAOIAoAVIAAABIgsAHIAHAEIARAOIALAJIgsAAIAfAeIgNAAIgWgCIgHgBIAEAGIAWAdIAAAAIgsgMIAVAnIgMgFIgUgJIgHgDIACAGIAAABIAEAWIABALIgJgGIgRgPIgFgFIAAAHIgBAKIACAKIAAABQAKBZAOBPIAAABIAFAHIACAEIAAgBIABAAIATgcIACAMQACAOAAAIIABAIIAFgGQAHgIAJgHIAJgIIgDAhIAAABIgBAHIAGgFIASgMIAMgIIgNArIAngVIgFANIgJAUIgEAHIAogOIgGALIgLATIgFAHIAqgJIgIAKIgNASIgGAGIArgEIgJAKIgQAPIgHAGIAsADIgLAIIgSAMIAAAAIgHAEIAqAIIglAVIAqAJIgmAVIArAJIgmAUIAcAIIANADIgmATIAqAMIgoARIAcAKIANAEIgnAQIAoAPIgNAFIgcAJIAbAMIAMAGIgMAEIgdAIIAnAUIgOADIgcAHIAoARIgNAEIgbAJIAnAOIgnAQIApANIgoARIApANIgMAFIgbALIAbAMIAMAFIghALIAAAAIgJACIAmAWIgmAGIABAHIAAAAIABABIAAAAIADAQQAGAgAAAcQAAA5gCAgQgDBLgKAkQgDBDg3AMQgYAFgyAAQgnAAgNgTIAAgBIgCgCIgDAAIgdgdIAAAAIAAgBQgHgKAAgbQAAgfADgKQACgNAIgJQgDgLAAgIQgBgSAog5QAjgyAKgHIAEgJQgPgLAGgNIAAAAIADgHIgHACIgiAJIAIgLQAIgNAEgEIAFgHIgrAGIAdggIgqAEIAJgKIAUgVIgcAEIgOADIAJgLIASgWIgpAKIAYgjIgpALIAYgkIgqAMIAZgkIgrALIAagjIgqAIIAIgKIASgXIgrAGIAKgKIAUgXIgsADIALgKIAWgUIgdgBIgOgBIALgIIAYgRIgegFIgNgCIALgHIAZgPIgqgJIAMgGIAagPIgdgHIgNgEIAogSIgpgOIANgFIAbgKIgbgMIgLgGIAMgDQAOgFAPgEIgngUIAOgDIAdgGIgjgXIANgCIAVgCIAJgBIgigcIAAAAIAtACIgFgGIgBgCIgCgPQgOhNglhZQgUgxg0hgIgMBHQAAAwAKBnQAKBkAIAsQAJAxAXBjIAEATIATBWIAFAeQA4GogQETQgREUgtCiIgBABIAAABIgRB9IgIAyQgGAfgIAKQAUBcADAvQADAuAEAVQAEAWgaDGQgaDDAABhQgBBigCA7QgCA5AKBiIAAABQACA/gCA5IAAABIgBABQgeAmgqAAQgqAAg2gkIgCgCIAAgDQAEgfgBgkQAFjqgpkFQgpkGgCgzQgDg0AHhXQAHhYAXg9QAEimgllEQgkk2gViYQgNAUgKAVQgpBRguCWQgsCYhPElQhQElggBVQgMB0hFDnQhFDngiCqQgjCqgVCWIgVCZIAAAAQAAALgqAZQgQAKgZAAQgjAAg0gUg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-92.8, -217.5, 185.6, 435);
    p.frameBounds = [rect];


    (lib.adrian_dress_base_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("EgKMAhmIgDgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQARgtAejjIApk7QAMhWADipQADirAQhpQAPhpBIhvQAMhLAOh3QAWi+AkkoQAkknAkiAIAiiCIAAAAIA8iwQAGgwAHglIAAAAIAIgpQALgyAIhRQgHgpgKhnQgJhdgEg+QhXicgdhuQgGgEgEgBQgDABgCAEIAAAAQgXAggSAnQgkBWgeBBQgcA9g6B1QgzBmgQAZQADA0gLAtIAAAAQgEASgeBeIAAABQggBegPAxQgZBVAAA3QAAA9AMAmQAHAUAKANIAAAAQAsBOAQAiQARAiACAWQACAWgGAQQgFALgRAhIgCACQgEAYgQAJQgTAKgkABQgjAAgRgMIgDABQgMABgNgCQgQgCgGgHQggAAgJgKQgDgEgCgIIgBAAIgCAAIgCgBQgWgRgDgLQgCgGAAgjQAAgiADgTQADgVAJglIAChAIACgeQAUnVAniYQAGgYAHgQIAAAAQAIgWAKgIQAlgjAwiBQAlhnAbhsQAOg7AgidIAAgBQAyiaAwgwQAwgxBsghQBqghBOhAIAAgBQBMgqgLilIABgDQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABIADACQAhAxBUA5QBSA4BCAVQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIABADIAAABIABABIACACIAAACQgEA3BQAkIB6AzQBxAOAwBaQAwBZACBFQACBEAPCzQAOCyAZCNIATAgQAzBVAQBKQASBXAMBjQAGA0AKAxQAJAqAMAnQAIAZAFAXQAIAqACAnIABAAIACACIABADIAAAKIAAATIgCBGQgDBLgKAkQgDBDg3AMQgYAFgyAAQgnAAgNgUIAAAAIgCgDIgDAAIgCgBIgbgcQgHgKAAgbQAAgfADgLQACgMAIgKQgDgLAAgIQgBgSAog5QAjgxAKgIQAFgJACgOQAFg3g8h3QhPibgOg1QgQg2gJhgIAAgBQgKhfgvhzQgUgxg0hgIgMBHQAAAxAKBnQAKBkAIArQAJAxAXBjIAEATIATBXIAFAdQA4GpgQESQgREUgtCjIgBABIAAABIgRB9QgDAOgFAkQgDANgDAJQgEAMgEAGQAUBcADAvQADAuAEAWQACAHgCAaQgEA1gSCFQgaDDAABiQgBBhgCA7QgCA6AKBiIAAAAQACBAgCA4IgBADQgeAmgqAAQgqAAg2glIgCgCIAAgDQAEgfgBgjQAFjrgpkEQgpkGgCg0QgDg0AHhXQAHhXAXg9QAEingllEQgkk2gViXQgNATgKAWQgpBRguCVQgsCYhPEmQg5DOggBnIgTA7IAAAAIgEAJQgLB1hGDnQhFDmgiCrQgjCqgVCVIgVCZIAAABQAAALgqAYQgQAKgZAAQgjAAg0gUg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.7, -217, 173.5, 434.1);
    p.frameBounds = [rect];


    (lib.adrian_dress_base_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("EgKFAiHIgDgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAAAQANgkAXidIALhPIApk7QALhWADipQADirAQhpQAQhpBIhvQAMhLAOh3QAVi+AlkoIAHg7IABgCIAAgDQAgj1AfhyIAjiCIAAAAIA7iwQAJhAAEgVIAFgYIADgRQALgyAIhRQgGgpgKhnQgKhdgEg+QglhEgbg7IgUgtQgIgVgGgTIAAABIgLghIgGgWQgJgHgEAEIgCABIgBACIgEAGQgVAdgQAkIgIATQgfBKgbA6QgcA9g6B1IAAAAIgBACIAAABQgyBkgPAYQACA0gKAtIAAAAQgEASgeBeIAAABQghBegOAxQgaBVAAA3IAAACIAAACIAAABIABAJIAAABQAAAkAGAbQAHAiAPAUIABAAQAsBOAQAiQAQAiACAWQACAWgGAQQgEAKgRAbIgCACIgBAAIAAABQgCAegSAJQgSAKgkABQgjAAgSgMIgCABQgNABgNgCQgQgCgFgHQghAAgIgMQgEgEgBgIIgDAAIgDgBQgVgPgEgLQgCgGABgjQAAgiADgTQADgVAIglIACgoIADhFQAFhtAGhbQgTg3gLgzQgPhEAChtQAChmAUhQQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABAAIADgBIADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIACADIAFAiQADASAOAnIADgMQAWhjAlhKIABgCIABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIACAAIADACIADACIAAADQgDAZAAAKQAAARACARQAigpAphxIAMggIABgCIAAgCQAdhWAWhZIAShSIAPhEIANhCIABgBIAKgdIABgCIAAgCQAsh+AqgrQAwgxBtghQApgNAlgRQhGgvAAhAQAAgYARgnQAQglAZgbIAAAAQAYgcAsgaQArgcBGgaIADAAIADABIABADIACAVQAEAlgBAJIABAwQgCB6g7ApQAQAMAXANIABABQBZApBQA1QBBArAQA+QANg7ASgSQAWgWAcgVIAigZIgDgBQhXgoAFg9QAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABAAIACgCQA0gKAvgiIAXgQIAAAAQAzgkAVgLQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAABIADABQAPAQAMAYQANAaAIAiQAFAXAAAHQAAA8g1ArIgPAMIAUAIQBwAOAxBaQAvBZADBFIABAVIADA0QAEBDAIBrQAOCjAWCFIABgBQADgEADgJQAFgVABgtIABgDQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIADAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQA1BGAABfQAKgvgFghQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIADgCIADAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAzBAAIHgIAUBsQAGAjAHAIIABACIABAfIAAAYIgBBBQgDBLgLAkQgDBDg3AKQgXAFgyAAQgoAAgNgSIgDgGIgegZIgBgBQgHgKAAgbQAAgfADgLQADgMAIgKQgEgLAAgIQAAgSAog5QAhgwAKgIIAAADIABgDIAAAAIAAAAIAAgBIABAAIAAAAIAAABIADgDQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIAHgmQgDg4g0hnQhOibgPg1QgPg2gKhhQgJhfgvhzQgVgxg0hfIgLBGQAAAxAKBnQAJBkAIArQAJAwAWBfIABAFIAFATIASBXIAFAdIAAABQA5GogRESIgGBVQgSDZgmCJIAAABIAAABIgSB9QgDAOgFAkQgGAegIAKQAVBcADAvQADAuAEAWQAEAWgaDFQgbDDAABiQAABhgCA7QgDA6AKBiIAAAAQACBAgBA4IgBADQgeAmgrAAQgqAAg1glIgCgCIgBgDQAEgdAAggIABgDIgBgCQAEjrgokEQgpkGgDg0QgDg0AIhXQAHhXAXg9QADingllEIgHhEQgfkDgSiGQgNATgLAWQgoBRguCVQgtCYhPEmQhQElggBUQgLB1hFDnQhFDmgjCrQggCfgUCOIgDASIgWCZIAAABQABALgqAYQgQAKgZAAQgjAAg0gUgAEw8uIAEABIAAAAIABgBIABAAIAAgDIgCgBIgCAAIAAAAIgCACIACgBgAEz8yIAAAAIAAgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-87.4, -220.3, 174.8, 440.7);
    p.frameBounds = [rect];


    (lib.adrian_dress_base_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("EgKMAhxIgDgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQARgtAejjIApk7QAMhWADipQADirAQhpQAEgbASg/QAMgrAkhYQAdhGAOh3QAWi+AkkoQAkknAkiAIAAgBIAiiBIAAAAIA8iwQAHg0AHgnIAAAAIAHgjQALgyAIhRQgHgpgKhnQgJhdgEg+QhXicgdhuQgGgEgEgBQgDABgCAEIAAAAQgXAggSAnQgkBWgeBBQgcA9g6B1Qg0BmgPAZQABAZgBAYQgCAZgGAXIAAAAQgEASgeBeIAAABQggBegPAxQgJAegFAaIAAABQgFATgCARQgEAaAAAVQAABeAdAmIAAAAQAsBOAQAiQARAiACAWQACAWgGAQQgFALgRAhIgCACQgEAYgQAJQgTAKgkABQgiAAgSgMQgOADgOgDQgQgCgGgHQggAAgJgMQgDgEgCgGIgCAAIgDgBQgWgRgDgLQgCgGAAgjQAAgiADgTQADgVAJglQAGipAHh0IADgjQAOjbAUh0IAAgBIAIgoQAQhIAUgRIAAAAQAagZAghIIAAABIAJgVIASgvQAlhnAbhsIAZhwQgIgnAPhOIAKgpIADgOIAAAAQAfh6BFgoQBDgpA4gKQA2gLAUgHIAtgUQhjgxABhBQAAheApgtIAAABQAqgvBcAAIApADIA3AHIADACIABADIgCARIgCADIAAABQAEBMgPAyIAMAFQBkAqCBAyIAjgIQgHgQACgRIABgCIACgCIACAAQAJAAAUgHQAUgIAtgaIA7gjIAJgFIADgBIAAAAQANgRAKgHQAOgLAIAIIABAAQAMAMAPASQAnAwAAAWQAAAsg1A5QgaAbggAXIAlAEQCCAJAwA9QAwA9ALBEQAKBCgeBpIALCLQAKCCAQBuIANBPQA5BZAXBNIAAABIAGAYIACAIQARBUALBeQAIBLASBDIALAoIADAIQAYBRAAA3QAAA4gCAhQgBApgEAdQgDAYgFARQgDBDg3AMQgYAFgyAAQgnAAgNgUIAAAAIgEgGIAAAAIgdgZIgBgBQgHgKAAgbQAAgfADgLQACgMAIgKQgDgLAAgIQgBgSAog5IAAAAIAUgcQASgYAHgFQARgfgZhKIAAAAIgOgkQgLgagPgeQgthYgYg3QgSgqgGgXQgNgsgIhGIgEglQgKhfgvhzQgUgxg0hgIgMBHIACArQACArAGBCIAEAlQAHBHAHAjQAIAtAUBVIAEASIANA7IAFAXIAKA1QA4GpgQESQgREUgtCjIgBABIAAABIgKBOIgHAvQgCAJgICLQAKA5ABAYIAFAyIACASIABAIQAAAlgXCuQgaDDAABiQgBBhgCA7QgCA6AKBiIAAAAQACBAgCA4IgBADQgeAmgqAAQgqAAg2glIgCgCIAAgDQAEgfgBgjQAFjrgpkEQgpkGgCg0QgDg0AHhXQADgeAEgcQAIgyAPgoQADiYgekcIgGg3Qgkk2gViXQgNATgKAWQgpBRguCVQgcBhgqCcIg1DBQhQElggBUQgDAZgFAeQgEAbgHAgQgVBhgpCJQhFDmgiCrQgjCqgVCVIgVCZIAAABQAAALgqAYQgQAKgZAAQgjAAg0gUg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.7, -218.1, 173.5, 436.3);
    p.frameBounds = [rect];


    (lib.adrian_dress_base_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2A2A2A").s().p("EgKMAgyIgDgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQARgtAejjIApk7QAMhWADipQADirAQhpQAPhpBIhvQAMhLAOh3QAWi+AkkoQAkknAkiAIAiiCIAAAAIA8iwQAKhLALgzQALgyAIhRQgHgpgKhnQgJhdgEg+QhXicgdhuQgGgEgEgBQgDABgCAEIAAAAQgXAggSAnQgkBWgeBBQgcA9g6B1Qg0BmgPAZIABAdIAAABQgBAhgHAfIgBADIAAAAQgEASgeBeIAAABQggBegPAxQgZBVAAA3QAABeAdAmIAAAAIAXApIARAeIAAABIAUAoQARAiACAWQACAWgGAQQgFALgRAhIgCACQgEAbgQAIQgTAKgkABQgjAAgRgMIgCABQgNABgNgCQgQgCgGgHQggAAgJgMQgDgEgCgIIgCAAIgDgBQgWgRgDgLQgCgGAAgjQAAgiADgTQADgVAJglIABgdQAWpJAyiGQAIgYAKgKIADgDIAAAAQAlgjAwiBQAlhnAbhsQAMgyAWhrQgNgNAEgnQABgTAHgaQAah2BLhEIAAAAQBKhFBVALIAHgDQBqghBOhAIAAgBQAdgQAXg4IALghQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAIADgBIADABQB/BYAjANQAfAKAaBhQADhdAkgjIAAAAIABgBIADgBIACABIAFACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAIACAGIABACQgBAOAFAOQANAkA7AbIB6AzQB4gFA4BbQA4BZgFBTIgFA5IAAAAQgDAZgDAHQAEBAAIBiQAOCyAZCNQAcAtAVAqIAOAhIABAAQAOAlAIAiQASBXAMBjQALBiAaBUQAbBWAAA6QAAA4gCAhIgEA5QgCAVgDAPIgEASQgDBDg3AMQgYAFgyAAQgnAAgNgUIAAAAIgCgDIgDAAIgCgBIgbgcQgHgKAAgbQAAgfADgLQACgMAIgKQgDgLAAgIQgBgPAcgpIAMgTIAAAAIAIgKIAAgBQAcgnAJgHQAbgwhLiVQhPibgOg1QgQg2gJhhIAAAAIAAgCIgGgpQgOhOglhZQgUgxg0hgIgJA2IgDASQAAAnAHBKIABAOIACAYQAKBkAIArQAJAxAXBjQAVBbAHAsIANBpIAJBUQAeEsgMDSQgREUgtCjIgBABIAAABIgRB9QgDAOgFAkQgGAegIAKQAUBcADAvQADAuAEAWQAEAWgaDFQgaDDAABiQgBBhgCA7QgCA6AKBiIAAAAQACBAgCA4IgBADQgeAmgqAAQgqAAg2glIgCgCIAAgDQAEgfgBgjQAFjrgpkEQgpkGgCg0QgDg0AHhXQAHhXAXg9QADh+gVjYIgPiVIgNhsIgSicIgTiRIgHg0QgNATgKAWIgEAIIAAABQgdA7gfBeIgXBEIgXBVQgiB1gvCsIgTBIQhQElggBUQgMB1hFDnQhFDmgiCrQgjCqgVCVIgVCZIAAABQAAALgqAYQgQAKgZAAQgjAAg0gUg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.7, -211.8, 173.5, 423.7);
    p.frameBounds = [rect];


    (lib.adrian_dress_base_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("EgJdAh1IAAAAIgXgGIgBAAIgYgJIgCgBIgBgDIAAgCQARgtAejjIApk7QAMhWADipQADirAQhpIAEgVIAAAAQAShfBBhkQAMhLAOh3IAGgvQAPiFAWiyIAPiAQALhbALhJQAZiqAZhZIAiiCIAAAAIA8ixIAAgBIADgEIgBgCIgBgCQAHgwAHgmIABgBQAEgHgBgMIAAgBIACgJIAAAAQALgyAIhRQgHgpgKhnQgJhdgEg+QhAhzghhaIgFgOIAAAAQgHgXgGgVIAAABIgBgEIgHgEQgEgBgCACIgCADIAAAAQgXAggSAnQgkBWgeBBQgcA9g6B1Ig4BxIgKAcQABAogKArIAAAAQgEASgeBeIgTA6IgCACIAAAAIgCAGIAAABQgXA3gDAVIgFAbIAAAAQgNAvgDAlIgCAXQAaAfASArIABACQAAAeALAaIALAgIAAABIAAABQABAFgRAFIgBAAIAJARIAAAAIAeA6IAFAKIAAAAQAMAcACASQACAWgGAQQgEAJgOAYIAAABIgDAFIgDACIAAAAIAAABIAAAAQgCAcgSAJQgTAKgkABIgPgBIgBAAQgXgCgNgJQgOADgOgDQgQgCgGgHQggAAgJgKIAAAAIgCgDIAAAAQgegbgDgLQgCgFAAgfIAAgFQAAgaACgSIABgJIAAAAIADgPIAFgWQgRgKgLgMIgBgDIABgDQANgPACgMIABgaIAAgEQAAg1ggguIgaglQgKgPABgEIAAgIQADgTAOgMQAJgIAMgFQAWgKAfAAIAFgBIABgNQASkeAch5IAAAAIACgDIgBgDQAEgRAFgNIAAAAQALgjANgMIAAAAIAHgHIAAgBQAIgIAIgNIABgBQAZgnAchMIACgDIAGgQQAiheAZhjIAEgSIABAAIAPhGIAAABIAHgwIAAgBIAAgBIAAgBIAAAAQgDgaAAgLQAAi9BphVQBBg3BugOIABgBQBqghBOhAIAAgBQArgXAPg8QAMgygFhKIABgDIADgCIADAAIADACQAhAxBUA5QBSA4BBAUIABABIABAAIACACIAAACIADAPIAAAAQADAwBJAiIB6AzQAZABAWAGIAAgBQBLAQAoA4QAzBJADBIIACA8IAAABIAAAhQAABBADAoIAAAAIAHBXQAOCyAZCNQBDBoATBXQASBYAMBiQALBiAaBUIAIAcQAegUAXAAQAJAAAGACQAGACAEADQAIAFADAHIAAADIgCADIgGAGIgBAAQgRASgQArQgVA1AAAlQAAAJAEARIADAQIAAAAIAAAHQAAANgEACQgDADgKABQgBAZgDAVQgEAXgEAQIgBAOIAAAAQgHA0gtANIAAAAIgFABQgYAFgyAAQgnAAgNgUIAAAAIgEgGIgdgZIgBgBQgHgKAAgbIAAgMQAAgVADgJQACgLAHgJIABgBQgDgLAAgJQgBgRAmg2IAAAAIACgEIAAAAIAHgJIgFgCIgBAAIgCgBQgCABgEgFQgIgFAOgQIABgBIAUgQQABgGABgHQAAgLgCgSIAAgBIACgKIABgFIADgGQADgHAFgDIAAgBQAFgEAHAAQgGgXgLgbIAAAAQgNgggTgnQhOibgPg1QgQg2gJhhQgKhfgvhzIAAAAQgUgxg0hgIgMBHQAAApAIBRIAAAAIACAeIAAADIgBAAIABABIABACQAJBfAIAqQAJAxAXBjIACAIIAAAAIATBbIABACIAFAfIABADIAHA0IAAABQAwGFgPEBQgREUgtCjIAAAAIgBABIAAAAIgGAzIgLBLIAAAAQgDAOgFAkIAAAAQgGAegIAKIAIAmQANBAACAlQADAuAEAWQAFAWgbDFQgaDDAABiQgBBhgCA7QgCA6AKBiIAAAAQACBAgCA4IAAAAIgBAEQgjArgzgHQgbgEgggRIgXgPIgCgCIAAgDQAEgfgBgjQAFjrgpkEQgpkGgCg0QgDg0AHhXQAHhXAXg9QAChlgMigQgJhngOh/Qgkk2gViXQgNATgKAWQgpBRguCVIgfByIAAAAQgYBSgdBrIgnCPIgYBYIgBABIgBADIgTBHIAAAAQgtCcgWA6QgGA+gWBeQgUBTghBtQhFDngiCqQgjCqgVCVIgVCZIAAABQAAAJgXAPIgTALQgQAKgaAAQgRAAgVgFg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-93.6, -217, 187.4, 434.1);
    p.frameBounds = [rect];


    (lib.adrian_bottom_base_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AowWgQghgKgNgtIAAgDQAUhLAaioIA2lZQALhIAEiNIAAgmQAChUAEhEQAFhHAIg1QAPhnBFhsIAAAAIADgFIADgPQALhGANhrIAhkWIAViwIAEggIALhZQAejkAehtIAiiBIABgBIA7iwIACgPIAKhAIABgCIADgCIADAAQE1B0FghTIADAAIACABIABADIAKAyIACAOQA1GLgLEKIgCAoIgCAeQgRD9gqCYIgBAEIAAABIAAAAIgSB9IAAABQgDAOgFAjIAAABQgGAcgIAKQAVBcADAvQADAuAEAWQAEAVgaDGQgbDDAABgQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIABA0IABAqIAAAAIABATIAAAAIAAANIAAAAQADAmAACSIAAAAQAEBtAVA4IAAADIgBADQhnBQhnhFIgBgCIgBgCIABgFQAQgzAAhFQAEjrgokFQgpkFgDg0QgDg0AIhXQAHhXAXg+QADikgllEQgjk4gWiXQgMATgLAVQgoBSgvCXQguCYhNElQhQEjggBVQAABKg4DMQhTEsgfCTQghCdg5FKIgBAJIAAAAIAAAcIgBACIgCACQgxAfgjAKQgRAFgPAAQgLAAgJgDg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60.7, -144.3, 121.5, 288.7);
    p.frameBounds = [rect];


    (lib.adrian_bottom_base_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AC8I+IAAAAQglgCghgJQgogLgigSIgCgCIgBgCIgJpQQhBDxglDlQgJA7gIA7IgBACIgDACQgrAHgpACQhvAFhmgjIAAAAQgugQgsgYQgdgQgbgTIgCgCIgBgDQAGg7APhLQAtjlB9l8IAAAAIAHgUIAdhYIARgxIABgDIAFgRIAMhPIACgDIACgBIADAAIA3ATQBNAXBOAMQA7AJA/ADQAkABAlgBQAlgBAlgDQBFgHBHgOIAqgJIADAAIACACIABACIAMBAIAAAAIADARIAGAwIADAXIAOBcIATB0IANBKIAAABIAFAcIAAABIAAAEIAAAAIABAHIAbCPQAPBUAJBQIAFA4QAJBqgEBjIgBADIgCACQgsARgrAMIAAAAIggAJQhoAchVAAIglgCg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53.8, -57.6, 107.6, 115.3);
    p.frameBounds = [rect];


    (lib.adrian_bottom_base_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AoCKFIgCgCIAAgCIAGgzIAdkBQgbgQgagSIgCgCIgBgCQAGg8APhLQAtjjB9l+IAAAAIAHgTIAdhYIARgyIAAAAIAAgBIABgBIAFgSIAMhPIACgDIACgBIADAAQE2BzFfhTIADAAIACACIABACIAMBAIAAABIADAQIAAABIAJBGIAOBcQAaClAnDUQAPBRAJBQIAFA4QAJBqgEBjIgBADIgCACQgsARgrAMIAAAAIgdAJQgUBZgIAbIAAAAIAAABIAAABIgQBxIAAACIgCACQiDBWhyhAIgBgCIgBgCQgChTgIicQglgKghgRIgCgCIgBgDIgJpQQhBDxglDlQgJA7gIA7IgBADIgDABQgpAHgoACIgcBfIg2DEIgCACIgCABQgpAMgoAAQhcAAhThBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53.8, -71.1, 107.6, 142.2);
    p.frameBounds = [rect];


    (lib.adrian_bottom_base_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("ABnHkIgCgCIgBgCIgFgoQgjk4gViVQgNATgLATQgmBSguCXQgZBTgjB9IgBACIgCACQi3BRiPiLIgBgCIAAgCIAMhkQAYjJAYh5QALg8AMgqIAjiBIAAgBIA7iwIAFggIAHguIACgDIACgCIADAAQBKAcBMAQIABAAIAMADIAAAAIAsAIQAeAEAcADQAmAEAmABQAnABAogBQAngCApgEIA7gIIAkgGIBCgOIADAAIACABIABADIADAOIAAAAIAJAyQAgDsAJC9QAHCXgIB7QgGBhgJBTIgBADIgCABQhgArhbAAQhMAAhIgeg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46, -51.4, 92.2, 102.9);
    p.frameBounds = [rect];


    (lib.adrian_bottom_base_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("ACXKGIgCgBIgBgDIgFhVQgJh4gSidQgZjZgRiKIgPhqQgMATgLAWQgOAcgPAmQgaBFgeBfQgtCXhPEhIgBACIAAAAIAAABIAAADIgaBeIgBACIgBABQiKBDiKhtIgBgCIgBgDIALhZIArllQAPh8APhdQAUiEAVhKIAiiCIABAAIA7iwIAMhPIABgDIADgBIADAAQBLAcBPAQIAWAEIABAAQAxAJAwAFQBdAJBhgIQAtgEAugGIAagFIAAAAQAogGAogKIADAAIACACIABACIAMA9IAAADQANBeAJBXIAAABIAAACIAAABIAEAiQAOCWADB/IAAAAQADBtgGBeQgODngiCYQgHAdgHAbIAAAAIAAABIAAABIgGAsIgCADQg8A7hPAAQg2AAg/gcg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-48.1, -67.4, 96.3, 134.8);
    p.frameBounds = [rect];


    (lib.adrian_bottom_base_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AogWjQgvgDgPg3IAAgCIAIgeIAAAAQARhLAViKIA2laQAMhSADipQADirAQhpQAQhpBHhvQANhJAOh3QAVi+AlkoQAPh8APhfQAUiEAVhKIAiiCIABAAIA7iwIAMhPIABgDIADgBIADAAQBLAbBNARIAWAEIABAAQAxAJAyAFIAeACQA7AEA9gCIAogDQAtgEAugGIAagFIAAAAQAogHAogJIADAAIACACIABACIAMA9IAAADQANBeAJBXIAAABIAAACIAAABIAEAiQAOCVADCAIAAAAQADBvgGBeQgREUgtCjIAAAAIAAABIAAABIgSB9IAAAAIgEAbIgBACIgCACIg8AlIgEABIgDgCIgfgkIguAsIgDACIgDAAIgCgCIgUgbIgaAuIgDACIgjATIAwAaIA6gdIACAAIADABIACACIAQAmIAtg2QABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIAxAmIACADQALA3ACAhQADAuAEAWQAEAWgaDFQgQB1gGBRIAAAAQgFA2AAAnQAABhACAhQADAmAACSQACBNAMA0IABAAQAEAUAGARIAAADIgBACQhnBQhnhFIgBgCIgBgCIABgEQAFgPADgRQAIgoAAgxQAEjagjjxIgFgkQgpkGgDg0QgDg0AIhXQAFg+ANgwIABgDIAAgCIALghQADikgllFQgZjagRiMIgPhpQgNATgKAWQgOAcgPAmQgcBEgeBiQguCYhNEmQgzC6gfBkIgCADIgDABIgDgBIgCgDIgNgvIgpAFIgEgBIgCgDIgMgkIgyAiIgDABIgrAAIgSAWIAmANIACACIABAEIgCADIgnAeIAxAaIACADIAAACIgEAfIA5gfIADAAIADABIAaAbIAkgqIADgCIADABIACADIAAADIgOAoQAABKg4DMQhTEsgfCTQghCcg4FHIgBABIAAADIgBAJIAAABIAAAbIgBADIgCACQhHAtgsAAIgFAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60.7, -144.3, 121.5, 288.7);
    p.frameBounds = [rect];


    (lib.adrian_bottom_base_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AotWgQgkgIgNgvIAAgDIAIgdIAAAAQARhLAViLIA2lZQAMhSADipQADirAQhpQAQhpBHhvQANhJAOh3QAVi+AlkoQAPh8APhfQAUiEAVhLIAiiBIABgBIA7iwIAMhPIABgCIADgCIADAAQBLAcBNARIAWAEIABAAQAxAJAyAFIAhADQBCAEBEgEIAXgCQAtgEAugGIAagFIAAAAQAogHAogJIADAAIACABIABADIAMA9IgBgBIABADIAAABQANBeAJBXIAAABIAAACIAAABIAEAiQAOCVADB/IAAABQADBvgGBeQgREUgtCiIAAABIAAABIAAAAIgSB9IAAABQgDAOgFAjIAAABQgGAcgIAKQAVBcADAvQADAuAEAWQAEAVgaDGQgbDDAABgQAABhACAhQADAmAACSQACBNAMAzIABABQAEAUAGAQIAAADIgBADQgQAMgQAJIAAAAQhXAxhXg7IgBgCIgBgCIABgFQAFgOADgRQAIgoAAgxQAEjrgokFQgpkFgDg0QgDg0AIhXQAHhXAXg+QADikgllEQgZjagRiMIgPhpQgNATgKAVQgOAdgPAlQgcBFgeBiQguCYhNElQhQEjggBVQAABKg4DMQhTEsgfCTQghCcg4FHIgBAAIAAAEIgBAJIAAAAIAAAcIgBACIgCACQhHAugsAAQgKAAgIgDg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60.7, -144.3, 121.5, 288.7);
    p.frameBounds = [rect];


    (lib.adrian_bottom_base_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0099FF").s().p("AogWjQgvgDgPg3IAAgCIAIgeIAAAAQARhLAViKIA2laQAMhSADipQADirAQhpQAQhpBHhvQANhJAOh3QAVi+AlkoQAPh8APhfQAUiEAVhKIAiiCIABAAIA7iwIAMhPIABgDIADgBIADAAQBLAbBNARIAWAEIABAAQAxAJAyAFQBdAJBhgIQAtgEAugGIAagFIAAAAQAogHAogJIADAAIACACIABACIAMA9IAAABIAAADIAAgBQANBeAJBXIAAABIAAACIAAABIAEAiQAOCVADCAIAAAAQADBvgGBeQgREUgtCjIAAAAIAAABIAAABIgSB9IAAAAQgDAOgFAkIAAAAQgGAcgIAKQAVBcADAvQADAuAEAWQAEAWgaDFQgbDDAABgQAABhACAhQADAmAACSIAAAAQADBOALAzIABAAQAEAUAGARIAAADIgBACQhnBQhnhFIgBgCIgBgCIABgEQAFgPADgRQAIgoAAgxQAEjrgokEQgpkGgDg0QgDg0AIhXQAHhXAXg9QADilgllEQgZjagRiMIgPhpQgNATgKAWQgOAcgPAmQgcBEgeBiQguCYhNEmQhQEiggBVQAABKg4DMQhTEsgfCTQghCcg4FHIgBACIAAABIAAABIgBAJIAAABIAAAbIgBADIgCACQhHAtgsAAIgFAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60.7, -144.3, 121.5, 288.7);
    p.frameBounds = [rect];


    (lib.adrian_body_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F7DDCD").s().p("EgNpApMIgBgDQgEgRAAgNQgBgqAvgnQAtglA2goQA2goAghCQAXhdANhDQBKnTAIg9QAIg9AIhTQAFhaAAiYQAAgzAShYQAVhgA2hIQASglAKhuQANiOASiLIACgNIAslOQAij7AchyQAOg7BDjJQAsiCANjCQgij7gEgWQgFgWgthlQgrhighhuQiJDZieGMIgCAdIAAAAQAAA8g2CjQg1ChAAAWIAAA5IAAAAIAAAJQAGBAAIAYQAIAXAIAJIAAAAQAJAJARAbQARAaAOApQAQAaAEAUQAEAXgEAMQgEAKgVAvIgDACQgCAMgDAEIgBAAQgJAMg9AAQgdAAgKgLIgCgCQgqAIgMgJQgSgEgKgPIAAAAIgCABIgDgBQghgSAAg3QAAgUAGgXIAJg9IAEgfIAAAAQAIhaADiTIAAAAQAxm3Alg9IABgBQAXgSAZg4QAwhoAyi7QAzi+AThMQAkiMBMgyQARgLAlgQQAqgSAagFQAPgDA3gaQA3gbA9g2QA7g1ABg5QAAg7gEg+QgEg9gHgTQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgCQgSgJgPgYIgGgJIAAgBIgEgHIAAAAQgVgpAAgiQAAgSAOgYIAIgMIAAAAQAHgKAJgJIADgBQAEgBAEACIgCgVQgEgcAAgNQAAhkBUhXQBWhWB0gDQB0gEBiA4QBjA4AWBFQAWBEgFAgQgFAfgVBHIAAABIgHASIAAABIgDAGIAAABIAAABQgnBkgPBIQgSBYgOAaQgOAcg/AnQhOAwgbALQgPAHgYgGIgBABIgCABIgCARQAEApASAVIAAAAQAUAUCgBDIABAAIADAAQAKABAKACIAAAAQAdAGAZAOIAAAAIAFADQAtAaAdA0IgBAAQAoBHAPCLQAJBRAICrQALCWAiBwQAmBDAWA/QASAwAKBJIAVCTIAAAAQASBnAjByIABABQAOBBgHBfQgIBbgEAaQgGAogYAIQgVAJguAFQgwAFgTgOQgMgHgFgSQgNgIgGgRQgFgSAAgUQAAgQAGgKIAAAAQAFgIAIgCQgEgKAAgHQgBgRAigvIArg5IABgCQAsgehVjHIAAgBQg2hggTgqQgNgcgGgfIAAgBQgGgmgGgaIAAAAIgNhQIgCgMQgli1gwhdQgeg7ghg8IgHAzQgKBLAAAVQAAARAQCUQAPCGAPBXIgBAAIACAJQAYBeAVCAQApEAAADyQAAAkgPCzQgPDCgkCOQgMAvgJBgQgKBQgNAPIAaCNQAGAhgBA/QgBA9gcDEQgTCFABBPIABAOQAEBzAADfQABCZA3A2QA3A2COBWQBIAsASAgQAUAkgpAXQhLArhCgVQhDgVgXgdQgWgbgfgUQgkgWg4gVQhCgYgpgcIgCgDIgIgaIAAgBQgEghAShDIALgyIACgMIABgBIAAAAIgBgDIgIlIQAAhmghjCQgijBAAh9QAAhKAGgmIAAAAQALg5AVhQQgOixAEgzQADgzgEgoIgnkgQghjtgJiUQgKAKgCAGIgCADQgtAehBDLQgqCNhMEWIAAABQgpB/gnCnQgaBxggAmQgSBvgEAnQgEAnhDDkQhCDfhhJIIgCARIAAAAIgJBGIAAAAQAAAPAFAYQAFAZAAANQAAAsgTAbQgLARggAXQhGAxgVBIIgCACQhPA3hAAAQg6AAgugrg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-87.9, -267.9, 176, 536);
    p.frameBounds = [rect];


    (lib.copyright_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.copyright_img();
        this.instance.setTransform(-250, -150);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-250, -150, 500, 300);
    p.frameBounds = [rect];


    (lib.copyright_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.smoke_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // img
        this.instance = new lib.smoke_1_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 800, 600);
    p.frameBounds = [rect];


    (lib.numbers_separator_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.numbers_separator_img();
        this.instance.setTransform(-24, -24, 0.8, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-24, -24, 48, 48);
    p.frameBounds = [rect];


    (lib.numbers_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.numbers_0_img();
        this.instance.setTransform(-30, -30);

        this.instance_1 = new lib.numbers_1_img();
        this.instance_1.setTransform(-30, -30);

        this.instance_2 = new lib.numbers_2_img();
        this.instance_2.setTransform(-30, -30);

        this.instance_3 = new lib.numbers_3_img();
        this.instance_3.setTransform(-30, -30);

        this.instance_4 = new lib.numbers_4_img();
        this.instance_4.setTransform(-30, -30);

        this.instance_5 = new lib.numbers_5_img();
        this.instance_5.setTransform(-30, -30);

        this.instance_6 = new lib.numbers_6_img();
        this.instance_6.setTransform(-30, -30);

        this.instance_7 = new lib.numbers_7_img();
        this.instance_7.setTransform(-30, -30);

        this.instance_8 = new lib.numbers_8_img();
        this.instance_8.setTransform(-30, -30);

        this.instance_9 = new lib.numbers_9_img();
        this.instance_9.setTransform(-30, -30);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-30, -30, 60, 60);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.numbers_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.numbers_0_img();
        this.instance.setTransform(-30, -30);

        this.instance_1 = new lib.numbers_1_img();
        this.instance_1.setTransform(-30, -30);

        this.instance_2 = new lib.numbers_2_img();
        this.instance_2.setTransform(-30, -30);

        this.instance_3 = new lib.numbers_3_img();
        this.instance_3.setTransform(-30, -30);

        this.instance_4 = new lib.numbers_4_img();
        this.instance_4.setTransform(-30, -30);

        this.instance_5 = new lib.numbers_5_img();
        this.instance_5.setTransform(-30, -30);

        this.instance_6 = new lib.numbers_6_img();
        this.instance_6.setTransform(-30, -30);

        this.instance_7 = new lib.numbers_7_img();
        this.instance_7.setTransform(-30, -30);

        this.instance_8 = new lib.numbers_8_img();
        this.instance_8.setTransform(-30, -30);

        this.instance_9 = new lib.numbers_9_img();
        this.instance_9.setTransform(-30, -30);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-30, -30, 60, 60);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.ParticleGravityExplosionMC = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.gravity_explosion_1_img();
        this.instance.setTransform(-15, -15, 0.625, 0.625);

        this.instance_1 = new lib.gravity_explosion_2_img();
        this.instance_1.setTransform(-15, -15, 0.625, 0.625);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-15, -15, 30, 30);
    p.frameBounds = [rect, rect];


    (lib.sound_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.sound_2_img();
        this.instance.setTransform(-50, -50);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -50, 100, 100);
    p.frameBounds = [rect];


    (lib.sound_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.sound_1_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.remove_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // bg
        this.instance = new lib.remove_1_img();
        this.instance.setTransform(-30, -30, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-30, -30, 60, 60);
    p.frameBounds = [rect, null];


    (lib.play_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.play_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.photo_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.photo_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.more_games_15_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_19_img();
        this.instance.setTransform(-0.4, -0.2, 0.26, 0.26);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-0.4, -0.2, 8.1, 8);
    p.frameBounds = [rect];


    (lib.more_games_14_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_18_img();
        this.instance.setTransform(0, 0.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0.1, 16.6, 27.4);
    p.frameBounds = [rect];


    (lib.more_games_13_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_17_img();
        this.instance.setTransform(-0.1, -0.1, 0.24, 0.24);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-0.1, -0.1, 23.8, 24);
    p.frameBounds = [rect];


    (lib.more_games_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.more_games_1_img();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 50, 50);
    p.frameBounds = [rect];


    (lib.more_games_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_16_img();
        this.instance.setTransform(2.7, -7.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(2.7, -7.5, 41.1, 43.2);
    p.frameBounds = [rect];


    (lib.more_games_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_6_img();
        this.instance.setTransform(-69.8, -64.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-69.8, -64.1, 139.7, 128.2);
    p.frameBounds = [rect];


    (lib.more_games_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.more_games_15_img();
        this.instance.setTransform(0, 0, 0.822, 0.822);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 82.2, 60);
    p.frameBounds = [rect];


    (lib.more_games_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.more_games_14_img();
        this.instance.setTransform(0.3, 0.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0.3, 0.1, 49.7, 67.7);
    p.frameBounds = [rect];


    (lib.more_games_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_13_img();
        this.instance.setTransform(0.1, -0.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0.1, -0.1, 7.2, 7.9);
    p.frameBounds = [rect];


    (lib.more_games_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_10_img();
        this.instance.setTransform(0, 1.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 1.5, 133.9, 135.4);
    p.frameBounds = [rect];


    (lib.more_games_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_9_img();
        this.instance.setTransform(0.1, -0.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0.1, -0.1, 133.9, 114.5);
    p.frameBounds = [rect];


    (lib.more_games_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_8_img();
        this.instance.setTransform(-0.1, 0, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-0.1, 0, 134.7, 95.1);
    p.frameBounds = [rect];


    (lib.more_games_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.more_games_7_img();
        this.instance.setTransform(-0.3, 0, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-0.3, 0, 134.7, 123.1);
    p.frameBounds = [rect];


    (lib.logotype_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.logotype_img();
        this.instance.setTransform(-180, -50);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-180, -50, 360, 100);
    p.frameBounds = [rect];


    (lib.logo_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.logo_1_img();
        this.instance.setTransform(-110, -40);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At5GPQhWABg+g+Qg9g9AAhYIAAl5QAAhYA9g9QA+g+BWABIbzAAQBWgBA+A+QA9A9AABYIAAF5QAABYg9A9Qg+A+hWgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -40, 220, 80);
    p.frameBounds = [rect];


    (lib.instruction_1_mc_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.instruction_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.full_screen_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.full_screen_2_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.full_screen_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.full_screen_1_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.free_games_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.free_games_2_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.free_games_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.free_games_1_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.facebook_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.facebook_img();
        this.instance.setTransform(-60, -60, 0.667, 0.667);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.done_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.done_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.Cursor = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "default": 0
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("Aj2D3QhnhnAAiQQAAiPBnhnQBnhnCPAAQCQAABnBnQBnBnAACPQAACQhnBnQhnBniQAAQiPAAhnhng");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35, -35, 70, 70);
    p.frameBounds = [rect];


    (lib.credits_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.credits_1_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.body_title_reset_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "en": 0,
            "ru": 1,
            "de": 2,
            "fr": 3,
            "it": 4,
            "es": 5,
            "pt": 6,
            "tr": 7,
            "ja": 8,
            "hi": 9,
            "ar": 10,
            "id": 11
        });

        // graph
        this.instance = new lib.title_reset_en_img();
        this.instance.setTransform(-90, -40);

        this.instance_1 = new lib.title_reset_ru_img();
        this.instance_1.setTransform(-90, -40);

        this.instance_2 = new lib.title_reset_de_img();
        this.instance_2.setTransform(-90, -40);

        this.instance_3 = new lib.title_reset_fr_img();
        this.instance_3.setTransform(-90, -40);

        this.instance_4 = new lib.title_reset_it_img();
        this.instance_4.setTransform(-90, -40);

        this.instance_5 = new lib.title_reset_es_img();
        this.instance_5.setTransform(-90, -40);

        this.instance_6 = new lib.title_reset_pt_img();
        this.instance_6.setTransform(-90, -40);

        this.instance_7 = new lib.title_reset_tr_img();
        this.instance_7.setTransform(-90, -40);

        this.instance_8 = new lib.title_reset_ja_img();
        this.instance_8.setTransform(-90, -40);

        this.instance_9 = new lib.title_reset_hi_img();
        this.instance_9.setTransform(-90, -40);

        this.instance_10 = new lib.title_reset_ar_img();
        this.instance_10.setTransform(-90, -40);

        this.instance_11 = new lib.title_reset_id_img();
        this.instance_11.setTransform(-90, -40);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -40, 180, 80);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.body_title_random_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "en": 0,
            "ru": 1,
            "de": 2,
            "fr": 3,
            "it": 4,
            "es": 5,
            "pt": 6,
            "tr": 7,
            "ja": 8,
            "hi": 9,
            "ar": 10,
            "id": 11
        });

        // graph
        this.instance = new lib.title_random_en_img();
        this.instance.setTransform(-90, -40);

        this.instance_1 = new lib.title_random_ru_img();
        this.instance_1.setTransform(-90, -40);

        this.instance_2 = new lib.title_random_de_img();
        this.instance_2.setTransform(-90, -40);

        this.instance_3 = new lib.title_random_fr_img();
        this.instance_3.setTransform(-90, -40);

        this.instance_4 = new lib.title_random_it_img();
        this.instance_4.setTransform(-90, -40);

        this.instance_5 = new lib.title_random_es_img();
        this.instance_5.setTransform(-90, -40);

        this.instance_6 = new lib.title_random_pt_img();
        this.instance_6.setTransform(-90, -40);

        this.instance_7 = new lib.title_random_tr_img();
        this.instance_7.setTransform(-90, -40);

        this.instance_8 = new lib.title_random_ja_img();
        this.instance_8.setTransform(-90, -40);

        this.instance_9 = new lib.title_random_hi_img();
        this.instance_9.setTransform(-90, -40);

        this.instance_10 = new lib.title_random_ar_img();
        this.instance_10.setTransform(-90, -40);

        this.instance_11 = new lib.title_random_id_img();
        this.instance_11.setTransform(-90, -40);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -40, 180, 80);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.bg_small_buttons_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bg_small_buttons_img();
        this.instance.setTransform(-60, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.bg_large_buttons_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.bg_large_buttons_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.beam_light_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.mouseChildren = false;
            this.mouseEnabled = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // graph
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0)", "rgba(255,255,255,0.298)", "rgba(255,255,255,0)"], [0.024, 0.494, 0.984], -75.1, 0, 74.9, 0).s().p("EgLsAnEMAAAhOHIXZAAMAAABOHg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -250, 150, 500);
    p.frameBounds = [rect];


    (lib.banner_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.banner_2_img();
        this.instance.setTransform(-87, -130, 0.867, 0.867);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -130, 180, 260);
    p.frameBounds = [rect];


    (lib.banner_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.banner_1_img();
        this.instance.setTransform(-87, -130, 0.867, 0.867);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -130, 180, 260);
    p.frameBounds = [rect];


    (lib.again_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.again_1_img();
        this.instance.setTransform(-95, -95);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.redirect_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // title
        this.instance = new lib.title_redirect_mc();
        this.instance.setTransform(0, 230);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
        mask.setTransform(0, 5);

        // image_1
        this.instance_1 = new lib.redirect_4_mc();

        this.instance_1.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({
            alpha: 0.012
        }, 15).to({
            _off: true
        }, 1).wait(149).to({
            _off: false,
            scaleX: 0.5,
            scaleY: 0.5,
            x: 95,
            y: 95
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            x: 0,
            y: 0,
            alpha: 1
        }, 15).wait(1));

        // image_2
        this.instance_2 = new lib.redirect_5_mc();
        this.instance_2._off = true;

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({
            _off: false
        }, 0).wait(55).to({
            alpha: 0.012
        }, 15).to({
            _off: true
        }, 1).wait(39).to({
            _off: false,
            scaleX: 0.5,
            scaleY: 0.5,
            x: -95,
            y: -95
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            x: 0,
            y: 0,
            alpha: 1
        }, 15).wait(56));

        // image_1
        this.instance_3 = new lib.redirect_4_mc();
        this.instance_3._off = true;

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({
            _off: false
        }, 0).wait(70).to({
            _off: true
        }, 1).wait(55));

        // bg
        this.instance_4 = new lib.redirect_3_mc();
        this.instance_4.alpha = 0.398;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220));

        // hit
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
        this.shape.setTransform(0, 30);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-230, -210, 460, 480.1);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.preloader_16_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.preloader_13_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            scaleX: 1.25,
            scaleY: 1.25,
            x: -10
        }, 5).to({
            x: 10
        }, 10).to({
            scaleX: 1,
            scaleY: 1,
            x: 0
        }, 5).wait(41));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46, -60, 96, 120);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50.3, -63, 100.8, 126), new cjs.Rectangle(-54.5, -66, 105.6, 132), new cjs.Rectangle(-58.8, -69, 110.4, 138), new cjs.Rectangle(-63.2, -72, 115.2, 144), new cjs.Rectangle(-67.5, -75, 120, 150), new cjs.Rectangle(-65.4, -75, 120, 150), new cjs.Rectangle(-63.4, -75, 120, 150), new cjs.Rectangle(-61.4, -75, 120, 150), new cjs.Rectangle(-59.5, -75, 120, 150), new cjs.Rectangle(-57.5, -75, 120, 150), new cjs.Rectangle(-55.5, -75, 120, 150), new cjs.Rectangle(-53.5, -75, 120, 150), new cjs.Rectangle(-51.5, -75, 120, 150), new cjs.Rectangle(-49.5, -75, 120, 150), new cjs.Rectangle(-47.5, -75, 120, 150), new cjs.Rectangle(-47.2, -72, 115.2, 144), new cjs.Rectangle(-47, -69, 110.4, 138), new cjs.Rectangle(-46.7, -66, 105.6, 132), new cjs.Rectangle(-46.4, -63, 100.8, 126), rect = new cjs.Rectangle(-46, -60, 96, 120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.preloader_14_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.preloader_16_mc();
        this.instance.setTransform(8, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.preloader_15_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-140, -140, 284.7, 284.7);
    p.frameBounds = [rect];


    (lib.preloader_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.preloader_14_mc();
        this.instance.setTransform(0, 0.1, 0.462, 0.462, 0, 0, 0, 0, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // shadow
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AntHuQjOjNAAkhQAAkgDOjOQAygyA5gmQCph1DZAAQDaAACqB1QA4AmAzAyQDMDOABEgQgBEhjMDNQjODOkhAAQkgAAjNjOg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // bg
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkHkIgBl0QABlzEHkIQBChBBHgxQDbiWEXAAQEYAADbCWQBIAxBBBBQEIEIAAFzQAAF0kIEIQkHEHl1ABQlzgBkIkHg");

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180, 180);
    p.frameBounds = [rect];


    (lib.preloader_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_99 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

        // decor
        this.instance = new lib.preloader_18_mc();
        this.instance.setTransform(130, 32, 0.4, 0.4);

        this.instance_1 = new lib.preloader_18_mc();
        this.instance_1.setTransform(130, -2, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(100));

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AAVCVIgVgYIgUAYIxtAAQg7gBgqgrQgrgqgCg8IAAgFQACg8ArgqQAqgrA7gCIRtAAIAUAaIAVgaIRtAAQA7ACArArQAqAqACA8IAAAFQgCA8gqAqQgrArg7ABg");
        mask.setTransform(130, 15);

        // shadow
        this.instance_2 = new lib.preloader_10_mc();

        this.instance_2.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

        // animation
        this.instance_3 = new lib.preloader_7_mc();
        this.instance_3.setTransform(0, 0, 0.003, 1);

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({
            scaleX: 1
        }, 99).wait(1));

        // bg
        this.instance_4 = new lib.preloader_8_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

        // shadow
        this.instance_5 = new lib.preloader_11_mc();
        this.instance_5.setTransform(-20, -20);
        this.instance_5.alpha = 0.102;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 300, 70);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.preloader_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.preloader_2_mc();
        this.instance.setTransform(-525, 0);

        this.instance_1 = new lib.preloader_2_mc();
        this.instance_1.setTransform(-455, 0);

        this.instance_2 = new lib.preloader_2_mc();
        this.instance_2.setTransform(-385, 0);

        this.instance_3 = new lib.preloader_2_mc();
        this.instance_3.setTransform(-315, 0);

        this.instance_4 = new lib.preloader_2_mc();
        this.instance_4.setTransform(-245, 0);

        this.instance_5 = new lib.preloader_2_mc();
        this.instance_5.setTransform(-105.5, 0);

        this.instance_6 = new lib.preloader_2_mc();
        this.instance_6.setTransform(-175, 0);

        this.instance_7 = new lib.preloader_2_mc();
        this.instance_7.setTransform(525, 0);

        this.instance_8 = new lib.preloader_2_mc();
        this.instance_8.setTransform(455, 0);

        this.instance_9 = new lib.preloader_2_mc();
        this.instance_9.setTransform(385, 0);

        this.instance_10 = new lib.preloader_2_mc();
        this.instance_10.setTransform(315, 0);

        this.instance_11 = new lib.preloader_2_mc();
        this.instance_11.setTransform(245, 0);

        this.instance_12 = new lib.preloader_2_mc();
        this.instance_12.setTransform(175, 0);

        this.instance_13 = new lib.preloader_2_mc();
        this.instance_13.setTransform(105, 0);

        this.instance_14 = new lib.preloader_2_mc();
        this.instance_14.setTransform(35, 0);

        this.instance_15 = new lib.preloader_2_mc();
        this.instance_15.setTransform(-35, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-555, -23, 1110, 46.1);
    p.frameBounds = [rect];


    (lib.preloader_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.preloader_2_mc();
        this.instance.setTransform(-560, 0);

        this.instance_1 = new lib.preloader_2_mc();
        this.instance_1.setTransform(-490, 0);

        this.instance_2 = new lib.preloader_2_mc();
        this.instance_2.setTransform(-420, 0);

        this.instance_3 = new lib.preloader_2_mc();
        this.instance_3.setTransform(-350, 0);

        this.instance_4 = new lib.preloader_2_mc();
        this.instance_4.setTransform(-280, 0);

        this.instance_5 = new lib.preloader_2_mc();
        this.instance_5.setTransform(-210, 0);

        this.instance_6 = new lib.preloader_2_mc();
        this.instance_6.setTransform(-140, 0);

        this.instance_7 = new lib.preloader_2_mc();
        this.instance_7.setTransform(-70, 0);

        this.instance_8 = new lib.preloader_2_mc();
        this.instance_8.setTransform(560, 0);

        this.instance_9 = new lib.preloader_2_mc();
        this.instance_9.setTransform(490, 0);

        this.instance_10 = new lib.preloader_2_mc();
        this.instance_10.setTransform(420, 0);

        this.instance_11 = new lib.preloader_2_mc();
        this.instance_11.setTransform(350, 0);

        this.instance_12 = new lib.preloader_2_mc();
        this.instance_12.setTransform(280, 0);

        this.instance_13 = new lib.preloader_2_mc();
        this.instance_13.setTransform(210, 0);

        this.instance_14 = new lib.preloader_2_mc();
        this.instance_14.setTransform(140, 0);

        this.instance_15 = new lib.preloader_2_mc();
        this.instance_15.setTransform(70, 0);

        this.instance_16 = new lib.preloader_2_mc();
        this.instance_16.setTransform(0, 0.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_16
            }, {
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-590, -23, 1180, 46.1);
    p.frameBounds = [rect];


    (lib.preloader_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.preloader_4_mc();
        this.instance.setTransform(400, 50);
        this.instance.alpha = 0.199;

        this.instance_1 = new lib.preloader_4_mc();
        this.instance_1.setTransform(400, 550);
        this.instance_1.alpha = 0.199;

        this.instance_2 = new lib.preloader_3_mc();
        this.instance_2.setTransform(400, 500);
        this.instance_2.alpha = 0.148;

        this.instance_3 = new lib.preloader_3_mc();
        this.instance_3.setTransform(400, 100);
        this.instance_3.alpha = 0.148;

        this.instance_4 = new lib.preloader_4_mc();
        this.instance_4.setTransform(400, 450);
        this.instance_4.alpha = 0.102;

        this.instance_5 = new lib.preloader_4_mc();
        this.instance_5.setTransform(400, 150);
        this.instance_5.alpha = 0.102;

        this.instance_6 = new lib.preloader_3_mc();
        this.instance_6.setTransform(400, 400);
        this.instance_6.alpha = 0.051;

        this.instance_7 = new lib.preloader_3_mc();
        this.instance_7.setTransform(400, 200);
        this.instance_7.alpha = 0.051;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // graph
        this.instance_8 = new lib.preloader_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.orientation_lock_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_8_mc();
        this.instance.setTransform(60, 0);

        this.instance_1 = new lib.orientation_lock_6_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35, -12, 107, 24);
    p.frameBounds = [rect];


    (lib.title_navigation_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.totalPages_mc = new lib.numbers_2_mc();
        this.totalPages_mc.setTransform(25, 0, 0.7, 0.7);

        this.currentPage_mc = new lib.numbers_1_mc();
        this.currentPage_mc.setTransform(-25, 0, 0.7, 0.7);

        this.instance = new lib.numbers_separator_mc();
        this.instance.setTransform(0, 0, 0.875, 0.875);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }, {
                t: this.currentPage_mc
            }, {
                t: this.totalPages_mc
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46, -21, 92, 42);
    p.frameBounds = [rect];


    (lib.title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            ищем наиболее подходящий язык
            https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            /*
		
            */
            var label_str = "en";
            var lang_str = window.navigator.language || navigator.userLanguage || LANGUAGE.getLanguage();
            lang_str = lang_str.split("-")[0].toLowerCase();
            /*
		
            */
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz")) {
                label_str = "ru";
            }
            if (lang_str == "de") {
                label_str = "de";
            }
            if (lang_str == "fr") {
                label_str = "fr";
            }
            if (lang_str == "it") {
                label_str = "it";
            }
            if (lang_str == "es") {
                label_str = "es";
            }
            if (lang_str == "pt") {
                label_str = "pt";
            }
            if (lang_str == "tr") {
                label_str = "tr";
            }
            if (lang_str == "ja") {
                label_str = "ja";
            }
            if (lang_str == "hi") {
                label_str = "hi";
            }
            if (lang_str == "ar") {
                label_str = "ar";
            }
            if (lang_str == "id") {
                label_str = "id";
            }
            /*
		
            */
            this.body_mc.gotoAndStop(label_str);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.body_title_mc();
        this.body_mc.setTransform(-0.5, -0.5, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-307, -133, 614, 266);
    p.frameBounds = [rect];


    (lib.tail_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // substrate
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0, 0, 0.667, 0.667);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 40, 40);
    p.frameBounds = [rect];


    (lib.subcategory_4_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.bg_icon0();
        this.instance.setTransform(-32, -24, 0.6, 0.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_3_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_ico9();
        this.instance.setTransform(-24, -23, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_3_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_ico10();
        this.instance.setTransform(-13.4, -32.8, 0.45, 0.45, 14.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32.8, 64, 66.7);
    p.frameBounds = [rect];


    (lib.subcategory_3_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon12();
        this.instance.setTransform(-28, -13, 0.55, 0.55);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_3_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.icon_hand();
        this.instance.setTransform(-18, -28, 0.647, 0.647);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_3_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_ico8();
        this.instance.setTransform(-25, -17, 0.625, 0.625);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_2_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon13();
        this.instance.setTransform(-25, -24, 0.625, 0.625);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_2_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_dress();
        this.instance.setTransform(-18, -28, 0.45, 0.45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_2_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.icon_4();
        this.instance.setTransform(-21, -26.8, 0.7, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_2_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.icon_top();
        this.instance.setTransform(-24, -22, 0.923, 0.923);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_1_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_eyebrows_1();
        this.instance.setTransform(-0.1, -0.3, 0.963, 0.963, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_1_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_hair();
        this.instance.setTransform(-26, -29, 0.517, 0.517);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_1_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_ico7();
        this.instance.setTransform(-23, -26, 0.524, 0.524);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_1_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_2();
        this.instance.setTransform(-30, -18, 0.462, 0.462);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_1_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_1();
        this.instance.setTransform(-25, -13, 0.477, 0.477);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.subcategory_1_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.body_base();
        this.instance.setTransform(-18, -27.4, 0.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_subcategory_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.option_shoes_kot_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_8_2_img();
        this.instance.setTransform(-70, -70, 0.933, 0.933);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_kot_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_7_2_img();
        this.instance.setTransform(-65, -65, 0.867, 0.867);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_kot_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_6_2_img();
        this.instance.setTransform(-65, -65, 0.867, 0.867);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_kot_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_5_2_img();
        this.instance.setTransform(-70, -70, 0.933, 0.933);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_4_2_img();
        this.instance.setTransform(-70, -70, 0.933, 0.933);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_3_2_img();
        this.instance.setTransform(-60, -60, 0.8, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_2_2_img();
        this.instance.setTransform(-70, -70, 0.933, 0.933);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_1_2_img();
        this.instance.setTransform(-60, -60, 0.8, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_8_img();
        this.instance.setTransform(-60, -60, 0.857, 0.857);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_7_img();
        this.instance.setTransform(-60, -60, 0.857, 0.857);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_6_img();
        this.instance.setTransform(-60, -60, 0.857, 0.857);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_5_img();
        this.instance.setTransform(-60, -60, 0.857, 0.857);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_4_img();
        this.instance.setTransform(-65, -65, 0.929, 0.929);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_3_img();
        this.instance.setTransform(-65, -65, 0.929, 0.929);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_2_img();
        this.instance.setTransform(-60, -60, 0.857, 0.857);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_shoes_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.example_shoes_1_img();
        this.instance.setTransform(-60, -59, 0.857, 0.857);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_kot_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_lips_8();
        this.instance.setTransform(-25.9, -13.3, 1.113, 1.113);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_kot_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_lips_7();
        this.instance.setTransform(-28.9, -13.3, 1.113, 1.113);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_kot_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_lips_6();
        this.instance.setTransform(-46.9, -20.3, 1.113, 1.113);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_kot_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_lips_5();
        this.instance.setTransform(-28.9, -13.3, 1.113, 1.113);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_lips_4();
        this.instance.setTransform(-28.9, -13.3, 1.113, 1.113);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_lips_3();
        this.instance.setTransform(-28.9, -13.3, 1.113, 1.113);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_lips_2();
        this.instance.setTransform(-28.9, -13.3, 1.113, 1.113);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_lips_1_1();
        this.instance.setTransform(-1.6, 1, 3.093, 3.093, 0, 0, 0, 0.8, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_lips_8_1();
        this.instance.setTransform(-0.1, -0.1, 2.494, 2.494, 0, 0, 0, -0.1, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_lips_7_1();
        this.instance.setTransform(-0.1, -0.1, 2.494, 2.494, 0, 0, 0, -0.1, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_lips_6_1();
        this.instance.setTransform(-0.1, -0.1, 2.494, 2.494, 0, 0, 0, -0.1, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_lips_5_1();
        this.instance.setTransform(-0.1, -0.1, 2.494, 2.494, 0, 0, 0, -0.1, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_lips_4_1();
        this.instance.setTransform(-0.1, -0.1, 2.494, 2.494, 0, 0, 0, -0.1, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_lips_3_1();
        this.instance.setTransform(-0.1, -0.1, 2.494, 2.494, 0, 0, 0, -0.1, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_lips_2_1();
        this.instance.setTransform(-0.1, -0.1, 2.494, 2.494, 0, 0, 0, -0.1, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_mouth_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_lips_1_1();
        this.instance.setTransform(-0.1, -0.1, 2.494, 2.494, 0, 0, 0, -0.1, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_eyes8();
        this.instance.setTransform(2, -0.6, 2.333, 2.333, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_20_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon20();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_19_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon19();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_18_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon18();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_17_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon17();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_16_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon16();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_15_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon15();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_14_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon14();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_13_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon13();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon12();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon11();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon10();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon9();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon8();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon7();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon6();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon5();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon4();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon3();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon2();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bg_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.bg_icon1();
        this.instance.setTransform(-75, -75);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_tale_4_1();
        this.instance.setTransform(0.1, -0.6, 0.537, 0.537, 0, 0, 0, 1, 1.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_tale_3_1();
        this.instance.setTransform(0.1, -0.6, 0.537, 0.537, 0, 0, 0, 1, 1.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_tale_2_1();
        this.instance.setTransform(0.1, -0.6, 0.537, 0.537, 0, 0, 0, 1, 1.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_tale_1_1();
        this.instance.setTransform(0.1, -0.6, 0.537, 0.537, 0, 0, 0, 1, 1.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_tail_8();
        this.instance.setTransform(-73.1, -40.8, 0.244, 0.244);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_tail_7();
        this.instance.setTransform(-32.4, -35.9, 0.314, 0.314);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_tail_6();
        this.instance.setTransform(-10.4, -72.4, 0.292, 0.292, 60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_tail_5();
        this.instance.setTransform(-46, -55, 0.545, 0.545);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_tail_4();
        this.instance.setTransform(-49, -50, 0.659, 0.659);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_tail_3();
        this.instance.setTransform(-7.4, -72.3, 0.291, 0.291, 60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_tail_2();
        this.instance.setTransform(-57, -47, 0.422, 0.422);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_neclare_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_tail_1();
        this.instance.setTransform(-57, -47, 0.422, 0.422);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_kot_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hand_accessory8();
        this.instance.setTransform(-46, -48, 0.365, 0.365);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_kot_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hand_accessory7_1();
        this.instance.setTransform(-0.1, -2.8, 0.74, 0.74, -45, 0, 0, -0.1, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_kot_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hand_accessory6();
        this.instance.setTransform(-35, -79, 0.507, 0.507);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_kot_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hand_accessory5();
        this.instance.setTransform(39.7, -28, 0.734, 0.734, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hand_accessory4();
        this.instance.setTransform(-22, -22, 0.262, 0.262);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hand_accessory3();
        this.instance.setTransform(-53.8, -63.1, 0.414, 0.414, 46.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hand_accessory2_1();
        this.instance.setTransform(0, 0.1, 1.265, 1.265);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hand_accessory1();
        this.instance.setTransform(-57, -27.4, 0.698, 0.698, -44.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_kot_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_head_accessory_8();
        this.instance.setTransform(-70, -48, 0.459, 0.459);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_kot_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_head_accessory_7();
        this.instance.setTransform(58, -43, 0.483, 0.483, 0, 0, 180);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_kot_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_head_accessory_6();
        this.instance.setTransform(-57, -37, 0.89, 0.89);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_kot_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_head_accessory_5();
        this.instance.setTransform(-53, -44, 0.766, 0.766);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_head_accessory_4();
        this.instance.setTransform(-46, -28);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_head_accessory_3();
        this.instance.setTransform(-48.6, -29.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_head_accessory_2();
        this.instance.setTransform(-44, -14, 0.455, 0.455);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_head_accessory_1_1();
        this.instance.setTransform(0.4, -1.6, 1, 1, 0, 0, 0, 0.9, 0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_head_accessory8();
        this.instance.setTransform(-55, -27, 0.79, 0.79);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_head_accessory7();
        this.instance.setTransform(-44.3, -28.7, 0.448, 0.448);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_head_accessory6();
        this.instance.setTransform(-53.6, -42.1, 0.709, 0.709);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_head_accessory5();
        this.instance.setTransform(-55.6, -48.2, 0.478, 0.478, 7.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_head_accessory4();
        this.instance.setTransform(-57, -23.5, 0.464, 0.464);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_head_accessory3();
        this.instance.setTransform(-44, -34.8, 0.683, 0.683);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_head_accessory2_1();
        this.instance.setTransform(0, -0.6, 1, 1, 0, 0, 0, 0.9, 1.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_head_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_head_accessory1_1();
        this.instance.setTransform(-1, -1.6, 1, 1, 0, 0, 0, 0.9, 1.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_hand_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hand_accessory8();
        this.instance.setTransform(-32.7, -61.4, 0.517, 0.517);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_hand_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hand_accessory7();
        this.instance.setTransform(-52.9, -13.5, 0.73, 0.73);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_hand_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hand_accessory_6();
        this.instance.setTransform(-24.7, -43.1, 0.467, 0.467, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_hand_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hand_accessory5();
        this.instance.setTransform(-32.7, -61.4, 0.517, 0.517);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_hand_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hand_accessory_4();
        this.instance.setTransform(40.4, -53.6, 0.268, 0.268, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_hand_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hand_accessory_3();
        this.instance.setTransform(-23, -65.3, 0.387, 0.387);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_hand_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hand_accessory_2();
        this.instance.setTransform(-30, -31.4, 0.387, 0.387);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_hand_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hand_accessory_1();
        this.instance.setTransform(-25, -24);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring12();
        this.instance.setTransform(1.4, -21.4, 0.923, 0.923);

        this.instance_1 = new lib.earring12();
        this.instance_1.setTransform(-51.6, -21.4, 0.923, 0.923);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring11();
        this.instance.setTransform(0.1, -26.4, 0.522, 0.522);

        this.instance_1 = new lib.earring11();
        this.instance_1.setTransform(-53.6, -26.4, 0.522, 0.522);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring10();
        this.instance.setTransform(2.4, -22.4, 0.856, 0.856);

        this.instance_1 = new lib.earring10();
        this.instance_1.setTransform(-49.6, -22.4, 0.856, 0.856);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring9();
        this.instance.setTransform(4.9, -33.3, 0.726, 0.726);

        this.instance_1 = new lib.earring9();
        this.instance_1.setTransform(-42.6, -33.3, 0.726, 0.726);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring8();
        this.instance.setTransform(4.4, -22.4, 0.856, 0.856);

        this.instance_1 = new lib.earring8();
        this.instance_1.setTransform(-49.6, -22.4, 0.856, 0.856);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring7();
        this.instance.setTransform(42.8, -30.8, 0.679, 0.679, 90);

        this.instance_1 = new lib.earring7();
        this.instance_1.setTransform(-0.8, -30.8, 0.679, 0.679, 90);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring6();
        this.instance.setTransform(4.4, -17.4, 0.856, 0.856);

        this.instance_1 = new lib.earring6();
        this.instance_1.setTransform(-49.6, -17.4, 0.856, 0.856);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring5();
        this.instance.setTransform(3.1, -28, 0.748, 0.748);

        this.instance_1 = new lib.earring5();
        this.instance_1.setTransform(-47.6, -28, 0.748, 0.748);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring4();
        this.instance.setTransform(6.4, -17.4, 0.856, 0.856);

        this.instance_1 = new lib.earring4();
        this.instance_1.setTransform(-40.6, -17.4, 0.856, 0.856);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring3();
        this.instance.setTransform(3.9, -33.6, 0.771, 0.771);

        this.instance_1 = new lib.earring3();
        this.instance_1.setTransform(-54.6, -33.6, 0.771, 0.771);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring_2();
        this.instance.setTransform(3.4, -22.4, 0.856, 0.856);

        this.instance_1 = new lib.earring_2();
        this.instance_1.setTransform(-47.6, -22.4, 0.856, 0.856);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_earring_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.earring1();
        this.instance.setTransform(4.6, -22.4, 0.856, 0.856);

        this.instance_1 = new lib.earring1();
        this.instance_1.setTransform(-47.6, -22.4, 0.856, 0.856);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.nav_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("ApAECIiygXQA3jcg3j5ICogIIAokCIUVH0I0JH1g");

        // animation
        this.instance = new lib.beam_light_0_mc();
        this.instance.setTransform(-200, 0, 1, 1, 30);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({
            x: 200
        }, 20).wait(41));

        // graph
        this.instance_1 = new lib.body_nav_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -90, 180.1, 180);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.marinett_top8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinett_top_shadow_8();
        this.instance.setTransform(-65.1, -56.7, 0.724, 0.724);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_top_base_8();
        this.body_mc.setTransform(0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-65.3, -56.9, 131.9, 114.6);
    p.frameBounds = [rect];


    (lib.marinett_top7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinett_top_shadow_7();
        this.instance.setTransform(-65, -192.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // керкерк
        this.body_mc = new lib.marinett_top_base_7();
        this.body_mc.setTransform(17.7, -136.4);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-65.8, -192.8, 167.8, 110.2);
    p.frameBounds = [rect];


    (lib.marinett_top6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.marinett_top_shadow_6();
        this.instance.setTransform(-27.3, -188.4, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // rtrhrt
        this.body_mc = new lib.marinett_top_base_6();
        this.body_mc.setTransform(7.8, -137.8);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.4, -188.4, 70.7, 101);
    p.frameBounds = [rect];


    (lib.marinett_top5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.marinett_top_shadow_5();
        this.instance.setTransform(-82.6, -196.7, 0.724, 0.724);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // rthrthetteh
        this.body_mc = new lib.marinett_top_base_5();
        this.body_mc.setTransform(18.8, -140);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-82.6, -196.9, 204.1, 114.6);
    p.frameBounds = [rect];


    (lib.marinett_top4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinett_top_shadow_4();
        this.instance.setTransform(-82.7, -198.4, 0.724, 0.724);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 4
        this.body_mc = new lib.marinett_top_base_4();
        this.body_mc.setTransform(18.8, -140.6);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-82.7, -198.4, 204.2, 115.9);
    p.frameBounds = [rect];


    (lib.marinett_top3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.marinett_top_shadow_3();
        this.instance.setTransform(-81.4, -55.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_top_base_3();
        this.body_mc.setTransform(0.1, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-81.4, -55.5, 162.8, 110.9);
    p.frameBounds = [rect];


    (lib.marinett_top2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinett_top_shadow_2();
        this.instance.setTransform(-83, -198.5, 0.724, 0.724);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 4
        this.body_mc = new lib.marinett_top_base_2();
        this.body_mc.setTransform(18.8, -140.9);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-83, -198.9, 204.1, 116.9);
    p.frameBounds = [rect];


    (lib.marinett_top1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinett_top_shadow_1();
        this.instance.setTransform(-27, -189.4, 0.723, 0.723);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // erter
        this.body_mc = new lib.marinett_top_base_1();
        this.body_mc.setTransform(21.6, -138.6);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.4, -189.7, 98.8, 103);
    p.frameBounds = [rect];


    (lib.marinett_top_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinett_top1();
        this.body_1.setTransform(194, 66.9);

        this.body_2 = new lib.marinett_top2();
        this.body_2.setTransform(194.2, 66.1, 1, 1, 0, 0, 0, 0.2, -0.7);

        this.body_3 = new lib.marinett_top3();
        this.body_3.setTransform(213.5, -71.7);

        this.body_4 = new lib.marinett_top4();
        this.body_4.setTransform(194.2, 66.3, 1, 1, 0, 0, 0, 0.2, -0.5);

        this.body_5 = new lib.marinett_top5();
        this.body_5.setTransform(194.2, 66.9, 1, 1, 0, 0, 0, 0.2, 0);

        this.body_6 = new lib.marinett_top6();
        this.body_6.setTransform(201.9, -71.1, 1, 1, 0, 0, 0, 7.9, -138);

        this.body_7 = new lib.marinett_top7();
        this.body_7.setTransform(194, 66.9);

        this.body_8 = new lib.marinett_top8();
        this.body_8.setTransform(213.8, -70.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(166.5, -122.8, 98.8, 103);
    p.frameBounds = [rect, new cjs.Rectangle(110.9, -132.1, 204.2, 116.9), new cjs.Rectangle(132.1, -127.2, 162.8, 110.9), new cjs.Rectangle(111.3, -131.6, 204.1, 115.9), new cjs.Rectangle(111.4, -130, 204.2, 114.6), new cjs.Rectangle(166.5, -121.5, 70.7, 101), new cjs.Rectangle(128.2, -125.9, 167.8, 110.2), new cjs.Rectangle(148.5, -127.5, 131.9, 114.6), null];


    (lib.marinett_shoes_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.marinett_shoes_shadow8();
        this.instance.setTransform(-142.4, -42.2, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.marinett_shoes_base8();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.8, -42.2, 286.3, 84.3);
    p.frameBounds = [rect];


    (lib.marinett_shoes_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.marinett_shoes_shadow7();
        this.instance.setTransform(-143.2, -23.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_shoes_base7();
        this.body_mc.setTransform(0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-143.2, -24.1, 285.9, 48.7);
    p.frameBounds = [rect];


    (lib.marinett_shoes_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.marinett_shoes_shadow6();
        this.instance.setTransform(-142.6, -23.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_shoes_base6();
        this.body_mc.setTransform(0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -24.1, 285.9, 49.3);
    p.frameBounds = [rect];


    (lib.marinett_shoes_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.marinett_shoes_shadow5_1();
        this.instance.setTransform(0.5, 0.4, 1, 1, 0, 0, 0, 0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.marinett_shoes_base5();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -88.2, 287.1, 178.5);
    p.frameBounds = [rect];


    (lib.marinett_shoes_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.marinett_shoes_shadow4_1();
        this.instance.setTransform(0, 0.4, 1, 1, 0, 0, 0, 0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.marinett_shoes_base4();
        this.body_mc.setTransform(0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-143.1, -117.6, 287.1, 237.1);
    p.frameBounds = [rect];


    (lib.marinett_shoes_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_shoes_shadow3_1();
        this.instance.setTransform(0, 0.9, 1, 1, 0, 0, 0, 0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_shoes_base3();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.2, -116.6, 285.4, 235.5);
    p.frameBounds = [rect];


    (lib.marinett_shoes_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_shoes_shadow2_1();
        this.instance.setTransform(0, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 3
        this.body_mc = new lib.marinett_shoes_base2();
        this.body_mc.setTransform(0, -0.4);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -75.9, 285.4, 152.1);
    p.frameBounds = [rect];


    (lib.marinett_shoes_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_shoes_shadow1_1();
        this.instance.setTransform(0, 0.4, 1, 1, 0, 0, 0, 0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_shoes_base1();
        this.body_mc.setTransform(0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.7, -77.7, 285.7, 156.5);
    p.frameBounds = [rect];


    (lib.marinett_mask8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask8_shadow_1();
        this.instance.setTransform(-0.1, 0.5, 1, 1, 0, 0, 0, -0.1, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_mask8_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-39.8, -15.1, 80.7, 32.3);
    p.frameBounds = [rect];


    (lib.marinett_mask7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.marinett_mask7_shadow_1();
        this.instance.setTransform(0, 0.6, 1, 1, 0, 0, 0, 0, 0.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.marinett_mask7_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.6, -10.6, 64, 23.3);
    p.frameBounds = [rect];


    (lib.marinett_mask6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask6_shadow_1();
        this.instance.setTransform(-0.1, -0.1, 1, 1, 0, 0, 0, -0.1, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 3
        this.body_mc = new lib.marinett_mask6_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.6, -14.7, 64, 30.4);
    p.frameBounds = [rect];


    (lib.marinett_mask5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask5_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_mask5_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.7, -15.7, 64, 32.4);
    p.frameBounds = [rect];


    (lib.marinett_mask4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask4_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_mask4_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32.1, -14.2, 65.9, 29.5);
    p.frameBounds = [rect];


    (lib.marinett_mask3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask3_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_mask3_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-31.8, -15.2, 64, 31.4);
    p.frameBounds = [rect];


    (lib.marinett_mask2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_mask2_shadow_1();
        this.instance.setTransform(0.8, -0.4, 1, 1, 0, 0, 0, 0.5, -0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_mask2_base();
        this.body_mc.setTransform(0.5, -0.3);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46.9, -33, 96, 66.2);
    p.frameBounds = [rect];


    (lib.marinett_mask1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1
        this.instance = new lib.marinett_mask1_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.marinett_mask1_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32.4, -14.1, 66.3, 29.2);
    p.frameBounds = [rect];


    (lib.marinett_mask_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinett_mask1();
        this.body_1.setTransform(-0.7, -0.5);

        this.body_2 = new lib.marinett_mask2();
        this.body_2.setTransform(5.1, -8.1, 1, 1, 0, 0, 0, 0.5, -0.4);

        this.body_3 = new lib.marinett_mask3();
        this.body_3.setTransform(-0.1, -1.7);

        this.body_4 = new lib.marinett_mask4();
        this.body_4.setTransform(0.6, -0.7);

        this.body_5 = new lib.marinett_mask5();
        this.body_5.setTransform(-1.1, 2.7);

        this.body_6 = new lib.marinett_mask6();
        this.body_6.setTransform(-6.2, 0.6, 1, 1, 0, 0, 0, -0.1, -0.1);

        this.body_7 = new lib.marinett_mask7();
        this.body_7.setTransform(-4.6, 1, 1, 1, 0, 0, 0, 0, 0.6);

        this.body_8 = new lib.marinett_mask8();
        this.body_8.setTransform(-3.8, -0.7, 1, 1, 0, 0, 0, -0.1, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-33.1, -14.6, 66.3, 29.2);
    p.frameBounds = [rect, new cjs.Rectangle(-42.4, -40.7, 96, 66.2), new cjs.Rectangle(-31.9, -16.9, 64, 31.4), new cjs.Rectangle(-31.5, -14.9, 65.9, 29.5), new cjs.Rectangle(-32.8, -13, 64, 32.4), new cjs.Rectangle(-37.7, -14, 64, 30.4), new cjs.Rectangle(-36.2, -10.2, 64, 23.3), new cjs.Rectangle(-43.5, -16.3, 80.7, 32.3), null];


    (lib.marinett_lips_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.instance = new lib.marinett_lips_1_1();

        this.instance_1 = new lib.marinett_lips_2_1();

        this.instance_2 = new lib.marinett_lips_3_1();

        this.instance_3 = new lib.marinett_lips_4_1();
        this.instance_3.setTransform(1.6, -3.2);

        this.instance_4 = new lib.marinett_lips_5_1();
        this.instance_4.setTransform(1.6, -3.2);

        this.instance_5 = new lib.marinett_lips_6_1();
        this.instance_5.setTransform(1.6, -3.2);

        this.instance_6 = new lib.marinett_lips_7_1();
        this.instance_6.setTransform(-1.1, -0.1);

        this.instance_7 = new lib.marinett_lips_8_1();
        this.instance_7.setTransform(-0.7, -0.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-12, -5.6, 24.1, 10.8);
    p.frameBounds = [rect, new cjs.Rectangle(-11.6, -5.1, 23.4, 10.5), new cjs.Rectangle(-11.5, -5.2, 23.4, 10.5), new cjs.Rectangle(-10.2, -6.9, 23.3, 7.8), new cjs.Rectangle(-9.9, -7, 23.3, 7.8), new cjs.Rectangle(-9.9, -6.9, 23.3, 7.8), new cjs.Rectangle(-7.4, -5, 13, 9.6), new cjs.Rectangle(-9.1, -5.2, 16.3, 8.5)];


    (lib.marinett_hat_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.marinett_head_accessory1_1();
        this.instance.setTransform(260, -225.6, 1, 1, 0, 0, 0, 0, -0.3);

        this.instance_1 = new lib.marinett_head_accessory2_1();
        this.instance_1.setTransform(271.6, -225.3);

        this.instance_2 = new lib.marinett_head_accessory3();
        this.instance_2.setTransform(256.9, -217.4, 0.544, 0.544);

        this.instance_3 = new lib.marinett_head_accessory4();
        this.instance_3.setTransform(229.9, -216.4, 0.328, 0.328);

        this.instance_4 = new lib.marinett_head_accessory5();
        this.instance_4.setTransform(220.3, -272.2, 0.478, 0.478, 7.9);

        this.instance_5 = new lib.marinett_head_accessory6();
        this.instance_5.setTransform(259.2, -226.3, 0.533, 0.533);

        this.instance_6 = new lib.marinett_head_accessory7();
        this.instance_6.setTransform(242.1, -224.2, 0.344, 0.344);

        this.instance_7 = new lib.marinett_head_accessory8_1();
        this.instance_7.setTransform(265.4, -205.3, 1, 1, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(220.6, -261.3, 80.6, 75.5);
    p.frameBounds = [rect, new cjs.Rectangle(226, -256.1, 92.5, 63.2), new cjs.Rectangle(256.9, -217.4, 69.1, 56), new cjs.Rectangle(229.9, -216.4, 82.1, 31.8), new cjs.Rectangle(211.3, -272.2, 127.5, 81.4), new cjs.Rectangle(259.2, -226.3, 73.6, 60.2), new cjs.Rectangle(242.1, -224.2, 68.8, 43), new cjs.Rectangle(217.6, -226.8, 97.9, 43.9), null];


    (lib.marinett_hair8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_8_shadow_1();
        this.instance.setTransform(-0.5, 1.4, 1, 1, 0, 0, 0, 0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_hair8_base();
        this.body_mc.setTransform(0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50.2, -73.9, 100.9, 149.6);
    p.frameBounds = [rect];


    (lib.marinett_hair7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_7_shadow_1();
        this.instance.setTransform(0, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_hair7_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-62.5, -84, 126.1, 169.1);
    p.frameBounds = [rect];


    (lib.marinett_hair6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_6_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_hair6_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90.7, -114.3, 182.5, 229);
    p.frameBounds = [rect];


    (lib.marinett_hair5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_5_shadow_1();
        this.instance.setTransform(0, 0.2, 1, 1, 0, 0, 0, 0, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_hair5_base();
        this.body_mc.setTransform(0, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-71.2, -109, 142.9, 217.9);
    p.frameBounds = [rect];


    (lib.marinett_hair4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_4_shadow_1();
        this.instance.setTransform(-0.1, 0, 1, 1, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_hair4_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-42.9, -19.6, 86.5, 40.3);
    p.frameBounds = [rect];


    (lib.marinett_hair3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_3_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_hair3_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-40.8, -107.5, 81.8, 215.3);
    p.frameBounds = [rect];


    (lib.marinett_hair2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_hair_2_shadow_1();
        this.instance.setTransform(0.5, -0.1, 1, 1, 0, 0, 0, 0.5, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_hair2_base();
        this.body_mc.setTransform(0.4, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-56.5, -50.1, 114.9, 101.3);
    p.frameBounds = [rect];


    (lib.marinett_hair1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.marinett_hair_1_shadow();
        this.instance.setTransform(-62, -35.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_hair1_base();
        this.body_mc.setTransform(0, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-62, -36.1, 124.1, 73.7);
    p.frameBounds = [rect];


    (lib.marinett_hair_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinett_hair1();
        this.body_1.setTransform(0.1, -0.2, 1, 1, 0, 0, 0, 0, 0.5);

        this.body_2 = new lib.marinett_hair2();
        this.body_2.setTransform(-17.2, -38, 1, 1, 0, 0, 0, 0.5, -0.1);

        this.body_3 = new lib.marinett_hair3();
        this.body_3.setTransform(22, -4.5);

        this.body_4 = new lib.marinett_hair4();
        this.body_4.setTransform(-21, -6.8, 1, 1, 0, 0, 0, -0.1, 0);

        this.body_5 = new lib.marinett_hair5();
        this.body_5.setTransform(3.3, 20.4, 1, 1, 0, 0, 0, 0, 0.2);

        this.body_6 = new lib.marinett_hair6();
        this.body_6.setTransform(-20, 11.5);

        this.body_7 = new lib.marinett_hair7();
        this.body_7.setTransform(22.5, -32.9, 1, 1, 0, 0, 0, 0, 0.3);

        this.body_8 = new lib.marinett_hair8();
        this.body_8.setTransform(-24.5, -16, 1, 1, 0, 0, 0, 0, 0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-62, -36.8, 124.1, 73.7);
    p.frameBounds = [rect, new cjs.Rectangle(-74.2, -88, 114.9, 101.3), new cjs.Rectangle(-18.8, -112, 81.8, 215.3), new cjs.Rectangle(-63.8, -26.4, 86.5, 40.3), new cjs.Rectangle(-67.9, -88.9, 142.9, 217.9), new cjs.Rectangle(-110.7, -102.9, 182.5, 229), new cjs.Rectangle(-40, -117.2, 126.1, 169.1), new cjs.Rectangle(-74.7, -90.3, 100.9, 149.6)];


    (lib.marinett_fringe_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_8_shadow_1();
        this.instance.setTransform(0, 0.4, 1, 1, 0, 0, 0, 0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_fringe_8_base();
        this.body_mc.setTransform(0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-48.2, -73.9, 97.3, 149.1);
    p.frameBounds = [rect];


    (lib.marinett_fringe_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_7_shadow_1();
        this.instance.setTransform(-0.5, -0.1, 1, 1, 0, 0, 0, -0.5, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_fringe_7_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-44.9, -56, 90, 112.6);
    p.frameBounds = [rect];


    (lib.marinett_fringe_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_6_shadow_1();
        this.instance.setTransform(-0.1, 0.4, 1, 1, 0, 0, 0, -0.1, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_fringe_6_base();
        this.body_mc.setTransform(0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-52.1, -58.8, 104.9, 118.8);
    p.frameBounds = [rect];


    (lib.marinett_fringe_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_5_shadow_1();
        this.instance.setTransform(0, 0.5, 1, 1, 0, 0, 0, 0, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_fringe_5_base();
        this.body_mc.setTransform(0, 0.6);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-70.1, -84.5, 140.5, 170.4);
    p.frameBounds = [rect];


    (lib.marinett_fringe_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_4_shadow_1();
        this.instance.setTransform(0, 1.5, 1, 1, 0, 0, 0, 0, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_fringe_4_base();
        this.body_mc.setTransform(0, 0.6);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-44.6, -50.4, 89.8, 102.4);
    p.frameBounds = [rect];


    (lib.marinett_fringe_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_3_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_fringe_3_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-45.3, -35.1, 91.6, 70.7);
    p.frameBounds = [rect];


    (lib.marinett_fringe_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_fringe_2_shadow_1();
        this.instance.setTransform(0.1, 0, 1, 1, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.marinett_fringe_2_base();
        this.body_mc.setTransform(0.2, 0);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-50, -39.4, 100.9, 78.8);
    p.frameBounds = [rect];


    (lib.marinett_fringe_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.marinett_fringe_1_shadow();
        this.instance.setTransform(-47.3, -51.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.marinett_fringe_1_base();
        this.body_mc.setTransform(0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-47.3, -52.1, 93.9, 105.7);
    p.frameBounds = [rect];


    (lib.marinett_eyes7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.marinett_eyes7_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.marinett_eyes7_base();
        this.body_mc.setTransform(1.1, 2.8);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.2, -8.9, 54.4, 18);
    p.frameBounds = [rect];


    (lib.marinett_eyes6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.marinett_eyes6_shadow_1();
        this.instance.setTransform(-0.2, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.marinett_eyes6_base();
        this.body_mc.setTransform(-1, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.7, -7.2, 59.4, 14.4);
    p.frameBounds = [rect];


    (lib.marinett_eyes5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.marinett_eyes5_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.marinett_eyes5_base();
        this.body_mc.setTransform(-0.5, 0.6);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.3, -6.6, 54.4, 13.3);
    p.frameBounds = [rect];


    (lib.marinett_eyes4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.marinett_eyes4_shadow_1();
        this.instance.setTransform(0.2, 0.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.marinett_eyes4_base();
        this.body_mc.setTransform(0.7, 1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.4, -7.2, 56.9, 14.4);
    p.frameBounds = [rect];


    (lib.marinett_eyes3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // decor
        this.instance = new lib.marinett_eyes3_shadow_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.marinett_eyes3_base();
        this.body_mc.setTransform(-2, 0.3);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.5, -5.3, 55.1, 11.1);
    p.frameBounds = [rect];


    (lib.marinett_eyes2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.marinett_eyes2_shadow();
        this.instance.setTransform(-28.6, -7.2, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 5
        this.body_mc = new lib.marinett_eyes2_base();
        this.body_mc.setTransform(0.3, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.6, -7.2, 55.1, 14.4);
    p.frameBounds = [rect];


    (lib.marinett_eyes1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 7
        this.instance = new lib.marinett_eyes1_shadow();
        this.instance.setTransform(-26.3, -7.2, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.marinett_eyes1_base();
        this.body_mc.setTransform(15.2, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-26.3, -7.2, 52.6, 14.4);
    p.frameBounds = [rect];


    (lib.marinett_eyes_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinett_eyes1();
        this.body_1.setTransform(0.1, 0);

        this.body_2 = new lib.marinett_eyes2();
        this.body_2.setTransform(0.3, 0.2);

        this.body_3 = new lib.marinett_eyes3();
        this.body_3.setTransform(0.3, 1.3);

        this.body_4 = new lib.marinett_eyes4();
        this.body_4.setTransform(-0.4, 0.5);

        this.body_5 = new lib.marinett_eyes5();
        this.body_5.setTransform(-0.3, 0.1);

        this.body_6 = new lib.marinett_eyes6();
        this.body_6.setTransform(0.6, 0.1);

        this.body_7 = new lib.marinett_eyes7();
        this.body_7.setTransform(-1.1, -1);

        this.body_8 = new lib.marinett_eyes8();
        this.body_8.setTransform(1.1, 0.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-26.2, -7.2, 52.6, 14.4);
    p.frameBounds = [rect, new cjs.Rectangle(-28.4, -7, 55.1, 14.4), new cjs.Rectangle(-27.2, -4.1, 55.1, 11.1), new cjs.Rectangle(-28.8, -6.7, 56.9, 14.4), new cjs.Rectangle(-27.6, -6.5, 54.4, 13.3), new cjs.Rectangle(-29.1, -7.1, 59.4, 14.4), new cjs.Rectangle(-28.4, -10, 54.4, 18), new cjs.Rectangle(-25.9, -4.4, 53.3, 10.1)];


    (lib.marinett_bottom8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinett_bottom_shadow_8();
        this.instance.setTransform(-75, -63.9, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_bottom_base8();
        this.body_mc.setTransform(0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75.1, -63.9, 150.6, 127.7);
    p.frameBounds = [rect];


    (lib.marinett_bottom7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.marinett_bottom_shadow_7();
        this.instance.setTransform(-53.5, -44.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_bottom_base7();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-54.1, -45.3, 108.6, 91.2);
    p.frameBounds = [rect];


    (lib.marinett_bottom6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 9
        this.instance = new lib.marinett_bottom_shadow_6();
        this.instance.setTransform(-66.2, -68.4, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_bottom_base6();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-66.2, -68.4, 134.7, 136.9);
    p.frameBounds = [rect];


    (lib.marinett_bottom5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.marinett_bottom_shadow_5();
        this.instance.setTransform(-63.5, -61.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_bottom_base5();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-63.5, -61.6, 126.4, 123.1);
    p.frameBounds = [rect];


    (lib.marinett_bottom4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.marinett_bottom_shadow_4();
        this.instance.setTransform(-110.9, -132.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_bottom_base4();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110.9, -132.2, 221.8, 264.4);
    p.frameBounds = [rect];


    (lib.marinett_bottom3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.marinett_bottom_shadow_3();
        this.instance.setTransform(-83.4, -70, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_bottom_base3();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-83.8, -70.5, 168.1, 141.6);
    p.frameBounds = [rect];


    (lib.marinett_bottom2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.marinett_bottom_shadow_2();
        this.instance.setTransform(-117.5, -93.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinett_bottom_base2();
        this.body_mc.setTransform(0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-117.5, -93.8, 235.5, 180.3);
    p.frameBounds = [rect];


    (lib.marinett_bottom1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinett_bottom_shadow_1();
        this.instance.setTransform(-66.2, -102.3, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // rtyrtyr
        this.body_mc = new lib.marinett_bottom_base1();
        this.body_mc.setTransform(11.3, -11.9);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-66.5, -102.4, 155.8, 181);
    p.frameBounds = [rect];


    (lib.marinett_bottom_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinett_bottom1();
        this.body_1.setTransform(194, 66.9);

        this.body_2 = new lib.marinett_bottom2();
        this.body_2.setTransform(212.4, 50.8, 1, 1, 0, 0, 0, -0.1, -0.3);

        this.body_3 = new lib.marinett_bottom3();
        this.body_3.setTransform(208.2, 35.1);

        this.body_4 = new lib.marinett_bottom4();
        this.body_4.setTransform(201.1, 96.8);

        this.body_5 = new lib.marinett_bottom5();
        this.body_5.setTransform(207.2, 26.1);

        this.body_6 = new lib.marinett_bottom6();
        this.body_6.setTransform(209, 33);

        this.body_7 = new lib.marinett_bottom7();
        this.body_7.setTransform(206.6, 9.9, 1, 1, 0, 0, 0, -0.1, 0.1);

        this.body_8 = new lib.marinett_bottom8();
        this.body_8.setTransform(220, 28.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(127.4, -35.5, 155.8, 181);
    p.frameBounds = [rect, new cjs.Rectangle(95, -42.7, 235.5, 180.3), new cjs.Rectangle(124.4, -35.5, 168.2, 141.6), new cjs.Rectangle(90.2, -35.4, 221.7, 264.4), new cjs.Rectangle(143.7, -35.6, 126.4, 123.1), new cjs.Rectangle(142.7, -35.5, 134.7, 136.9), new cjs.Rectangle(152.6, -35.5, 108.6, 91.2), new cjs.Rectangle(144.9, -35.6, 150.6, 127.7), null];


    (lib.marinett_body = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinett_body_shadow_1();
        this.instance.setTransform(0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.marinett_body_base();
        this.body_mc.setTransform(0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-141, -263.5, 282.3, 526.7);
    p.frameBounds = [rect];


    (lib.marinett_accessory_hang_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.instance = new lib.marinett_hand_accessory_1();
        this.instance.setTransform(111.9, -83.1, 0.8, 0.8);

        this.instance_1 = new lib.marinett_hand_accessory_2();
        this.instance_1.setTransform(114.5, -98.4, 0.28, 0.28);

        this.instance_2 = new lib.marinett_hand_accessory3();
        this.instance_2.setTransform(53, 49.1, 1, 1, 0, 0, 0, -0.3, 0);

        this.instance_3 = new lib.marinett_hand_accessory_4();
        this.instance_3.setTransform(48.4, -262.9, 0.512, 0.512, -15);

        this.instance_4 = new lib.marinett_hand_accessory5_1();
        this.instance_4.setTransform(242.6, -29);

        this.instance_5 = new lib.marinett_hand_accessory_6();
        this.instance_5.setTransform(90.6, -77.5, 0.347, 0.347, -15);

        this.instance_6 = new lib.marinett_hand_accessory7_1();
        this.instance_6.setTransform(127.9, -51, 1, 1, -45);

        this.instance_7 = new lib.marinett_hand_accessory8_1();
        this.instance_7.setTransform(235.8, -30.2, 1, 1, 0, 0, 0, 0, -0.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(111.9, -83.1, 43.2, 43.2);
    p.frameBounds = [rect, new cjs.Rectangle(114.5, -98.4, 42, 51.8), new cjs.Rectangle(63.7, -69, 80.6, 236.9), new cjs.Rectangle(48.4, -273.7, 110.2, 270.6), new cjs.Rectangle(198.7, -109.9, 87.1, 164.9), new cjs.Rectangle(90.6, -91, 63.8, 64), new cjs.Rectangle(81.6, -97.9, 92.7, 92.7), new cjs.Rectangle(189.5, -110.5, 93.6, 160.6), null];


    (lib.marinet_eyebrows = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_mc = new lib.marinet_eyebrows_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.4, -4, 50.8, 8.1);
    p.frameBounds = [rect];


    (lib.marinet_dress8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.marinet_dress_shadow8();
        this.instance.setTransform(-120.3, -198.9, 0.723, 0.723);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // тень
        this.body_mc = new lib.marinet_dress_base8();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.9, 241.5, 398.4);
    p.frameBounds = [rect];


    (lib.marinet_dress7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 8
        this.instance = new lib.marinet_dress_shadow7();
        this.instance.setTransform(-70.8, -198.3, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // erytere
        this.body_mc = new lib.marinet_dress_base7();
        this.body_mc.setTransform(17.7, -69);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-71.5, -198.4, 179.3, 259.3);
    p.frameBounds = [rect];


    (lib.marinet_dress6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.marinet_dress_shadow6();
        this.instance.setTransform(-155.9, -198.2, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinet_dress_base6();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-155.9, -198.2, 311.8, 400.3);
    p.frameBounds = [rect];


    (lib.marinet_dress5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinet_dress_shadow5_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // rtertr
        this.body_mc = new lib.marinet_dress_base5();
        this.body_mc.setTransform(0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.3, 240.6, 396.4);
    p.frameBounds = [rect];


    (lib.marinet_dress4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // тень
        this.instance = new lib.marinet_dress_shadow4_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // упук
        this.body_mc = new lib.marinet_dress_base4();
        this.body_mc.setTransform(0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.5, 240.6, 396.6);
    p.frameBounds = [rect];


    (lib.marinet_dress3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // тень
        this.instance = new lib.marinet_dress_shadow3_1();
        this.instance.setTransform(0, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // укпукп
        this.body_mc = new lib.marinet_dress_base3();
        this.body_mc.setTransform(0, -0.1);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E21415").s().p("AAAAAIABAAIgBAAIAAAAg");
        this.shape.setTransform(91.7, -123.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.body_mc
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.3, 240.6, 396.4);
    p.frameBounds = [rect];


    (lib.marinet_dress2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinet_dress_shadow2_1();
        this.instance.setTransform(0, -0.2, 1, 1, 0, 0, 0, 0, -0.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinet_dress_base2();
        this.body_mc.setTransform(0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.2, 241, 396.7);
    p.frameBounds = [rect];


    (lib.marinet_dress1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.marinet_dress_shadow1_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.marinet_dress_base1();
        this.body_mc.setTransform(0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-120.3, -198.3, 241.1, 396.6);
    p.frameBounds = [rect];


    (lib.headdress_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // substrate
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0, 0, 0.667, 0.667);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 40, 40);
    p.frameBounds = [rect];


    (lib.glasses_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // substrate
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0, 0, 0.667, 0.667);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 40, 40);
    p.frameBounds = [rect];


    (lib.eyelash_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinet_eyebrows();

        this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-25.4, -4, 50.8, 8.1);
    p.frameBounds = [rect];


    (lib.earrings_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // substrate
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0, 0, 0.667, 0.667);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 40, 40);
    p.frameBounds = [rect];


    (lib.category_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.bg_icon0();
        this.instance.setTransform(-32, -24, 0.6, 0.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.category_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 3
        this.instance = new lib.icon_ico11();
        this.instance.setTransform(-19, -24, 0.55, 0.55);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.category_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.icon_dress();
        this.instance.setTransform(-18, -28, 0.45, 0.45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.category_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.body_base();
        this.instance.setTransform(-18, -27.4, 0.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.instance_1 = new lib.bg_category_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-32, -32, 64, 64);
    p.frameBounds = [rect];


    (lib.animation_bg_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.bg_title_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 0.97,
            scaleY: 0.97,
            rotation: -5
        }, 29).to({
            rotation: 5
        }, 30).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 0
        }, 30).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-310, -180, 620, 360);
    p.frameBounds = [rect, new cjs.Rectangle(-309.7, -180, 619.6, 360.1), new cjs.Rectangle(-310.1, -181, 620.3, 362.2), new cjs.Rectangle(-310.5, -182.1, 621.1, 364.2), new cjs.Rectangle(-310.3, -182.1, 620.6, 364.3), new cjs.Rectangle(-310.6, -183.1, 621.3, 366.3), new cjs.Rectangle(-311, -184.1, 622.1, 368.4), new cjs.Rectangle(-310.7, -184.2, 621.6, 368.4), new cjs.Rectangle(-311.1, -185.2, 622.3, 370.4), new cjs.Rectangle(-311.4, -186.2, 622.9, 372.5), new cjs.Rectangle(-311.2, -186.2, 622.5, 372.5), new cjs.Rectangle(-311.5, -187.2, 623.2, 374.5), new cjs.Rectangle(-311.8, -188.2, 623.8, 376.5), new cjs.Rectangle(-311.6, -188.2, 623.3, 376.5), new cjs.Rectangle(-311.9, -189.2, 623.9, 378.5), new cjs.Rectangle(-312.2, -190.2, 624.6, 380.4), new cjs.Rectangle(-312.5, -191.2, 625.1, 382.4), new cjs.Rectangle(-312.3, -191.2, 624.7, 382.4), new cjs.Rectangle(-312.6, -192.1, 625.3, 384.3), new cjs.Rectangle(-312.9, -193.1, 625.8, 386.2), new cjs.Rectangle(-312.6, -193.1, 625.3, 386.2), new cjs.Rectangle(-312.9, -194, 625.9, 388.1), new cjs.Rectangle(-313.2, -195, 626.5, 390), new cjs.Rectangle(-312.9, -195, 626, 390), new cjs.Rectangle(-313.2, -195.9, 626.5, 391.9), new cjs.Rectangle(-313.4, -196.8, 627, 393.7), new cjs.Rectangle(-313.2, -196.8, 626.5, 393.7), new cjs.Rectangle(-313.4, -197.8, 627, 395.6), new cjs.Rectangle(-313.7, -198.7, 627.5, 397.4), new cjs.Rectangle(-314, -199.6, 628.1, 399.3), new cjs.Rectangle(-312.7, -197.3, 625.6, 394.7), new cjs.Rectangle(-312, -196, 624.1, 392), new cjs.Rectangle(-310.8, -193.7, 621.7, 387.4), new cjs.Rectangle(-310.1, -192.3, 620.2, 384.7), new cjs.Rectangle(-309.3, -191, 618.8, 382), new cjs.Rectangle(-308.1, -188.7, 616.3, 377.3), new cjs.Rectangle(-307.3, -187.3, 614.8, 374.6), new cjs.Rectangle(-306.6, -185.9, 613.3, 371.8), new cjs.Rectangle(-305.3, -183.6, 610.6, 367.2), new cjs.Rectangle(-304.5, -182.2, 609.1, 364.4), new cjs.Rectangle(-303.7, -180.8, 607.6, 361.6), new cjs.Rectangle(-302.4, -178.4, 604.8, 356.8), new cjs.Rectangle(-301.6, -177, 603.3, 354), new cjs.Rectangle(-300.8, -175.6, 601.6, 351.2), new cjs.Rectangle(-299.9, -174.2, 600, 348.4), new cjs.Rectangle(-300.8, -175.6, 601.6, 351.2), new cjs.Rectangle(-301.6, -177, 603.3, 354), new cjs.Rectangle(-302.4, -178.4, 604.8, 356.8), new cjs.Rectangle(-303.7, -180.8, 607.5, 361.6), new cjs.Rectangle(-304.5, -182.2, 609.1, 364.4), new cjs.Rectangle(-305.3, -183.6, 610.6, 367.1), new cjs.Rectangle(-306.6, -185.9, 613.3, 371.8), new cjs.Rectangle(-307.3, -187.3, 614.8, 374.6), new cjs.Rectangle(-308.1, -188.6, 616.3, 377.3), new cjs.Rectangle(-309.3, -191, 618.8, 381.9), new cjs.Rectangle(-310.1, -192.3, 620.2, 384.7), new cjs.Rectangle(-310.8, -193.7, 621.7, 387.4), new cjs.Rectangle(-312, -196, 624.1, 392), new cjs.Rectangle(-312.7, -197.3, 625.5, 394.7), new cjs.Rectangle(-314, -199.6, 628.1, 399.3), new cjs.Rectangle(-313.7, -198.7, 627.4, 397.4), new cjs.Rectangle(-313.4, -197.8, 627, 395.6), new cjs.Rectangle(-313.2, -196.8, 626.5, 393.7), new cjs.Rectangle(-313.4, -196.9, 626.9, 393.8), new cjs.Rectangle(-313.1, -195.9, 626.4, 391.9), new cjs.Rectangle(-312.8, -195, 625.8, 390), new cjs.Rectangle(-313.1, -195, 626.3, 390), new cjs.Rectangle(-312.8, -194.1, 625.8, 388.1), new cjs.Rectangle(-312.6, -193.1, 625.2, 386.2), new cjs.Rectangle(-312.8, -193.1, 625.7, 386.2), new cjs.Rectangle(-312.5, -192.1, 625.1, 384.3), new cjs.Rectangle(-312.2, -191.2, 624.5, 382.4), new cjs.Rectangle(-312.4, -191.2, 625, 382.4), new cjs.Rectangle(-312.1, -190.2, 624.3, 380.4), new cjs.Rectangle(-311.8, -189.2, 623.7, 378.5), new cjs.Rectangle(-312, -189.2, 624.2, 378.5), new cjs.Rectangle(-311.7, -188.2, 623.5, 376.5), new cjs.Rectangle(-311.4, -187.2, 622.8, 374.5), new cjs.Rectangle(-311.6, -187.2, 623.3, 374.5), new cjs.Rectangle(-311.3, -186.2, 622.7, 372.5), new cjs.Rectangle(-310.9, -185.2, 622, 370.5), new cjs.Rectangle(-311.1, -185.2, 622.3, 370.5), new cjs.Rectangle(-310.8, -184.1, 621.7, 368.4), new cjs.Rectangle(-310.4, -183.1, 621, 366.4), new cjs.Rectangle(-310.6, -183.1, 621.3, 366.3), new cjs.Rectangle(-310.3, -182.1, 620.7, 364.3), new cjs.Rectangle(-309.9, -181, 619.9, 362.2), new cjs.Rectangle(-310.1, -181, 620.3, 362.2), new cjs.Rectangle(-309.7, -180, 619.6, 360.1), new cjs.Rectangle(-310, -180, 620, 360)];


    (lib.adrian_top_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_top_shadow8();
        this.instance.setTransform(-85.7, -85.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_top_base_8();
        this.body_mc.setTransform(-0.6, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.8, -85.8, 174.6, 170.6);
    p.frameBounds = [rect];


    (lib.adrian_top_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 8
        this.instance = new lib.adrian_top_shadow7();
        this.instance.setTransform(-90, -107.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_top_base_7();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90.2, -108, 180.9, 216.2);
    p.frameBounds = [rect];


    (lib.adrian_top_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.adrian_top_shadow6();
        this.instance.setTransform(-91.5, -109.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_top_base_6();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-91.6, -109.8, 183.2, 219.1);
    p.frameBounds = [rect];


    (lib.adrian_top_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_top_shadow5();
        this.instance.setTransform(-66.4, -71.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_top_base_5();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-66.7, -71.8, 133.5, 144);
    p.frameBounds = [rect];


    (lib.adrian_top_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.adrian_top_shadow4();
        this.instance.setTransform(-72.4, -68.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_top_base_4();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-72.8, -68.6, 145.9, 137.1);
    p.frameBounds = [rect];


    (lib.adrian_top_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 2
        this.instance = new lib.adrian_top_shadow3();
        this.instance.setTransform(-64.7, -65.3, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_top_base_3();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-65.2, -65.8, 130.8, 132.3);
    p.frameBounds = [rect];


    (lib.adrian_top_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_top_shadow2();
        this.instance.setTransform(-66.5, -72, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_top_base_2();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-66.7, -72, 133.4, 144);
    p.frameBounds = [rect];


    (lib.adrian_top_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.adrian_top_shadow1();
        this.instance.setTransform(-66.3, -72, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_top_base_1();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-66.7, -72, 133.6, 144);
    p.frameBounds = [rect];


    (lib.adrian_tale_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.adrian_tale_1_1();

        this.instance_1 = new lib.adrian_tale_2_1();

        this.instance_2 = new lib.adrian_tale_3_1();

        this.instance_3 = new lib.adrian_tale_4_1();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.4, -113, 172.8, 229);
    p.frameBounds = [rect, rect = new cjs.Rectangle(-86.4, -113, 172.8, 229), rect, rect, null];


    (lib.adrian_shoes_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_shoes_shadow8();
        this.instance.setTransform(-85.3, -91.7, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_shoes_base8();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.3, -91.7, 170.4, 183.6);
    p.frameBounds = [rect];


    (lib.adrian_shoes_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.adrian_shoes_shadow7();
        this.instance.setTransform(-85, -33.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_shoes_base7();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -33.2, 170.3, 66.4);
    p.frameBounds = [rect];


    (lib.adrian_shoes_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 7
        this.instance = new lib.adrian_shoes_shadow6();
        this.instance.setTransform(-85.2, -33.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_shoes_base6();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.2, -33.8, 170.3, 67.7);
    p.frameBounds = [rect];


    (lib.adrian_shoes_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_shoes_shadow5();
        this.instance.setTransform(-84.8, -68.3, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_shoes_base5();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -68.4, 170.3, 136.9);
    p.frameBounds = [rect];


    (lib.adrian_shoes_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 8
        this.instance = new lib.adrian_shoes_shadow4();
        this.instance.setTransform(-87.5, -87.7, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_shoes_base4();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-87.9, -87.9, 176.1, 175.9);
    p.frameBounds = [rect];


    (lib.adrian_shoes_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_shoes_shadow3();
        this.instance.setTransform(-84.9, -53.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_shoes_base3();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -53.7, 170.3, 107.4);
    p.frameBounds = [rect];


    (lib.adrian_shoes_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_shoes_shadow2();
        this.instance.setTransform(-85.2, -88.4, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_shoes_base2();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.2, -88.9, 170.4, 178.4);
    p.frameBounds = [rect];


    (lib.adrian_shoes_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_shoes_shadow1();
        this.instance.setTransform(-84.8, -55.3, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.adrian_shoes_base1();
        this.body_mc.setTransform(0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-85.1, -55.8, 170.3, 112.1);
    p.frameBounds = [rect];


    (lib.adrian_mask_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_mask_shadow8();
        this.instance.setTransform(-33.7, -29.3, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.adrian_mask_base_8();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-34, -29.6, 68.3, 59.3);
    p.frameBounds = [rect];


    (lib.adrian_mask_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_mask_shadow7();
        this.instance.setTransform(-28.2, -19.9, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_mask_base_7();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.2, -19.9, 56.4, 39.8);
    p.frameBounds = [rect];


    (lib.adrian_mask_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.adrian_mask_shadow6();
        this.instance.setTransform(-29.4, -14.6, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.adrian_mask_base_6();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.4, -14.6, 59.1, 29.3);
    p.frameBounds = [rect];


    (lib.adrian_mask_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_mask_shadow5();
        this.instance.setTransform(-27.3, -16.6, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_mask_base_5();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-27.4, -16.6, 55.3, 33.3);
    p.frameBounds = [rect];


    (lib.adrian_mask_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_mask_shadow4();
        this.instance.setTransform(-29.1, -16.3, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_mask_base_4();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.1, -16.3, 58.3, 32.3);
    p.frameBounds = [rect];


    (lib.adrian_mask_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_mask_shadow3();
        this.instance.setTransform(-28.5, -23, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_mask_base_3();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.5, -23.1, 57.3, 46.2);
    p.frameBounds = [rect];


    (lib.adrian_mask_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.adrian_mask_shadow2();
        this.instance.setTransform(-28.7, -19.4, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.adrian_mask_base_2();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-28.7, -19.4, 57.3, 38.9);
    p.frameBounds = [rect];


    (lib.adrian_mask_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_mask_shadow1();
        this.instance.setTransform(-29.4, -18.3, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_mask_base1();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.6, -18.5, 59.2, 37.3);
    p.frameBounds = [rect];


    (lib.adrian_lips_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.instance = new lib.adrian_lips_1_1();
        this.instance.setTransform(-0.4, -0.2);

        this.instance_1 = new lib.adrian_lips_2();
        this.instance_1.setTransform(-7.6, -3.1, 0.36, 0.36);

        this.instance_2 = new lib.adrian_lips_3();
        this.instance_2.setTransform(-7.7, -3.3, 0.36, 0.36);

        this.instance_3 = new lib.adrian_lips_4();
        this.instance_3.setTransform(-12.3, -4.7, 0.36, 0.36);

        this.instance_4 = new lib.adrian_lips_5();
        this.instance_4.setTransform(-12.3, -4.7, 0.36, 0.36);

        this.instance_5 = new lib.adrian_lips_6();
        this.instance_5.setTransform(-14.7, -6.1, 0.36, 0.36);

        this.instance_6 = new lib.adrian_lips_7();
        this.instance_6.setTransform(-11, -3.2, 0.36, 0.36);

        this.instance_7 = new lib.adrian_lips_8();
        this.instance_7.setTransform(-9.7, -3.6, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-6.8, -4, 14.4, 8.7);
    p.frameBounds = [rect, new cjs.Rectangle(-7.6, -3.1, 19.1, 7.9), new cjs.Rectangle(-7.7, -3.3, 19.1, 7.9), rect = new cjs.Rectangle(-12.3, -4.7, 23.1, 10.8), rect, new cjs.Rectangle(-14.7, -6.1, 28.8, 15.1), new cjs.Rectangle(-11, -3.2, 21.3, 8.3), new cjs.Rectangle(-9.7, -3.6, 19.5, 10.5)];


    (lib.adrian_head_accessory_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.instance = new lib.adrian_head_accessory_1_1();
        this.instance.setTransform(0.5, -0.4, 1, 1, 0, 0, 0, 0.5, -0.4);

        this.instance_1 = new lib.adrian_head_accessory_2_1();
        this.instance_1.setTransform(2.1, 25.8, 1, 1, 0, 0, 0, -0.3, 0.3);

        this.instance_2 = new lib.adrian_head_accessory_3_1();
        this.instance_2.setTransform(8.3, 1.3);

        this.instance_3 = new lib.adrian_head_accessory_4_1();
        this.instance_3.setTransform(3.2, 14.8);

        this.instance_4 = new lib.adrian_head_accessory_5_1();
        this.instance_4.setTransform(-1.4, 23.2);

        this.instance_5 = new lib.adrian_head_accessory_6();
        this.instance_5.setTransform(-46.2, -16.4, 0.684, 0.684);

        this.instance_6 = new lib.adrian_head_accessory_7();
        this.instance_6.setTransform(64.1, -18, 0.438, 0.389, 0, 0, 180);

        this.instance_7 = new lib.adrian_head_accessory_8();
        this.instance_7.setTransform(-35.2, -83.4, 0.467, 0.467, 23.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-48, -24, 97.9, 48.6);
    p.frameBounds = [rect, new cjs.Rectangle(-30.1, 12.2, 66.6, 27.7), new cjs.Rectangle(-25.7, -19.7, 70.6, 43.9), new cjs.Rectangle(-30.5, -7.4, 67.7, 44.7), new cjs.Rectangle(-50.3, -17.6, 98.7, 81.4), new cjs.Rectangle(-46.2, -16.4, 86.9, 56.8), new cjs.Rectangle(-35.6, -18, 99.8, 65), new cjs.Rectangle(-74.1, -83.4, 167.1, 144.9), null];


    (lib.adrian_hand_accessory_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.adrian_hand_accessory1();
        this.instance.setTransform(16.7, -59.7, 0.616, 0.616, 30);

        this.instance_1 = new lib.adrian_hand_accessory2_1();
        this.instance_1.setTransform(14.1, 32, 1.265, 1.265);

        this.instance_2 = new lib.adrian_hand_accessory3();
        this.instance_2.setTransform(-116, -36.6, 0.8, 0.8, 18.2);

        this.instance_3 = new lib.adrian_hand_accessory4();
        this.instance_3.setTransform(-26.5, -9, 0.262, 0.262);

        this.instance_4 = new lib.adrian_hand_accessory5();
        this.instance_4.setTransform(37.2, -38.7, 0.618, 0.618, 0, 0, 180);

        this.instance_5 = new lib.adrian_hand_accessory6();
        this.instance_5.setTransform(13.8, -179.1, 0.72, 0.72);

        this.instance_6 = new lib.adrian_hand_accessory7_1();
        this.instance_6.setTransform(-19.6, 116.2, 1, 1, 0, 0, 0, -0.1, 0.8);

        this.instance_7 = new lib.adrian_hand_accessory8();
        this.instance_7.setTransform(-58.8, -90.5, 0.54, 0.54);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-43.3, -59.7, 86.7, 119.4);
    p.frameBounds = [rect, new cjs.Rectangle(-37, -10.9, 102.1, 85.7), new cjs.Rectangle(-121, -36.6, 309, 115.3), new cjs.Rectangle(-26.5, -9, 44.1, 44.1), new cjs.Rectangle(-12.3, -38.7, 49.5, 67.4), new cjs.Rectangle(13.8, -179.1, 97.9, 207.4), new cjs.Rectangle(-42, -4.5, 45.3, 241.2), new cjs.Rectangle(-58.8, -90.5, 135, 148), null];


    (lib.adrian_hair_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.adrian_hair_shadow4();
        this.instance.setTransform(-46.4, -42, 0.367, 0.367);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_hair_base4();
        this.body_mc.setTransform(0.3, 0.3);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46.4, -42, 94.7, 85.5);
    p.frameBounds = [rect];


    (lib.adrian_hair_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_hair_shadow3();
        this.instance.setTransform(-35.9, -26, 0.365, 0.365);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_hair_base3();
        this.body_mc.setTransform(0, 0.3);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-35.9, -26, 73, 53.3);
    p.frameBounds = [rect];


    (lib.adrian_hair_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_hair_shadow2();
        this.instance.setTransform(-43.6, -32.7, 0.365, 0.365);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.adrian_hair_base2();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-43.6, -32.7, 87.6, 66.5);
    p.frameBounds = [rect];


    (lib.adrian_hair_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_hair_shadow1();
        this.instance.setTransform(-58.7, -43.6, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.adrian_hair_base1();
        this.body_mc.setTransform(0.1, 0.3);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-58.7, -43.6, 117.4, 87.6);
    p.frameBounds = [rect];


    (lib.adrian_eyes_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.adrian_eyes_shadow4();
        this.instance.setTransform(-22.3, -8.7, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_eyes_base4();
        this.body_mc.setTransform(-0.6, 0.3);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-22.3, -8.7, 44.7, 17.3);
    p.frameBounds = [rect];


    (lib.adrian_eyes_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.adrian_eyes_shadow3();
        this.instance.setTransform(-17.4, -7.1, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 4
        this.body_mc = new lib.adrian_eyes_base3();
        this.body_mc.setTransform(1.6, 4.3);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-17.4, -7.1, 41.8, 19.8);
    p.frameBounds = [rect];


    (lib.adrian_eyes_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 7
        this.instance = new lib.adrian_eyes_shadow2();
        this.instance.setTransform(-23, -11.9, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // dsfwe
        this.body_mc = new lib.adrian_eyes_base2();
        this.body_mc.setTransform(1.1, -1.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-23, -11.9, 46.8, 18.4);
    p.frameBounds = [rect];


    (lib.adrian_eyes_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.adrian_eyes_shadow1();
        this.instance.setTransform(-23.8, -11.5, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 2
        this.body_mc = new lib.adrian_eyes_base1();
        this.body_mc.setTransform(-1, 1.9);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-23.8, -11.5, 47.5, 23.1);
    p.frameBounds = [rect];


    (lib.adrian_dress8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 8
        this.instance = new lib.adrian_dress_shadow8();
        this.instance.setTransform(-92.4, -217.2, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // кенкенк
        this.body_mc = new lib.adrian_dress_base_8();
        this.body_mc.setTransform(0.3, 0);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-92.4, -217.2, 185.8, 434.3);
    p.frameBounds = [rect];


    (lib.adrian_dress7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 7
        this.instance = new lib.adrian_dress_shadow7();
        this.instance.setTransform(-87.7, -209.5, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_dress_base_7();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-88.1, -209.5, 176.8, 418.6);
    p.frameBounds = [rect];


    (lib.adrian_dress6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 1180
        this.instance = new lib.adrian_dress_shadow6();
        this.instance.setTransform(-93.7, -218, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // rtyrtr
        this.body_mc = new lib.adrian_dress_base_6();
        this.body_mc.setTransform(-1.8, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-94.7, -218, 188.9, 435);
    p.frameBounds = [rect];


    (lib.adrian_dress5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 8
        this.instance = new lib.adrian_dress_shadow5();
        this.instance.setTransform(-92.4, -217, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 34t34t
        this.body_mc = new lib.adrian_dress_base_5();
        this.body_mc.setTransform(0.3, 0);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-92.4, -217, 185.8, 434.2);
    p.frameBounds = [rect];


    (lib.adrian_dress4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 12
        this.instance = new lib.adrian_dress_shadow4();
        this.instance.setTransform(-92.1, -220, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // rt545t4
        this.body_mc = new lib.adrian_dress_base_4();
        this.body_mc.setTransform(-0.3, 0);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-92.1, -220.3, 185.8, 441);
    p.frameBounds = [rect];


    (lib.adrian_dress3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 7
        this.instance = new lib.adrian_dress_shadow3();
        this.instance.setTransform(-92.4, -217.7, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // edrteter
        this.body_mc = new lib.adrian_dress_base_3();
        this.body_mc.setTransform(0.3, 0);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-92.4, -218.1, 185.8, 436.8);
    p.frameBounds = [rect];


    (lib.adrian_dress2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 9
        this.instance = new lib.adrian_dress_shadow2();
        this.instance.setTransform(-85.8, -216.2, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // wewefew
        this.body_mc = new lib.adrian_dress_base_2();
        this.body_mc.setTransform(0.3, 5.2);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-86.4, -216.2, 174.2, 433.5);
    p.frameBounds = [rect];


    (lib.adrian_dress1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 3
        this.instance = new lib.adrian_dress_shadow1();
        this.instance.setTransform(-93.6, -217.6, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_dress_base_1();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-93.6, -217.6, 187.4, 434.6);
    p.frameBounds = [rect];


    (lib.adrian_dress_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.adrian_dress1();
        this.body_1.setTransform(2.2, -18.2);

        this.body_2 = new lib.adrian_dress2();
        this.body_2.setTransform(1.8, -18, 1, 1, 0, 0, 0, 0, 0.2);

        this.body_3 = new lib.adrian_dress3();
        this.body_3.setTransform(1.8, -19.3);

        this.body_4 = new lib.adrian_dress4();
        this.body_4.setTransform(1.8, -21.5);

        this.body_5 = new lib.adrian_dress5();
        this.body_5.setTransform(1.8, -18.2);

        this.body_6 = new lib.adrian_dress6();
        this.body_6.setTransform(0.7, -18.3, 1, 1, 0, 0, 0, -0.7, -0.1);

        this.body_7 = new lib.adrian_dress7();
        this.body_7.setTransform(3.7, -10.3);

        this.body_8 = new lib.adrian_dress8();
        this.body_8.setTransform(1.8, -18.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-91.5, -235.8, 187.4, 434.6);
    p.frameBounds = [rect, new cjs.Rectangle(-84.6, -234.4, 174.2, 433.5), new cjs.Rectangle(-90.6, -237.5, 185.8, 436.8), new cjs.Rectangle(-90.3, -241.8, 185.8, 441), new cjs.Rectangle(-90.6, -235.2, 185.8, 434.2), new cjs.Rectangle(-93.3, -236.2, 188.9, 435), new cjs.Rectangle(-84.4, -219.8, 176.8, 418.6), new cjs.Rectangle(-90.6, -235.4, 185.8, 434.3), null];


    (lib.adrian_bottom_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_bottom_shadow8();
        this.instance.setTransform(-61.2, -143.7, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_bottom_base_8();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-61.2, -144.3, 122, 289.3);
    p.frameBounds = [rect];


    (lib.adrian_bottom_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_bottom_shadow7();
        this.instance.setTransform(-53.8, -57.2, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_bottom_base_7();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53.8, -57.6, 107.6, 115.6);
    p.frameBounds = [rect];


    (lib.adrian_bottom_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_bottom_shadow6();
        this.instance.setTransform(-54.1, -70.9, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_bottom_base_6();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-54.1, -71.1, 107.9, 142.8);
    p.frameBounds = [rect];


    (lib.adrian_bottom_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.adrian_bottom_shadow5();
        this.instance.setTransform(-46.2, -51.9, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_bottom_base_5();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46.2, -51.9, 92.4, 103.4);
    p.frameBounds = [rect];


    (lib.adrian_bottom_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.adrian_bottom_shadow4();
        this.instance.setTransform(-48.1, -67.1, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_bottom_base_4();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-48.1, -67.4, 96.6, 134.9);
    p.frameBounds = [rect];


    (lib.adrian_bottom_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 5
        this.instance = new lib.adrian_bottom_shadow3();
        this.instance.setTransform(-61.4, -143.8, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_bottom_base_3();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-61.4, -144.3, 122.2, 289.2);
    p.frameBounds = [rect];


    (lib.adrian_bottom_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.adrian_bottom_shadow2();
        this.instance.setTransform(-61.3, -143.9, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_bottom_base_2();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-61.3, -144.3, 122.1, 289.1);
    p.frameBounds = [rect];


    (lib.adrian_bottom_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 6
        this.instance = new lib.adrian_bottom_shadow1();
        this.instance.setTransform(-61.5, -144.3, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.body_mc = new lib.adrian_bottom_base_1();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-61.5, -144.3, 122.3, 288.7);
    p.frameBounds = [rect];


    (lib.adrian_body = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Слой 4
        this.instance = new lib.adrian_body_shadow();
        this.instance.setTransform(-87.8, -267.3, 0.72, 0.72);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // body
        this.body_mc = new lib.adrian_body_base();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-87.9, -267.9, 176, 536.3);
    p.frameBounds = [rect];


    (lib.accessory_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // substrate
        this.substrate_mc = new lib.remove_1_mc();
        this.substrate_mc.setTransform(0, 0, 0.667, 0.667);

        this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-20, -20, 40, 40);
    p.frameBounds = [rect];


    (lib.copyright_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

        // animation
        this.instance = new lib.copyright_3_mc();
        this.instance.setTransform(-200, 200, 0.6, 0.6);
        this.instance.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1,
            x: 0,
            y: 0,
            alpha: 1
        }, 9, cjs.Ease.get(-1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-350, 110, 300, 180);
    p.frameBounds = [rect, new cjs.Rectangle(-348.7, 106.8, 302.5, 181.5), new cjs.Rectangle(-345, 97.1, 309.9, 186), new cjs.Rectangle(-338.9, 81.1, 322.2, 193.4), new cjs.Rectangle(-330.2, 58.6, 339.5, 203.7), new cjs.Rectangle(-319, 29.7, 361.7, 217.1), new cjs.Rectangle(-305.5, -5.5, 388.9, 233.4), new cjs.Rectangle(-289.4, -47.2, 421, 252.6), new cjs.Rectangle(-270.9, -95.4, 458, 274.8), new cjs.Rectangle(-250, -150, 500, 300)];


    (lib.smoke_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
             * @author edapskov
             * @copyright 2017 edapskov v 1.0
             */
            this.gotoAndStop(0);
            this.smoke_mc.gotoAndStop(0);
            this.mouseEnabled = false;
            this.mouseChildren = false;
            /*
		
            */
            var _that = this;
            var _intervalId;
            var _particles_arr = [];
            var _particleCount_num = 30;
            var _maxVelocity_num = 2;
            var bounds = this.smoke_mc.getBounds();
            var _canvasWidth_num = bounds.width;
            var _canvasHeight_num = bounds.height;
            this.smoke_mc.visible = false;
            /*
		
            */
            function Particle() {
                /*
			
                */
                this.x_num = 0;
                this.y_num = 0;
                this.xVelocity_num = 0;
                this.yVelocity_num = 0;
                /*
			
                */
                this.smoke_img = new lib.smoke_1_img();
                _that.addChild(this.smoke_img);
                /*
			
                */
                this.updateFunc = function() {
                    /*
				
                    */
                    this.x_num += this.xVelocity_num;
                    this.y_num += this.yVelocity_num;
                    /*
				
                    */
                    if (this.x_num >= _canvasWidth_num) {
                        this.xVelocity_num = -this.xVelocity_num;
                        this.x_num = _canvasWidth_num;
                    } else if (this.x_num <= 0) {
                        this.xVelocity_num = -this.xVelocity_num;
                        this.x_num = 0;
                    }
                    /*
				
                    */
                    if (this.y_num >= _canvasHeight_num) {
                        this.yVelocity_num = -this.yVelocity_num;
                        this.y_num = _canvasHeight_num;
                    } else if (this.y_num <= 0) {
                        this.yVelocity_num = -this.yVelocity_num;
                        this.y_num = 0;
                    }
                    /*
				
                    */
                    this.smoke_img.x = this.x_num - 128;
                    this.smoke_img.y = this.y_num - 128;
                };
                /*
			
                */
                this.setPositionFunc = function(x, y) {
                    this.x_num = x;
                    this.y_num = y;
                };
                /*
			
                */
                this.setVelocityFunc = function(x, y) {
                    this.xVelocity_num = x;
                    this.yVelocity_num = y;
                };
            }
            /*
		
            */
            function _updateFunc() {
                for (var prop in _particles_arr) {
                    if (_particles_arr.hasOwnProperty(prop)) {
                        _particles_arr[prop].updateFunc();
                    }
                }
            }
            /*
		
            */
            function _generateRandomFunc(min, max) {
                return Math.random() * (max - min) + min;
            }
            /*
		
            */
            function _onTickIntervalFunc() {
                try {
                    _updateFunc();
                } catch (event) {
                    clearInterval(_intervalId);
                    trace(event, 2);
                } finally {

                }
            }
            /*
		
            */
            function _initFunc() {
                /*
			
                */
                var particle;
                /*
			
                */
                for (var i = 0; i < _particleCount_num; ++i) {
                    particle = new Particle();
                    particle.setPositionFunc(_generateRandomFunc(0, _canvasWidth_num), _generateRandomFunc(0, _canvasHeight_num));
                    particle.setVelocityFunc(_generateRandomFunc(-_maxVelocity_num, _maxVelocity_num), _generateRandomFunc(-_maxVelocity_num, _maxVelocity_num));
                    _particles_arr.push(particle);
                }
                /*
			
                */
                _intervalId = setInterval(_onTickIntervalFunc, 100);
            }
            /*
		
            */
            _initFunc();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // graph
        this.smoke_mc = new lib.smoke_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.smoke_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 800, 600);
    p.frameBounds = [rect];


    (lib.gravity_explosion_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // container
        this.example_mc = new lib.ParticleGravityExplosionMC();

        this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-15, -15, 30, 30);
    p.frameBounds = [rect];


    (lib.title_reset_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            ищем наиболее подходящий язык
            https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            /*
		
            */
            var label_str = "en";
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            /*
		
            */
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz")) {
                label_str = "ru";
            }
            if (lang_str == "de") {
                label_str = "de";
            }
            if (lang_str == "fr") {
                label_str = "fr";
            }
            if (lang_str == "it") {
                label_str = "it";
            }
            if (lang_str == "es") {
                label_str = "es";
            }
            if (lang_str == "pt") {
                label_str = "pt";
            }
            if (lang_str == "tr") {
                label_str = "tr";
            }
            if (lang_str == "ja") {
                label_str = "ja";
            }
            if (lang_str == "hi") {
                label_str = "hi";
            }
            if (lang_str == "ar") {
                label_str = "ar";
            }
            if (lang_str == "id") {
                label_str = "id";
            }
            /*
		
            */
            this.body_mc.gotoAndStop(label_str);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.body_title_reset_mc();
        this.body_mc.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89.5, -39.5, 180, 80);
    p.frameBounds = [rect];


    (lib.title_random_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
            ищем наиболее подходящий язык
            https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
            */
            this.stop();
            this.body_mc.gotoAndStop(0);
            /*
		
            */
            var label_str = "en";
            var lang_str = window.navigator.language || navigator.userLanguage;
            lang_str = lang_str.split("-")[0].toLowerCase();
            /*
		
            */
            if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz")) {
                label_str = "ru";
            }
            if (lang_str == "de") {
                label_str = "de";
            }
            if (lang_str == "fr") {
                label_str = "fr";
            }
            if (lang_str == "it") {
                label_str = "it";
            }
            if (lang_str == "es") {
                label_str = "es";
            }
            if (lang_str == "pt") {
                label_str = "pt";
            }
            if (lang_str == "tr") {
                label_str = "tr";
            }
            if (lang_str == "ja") {
                label_str = "ja";
            }
            if (lang_str == "hi") {
                label_str = "hi";
            }
            if (lang_str == "ar") {
                label_str = "ar";
            }
            if (lang_str == "id") {
                label_str = "id";
            }
            /*
		
            */
            this.body_mc.gotoAndStop(label_str);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.body_title_random_mc();
        this.body_mc.setTransform(0, 0, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89.5, -39.5, 180, 80);
    p.frameBounds = [rect];


    (lib.sound_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.sound_4_mc();
        this.instance.setTransform(7, 0, 0.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.sound_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.sound_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.sound_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            rotation: -10
        }, 5).to({
            rotation: 10
        }, 10).to({
            rotation: 0
        }, 5).wait(51));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-69.5, -69.5, 139, 139), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-59.9, -59.9, 120, 120), new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-69.5, -69.5, 139, 139), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-62, -62, 124.1, 124.1), rect = new cjs.Rectangle(-60, -60, 120, 120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.sound_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.sound_3_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            rotation: -10
        }, 5).to({
            rotation: 10
        }, 10).to({
            rotation: 0
        }, 5).wait(51));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-69.5, -69.5, 139, 139), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-59.9, -59.9, 120, 120), new cjs.Rectangle(-62, -62, 124.1, 124.1), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-69.5, -69.5, 139, 139), new cjs.Rectangle(-67.7, -67.7, 135.5, 135.5), new cjs.Rectangle(-65.9, -65.9, 131.9, 131.9), new cjs.Rectangle(-64, -64, 128.1, 128.1), new cjs.Rectangle(-62, -62, 124.1, 124.1), rect = new cjs.Rectangle(-60, -60, 120, 120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.reset_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // title
        this.instance = new lib.title_reset_mc();
        this.instance.setTransform(0, 0, 1, 1, 0, 0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_long_button_img();
        this.instance_1.setTransform(-90, -40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -40, 180, 80);
    p.frameBounds = [rect];


    (lib.reset_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.reset_mc();
        this.instance.setTransform(0, 0, 0.889, 0.889);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(1).to({
            scaleX: 0.89,
            scaleY: 0.89,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -35.5, 160, 71.1);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -40, 180, 80), new cjs.Rectangle(-80, -35.5, 160, 71.1), new cjs.Rectangle(-90, -40, 180, 80)];


    (lib.remove_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.remove_1_mc();
        this.instance.setTransform(0, 0, 0.875, 0.875);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(1).to({
            scaleX: 0.88,
            scaleY: 0.88,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-26.2, -26.2, 52.5, 52.5);
    p.frameBounds = [rect, new cjs.Rectangle(-30, -30, 60, 60), new cjs.Rectangle(-26.2, -26.2, 52.5, 52.5), new cjs.Rectangle(-30, -30, 60, 60)];


    (lib.random_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // title
        this.instance = new lib.title_random_mc();
        this.instance.setTransform(0.5, 0.5, 1, 1, 0, 0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_long_button_img();
        this.instance_1.setTransform(-90, -40);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-90, -40, 180.5, 80.5);
    p.frameBounds = [rect];


    (lib.random_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.random_mc();
        this.instance.setTransform(0, 0, 0.889, 0.889);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(1).to({
            scaleX: 0.89,
            scaleY: 0.89,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -35.5, 160.4, 71.5);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -40, 180.5, 80.5), new cjs.Rectangle(-80, -35.5, 160.4, 71.5), new cjs.Rectangle(-90, -40, 180.5, 80.5)];


    (lib.play_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.play_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({
            x: 5
        }, 5).to({
            x: -5
        }, 10).to({
            x: 0
        }, 5).wait(1));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({
            scaleX: 1.05,
            scaleY: 1.05
        }, 5).to({
            scaleX: 1,
            scaleY: 1
        }, 10).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96, -96, 192, 192), new cjs.Rectangle(-96.9, -96.9, 194, 194), new cjs.Rectangle(-97.9, -97.9, 196, 196), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-100, -100, 200, 200), new cjs.Rectangle(-99.4, -99.4, 199, 199), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-98.4, -98.4, 197, 197), new cjs.Rectangle(-97.9, -97.9, 196, 196), new cjs.Rectangle(-97.4, -97.4, 195, 195), new cjs.Rectangle(-96.9, -96.9, 194, 194), new cjs.Rectangle(-97, -96.4, 193.6, 193), new cjs.Rectangle(-98, -95.9, 194.1, 192), new cjs.Rectangle(-99, -95.4, 194.6, 191), new cjs.Rectangle(-100, -95, 195, 190), new cjs.Rectangle(-99, -95, 194, 190), new cjs.Rectangle(-98, -95, 193, 190), new cjs.Rectangle(-97, -95, 192, 190), new cjs.Rectangle(-96, -95, 191, 190), new cjs.Rectangle(-95, -95, 190, 190)];


    (lib.photo_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.photo_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.navigation_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.prev_mc = new lib.nav_navigation_mc();
        this.prev_mc.setTransform(-90, 0, 1, 1, 0, 0, 180);

        this.next_mc = new lib.nav_navigation_mc();
        this.next_mc.setTransform(90, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.next_mc
            }, {
                t: this.prev_mc
            }]
        }).wait(1));

        // text
        this.title_mc = new lib.title_navigation_mc();

        this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1));

        // bg
        this.instance = new lib.bg_navigation_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-125, -35, 250, 70);
    p.frameBounds = [rect];


    (lib.more_games_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.more_games_7_mc();
        this.instance.setTransform(97.9, 45, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_1 = new lib.more_games_7_mc();
        this.instance_1.setTransform(127.2, 56.6, 1.553, 1.553, 0, 0, 0, 3.5, 3.9);

        this.instance_2 = new lib.more_games_7_mc();
        this.instance_2.setTransform(117.9, 50.5, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_3 = new lib.more_games_7_mc();
        this.instance_3.setTransform(26.9, 80, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_4 = new lib.more_games_7_mc();
        this.instance_4.setTransform(56.4, 108.1, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_5 = new lib.more_games_7_mc();
        this.instance_5.setTransform(71.4, 113.1, 2.363, 2.363, 0, 0, 0, 3.5, 3.9);

        this.instance_6 = new lib.more_games_11_mc();
        this.instance_6.setTransform(94.6, 90.6, 0.964, 0.964, -15, 0, 0, 22.1, 10);

        this.instance_7 = new lib.more_games_13_mc();
        this.instance_7.setTransform(16, 64.1, 0.987, 0.987, 60, 0, 0, 11.8, 12);

        this.instance_8 = new lib.more_games_13_mc();
        this.instance_8.setTransform(64, 100.6, 1.051, 1.051, 0, 0, 0, 11.9, 11.9);

        this.instance_9 = new lib.more_games_12_img();
        this.instance_9.setTransform(10.7, 37.7);

        this.instance_10 = new lib.more_games_14_mc();
        this.instance_10.setTransform(82, 109.1, 0.929, 0.929, 180, 0, 0, 8.3, 13.3);

        this.instance_11 = new lib.more_games_9_mc();
        this.instance_11.setTransform(79.8, 80.3, 1, 1, 0, 0, 0, 41.1, 30);

        this.instance_12 = new lib.more_games_15_mc();
        this.instance_12.setTransform(81.5, 45.2, 2.743, 2.743, 0, 0, 0, 3.8, 3.8);

        this.instance_13 = new lib.more_games_14_mc();
        this.instance_13.setTransform(53.4, 48.6, 1.196, 1.196, 150, 0, 0, 8.3, 13.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

        // Слой 3
        this.instance_14 = new lib.more_games_11_img();
        this.instance_14.setTransform(95, 33.3, 0.897, 0.897, -30);

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

        // Слой 2
        this.instance_15 = new lib.more_games_4_img();
        this.instance_15.setTransform(26.4, 5.4, 0.339, 0.339, -15);

        this.instance_16 = new lib.more_games_5_img();
        this.instance_16.setTransform(98.4, 5.1, 0.239, 0.239, 30);

        this.instance_17 = new lib.more_games_2_img();
        this.instance_17.setTransform(107, 0, 0.529, 0.529, 15);

        this.instance_18 = new lib.more_games_3_img();
        this.instance_18.setTransform(44.2, 4.7, 0.316, 0.316);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_18
            }, {
                t: this.instance_17
            }, {
                t: this.instance_16
            }, {
                t: this.instance_15
            }]
        }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 150.7, 122.4);
    p.frameBounds = [rect];


    (lib.more_games_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.more_games_12_mc();
        this.instance.setTransform(-4.8, -46.8, 0.322, 0.322, 0, 0, 0, 25, 25);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            regY: 24.9,
            scaleX: 0.91,
            scaleY: 0.91,
            y: -46.9
        }, 3).to({
            regX: 25,
            regY: 25,
            scaleX: 0.32,
            scaleY: 0.32,
            y: -46.8
        }, 4).to({
            _off: true
        }, 1).wait(17).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            regY: 24.9,
            scaleX: 0.91,
            scaleY: 0.91,
            y: -46.9
        }, 3).to({
            regX: 25,
            regY: 25,
            scaleX: 0.32,
            scaleY: 0.32,
            y: -46.8
        }, 4).to({
            _off: true
        }, 1).wait(32));

        // animation
        this.instance_1 = new lib.more_games_12_mc();
        this.instance_1.setTransform(-4.8, 25.2, 0.322, 0.322, 0, 0, 0, 25, 25);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            regY: 24.9,
            scaleX: 0.91,
            scaleY: 0.91,
            y: 25.1
        }, 3).to({
            regX: 25,
            regY: 25,
            scaleX: 0.32,
            scaleY: 0.32,
            y: 25.2
        }, 4).to({
            _off: true
        }, 1).wait(17).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            regY: 24.9,
            scaleX: 0.91,
            scaleY: 0.91,
            y: 25.1
        }, 3).to({
            regX: 25,
            regY: 25,
            scaleX: 0.32,
            scaleY: 0.32,
            y: 25.2
        }, 4).to({
            _off: true
        }, 1).wait(37));

        // animation
        this.instance_2 = new lib.more_games_12_mc();
        this.instance_2.setTransform(-45.1, -28.6, 0.418, 0.418, 0, 0, 0, 25, 25);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            scaleX: 1.18,
            scaleY: 1.18
        }, 3).to({
            regX: 25,
            scaleX: 0.42,
            scaleY: 0.42
        }, 4).to({
            _off: true
        }, 1).wait(17).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            scaleX: 1.18,
            scaleY: 1.18
        }, 3).to({
            regX: 25,
            scaleX: 0.42,
            scaleY: 0.42
        }, 4).to({
            _off: true
        }, 1).wait(41));

        // animation
        this.instance_3 = new lib.more_games_12_mc();
        this.instance_3.setTransform(17.9, 11.3, 0.418, 0.418, 0, 0, 0, 25, 25);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            scaleX: 1.18,
            scaleY: 1.18
        }, 3).to({
            regX: 25,
            scaleX: 0.42,
            scaleY: 0.42
        }, 4).to({
            _off: true
        }, 1).wait(17).to({
            _off: false
        }, 0).to({
            regX: 24.9,
            scaleX: 1.18,
            scaleY: 1.18
        }, 3).to({
            regX: 25,
            scaleX: 0.42,
            scaleY: 0.42
        }, 4).to({
            _off: true
        }, 1).wait(48));

        // animation
        this.instance_4 = new lib.more_games_8_mc();
        this.instance_4.setTransform(38.3, -2.7, 1, 1, -105, 0, 0, 24.9, 33.9);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({
            _off: false
        }, 0).to({
            rotation: 0,
            x: 62.7,
            y: 23.2
        }, 11, cjs.Ease.get(1)).wait(54).to({
            scaleX: 0.69,
            scaleY: 0.69,
            rotation: -105,
            x: 34.8,
            y: 7.2
        }, 12, cjs.Ease.get(-1)).to({
            _off: true
        }, 2).wait(8));

        // animation
        this.instance_5 = new lib.more_games_5_mc();
        this.instance_5.setTransform(0.2, -6.5, 1.074, 0.924, 0, 0, 0, 67.1, 57.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({
            regX: 67.2,
            scaleX: 0.96,
            scaleY: 0.83,
            y: -5
        }, 4, cjs.Ease.get(-1)).to({
            scaleX: 1,
            scaleY: 0.57,
            y: -25.8
        }, 2).to({
            regX: 67.1,
            scaleX: 1.07,
            scaleY: 0.07,
            y: -58.5
        }, 4).to({
            _off: true
        }, 1).wait(72).to({
            _off: false
        }, 0).to({
            scaleY: 0.92,
            y: -6.5
        }, 7).to({
            y: -4.5
        }, 2).to({
            y: -6.5
        }, 2).wait(3));

        // animation
        this.instance_6 = new lib.more_games_3_mc();
        this.instance_6.setTransform(0.3, 21.9, 1.074, 1.074, 0, 0, 0, 67.2, 47.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({
            scaleX: 0.96,
            scaleY: 0.96,
            x: 0.2,
            y: 20.3
        }, 4, cjs.Ease.get(-1)).to({
            scaleX: 1.07,
            scaleY: 1.07,
            x: 0.3,
            y: 21.9
        }, 4, cjs.Ease.get(1)).wait(82).to({
            y: 23.9
        }, 2).to({
            y: 21.9
        }, 2).wait(3));

        // animation
        this.instance_7 = new lib.more_games_4_mc();
        this.instance_7.setTransform(3, 2.2, 0.815, 0.685, 0, 0, 0, 75.3, 61.2);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({
            _off: false
        }, 0).to({
            scaleX: 1,
            scaleY: 0.84,
            x: 3.5,
            y: -3.3
        }, 6).to({
            scaleY: 1.09,
            y: -18.8
        }, 6, cjs.Ease.get(1)).to({
            scaleY: 1,
            y: -13.3
        }, 2).wait(58).to({
            scaleY: 0.88,
            y: -5.7
        }, 6).to({
            regX: 75.4,
            scaleX: 0.91,
            scaleY: 0.79,
            y: 1.4
        }, 7).to({
            _off: true
        }, 1).wait(7));

        // animation
        this.instance_8 = new lib.more_games_2_mc();
        this.instance_8.setTransform(0.3, 6.9, 1.074, 1.074, 0, 0, 0, 67.2, 61.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({
            scaleX: 0.96,
            scaleY: 0.96,
            x: 0.2
        }, 4, cjs.Ease.get(-1)).to({
            scaleX: 1.07,
            scaleY: 1.07,
            x: 0.3
        }, 4, cjs.Ease.get(1)).wait(82).to({
            y: 8.9
        }, 2).to({
            y: 6.9
        }, 2).wait(3));

        // animation
        this.instance_9 = new lib.more_games_6_mc();
        this.instance_9.setTransform(0.2, -61.5, 1.074, 0.039, 0, 180, 0, 67.1, 57.5);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({
            _off: false
        }, 0).to({
            regY: 57.1,
            scaleY: 0.29,
            y: -72.8
        }, 5).wait(60).to({
            regY: 57.5,
            scaleY: 0.04,
            y: -61.5
        }, 6, cjs.Ease.get(-1)).to({
            _off: true
        }, 1).wait(14));

        // graph
        this.instance_10 = new lib.more_games_10_mc();
        this.instance_10.setTransform(2.2, 16.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-72.3, -59.4, 145, 139.6);
    p.frameBounds = [rect, rect = new cjs.Rectangle(-72.2, -59.3, 144.9, 139.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3, -59.4, 145, 139.6), new cjs.Rectangle(-71.8, -58.9, 144, 139.1), new cjs.Rectangle(-70.3, -57.6, 142.4, 137.8), new cjs.Rectangle(-68, -55.4, 140.1, 135.6), new cjs.Rectangle(-67.6, -52.3, 139.7, 132.6), new cjs.Rectangle(-68, -55.5, 140.1, 135.7), new cjs.Rectangle(-70.4, -58.6, 142.5, 138.9), new cjs.Rectangle(-71.8, -59.5, 144, 139.7), new cjs.Rectangle(-72.3, -60.3, 146.5, 140.6), new cjs.Rectangle(-72.2, -61.3, 148.7, 141.6), new cjs.Rectangle(-72.2, -62.2, 151.1, 142.5), new cjs.Rectangle(-72.2, -64.6, 151.1, 144.8), new cjs.Rectangle(-72.2, -71.8, 158.9, 152), new cjs.Rectangle(-72.2, -77.7, 164.1, 158), new cjs.Rectangle(-72.2, -83.3, 166.4, 163.6), new cjs.Rectangle(-72.2, -89.6, 166.5, 169.9), new cjs.Rectangle(-72.2, -96, 165.6, 176.2), new cjs.Rectangle(-72.2, -95.9, 164.1, 176.2), new cjs.Rectangle(-72.2, -95.9, 162.5, 176.2), new cjs.Rectangle(-72.2, -95.9, 161.1, 176.2), new cjs.Rectangle(-72.2, -95.9, 160.2, 176.2), rect = new cjs.Rectangle(-72.2, -95.9, 160, 176.2), rect, rect, rect, rect, new cjs.Rectangle(-74.5, -95.9, 162.3, 176.2), rect = new cjs.Rectangle(-72.2, -95.9, 160, 176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.5, -95.9, 162.3, 176.2), rect = new cjs.Rectangle(-72.2, -95.9, 160, 176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3, -96, 160.1, 176.2), new cjs.Rectangle(-72.2, -95.1, 160.6, 175.4), new cjs.Rectangle(-72.2, -92.5, 161.4, 172.7), new cjs.Rectangle(-72.2, -88.1, 162.1, 168.3), new cjs.Rectangle(-72.2, -82, 162.5, 162.3), new cjs.Rectangle(-72.2, -74.2, 162.4, 154.4), new cjs.Rectangle(-72.2, -64.6, 161.3, 144.8), new cjs.Rectangle(-72.2, -62.2, 158.6, 142.5), new cjs.Rectangle(-72.2, -61.8, 153.8, 142), new cjs.Rectangle(-72.2, -61.4, 148, 141.6), new cjs.Rectangle(-72.2, -61, 147.1, 141.2), new cjs.Rectangle(-72.2, -60.6, 146, 140.8), new cjs.Rectangle(-72.2, -60.2, 145, 140.4), new cjs.Rectangle(-72.2, -59.8, 144.9, 140), new cjs.Rectangle(-72.3, -59.4, 145, 139.6), new cjs.Rectangle(-72.2, -58.3, 144.9, 138.5), new cjs.Rectangle(-72.3, -57.4, 145, 137.6), new cjs.Rectangle(-72.2, -58.3, 144.9, 138.6), rect = new cjs.Rectangle(-72.3, -59.4, 145, 139.6), rect, rect];


    (lib.logo_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

        // animation
        this.instance = new lib.beam_light_0_mc();
        this.instance.setTransform(-220, 0, 1, 1, 30);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({
            regX: -0.1,
            regY: 0.1,
            scaleX: 0.53,
            scaleY: 0.53,
            x: -200.1
        }, 0).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 29.9,
            x: 0
        }, 15).to({
            regX: 0.1,
            regY: -0.1,
            scaleX: 0.53,
            scaleY: 0.53,
            rotation: 30,
            x: 200.1
        }, 15).wait(1));

        // graph
        this.instance_1 = new lib.logo_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-110, -40, 220, 80);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.instruction_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.instruction_1_mc_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.full_screen_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // icon
        this.instance = new lib.full_screen_1_mc();

        this.instance_1 = new lib.full_screen_2_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

        // bg
        this.instance_2 = new lib.bg_small_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect];


    (lib.free_games_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // animation
        this.instance = new lib.free_games_2_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({
            y: -5
        }, 5).to({
            y: 0
        }, 5).to({
            y: -5
        }, 5).to({
            y: 0
        }, 5).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60, -61, 120, 120), new cjs.Rectangle(-60, -62, 120, 120), new cjs.Rectangle(-60, -63, 120, 120), new cjs.Rectangle(-60, -64, 120, 120), new cjs.Rectangle(-60, -65, 120, 120), new cjs.Rectangle(-60, -64, 120, 120), new cjs.Rectangle(-60, -63, 120, 120), new cjs.Rectangle(-60, -62, 120, 120), new cjs.Rectangle(-60, -61, 120, 120), new cjs.Rectangle(-60, -60, 120, 120), new cjs.Rectangle(-60, -61, 120, 120), new cjs.Rectangle(-60, -62, 120, 120), new cjs.Rectangle(-60, -63, 120, 120), new cjs.Rectangle(-60, -64, 120, 120), new cjs.Rectangle(-60, -65, 120, 120), new cjs.Rectangle(-60, -64, 120, 120), new cjs.Rectangle(-60, -63, 120, 120), new cjs.Rectangle(-60, -62, 120, 120), new cjs.Rectangle(-60, -61, 120, 120), new cjs.Rectangle(-60, -60, 120, 120)];


    (lib.free_games_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.free_games_3_mc();
        this.instance.setTransform(0, 0, 0.833, 0.833);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // icon
        this.instance_1 = new lib.free_games_1_mc();
        this.instance_1.setTransform(0, 0, 0.833, 0.833);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // bg
        this.instance_2 = new lib.bg_small_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.facebook_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.facebook_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1.17,
            scaleY: 1.17,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, new cjs.Rectangle(-70, -70, 140, 140), new cjs.Rectangle(-60, -60, 120, 120), new cjs.Rectangle(-70, -70, 140, 140)];


    (lib.done_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.done_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            scaleX: 1.05,
            scaleY: 1.05
        }, 5).to({
            scaleX: 1,
            scaleY: 1
        }, 10).wait(6));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({
            scaleX: 1.05,
            scaleY: 1.05
        }, 5).to({
            scaleX: 1,
            scaleY: 1
        }, 10).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96, -96, 192, 192), new cjs.Rectangle(-96.9, -96.9, 194, 194), new cjs.Rectangle(-97.9, -97.9, 196, 196), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-100, -100, 200, 200), new cjs.Rectangle(-99.4, -99.4, 199, 199), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-98.4, -98.4, 197, 197), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-100, -100, 200, 200), new cjs.Rectangle(-99.4, -99.4, 199, 199), new cjs.Rectangle(-98.9, -98.9, 198, 198), new cjs.Rectangle(-98.4, -98.4, 197, 197), new cjs.Rectangle(-97.9, -97.9, 196, 196), new cjs.Rectangle(-97.4, -97.4, 195, 195), new cjs.Rectangle(-96.9, -96.9, 194, 194), new cjs.Rectangle(-96.4, -96.4, 193, 193), new cjs.Rectangle(-95.9, -95.9, 192, 192), new cjs.Rectangle(-95.4, -95.4, 191, 191), new cjs.Rectangle(-95, -95, 190, 190)];


    (lib.credits_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.credits_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_small_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect];


    (lib.again_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // icon
        this.instance = new lib.again_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.bg_large_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-95, -95, 190, 190);
    p.frameBounds = [rect];


    (lib.redirect_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.remove_btn = new lib.remove_btn();
        this.remove_btn.setTransform(585, 115);
        new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

        this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

        // banner
        this.banner_mc = new lib.redirect_2_mc();
        this.banner_mc.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.banner_mc).wait(1));

        // bg
        this.instance = new lib.redirect_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.preloader_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // indicator
        this.indicator_mc = new lib.preloader_6_mc();
        this.indicator_mc.setTransform(-130, -15);

        this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -35, 300, 70);
    p.frameBounds = [rect];


    (lib.orientation_lock_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_7_mc();
        this.instance.setTransform(-18.5, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-53.5, -12, 107, 24);
    p.frameBounds = [rect];


    (lib.orientation_lock_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_9_mc();
        this.instance.setTransform(0, -208);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.orientation_lock_5_mc();
        this.instance_1.setTransform(0, 210);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // graph
        this.instance_2 = new lib.orientation_lock_4_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // graph
        this.instance_3 = new lib.orientation_lock_3_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-150, -250, 300, 500);
    p.frameBounds = [rect];


    (lib.orientation_lock_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_10_mc();
        this.instance.setTransform(440, 210);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // graph
        this.instance_1 = new lib.orientation_lock_2_mc();
        this.instance_1.setTransform(210, 280.1, 0.833, 0.833, 0, 0, 0, 0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // graph
        this.instance_2 = new lib.orientation_lock_2_mc();
        this.instance_2.setTransform(510, 430, 0.833, 0.833, 90);
        this.instance_2.alpha = 0.5;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(85, 71.7, 633.3, 483.3);
    p.frameBounds = [rect];


    (lib.orientation_lock_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.orientation_lock_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EhduAwcMAAAhg2MC7dAAAMAAABg2g");
        this.shape.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -10, 1200, 620);
    p.frameBounds = [rect];


    (lib.InstructionScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.remove_btn = new lib.remove_btn();
        this.remove_btn.setTransform(750, 50);
        new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

        this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

        // text
        this.instance = new lib.instruction_2_mc();
        this.instance.setTransform(400, 300);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.instruction_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.skin_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.adrian_body();
        this.body_1.setTransform(0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-88, -268.1, 176, 536.3);
    p.frameBounds = [rect];


    (lib.skin_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinett_body();
        this.body_1.setTransform(-0.1, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-141.1, -263.3, 282.3, 526.7);
    p.frameBounds = [rect];


    (lib.prev_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_mc();
        this.instance.setTransform(133.3, 0, 0.889, 0.889, 0, 0, 180, -150, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -225.7, 426.5, 451.4);
    p.frameBounds = [rect];


    (lib.panel_15_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // no
        this.earrings_0 = new lib.earrings_0_mc();
        this.earrings_0.setTransform(339, 95);

        this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(3));

        // options
        this.earrings_2 = new lib.option_accessory_earring_2_mc();
        this.earrings_2.setTransform(255, 95);

        this.earrings_1 = new lib.option_accessory_earring_1_mc();
        this.earrings_1.setTransform(95, 95);

        this.earrings_4 = new lib.option_accessory_earring_4_mc();
        this.earrings_4.setTransform(255, 255);

        this.earrings_3 = new lib.option_accessory_earring_3_mc();
        this.earrings_3.setTransform(95, 255);

        this.earrings_6 = new lib.option_accessory_earring_6_mc();
        this.earrings_6.setTransform(255, 95);

        this.earrings_5 = new lib.option_accessory_earring_5_mc();
        this.earrings_5.setTransform(95, 95);

        this.earrings_8 = new lib.option_accessory_earring_8_mc();
        this.earrings_8.setTransform(255, 255);

        this.earrings_7 = new lib.option_accessory_earring_7_mc();
        this.earrings_7.setTransform(95, 255);

        this.earrings_10 = new lib.option_accessory_earring_10_mc();
        this.earrings_10.setTransform(255, 95);

        this.earrings_9 = new lib.option_accessory_earring_9_mc();
        this.earrings_9.setTransform(95, 95);

        this.earrings_12 = new lib.option_accessory_earring_12_mc();
        this.earrings_12.setTransform(255, 255);

        this.earrings_11 = new lib.option_accessory_earring_11_mc();
        this.earrings_11.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.earrings_3
            }, {
                t: this.earrings_4
            }, {
                t: this.earrings_1
            }, {
                t: this.earrings_2
            }]
        }).to({
            state: [{
                t: this.earrings_7
            }, {
                t: this.earrings_8
            }, {
                t: this.earrings_5
            }, {
                t: this.earrings_6
            }]
        }, 1).to({
            state: [{
                t: this.earrings_11
            }, {
                t: this.earrings_12
            }, {
                t: this.earrings_9
            }, {
                t: this.earrings_10
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 359, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_14_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

        // no
        this.tail_0 = new lib.tail_0_mc();
        this.tail_0.setTransform(339, 95);

        this.timeline.addTween(cjs.Tween.get(this.tail_0).wait(2));

        // options
        this.tail_2 = new lib.option_accessory_neclare_2_mc();
        this.tail_2.setTransform(255, 95);

        this.tail_1 = new lib.option_accessory_neclare_1_mc();
        this.tail_1.setTransform(95, 95);

        this.tail_4 = new lib.option_accessory_neclare_4_mc();
        this.tail_4.setTransform(255, 255);

        this.tail_3 = new lib.option_accessory_neclare_3_mc();
        this.tail_3.setTransform(95, 255);

        this.tail_6 = new lib.option_accessory_neclare_6_mc();
        this.tail_6.setTransform(255, 95);

        this.tail_5 = new lib.option_accessory_neclare_5_mc();
        this.tail_5.setTransform(95, 95);

        this.tail_8 = new lib.option_accessory_neclare_8_mc();
        this.tail_8.setTransform(255, 255);

        this.tail_7 = new lib.option_accessory_neclare_7_mc();
        this.tail_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.tail_3
            }, {
                t: this.tail_4
            }, {
                t: this.tail_1
            }, {
                t: this.tail_2
            }]
        }).to({
            state: [{
                t: this.tail_7
            }, {
                t: this.tail_8
            }, {
                t: this.tail_5
            }, {
                t: this.tail_6
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 359, 450);
    p.frameBounds = [rect, rect];


    (lib.panel_12_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

        // no
        this.accessory_0 = new lib.accessory_0_mc();
        this.accessory_0.setTransform(339, 95);

        this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(2));

        // options
        this.accessory_2 = new lib.option_accessory_hand_2_mc();
        this.accessory_2.setTransform(255, 95);

        this.accessory_1 = new lib.option_accessory_hand_1_mc();
        this.accessory_1.setTransform(95, 95);

        this.accessory_4 = new lib.option_accessory_hand_4_mc();
        this.accessory_4.setTransform(255, 255);

        this.accessory_3 = new lib.option_accessory_hand_3_mc();
        this.accessory_3.setTransform(95, 255);

        this.accessory_6 = new lib.option_accessory_hand_6_mc();
        this.accessory_6.setTransform(255, 95);

        this.accessory_5 = new lib.option_accessory_hand_5_mc();
        this.accessory_5.setTransform(95, 95);

        this.accessory_8 = new lib.option_accessory_hand_8_mc();
        this.accessory_8.setTransform(255, 255);

        this.accessory_7 = new lib.option_accessory_hand_7_mc();
        this.accessory_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.accessory_3
            }, {
                t: this.accessory_4
            }, {
                t: this.accessory_1
            }, {
                t: this.accessory_2
            }]
        }).to({
            state: [{
                t: this.accessory_7
            }, {
                t: this.accessory_8
            }, {
                t: this.accessory_5
            }, {
                t: this.accessory_6
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 359, 450);
    p.frameBounds = [rect, rect];


    (lib.panel_12_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

        // no
        this.tail_0 = new lib.tail_0_mc();
        this.tail_0.setTransform(339, 95);

        this.timeline.addTween(cjs.Tween.get(this.tail_0).wait(1));

        // options
        this.tail_2 = new lib.option_accessory_neclare_kot_2_mc();
        this.tail_2.setTransform(255, 95);

        this.tail_1 = new lib.option_accessory_neclare_kot_1_mc();
        this.tail_1.setTransform(95, 95);

        this.tail_4 = new lib.option_accessory_neclare_kot_4_mc();
        this.tail_4.setTransform(255, 255);

        this.tail_3 = new lib.option_accessory_neclare_kot_3_mc();
        this.tail_3.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.tail_3
            }, {
                t: this.tail_4
            }, {
                t: this.tail_1
            }, {
                t: this.tail_2
            }]
        }).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 359, 450);
    p.frameBounds = [rect];


    (lib.panel_11_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

        // no
        this.headdress_0 = new lib.headdress_0_mc();
        this.headdress_0.setTransform(339, 95);

        this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(2));

        // options
        this.headdress_2 = new lib.option_accessory_head_2_mc();
        this.headdress_2.setTransform(255, 95);

        this.headdress_1 = new lib.option_accessory_head_1_mc();
        this.headdress_1.setTransform(95, 95);

        this.headdress_4 = new lib.option_accessory_head_4_mc();
        this.headdress_4.setTransform(255, 255);

        this.headdress_3 = new lib.option_accessory_head_3_mc();
        this.headdress_3.setTransform(95, 255);

        this.headdress_6 = new lib.option_accessory_head_6_mc();
        this.headdress_6.setTransform(255, 95);

        this.headdress_5 = new lib.option_accessory_head_5_mc();
        this.headdress_5.setTransform(95, 95);

        this.headdress_8 = new lib.option_accessory_head_8_mc();
        this.headdress_8.setTransform(255, 255);

        this.headdress_7 = new lib.option_accessory_head_7_mc();
        this.headdress_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.headdress_3
            }, {
                t: this.headdress_4
            }, {
                t: this.headdress_1
            }, {
                t: this.headdress_2
            }]
        }).to({
            state: [{
                t: this.headdress_7
            }, {
                t: this.headdress_8
            }, {
                t: this.headdress_5
            }, {
                t: this.headdress_6
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 359, 450);
    p.frameBounds = [rect, rect];


    (lib.panel_10_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.shoes_2 = new lib.option_shoes_2_mc();
        this.shoes_2.setTransform(255, 95);

        this.shoes_1 = new lib.option_shoes_1_mc();
        this.shoes_1.setTransform(95, 95);

        this.shoes_4 = new lib.option_shoes_4_mc();
        this.shoes_4.setTransform(255, 255);

        this.shoes_3 = new lib.option_shoes_3_mc();
        this.shoes_3.setTransform(95, 255);

        this.shoes_6 = new lib.option_shoes_6_mc();
        this.shoes_6.setTransform(255, 95);

        this.shoes_5 = new lib.option_shoes_5_mc();
        this.shoes_5.setTransform(95, 95);

        this.shoes_8 = new lib.option_shoes_8_mc();
        this.shoes_8.setTransform(255, 255);

        this.shoes_7 = new lib.option_shoes_7_mc();
        this.shoes_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shoes_3
            }, {
                t: this.shoes_4
            }, {
                t: this.shoes_1
            }, {
                t: this.shoes_2
            }]
        }).to({
            state: [{
                t: this.shoes_7
            }, {
                t: this.shoes_8
            }, {
                t: this.shoes_5
            }, {
                t: this.shoes_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_shoes = new lib.color_picker_mc();
        this.color_shoes.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_shoes._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_shoes).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_10_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

        // no
        this.accessory_0 = new lib.accessory_0_mc();
        this.accessory_0.setTransform(339, 95);

        this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(2));

        // options
        this.accessory_2 = new lib.option_accessory_kot_2_mc();
        this.accessory_2.setTransform(255, 95);

        this.accessory_1 = new lib.option_accessory_kot_1_mc();
        this.accessory_1.setTransform(95, 95);

        this.accessory_4 = new lib.option_accessory_kot_4_mc();
        this.accessory_4.setTransform(255, 255);

        this.accessory_3 = new lib.option_accessory_kot_3_mc();
        this.accessory_3.setTransform(95, 255);

        this.accessory_6 = new lib.option_accessory_kot_6_mc();
        this.accessory_6.setTransform(255, 95);

        this.accessory_5 = new lib.option_accessory_kot_5_mc();
        this.accessory_5.setTransform(95, 95);

        this.accessory_8 = new lib.option_accessory_kot_8_mc();
        this.accessory_8.setTransform(255, 255);

        this.accessory_7 = new lib.option_accessory_kot_7_mc();
        this.accessory_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.accessory_3
            }, {
                t: this.accessory_4
            }, {
                t: this.accessory_1
            }, {
                t: this.accessory_2
            }]
        }).to({
            state: [{
                t: this.accessory_7
            }, {
                t: this.accessory_8
            }, {
                t: this.accessory_5
            }, {
                t: this.accessory_6
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 359, 450);
    p.frameBounds = [rect, rect];


    (lib.panel_9_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

        // no
        this.headdress_0 = new lib.headdress_0_mc();
        this.headdress_0.setTransform(339, 95);

        this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(2));

        // options
        this.headdress_2 = new lib.option_accessory_head_kot_2_mc();
        this.headdress_2.setTransform(255, 95);

        this.headdress_1 = new lib.option_accessory_head_kot_1_mc();
        this.headdress_1.setTransform(95, 95);

        this.headdress_4 = new lib.option_accessory_head_kot_4_mc();
        this.headdress_4.setTransform(255, 255);

        this.headdress_3 = new lib.option_accessory_head_kot_3_mc();
        this.headdress_3.setTransform(95, 255);

        this.headdress_6 = new lib.option_accessory_head_kot_6_mc();
        this.headdress_6.setTransform(255, 95);

        this.headdress_5 = new lib.option_accessory_head_kot_5_mc();
        this.headdress_5.setTransform(95, 95);

        this.headdress_8 = new lib.option_accessory_head_kot_8_mc();
        this.headdress_8.setTransform(255, 255);

        this.headdress_7 = new lib.option_accessory_head_kot_7_mc();
        this.headdress_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.headdress_3
            }, {
                t: this.headdress_4
            }, {
                t: this.headdress_1
            }, {
                t: this.headdress_2
            }]
        }).to({
            state: [{
                t: this.headdress_7
            }, {
                t: this.headdress_8
            }, {
                t: this.headdress_5
            }, {
                t: this.headdress_6
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 359, 450);
    p.frameBounds = [rect, rect];


    (lib.panel_8_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.shoes_2 = new lib.option_shoes_kot_2_mc();
        this.shoes_2.setTransform(255, 95);

        this.shoes_1 = new lib.option_shoes_kot_1_mc();
        this.shoes_1.setTransform(95, 95);

        this.shoes_4 = new lib.option_shoes_kot_4_mc();
        this.shoes_4.setTransform(255, 255);

        this.shoes_3 = new lib.option_shoes_kot_3_mc();
        this.shoes_3.setTransform(95, 255);

        this.shoes_6 = new lib.option_shoes_kot_6_mc();
        this.shoes_6.setTransform(255, 95);

        this.shoes_5 = new lib.option_shoes_kot_5_mc();
        this.shoes_5.setTransform(95, 95);

        this.shoes_8 = new lib.option_shoes_kot_8_mc();
        this.shoes_8.setTransform(255, 255);

        this.shoes_7 = new lib.option_shoes_kot_7_mc();
        this.shoes_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shoes_3
            }, {
                t: this.shoes_4
            }, {
                t: this.shoes_1
            }, {
                t: this.shoes_2
            }]
        }).to({
            state: [{
                t: this.shoes_7
            }, {
                t: this.shoes_8
            }, {
                t: this.shoes_5
            }, {
                t: this.shoes_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_shoes = new lib.color_picker_mc();
        this.color_shoes.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_shoes._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_shoes).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

        // palette
        this.color_eyelash = new lib.color_picker_mc();
        this.color_eyelash.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);

        this.timeline.addTween(cjs.Tween.get(this.color_eyelash).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect];


    (lib.panel_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

        // options
        this.lips_2 = new lib.option_mouth_2_mc();
        this.lips_2.setTransform(255, 95);

        this.lips_1 = new lib.option_mouth_1_mc();
        this.lips_1.setTransform(95, 95);

        this.lips_4 = new lib.option_mouth_4_mc();
        this.lips_4.setTransform(255, 255);

        this.lips_3 = new lib.option_mouth_3_mc();
        this.lips_3.setTransform(95, 255);

        this.lips_6 = new lib.option_mouth_6_mc();
        this.lips_6.setTransform(255, 95);

        this.lips_5 = new lib.option_mouth_5_mc();
        this.lips_5.setTransform(95, 95);

        this.lips_8 = new lib.option_mouth_8_mc();
        this.lips_8.setTransform(255, 255);

        this.lips_7 = new lib.option_mouth_7_mc();
        this.lips_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lips_3
            }, {
                t: this.lips_4
            }, {
                t: this.lips_1
            }, {
                t: this.lips_2
            }]
        }).to({
            state: [{
                t: this.lips_7
            }, {
                t: this.lips_8
            }, {
                t: this.lips_5
            }, {
                t: this.lips_6
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect];


    (lib.panel_3_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

        // options
        this.lips_2 = new lib.option_mouth_kot_2_mc();
        this.lips_2.setTransform(255, 95);

        this.lips_1 = new lib.option_mouth_kot_1_mc();
        this.lips_1.setTransform(95, 95);

        this.lips_4 = new lib.option_mouth_kot_4_mc();
        this.lips_4.setTransform(255, 255);

        this.lips_3 = new lib.option_mouth_kot_3_mc();
        this.lips_3.setTransform(95, 255);

        this.lips_6 = new lib.option_mouth_kot_6_mc();
        this.lips_6.setTransform(255, 95);

        this.lips_5 = new lib.option_mouth_kot_5_mc();
        this.lips_5.setTransform(95, 95);

        this.lips_8 = new lib.option_mouth_kot_8_mc();
        this.lips_8.setTransform(255, 255);

        this.lips_7 = new lib.option_mouth_kot_7_mc();
        this.lips_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.lips_3
            }, {
                t: this.lips_4
            }, {
                t: this.lips_1
            }, {
                t: this.lips_2
            }]
        }).to({
            state: [{
                t: this.lips_7
            }, {
                t: this.lips_8
            }, {
                t: this.lips_5
            }, {
                t: this.lips_6
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect];


    (lib.panel_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

        // palette
        this.color_skin = new lib.color_picker_mc();
        this.color_skin.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);

        this.timeline.addTween(cjs.Tween.get(this.color_skin).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect];


    (lib.panel_1_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

        // palette
        this.color_skin = new lib.color_picker_mc();
        this.color_skin.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);

        this.timeline.addTween(cjs.Tween.get(this.color_skin).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect];


    (lib.panel_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(5));

        // options
        this.bg_2 = new lib.option_bg_2_mc();
        this.bg_2.setTransform(255, 95);

        this.bg_1 = new lib.option_bg_1_mc();
        this.bg_1.setTransform(95, 95);

        this.bg_4 = new lib.option_bg_4_mc();
        this.bg_4.setTransform(255, 255);

        this.bg_3 = new lib.option_bg_3_mc();
        this.bg_3.setTransform(95, 255);

        this.bg_6 = new lib.option_bg_6_mc();
        this.bg_6.setTransform(255, 95);

        this.bg_5 = new lib.option_bg_5_mc();
        this.bg_5.setTransform(95, 95);

        this.bg_8 = new lib.option_bg_8_mc();
        this.bg_8.setTransform(255, 255);

        this.bg_7 = new lib.option_bg_7_mc();
        this.bg_7.setTransform(95, 255);

        this.bg_10 = new lib.option_bg_10_mc();
        this.bg_10.setTransform(255, 95);

        this.bg_9 = new lib.option_bg_9_mc();
        this.bg_9.setTransform(95, 95);

        this.bg_12 = new lib.option_bg_12_mc();
        this.bg_12.setTransform(255, 255);

        this.bg_11 = new lib.option_bg_11_mc();
        this.bg_11.setTransform(95, 255);

        this.bg_14 = new lib.option_bg_14_mc();
        this.bg_14.setTransform(255, 95);

        this.bg_13 = new lib.option_bg_13_mc();
        this.bg_13.setTransform(95, 95);

        this.bg_16 = new lib.option_bg_16_mc();
        this.bg_16.setTransform(255, 255);

        this.bg_15 = new lib.option_bg_15_mc();
        this.bg_15.setTransform(95, 255);

        this.bg_18 = new lib.option_bg_18_mc();
        this.bg_18.setTransform(255, 95);

        this.bg_17 = new lib.option_bg_17_mc();
        this.bg_17.setTransform(95, 95);

        this.bg_20 = new lib.option_bg_20_mc();
        this.bg_20.setTransform(255, 255);

        this.bg_19 = new lib.option_bg_19_mc();
        this.bg_19.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.bg_3
            }, {
                t: this.bg_4
            }, {
                t: this.bg_1
            }, {
                t: this.bg_2
            }]
        }).to({
            state: [{
                t: this.bg_7
            }, {
                t: this.bg_8
            }, {
                t: this.bg_5
            }, {
                t: this.bg_6
            }]
        }, 1).to({
            state: [{
                t: this.bg_11
            }, {
                t: this.bg_12
            }, {
                t: this.bg_9
            }, {
                t: this.bg_10
            }]
        }, 1).to({
            state: [{
                t: this.bg_15
            }, {
                t: this.bg_16
            }, {
                t: this.bg_13
            }, {
                t: this.bg_14
            }]
        }, 1).to({
            state: [{
                t: this.bg_19
            }, {
                t: this.bg_20
            }, {
                t: this.bg_17
            }, {
                t: this.bg_18
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect, rect, rect];


    (lib.panel_0_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(5));

        // options
        this.bg_2 = new lib.option_bg_2_mc();
        this.bg_2.setTransform(255, 95);

        this.bg_1 = new lib.option_bg_1_mc();
        this.bg_1.setTransform(95, 95);

        this.bg_4 = new lib.option_bg_4_mc();
        this.bg_4.setTransform(255, 255);

        this.bg_3 = new lib.option_bg_3_mc();
        this.bg_3.setTransform(95, 255);

        this.bg_6 = new lib.option_bg_6_mc();
        this.bg_6.setTransform(255, 95);

        this.bg_5 = new lib.option_bg_5_mc();
        this.bg_5.setTransform(95, 95);

        this.bg_8 = new lib.option_bg_8_mc();
        this.bg_8.setTransform(255, 255);

        this.bg_7 = new lib.option_bg_7_mc();
        this.bg_7.setTransform(95, 255);

        this.bg_10 = new lib.option_bg_10_mc();
        this.bg_10.setTransform(255, 95);

        this.bg_9 = new lib.option_bg_9_mc();
        this.bg_9.setTransform(95, 95);

        this.bg_12 = new lib.option_bg_12_mc();
        this.bg_12.setTransform(255, 255);

        this.bg_11 = new lib.option_bg_11_mc();
        this.bg_11.setTransform(95, 255);

        this.bg_14 = new lib.option_bg_14_mc();
        this.bg_14.setTransform(255, 95);

        this.bg_13 = new lib.option_bg_13_mc();
        this.bg_13.setTransform(95, 95);

        this.bg_16 = new lib.option_bg_16_mc();
        this.bg_16.setTransform(255, 255);

        this.bg_15 = new lib.option_bg_15_mc();
        this.bg_15.setTransform(95, 255);

        this.bg_18 = new lib.option_bg_18_mc();
        this.bg_18.setTransform(255, 95);

        this.bg_17 = new lib.option_bg_17_mc();
        this.bg_17.setTransform(95, 95);

        this.bg_20 = new lib.option_bg_20_mc();
        this.bg_20.setTransform(255, 255);

        this.bg_19 = new lib.option_bg_19_mc();
        this.bg_19.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.bg_3
            }, {
                t: this.bg_4
            }, {
                t: this.bg_1
            }, {
                t: this.bg_2
            }]
        }).to({
            state: [{
                t: this.bg_7
            }, {
                t: this.bg_8
            }, {
                t: this.bg_5
            }, {
                t: this.bg_6
            }]
        }, 1).to({
            state: [{
                t: this.bg_11
            }, {
                t: this.bg_12
            }, {
                t: this.bg_9
            }, {
                t: this.bg_10
            }]
        }, 1).to({
            state: [{
                t: this.bg_15
            }, {
                t: this.bg_16
            }, {
                t: this.bg_13
            }, {
                t: this.bg_14
            }]
        }, 1).to({
            state: [{
                t: this.bg_19
            }, {
                t: this.bg_20
            }, {
                t: this.bg_17
            }, {
                t: this.bg_18
            }]
        }, 1).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect, rect, rect];


    (lib.option_top_kot_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_top_8();
        this.instance.setTransform(-2.9, 5.1, 0.717, 0.717);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_kot_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_top_7();
        this.instance.setTransform(-3.9, 2, 0.59, 0.59, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_kot_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_top_6();
        this.instance.setTransform(-1.9, 2, 0.59, 0.59, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_kot_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_top_5();
        this.instance.setTransform(-3.9, 1.1, 0.805, 0.805);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_top_4();
        this.instance.setTransform(-3.9, 0.1, 0.805, 0.805);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_top_3();
        this.instance.setTransform(-2.9, 0.1, 0.805, 0.805);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_top_2();
        this.instance.setTransform(-2.9, 1.1, 0.805, 0.805);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_top_1();
        this.instance.setTransform(-2.9, 0.1, 0.805, 0.805);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_top8();
        this.instance.setTransform(-4, -1.6, 0.738, 0.738, 0, 0, 0, -4.8, -4.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_top7();
        this.instance.setTransform(3, -1.6, 0.763, 0.763, 0, 0, 0, 21.9, -138.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_top6();
        this.instance.setTransform(14, -1.7, 1.07, 1.07, 0, 0, 0, 21.9, -138.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_top5();
        this.instance.setTransform(1, -1.6, 0.637, 0.637, 0, 0, 0, 21.9, -138.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_top4();
        this.instance.setTransform(1, -1.6, 0.637, 0.637, 0, 0, 0, 21.9, -138.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_top3();
        this.instance.setTransform(5.9, -2.6, 0.732, 0.732, 0, 0, 0, 7.8, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_top2();
        this.instance.setTransform(1, -1.6, 0.637, 0.637, 0, 0, 0, 21.9, -138.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_top_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_top1();
        this.instance.setTransform(1, 0.3, 1, 1, 0, 0, 0, 21.9, -138.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_hair_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hair8();
        this.instance.setTransform(-0.6, 1.1, 0.758, 0.758, 0, 0, 0, -0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_hair_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hair7();
        this.instance.setTransform(-0.6, 1.1, 0.758, 0.758, 0, 0, 0, -0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_hair_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hair6();
        this.instance.setTransform(-1.6, 3.1, 0.57, 0.57, 0, 0, 0, -0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_hair_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hair5();
        this.instance.setTransform(3.4, 3.1, 0.57, 0.57, 0, 0, 0, -0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_hair_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hair4();
        this.instance.setTransform(-1.7, 3.1, 1.279, 1.279, 0, 0, 0, -0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_hair_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hair3();
        this.instance.setTransform(-1.6, 3.1, 0.57, 0.57, 0, 0, 0, -0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_hair_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hair2();
        this.instance.setTransform(-1.7, 3.1, 1.081, 1.081, 0, 0, 0, -0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_hair_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_hair1();
        this.instance.setTransform(-1.7, 5.1, 1.081, 1.081, 0, 0, 0, -0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hair_4();
        this.instance.setTransform(0.4, 0.4, 1.25, 1.25);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hair_3();
        this.instance.setTransform(0.4, 0.4, 1.25, 1.25);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hair_2();
        this.instance.setTransform(0.4, 0.4, 1.25, 1.25);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_hair_1();
        this.instance.setTransform(0.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_fringe_8();
        this.instance.setTransform(-4.7, 1.3, 0.858, 0.858, 0, 0, 0, -0.4, 0.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_fringe_7();
        this.instance.setTransform(-3.7, 0.4, 1.1, 1.1, 0, 0, 0, -0.4, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_fringe_6();
        this.instance.setTransform(-4.7, 0.4, 0.998, 0.998, 0, 0, 0, -0.4, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_fringe_5();
        this.instance.setTransform(0.3, 1.4, 0.743, 0.743, 0, 0, 0, -0.4, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_fringe_4();
        this.instance.setTransform(-2.7, 1.4, 1.168, 1.168, 0, 0, 0, -0.4, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_fringe_3();
        this.instance.setTransform(0.3, 0.4, 1.168, 1.168, 0, 0, 0, -0.4, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_fringe_2();
        this.instance.setTransform(-0.7, -1.6, 1.168, 1.168, 0, 0, 0, -0.4, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_fringe_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_fringe_1();
        this.instance.setTransform(2.3, 3.4, 1.168, 1.168, 0, 0, 0, -0.4, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_eyes_4();
        this.instance.setTransform(1.4, 0.4, 1.988, 1.988, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_eyes_3();
        this.instance.setTransform(-2.6, -7.6, 1.988, 1.988, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_eyes_2();
        this.instance.setTransform(1.4, 0.4, 1.988, 1.988, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_eyes_1();
        this.instance.setTransform(3.4, -3.6, 1.779, 1.779, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_eyes7();
        this.instance.setTransform(2, -0.6, 2.333, 2.333, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_eyes6();
        this.instance.setTransform(2, -0.6, 2.333, 2.333, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_eyes5();
        this.instance.setTransform(2, -0.6, 2.333, 2.333, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_eyes4();
        this.instance.setTransform(2, -0.6, 2.333, 2.333, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_eyes3();
        this.instance.setTransform(2, -0.6, 2.333, 2.333, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_eyes2();
        this.instance.setTransform(2, -0.6, 2.333, 2.333, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_eyes_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_eyes1();
        this.instance.setTransform(2, -0.6, 2.333, 2.333, 0, 0, 0, -0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_kot_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_dress8();
        this.instance.setTransform(-3, 0.5, 0.296, 0.296, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_kot_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_dress7();
        this.instance.setTransform(-1, 1.5, 0.296, 0.296, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_kot_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_dress6();
        this.instance.setTransform(-3, 1.5, 0.296, 0.296, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_kot_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_dress5();
        this.instance.setTransform(-4, 0.5, 0.296, 0.296, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_dress4();
        this.instance.setTransform(-5, 0.5, 0.296, 0.296, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_dress3();
        this.instance.setTransform(-3, 0.5, 0.296, 0.296, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_dress2();
        this.instance.setTransform(-5, 0.5, 0.296, 0.296, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_dress1();
        this.instance.setTransform(-3, 0.5, 0.296, 0.296, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinet_dress8();
        this.instance.setTransform(-2.1, 3, 0.299, 0.299, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinet_dress7();
        this.instance.setTransform(-7.7, 29.5, 0.429, 0.429, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinet_dress6();
        this.instance.setTransform(0.1, 2.5, 0.299, 0.299, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinet_dress5();
        this.instance.setTransform(-2.9, 3.1, 0.299, 0.299, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinet_dress4();
        this.instance.setTransform(-2.9, 3.1, 0.299, 0.299, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinet_dress3();
        this.instance.setTransform(-2.9, 3.1, 0.299, 0.299, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinet_dress2();
        this.instance.setTransform(-3, 3, 0.299, 0.299, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_dress_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinet_dress1();
        this.instance.setTransform(-3, 3, 0.299, 0.299, 0, 0, 0, 0.1, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_kot_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_bottom_8();
        this.instance.setTransform(-3, 1.4, 0.472, 0.472);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_kot_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_bottom_7();
        this.instance.setTransform(-3, 0.4, 0.85, 0.85);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_kot_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_bottom_6();
        this.instance.setTransform(-3, 0.4, 0.693, 0.693);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_kot_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_bottom_5();
        this.instance.setTransform(-3, 0.4, 0.772, 0.772);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_bottom_4();
        this.instance.setTransform(-3, 0.4, 0.661, 0.661);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_bottom_3();
        this.instance.setTransform(-3, 1.4, 0.468, 0.468);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_bottom_2();
        this.instance.setTransform(-3, 1.4, 0.468, 0.468);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_bottom_1();
        this.instance.setTransform(-3, 1.4, 0.468, 0.468);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_bottom8();
        this.instance.setTransform(9.1, -7.6, 0.745, 0.745, 0, 0, 0, 11.4, -12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_bottom7();
        this.instance.setTransform(8, -8.6, 0.804, 0.804, 0, 0, 0, 11.4, -12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_bottom6();
        this.instance.setTransform(7.1, -3.6, 0.743, 0.743, 0, 0, 0, 11.5, -12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_bottom5();
        this.instance.setTransform(8, -6.6, 0.748, 0.748, 0, 0, 0, 11.4, -12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_bottom4();
        this.instance.setTransform(4, -4.6, 0.474, 0.474, 0, 0, 0, 11.4, -11.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_bottom3();
        this.instance.setTransform(7, -6.6, 0.689, 0.689, 0, 0, 0, 11.4, -12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_bottom2();
        this.instance.setTransform(7, -3.6, 0.544, 0.544, 0, 0, 0, 11.4, -12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_bottom_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_bottom1();
        this.instance.setTransform(-0.9, 1.4, 0.68, 0.68, 0, 0, 0, 11.4, -11.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_kot_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_mask_8();
        this.instance.setTransform(0, 3, 1.824, 1.824);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_kot_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_mask_7();
        this.instance.setTransform(0, 0, 1.824, 1.824);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_kot_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_mask_6();
        this.instance.setTransform(-1, 0, 1.824, 1.824);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_kot_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_mask_5();
        this.instance.setTransform(-1, -2, 1.824, 1.824);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_kot_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_mask_4();
        this.instance.setTransform(-1, 4, 1.824, 1.824);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_kot_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_mask_3();
        this.instance.setTransform(-1, -2, 1.824, 1.824);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_kot_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_mask_2();
        this.instance.setTransform(-1, 5, 1.824, 1.824);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_kot_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.adrian_mask_1();
        this.instance.setTransform(1, -2, 1.824, 1.824);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_mask8();
        this.instance.setTransform(1, 0.4, 1.392, 1.392, 0, 0, 0, 0.7, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_mask7();
        this.instance.setTransform(1, 2.4, 1.392, 1.392, 0, 0, 0, 0.7, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_6_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_mask6();
        this.instance.setTransform(1, 4.4, 1.392, 1.392, 0, 0, 0, 0.7, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_mask5();
        this.instance.setTransform(2, 6.4, 1.392, 1.392, 0, 0, 0, 0.7, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_mask4();
        this.instance.setTransform(1, -0.6, 1.392, 1.392, 0, 0, 0, 0.7, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_3_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_mask3();
        this.instance.setTransform(1, 0.4, 1.392, 1.392, 0, 0, 0, 0.7, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_mask2();
        this.instance.setTransform(1, -0.6, 1.392, 1.392, 0, 0, 0, 0.7, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.option_accessory_wings_1_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // check
        this.check_mc = new lib.check_mc();
        this.check_mc.setTransform(65, -65);

        this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

        // Слой 2
        this.instance = new lib.marinett_mask1();
        this.instance.setTransform(3, 3.4, 1.392, 1.392, 0, 0, 0, 0.7, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Слой 1
        this.bg_mc = new lib.bg_option_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-75, -81.1, 156.3, 156.2);
    p.frameBounds = [rect];


    (lib.next_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.nav_mc();
        this.instance.setTransform(-133.3, 0, 0.889, 0.889, 0, 0, 0, -150, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-346.5, -225.7, 426.5, 451.4);
    p.frameBounds = [rect];


    (lib.marinett_shoes_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinett_shoes_1();
        this.body_1.setTransform(242.9, 244.5, 1, 1, 0, 0, 0, 0, 0.4);

        this.body_2 = new lib.marinett_shoes_2();
        this.body_2.setTransform(242.9, 246.7);

        this.body_3 = new lib.marinett_shoes_3();
        this.body_3.setTransform(242.9, 204.9, 1, 1, 0, 0, 0, 0, 0.4);

        this.body_4 = new lib.marinett_shoes_4();
        this.body_4.setTransform(242.9, 204.9, 1, 1, 0, 0, 0, 0, 0.4);

        this.body_5 = new lib.marinett_shoes_5();
        this.body_5.setTransform(242.9, 234, 1, 1, 0, 0, 0, 0, 0.4);

        this.body_6 = new lib.marinett_shoes_6();
        this.body_6.setTransform(242.8, 298, 1, 1, 0, 0, 0, -0.1, 0.5);

        this.body_7 = new lib.marinett_shoes_7();
        this.body_7.setTransform(242.8, 298, 1, 1, 0, 0, 0, -0.1, 0.5);

        this.body_8 = new lib.marinett_shoes_8();
        this.body_8.setTransform(243, 282.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(100.2, 166.4, 285.7, 156.5);
    p.frameBounds = [rect, new cjs.Rectangle(100.2, 170.8, 285.4, 152.1), new cjs.Rectangle(100.7, 87.9, 285.4, 235.5), new cjs.Rectangle(99.8, 86.9, 287.1, 237.1), new cjs.Rectangle(100.2, 145.4, 287.1, 178.5), new cjs.Rectangle(100.2, 273.4, 285.9, 49.3), new cjs.Rectangle(99.7, 273.4, 285.9, 48.7), new cjs.Rectangle(100.2, 239.9, 286.3, 84.2)];


    (lib.marinett_fringe_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinett_fringe_1();
        this.body_1.setTransform(0.4, -0.4, 1, 1, 0, 0, 0, 0, 0.3);

        this.body_2 = new lib.marinett_fringe_2();
        this.body_2.setTransform(1.6, -19.9, 1, 1, 0, 0, 0, 0.1, -0.1);

        this.body_3 = new lib.marinett_fringe_3();
        this.body_3.setTransform(1.4, -14.8);

        this.body_4 = new lib.marinett_fringe_4();
        this.body_4.setTransform(-0.3, 2.3, 1, 1, 0, 0, 0, 0, 0.5);

        this.body_5 = new lib.marinett_fringe_5();
        this.body_5.setTransform(30.1, 37.1, 1, 1, 0, 0, 0, 0, 0.5);

        this.body_6 = new lib.marinett_fringe_6();
        this.body_6.setTransform(-6.7, 8.5, 1, 1, 0, 0, 0, -0.1, 0.4);

        this.body_7 = new lib.marinett_fringe_7();
        this.body_7.setTransform(-1.3, 5.1, 1, 1, 0, 0, 0, -0.5, -0.1);

        this.body_8 = new lib.marinett_fringe_8();
        this.body_8.setTransform(3, 23.3, 1, 1, 0, 0, 0, 0, 0.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-46.9, -52.8, 94, 105.7);
    p.frameBounds = [rect, new cjs.Rectangle(-48.6, -59.2, 101, 78.8), new cjs.Rectangle(-44, -50, 91.6, 70.7), new cjs.Rectangle(-44.9, -48.6, 89.8, 102.4), new cjs.Rectangle(-40, -47.9, 140.5, 170.4), new cjs.Rectangle(-58.7, -50.7, 104.9, 118.8), new cjs.Rectangle(-45.7, -50.8, 90, 112.6), new cjs.Rectangle(-45.2, -51, 97.3, 149.1)];


    (lib.marinett_dress_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.marinet_dress1();
        this.body_1.setTransform(254.4, 73.6, 1, 1, 0, 0, 0, 0, -0.1);

        this.body_2 = new lib.marinet_dress2();
        this.body_2.setTransform(254.4, 73.5, 1, 1, 0, 0, 0, 0, -0.2);

        this.body_3 = new lib.marinet_dress3();
        this.body_3.setTransform(254.4, 73.5, 1, 1, 0, 0, 0, 0, -0.2);

        this.body_4 = new lib.marinet_dress4();
        this.body_4.setTransform(254.4, 73.7);

        this.body_5 = new lib.marinet_dress5();
        this.body_5.setTransform(254.4, 73.6, 1, 1, 0, 0, 0, 0, -0.1);

        this.body_6 = new lib.marinet_dress6();
        this.body_6.setTransform(274.4, 73.6, 1, 1, 0, 0, 0, 0, -0.1);

        this.body_7 = new lib.marinet_dress7();
        this.body_7.setTransform(254.4, 73.1, 1, 1, 0, 0, 0, 0, -0.5);

        this.body_8 = new lib.marinet_dress8();
        this.body_8.setTransform(254.4, 73.4, 1, 1, 0, 0, 0, 0, -0.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(134.1, -124.6, 241.1, 396.5);
    p.frameBounds = [rect, new cjs.Rectangle(134.1, -124.5, 241, 396.7), new cjs.Rectangle(134.1, -124.6, 240.6, 396.4), new cjs.Rectangle(134.1, -124.9, 240.6, 396.6), new cjs.Rectangle(134.1, -124.6, 240.6, 396.4), new cjs.Rectangle(118.5, -124.5, 311.8, 400.3), new cjs.Rectangle(182.8, -124.8, 179.3, 259.3), new cjs.Rectangle(134.1, -125.2, 241.5, 398.4), null];


    (lib.hero_0_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // adrian_head_accessory_all
        this.instance = new lib.adrian_head_accessory_1();
        this.instance.setTransform(-35, -281, 0.36, 0.36);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // adrian_hair_all
        this.instance_1 = new lib.adrian_hair_1();
        this.instance_1.setTransform(10.2, -224.3, 1, 1, 0, 0, 0, 0.1, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // adrian_eyes_all
        this.instance_2 = new lib.adrian_eyes_1();
        this.instance_2.setTransform(15, -210.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // adrian_lips_all
        this.instance_3 = new lib.adrian_lips_1_1();
        this.instance_3.setTransform(13, -186.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

        // adrian_mask_all
        this.instance_4 = new lib.adrian_mask_1();
        this.instance_4.setTransform(13.9, -209.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

        // dress
        this.instance_5 = new lib.adrian_shoes_1();
        this.instance_5.setTransform(-17.6, 230);

        this.instance_6 = new lib.adrian_dress1();
        this.instance_6.setTransform(-10.6, 25.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_6
            }, {
                t: this.instance_5
            }]
        }).wait(1));

        // adrian_body
        this.instance_7 = new lib.adrian_body();
        this.instance_7.setTransform(-13.1, 13.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

        // adrian_tale_all
        this.instance_8 = new lib.adrian_tale_1_1();
        this.instance_8.setTransform(18.3, 72.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-104.3, -281, 209.9, 567.3);
    p.frameBounds = [rect];


    (lib.animation_title_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // title
        this.instance = new lib.title_mc();
        this.instance.setTransform(-0.5, -0.5, 1, 1, 0, 0, 0, -0.5, -0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.instance_1 = new lib.animation_bg_title_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-310, -180, 620, 360);
    p.frameBounds = [rect];


    (lib.adrian_top_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.adrian_top_1();
        this.body_1.setTransform(4.3, -150.7);

        this.body_2 = new lib.adrian_top_2();
        this.body_2.setTransform(4.3, -150.7);

        this.body_3 = new lib.adrian_top_3();
        this.body_3.setTransform(4.2, -144.7);

        this.body_4 = new lib.adrian_top_4();
        this.body_4.setTransform(-0.9, -147.3);

        this.body_5 = new lib.adrian_top_5();
        this.body_5.setTransform(4.3, -150.7);

        this.body_6 = new lib.adrian_top_6();
        this.body_6.setTransform(3.1, -124.7);

        this.body_7 = new lib.adrian_top_7();
        this.body_7.setTransform(2.3, -123.5);

        this.body_8 = new lib.adrian_top_8();
        this.body_8.setTransform(0.7, -130.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-62.4, -222.7, 133.6, 144);
    p.frameBounds = [rect, new cjs.Rectangle(-62.4, -222.7, 133.4, 144), new cjs.Rectangle(-61, -210.5, 130.8, 132.3), new cjs.Rectangle(-73.7, -215.9, 145.9, 137), new cjs.Rectangle(-62.4, -222.5, 133.5, 144), new cjs.Rectangle(-88.5, -234.6, 183.2, 219.1), new cjs.Rectangle(-87.9, -231.5, 180.9, 216.2), new cjs.Rectangle(-86.1, -216.2, 174.6, 170.7), null];


    (lib.adrian_shoes_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.adrian_shoes_1();
        this.body_1.setTransform(-4.8, 186);

        this.body_2 = new lib.adrian_shoes_2();
        this.body_2.setTransform(-4.8, 153);

        this.body_3 = new lib.adrian_shoes_3();
        this.body_3.setTransform(-4.8, 188.2);

        this.body_4 = new lib.adrian_shoes_4();
        this.body_4.setTransform(-4.5, 154);

        this.body_5 = new lib.adrian_shoes_5();
        this.body_5.setTransform(-4.8, 173.5);

        this.body_6 = new lib.adrian_shoes_6();
        this.body_6.setTransform(-4.8, 208.2);

        this.body_7 = new lib.adrian_shoes_7();
        this.body_7.setTransform(-4.8, 208.7);

        this.body_8 = new lib.adrian_shoes_8();
        this.body_8.setTransform(-4.8, 150.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-89.9, 130.1, 170.3, 112.1);
    p.frameBounds = [rect, new cjs.Rectangle(-90, 64, 170.4, 178.4), new cjs.Rectangle(-89.9, 134.5, 170.3, 107.4), new cjs.Rectangle(-92.4, 66, 176.1, 175.9), new cjs.Rectangle(-89.9, 105.1, 170.3, 136.9), new cjs.Rectangle(-90, 174.4, 170.3, 67.7), new cjs.Rectangle(-89.9, 175.5, 170.3, 66.4), new cjs.Rectangle(-90.1, 58.5, 170.4, 183.6)];


    (lib.adrian_mask_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.adrian_mask_1();

        this.body_2 = new lib.adrian_mask_2();
        this.body_2.setTransform(-1, -0.3);

        this.body_3 = new lib.adrian_mask_3();
        this.body_3.setTransform(0.7, -4.9);

        this.body_4 = new lib.adrian_mask_4();
        this.body_4.setTransform(0.9, -1.9);

        this.body_5 = new lib.adrian_mask_5();
        this.body_5.setTransform(0.6, 2.1);

        this.body_6 = new lib.adrian_mask_6();
        this.body_6.setTransform(-1.9, 0.1);

        this.body_7 = new lib.adrian_mask_7();
        this.body_7.setTransform(0.9, -3.3);

        this.body_8 = new lib.adrian_mask_8();
        this.body_8.setTransform(-0.7, 0.9);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-29.6, -18.5, 59.2, 37.3);
    p.frameBounds = [rect, new cjs.Rectangle(-29.7, -19.7, 57.3, 38.9), new cjs.Rectangle(-27.9, -28, 57.3, 46.2), new cjs.Rectangle(-28.2, -18.3, 58.3, 32.3), new cjs.Rectangle(-26.8, -14.5, 55.3, 33.3), new cjs.Rectangle(-31.3, -14.5, 59.1, 29.3), new cjs.Rectangle(-27.3, -23.2, 56.4, 39.8), new cjs.Rectangle(-34.7, -28.7, 68.3, 59.3), null];


    (lib.adrian_hair_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.adrian_hair_1();
        this.body_1.setTransform(0.1, 0.2, 1, 1, 0, 0, 0, 0.1, 0.2);

        this.body_2 = new lib.adrian_hair_2();
        this.body_2.setTransform(7.8, -13);

        this.body_3 = new lib.adrian_hair_3();
        this.body_3.setTransform(1.5, -8, 1, 1, 0, 0, 0, -0.1, 0.3);

        this.body_4 = new lib.adrian_hair_4();
        this.body_4.setTransform(1.7, 3.7, 1, 1, 0, 0, 0, 0.3, 0.3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-58.7, -43.6, 117.4, 87.6);
    p.frameBounds = [rect, new cjs.Rectangle(-35.8, -45.7, 87.6, 66.5), new cjs.Rectangle(-34.3, -34.3, 73, 53.3), new cjs.Rectangle(-45, -38.7, 94.7, 85.5)];


    (lib.adrian_eyes_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.adrian_eyes_1();
        this.body_1.setTransform(0.1, 0);

        this.body_2 = new lib.adrian_eyes_2();
        this.body_2.setTransform(1.6, 3.7);

        this.body_3 = new lib.adrian_eyes_3();
        this.body_3.setTransform(2.9, 0.5, 1, 1, 0, 0, 0, 3.5, 2.8);

        this.body_4 = new lib.adrian_eyes_4();
        this.body_4.setTransform(1.4, 1.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-23.7, -11.5, 47.5, 23.1);
    p.frameBounds = [rect, new cjs.Rectangle(-21.4, -8.2, 46.8, 18.4), new cjs.Rectangle(-18, -9.4, 41.8, 19.8), new cjs.Rectangle(-21, -7.6, 44.7, 17.3)];


    (lib.adrian_bottom_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_1 = new lib.adrian_bottom_1();
        this.body_1.setTransform(-4, 57.7);

        this.body_2 = new lib.adrian_bottom_2();
        this.body_2.setTransform(-4, 57.7);

        this.body_3 = new lib.adrian_bottom_3();
        this.body_3.setTransform(-4, 57.7);

        this.body_4 = new lib.adrian_bottom_4();
        this.body_4.setTransform(8.6, -19.2);

        this.body_5 = new lib.adrian_bottom_5();
        this.body_5.setTransform(10.6, -35.2);

        this.body_6 = new lib.adrian_bottom_6();
        this.body_6.setTransform(11.1, -15.5);

        this.body_7 = new lib.adrian_bottom_7();
        this.body_7.setTransform(11.1, -29);

        this.body_8 = new lib.adrian_bottom_8();
        this.body_8.setTransform(-4, 57.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.body_1
            }]
        }).to({
            state: [{
                t: this.body_2
            }]
        }, 1).to({
            state: [{
                t: this.body_3
            }]
        }, 1).to({
            state: [{
                t: this.body_4
            }]
        }, 1).to({
            state: [{
                t: this.body_5
            }]
        }, 1).to({
            state: [{
                t: this.body_6
            }]
        }, 1).to({
            state: [{
                t: this.body_7
            }]
        }, 1).to({
            state: [{
                t: this.body_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-65.6, -86.6, 122.3, 288.7);
    p.frameBounds = [rect, new cjs.Rectangle(-65.4, -86.6, 122.1, 289.1), new cjs.Rectangle(-65.4, -86.6, 122.2, 289.2), new cjs.Rectangle(-39.6, -86.6, 96.6, 134.9), new cjs.Rectangle(-35.6, -87.1, 92.4, 103.4), new cjs.Rectangle(-43, -86.6, 107.9, 142.8), new cjs.Rectangle(-42.7, -86.6, 107.6, 115.6), new cjs.Rectangle(-65.3, -86.6, 122, 289.3), null];


    (lib.CopyrightScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // screen
        this.screen_mc = new lib.copyright_2_mc();
        this.screen_mc.setTransform(1000, 600, 1, 1, 0, 0, 0, 600, 300);

        this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

        // bg
        this.instance = new lib.copyright_1_mc();
        this.instance.alpha = 0.801;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.GravityExplosionMC = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /*
             * @author edapskov
             * @copyright 2019 edapskov v 1.0
             */
            this.gotoAndStop(0);
            this.mouseEnabled = false;
            this.mouseChildren = false;
            var body_mc = this.body_mc;
            body_mc.gotoAndStop(0);
            var example_mc = body_mc.example_mc;
            example_mc.gotoAndStop(0);
            example_mc.visible = false;
            /*
            переменные
            */
            var _that = this;
            var _particleMaxSpeed_num = 4;
            var _particleFadeSpeed_num = 0.01;
            var _particleTotal_num = 25;
            var _particleRange_num = 100;
            var _gravity_num = 0.4;
            /*
            функция добавления частиц
            */
            function _createExplosionFunc() {
                /*
			
                */
                var particle_mc;
                var i = 0;
                /*
			
                */
                while (i < _particleTotal_num) {
                    /*
				
                    */
                    var particle_mc = new lib.ParticleGravityExplosionMC();
                    body_mc.addChild(particle_mc);
                    particle_mc.gotoAndStop(0);
                    particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
                    particle_mc.x = 0;
                    particle_mc.y = 0;
                    particle_mc.rotation = Math.random() * 360;
                    particle_mc.alpha = Math.random() * (1 - 0.5) + 0.5;
                    /*
				
                    */
                    particle_mc.boundyLeft_num = -_particleRange_num;
                    particle_mc.boundyTop_num = -_particleRange_num;
                    particle_mc.boundyRight_num = _particleRange_num;
                    particle_mc.boundyBottom_num = _particleRange_num;
                    /*
				
                    */
                    particle_mc.speedX_num = Math.random() * _particleMaxSpeed_num - Math.random() * _particleMaxSpeed_num;
                    particle_mc.speedY_num = Math.random() * _particleMaxSpeed_num - (Math.random() * _particleMaxSpeed_num);
                    particle_mc.speedX_num *= _particleMaxSpeed_num;
                    particle_mc.speedY_num *= _particleMaxSpeed_num;
                    /*
				
                    */
                    particle_mc.fadeSpeed_num = Math.random() * _particleFadeSpeed_num;
                    /*
				
                    */
                    particle_mc.addEventListener("tick", _onTickParticleFunc, false);
                    /*
				
                    */
                    i++;
                }
            }
            /*
            обновляем в каждом кадре
            */
            function _onTickParticleFunc(event) {
                /*
                получаем частицу
                */
                var target_mc = event.target;
                //target_mc.gotoAndStop(0);
                /*
			
                */
                target_mc.alpha -= target_mc.fadeSpeed_num;
                target_mc.x += target_mc.speedX_num;
                target_mc.y += target_mc.speedY_num;
                /*
			
                */
                if (target_mc.speedY_num < _particleMaxSpeed_num) {
                    target_mc.speedY_num += _gravity_num;
                }
                /*
			
                */
                if (target_mc.alpha <= 0 || target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num) {
                    /*
				
                    */
                    target_mc.parent.removeChild(target_mc);
                    /*
				
                    */
                    _particleTotal_num--;
                    if (_particleTotal_num <= 0) {
                        _that.parent.removeChild(_that);
                    }
                }
            }
            /*
            запускаем
            */
            _createExplosionFunc();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // body
        this.body_mc = new lib.gravity_explosion_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-15, -15, 30, 30);
    p.frameBounds = [rect];


    (lib.sound_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // icon
        this.instance = new lib.sound_1_mc();

        this.instance_1 = new lib.sound_2_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1));

        // bg
        this.instance_2 = new lib.bg_small_buttons_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-60, -60, 120, 120);
    p.frameBounds = [rect, rect];


    (lib.play_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.play_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.photo_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.photo_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.more_games_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.more_games_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApNOEQhXgBg9g9Qg9g+gBhWIAA1jQABhWA9g+QA9g9BXgBISbAAQBWABA+A9QA9A+ABBWIAAVjQgBBWg9A+Qg+A9hWABg");
        this.shape.setTransform(0, -9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -99, 160, 180);
    p.frameBounds = [rect];


    (lib.more_games_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.more_games_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -99, 160, 180);
    p.frameBounds = [rect, rect, rect, rect];


    (lib.logo_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.logo_0_mc();
        this.instance.setTransform(0, 0, 0.909, 0.909);

        this.instance_1 = new lib.logo_1_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: 0.909,
                    scaleY: 0.909,
                    alpha: 0.801
                }
            }]
        }, 1).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-372.6, -230.8, 472.7, 461.7);
    p.frameBounds = [rect, new cjs.Rectangle(-110, -40, 220, 80), new cjs.Rectangle(-100, -36.3, 200, 72.7), new cjs.Rectangle(-110, -40, 220, 80)];


    (lib.instruction_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.instruction_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.free_games_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.free_games_0_mc();
        this.instance.setTransform(0, 0, 0.917, 0.917);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(1).to({
            scaleX: 0.92,
            scaleY: 0.92,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-55, -55, 110, 110);
    p.frameBounds = [rect, new cjs.Rectangle(-60, -60, 120, 120), new cjs.Rectangle(-55, -55, 110, 110), new cjs.Rectangle(-60, -60, 120, 120)];


    (lib.done_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.done_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.credits_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.credits_0_mc();
        this.instance.setTransform(0, 0, 0.917, 0.917);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(1).to({
            scaleX: 0.92,
            scaleY: 0.92,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-55, -55, 110, 110);
    p.frameBounds = [rect, new cjs.Rectangle(-60, -60, 120, 120), new cjs.Rectangle(-55, -55, 110, 110), new cjs.Rectangle(-60, -60, 120, 120)];


    (lib.again_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // graph
        this.instance = new lib.again_0_mc();
        this.instance.setTransform(0, 0, 0.842, 0.842);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95
        }, 0).wait(1).to({
            scaleX: 0.84,
            scaleY: 0.84,
            alpha: 0.801
        }, 0).wait(1).to({
            scaleX: 0.95,
            scaleY: 0.95,
            alpha: 1
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-80, -80, 160, 160);
    p.frameBounds = [rect, new cjs.Rectangle(-90, -90, 180, 180), new cjs.Rectangle(-80, -80, 160, 160), new cjs.Rectangle(-90, -90, 180, 180)];


    (lib.RedirectScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // body
        this.body_mc = new lib.redirect_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.PreloaderScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // logo
        this.logo_mc = new lib.preloader_5_mc();
        this.logo_mc.setTransform(400, 260);

        this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

        // play
        this.play_mc = new lib.preloader_12_mc();
        this.play_mc.setTransform(400, 495);

        this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

        // indicator
        this.indicator_mc = new lib.preloader_9_mc();
        this.indicator_mc.setTransform(400, 495);

        this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

        // bg
        this.bg_mc = new lib.preloader_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect];


    (lib.OrientationLockScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // screen
        this.screen_mc = new lib.orientation_lock_0_mc();

        this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, -10, 1200, 620);
    p.frameBounds = [rect];


    (lib.panel_13_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // no
        this.glasses_0 = new lib.glasses_0_mc();
        this.glasses_0.setTransform(339, 95);

        this.timeline.addTween(cjs.Tween.get(this.glasses_0).wait(3));

        // options
        this.glasses_2 = new lib.option_accessory_wings_2_mc();
        this.glasses_2.setTransform(255, 95);

        this.glasses_1 = new lib.option_accessory_wings_1_mc();
        this.glasses_1.setTransform(95, 95);

        this.glasses_4 = new lib.option_accessory_wings_4_mc();
        this.glasses_4.setTransform(255, 255);

        this.glasses_3 = new lib.option_accessory_wings_3_mc();
        this.glasses_3.setTransform(95, 255);

        this.glasses_6 = new lib.option_accessory_wings_6_mc();
        this.glasses_6.setTransform(255, 95);

        this.glasses_5 = new lib.option_accessory_wings_5_mc();
        this.glasses_5.setTransform(95, 95);

        this.glasses_8 = new lib.option_accessory_wings_8_mc();
        this.glasses_8.setTransform(255, 255);

        this.glasses_7 = new lib.option_accessory_wings_7_mc();
        this.glasses_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.glasses_3
            }, {
                t: this.glasses_4
            }, {
                t: this.glasses_1
            }, {
                t: this.glasses_2
            }]
        }).to({
            state: [{
                t: this.glasses_7
            }, {
                t: this.glasses_8
            }, {
                t: this.glasses_5
            }, {
                t: this.glasses_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_glasses = new lib.color_picker_mc();
        this.color_glasses.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_glasses._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_glasses).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 359, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_11_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // no
        this.glasses_0 = new lib.glasses_0_mc();
        this.glasses_0.setTransform(339, 95);

        this.timeline.addTween(cjs.Tween.get(this.glasses_0).wait(3));

        // options
        this.glasses_2 = new lib.option_accessory_wings_kot_2_mc();
        this.glasses_2.setTransform(255, 95);

        this.glasses_1 = new lib.option_accessory_wings_kot_1_mc();
        this.glasses_1.setTransform(95, 95);

        this.glasses_4 = new lib.option_accessory_wings_kot_4_mc();
        this.glasses_4.setTransform(255, 255);

        this.glasses_3 = new lib.option_accessory_wings_kot_3_mc();
        this.glasses_3.setTransform(95, 255);

        this.glasses_6 = new lib.option_accessory_wings_kot_6_mc();
        this.glasses_6.setTransform(255, 95);

        this.glasses_5 = new lib.option_accessory_wings_kot_5_mc();
        this.glasses_5.setTransform(95, 95);

        this.glasses_8 = new lib.option_accessory_wings_kot_8_mc();
        this.glasses_8.setTransform(255, 255);

        this.glasses_7 = new lib.option_accessory_wings_kot_7_mc();
        this.glasses_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.glasses_3
            }, {
                t: this.glasses_4
            }, {
                t: this.glasses_1
            }, {
                t: this.glasses_2
            }]
        }).to({
            state: [{
                t: this.glasses_7
            }, {
                t: this.glasses_8
            }, {
                t: this.glasses_5
            }, {
                t: this.glasses_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_glasses = new lib.color_picker_mc();
        this.color_glasses.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_glasses._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_glasses).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 359, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_9_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.dress_2 = new lib.option_dress_2_mc();
        this.dress_2.setTransform(255, 95);

        this.dress_1 = new lib.option_dress_1_mc();
        this.dress_1.setTransform(95, 95);

        this.dress_4 = new lib.option_dress_4_mc();
        this.dress_4.setTransform(255, 255);

        this.dress_3 = new lib.option_dress_3_mc();
        this.dress_3.setTransform(95, 255);

        this.dress_6 = new lib.option_dress_6_mc();
        this.dress_6.setTransform(255, 95);

        this.dress_5 = new lib.option_dress_5_mc();
        this.dress_5.setTransform(95, 95);

        this.dress_8 = new lib.option_dress_8_mc();
        this.dress_8.setTransform(255, 255);

        this.dress_7 = new lib.option_dress_7_mc();
        this.dress_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.dress_3
            }, {
                t: this.dress_4
            }, {
                t: this.dress_1
            }, {
                t: this.dress_2
            }]
        }).to({
            state: [{
                t: this.dress_7
            }, {
                t: this.dress_8
            }, {
                t: this.dress_5
            }, {
                t: this.dress_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_dress = new lib.color_picker_mc();
        this.color_dress.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_dress._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_dress).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_8_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.bottom_2 = new lib.option_bottom_2_mc();
        this.bottom_2.setTransform(255, 95);

        this.bottom_1 = new lib.option_bottom_1_mc();
        this.bottom_1.setTransform(95, 95);

        this.bottom_4 = new lib.option_bottom_4_mc();
        this.bottom_4.setTransform(255, 255);

        this.bottom_3 = new lib.option_bottom_3_mc();
        this.bottom_3.setTransform(95, 255);

        this.bottom_6 = new lib.option_bottom_6_mc();
        this.bottom_6.setTransform(255, 95);

        this.bottom_5 = new lib.option_bottom_5_mc();
        this.bottom_5.setTransform(95, 95);

        this.bottom_8 = new lib.option_bottom_8_mc();
        this.bottom_8.setTransform(255, 255);

        this.bottom_7 = new lib.option_bottom_7_mc();
        this.bottom_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.bottom_3
            }, {
                t: this.bottom_4
            }, {
                t: this.bottom_1
            }, {
                t: this.bottom_2
            }]
        }).to({
            state: [{
                t: this.bottom_7
            }, {
                t: this.bottom_8
            }, {
                t: this.bottom_5
            }, {
                t: this.bottom_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_bottom = new lib.color_picker_mc();
        this.color_bottom.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_bottom._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_bottom).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_7_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.top_2 = new lib.option_top_2_mc();
        this.top_2.setTransform(255, 95);

        this.top_1 = new lib.option_top_1_mc();
        this.top_1.setTransform(95, 95);

        this.top_4 = new lib.option_top_4_mc();
        this.top_4.setTransform(255, 255);

        this.top_3 = new lib.option_top_3_mc();
        this.top_3.setTransform(95, 255);

        this.top_6 = new lib.option_top_6_mc();
        this.top_6.setTransform(255, 95);

        this.top_5 = new lib.option_top_5_mc();
        this.top_5.setTransform(95, 95);

        this.top_8 = new lib.option_top_8_mc();
        this.top_8.setTransform(255, 255);

        this.top_7 = new lib.option_top_7_mc();
        this.top_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.top_3
            }, {
                t: this.top_4
            }, {
                t: this.top_1
            }, {
                t: this.top_2
            }]
        }).to({
            state: [{
                t: this.top_7
            }, {
                t: this.top_8
            }, {
                t: this.top_5
            }, {
                t: this.top_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_top = new lib.color_picker_mc();
        this.color_top.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_top._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_top).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_7_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.dress_2 = new lib.option_dress_kot_2_mc();
        this.dress_2.setTransform(255, 95);

        this.dress_1 = new lib.option_dress_kot_1_mc();
        this.dress_1.setTransform(95, 95);

        this.dress_4 = new lib.option_dress_kot_4_mc();
        this.dress_4.setTransform(255, 255);

        this.dress_3 = new lib.option_dress_kot_3_mc();
        this.dress_3.setTransform(95, 255);

        this.dress_6 = new lib.option_dress_kot_6_mc();
        this.dress_6.setTransform(255, 95);

        this.dress_5 = new lib.option_dress_kot_5_mc();
        this.dress_5.setTransform(95, 95);

        this.dress_8 = new lib.option_dress_kot_8_mc();
        this.dress_8.setTransform(255, 255);

        this.dress_7 = new lib.option_dress_kot_7_mc();
        this.dress_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.dress_3
            }, {
                t: this.dress_4
            }, {
                t: this.dress_1
            }, {
                t: this.dress_2
            }]
        }).to({
            state: [{
                t: this.dress_7
            }, {
                t: this.dress_8
            }, {
                t: this.dress_5
            }, {
                t: this.dress_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_dress = new lib.color_picker_mc();
        this.color_dress.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_dress._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_dress).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_6_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.bottom_2 = new lib.option_bottom_kot_2_mc();
        this.bottom_2.setTransform(255, 95);

        this.bottom_1 = new lib.option_bottom_kot_1_mc();
        this.bottom_1.setTransform(95, 95);

        this.bottom_4 = new lib.option_bottom_kot_4_mc();
        this.bottom_4.setTransform(255, 255);

        this.bottom_3 = new lib.option_bottom_kot_3_mc();
        this.bottom_3.setTransform(95, 255);

        this.bottom_6 = new lib.option_bottom_kot_6_mc();
        this.bottom_6.setTransform(255, 95);

        this.bottom_5 = new lib.option_bottom_kot_5_mc();
        this.bottom_5.setTransform(95, 95);

        this.bottom_8 = new lib.option_bottom_kot_8_mc();
        this.bottom_8.setTransform(255, 255);

        this.bottom_7 = new lib.option_bottom_kot_7_mc();
        this.bottom_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.bottom_3
            }, {
                t: this.bottom_4
            }, {
                t: this.bottom_1
            }, {
                t: this.bottom_2
            }]
        }).to({
            state: [{
                t: this.bottom_7
            }, {
                t: this.bottom_8
            }, {
                t: this.bottom_5
            }, {
                t: this.bottom_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_bottom = new lib.color_picker_mc();
        this.color_bottom.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_bottom._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_bottom).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_5_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.hair_2 = new lib.option_hair_2_mc();
        this.hair_2.setTransform(255, 95);

        this.hair_1 = new lib.option_hair_1_mc();
        this.hair_1.setTransform(95, 95);

        this.hair_4 = new lib.option_hair_4_mc();
        this.hair_4.setTransform(255, 255);

        this.hair_3 = new lib.option_hair_3_mc();
        this.hair_3.setTransform(95, 255);

        this.hair_6 = new lib.option_hair_6_mc();
        this.hair_6.setTransform(255, 95);

        this.hair_5 = new lib.option_hair_5_mc();
        this.hair_5.setTransform(95, 95);

        this.hair_8 = new lib.option_hair_8_mc();
        this.hair_8.setTransform(255, 255);

        this.hair_7 = new lib.option_hair_7_mc();
        this.hair_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.hair_3
            }, {
                t: this.hair_4
            }, {
                t: this.hair_1
            }, {
                t: this.hair_2
            }]
        }).to({
            state: [{
                t: this.hair_7
            }, {
                t: this.hair_8
            }, {
                t: this.hair_5
            }, {
                t: this.hair_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_hair = new lib.color_picker_mc();
        this.color_hair.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_hair._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_hair).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_5_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.top_2 = new lib.option_top_kot_2_mc();
        this.top_2.setTransform(255, 95);

        this.top_1 = new lib.option_top_kot_1_mc();
        this.top_1.setTransform(95, 95);

        this.top_4 = new lib.option_top_kot_4_mc();
        this.top_4.setTransform(255, 255);

        this.top_3 = new lib.option_top_kot_3_mc();
        this.top_3.setTransform(95, 255);

        this.top_6 = new lib.option_top_kot_6_mc();
        this.top_6.setTransform(255, 95);

        this.top_5 = new lib.option_top_kot_5_mc();
        this.top_5.setTransform(95, 95);

        this.top_8 = new lib.option_top_kot_8_mc();
        this.top_8.setTransform(255, 255);

        this.top_7 = new lib.option_top_kot_7_mc();
        this.top_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.top_3
            }, {
                t: this.top_4
            }, {
                t: this.top_1
            }, {
                t: this.top_2
            }]
        }).to({
            state: [{
                t: this.top_7
            }, {
                t: this.top_8
            }, {
                t: this.top_5
            }, {
                t: this.top_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_top = new lib.color_picker_mc();
        this.color_top.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_top._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_top).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_4_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.fringe_2 = new lib.option_fringe_2_mc();
        this.fringe_2.setTransform(255, 95);

        this.fringe_1 = new lib.option_fringe_1_mc();
        this.fringe_1.setTransform(95, 95);

        this.fringe_4 = new lib.option_fringe_4_mc();
        this.fringe_4.setTransform(255, 255);

        this.fringe_3 = new lib.option_fringe_3_mc();
        this.fringe_3.setTransform(95, 255);

        this.fringe_6 = new lib.option_fringe_6_mc();
        this.fringe_6.setTransform(255, 95);

        this.fringe_5 = new lib.option_fringe_5_mc();
        this.fringe_5.setTransform(95, 95);

        this.fringe_8 = new lib.option_fringe_8_mc();
        this.fringe_8.setTransform(255, 255);

        this.fringe_7 = new lib.option_fringe_7_mc();
        this.fringe_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.fringe_3
            }, {
                t: this.fringe_4
            }, {
                t: this.fringe_1
            }, {
                t: this.fringe_2
            }]
        }).to({
            state: [{
                t: this.fringe_7
            }, {
                t: this.fringe_8
            }, {
                t: this.fringe_5
            }, {
                t: this.fringe_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_fringe = new lib.color_picker_mc();
        this.color_fringe.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_fringe._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_fringe).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_4_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

        // options
        this.hair_2 = new lib.option_fringe_kot_2_mc();
        this.hair_2.setTransform(255, 95);

        this.hair_1 = new lib.option_fringe_kot_1_mc();
        this.hair_1.setTransform(95, 95);

        this.hair_4 = new lib.option_fringe_kot_4_mc();
        this.hair_4.setTransform(255, 255);

        this.hair_3 = new lib.option_fringe_kot_3_mc();
        this.hair_3.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.hair_3
            }, {
                t: this.hair_4
            }, {
                t: this.hair_1
            }, {
                t: this.hair_2
            }]
        }).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_hair = new lib.color_picker_mc();
        this.color_hair.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_hair._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_hair).wait(1).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect];


    (lib.panel_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

        // options
        this.eyes_2 = new lib.option_eyes_2_mc();
        this.eyes_2.setTransform(255, 95);

        this.eyes_1 = new lib.option_eyes_1_mc();
        this.eyes_1.setTransform(95, 95);

        this.eyes_4 = new lib.option_eyes_4_mc();
        this.eyes_4.setTransform(255, 255);

        this.eyes_3 = new lib.option_eyes_3_mc();
        this.eyes_3.setTransform(95, 255);

        this.eyes_6 = new lib.option_eyes_6_mc();
        this.eyes_6.setTransform(255, 95);

        this.eyes_5 = new lib.option_eyes_5_mc();
        this.eyes_5.setTransform(95, 95);

        this.eyes_8 = new lib.option_eyes_8_mc();
        this.eyes_8.setTransform(255, 255);

        this.eyes_7 = new lib.option_eyes_7_mc();
        this.eyes_7.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.eyes_3
            }, {
                t: this.eyes_4
            }, {
                t: this.eyes_1
            }, {
                t: this.eyes_2
            }]
        }).to({
            state: [{
                t: this.eyes_7
            }, {
                t: this.eyes_8
            }, {
                t: this.eyes_5
            }, {
                t: this.eyes_6
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_eyes = new lib.color_picker_mc();
        this.color_eyes.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_eyes._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_eyes).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect, rect];


    (lib.panel_2_2_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // navigation
        this.navigation_mc = new lib.navigation_mc();
        this.navigation_mc.setTransform(175, 380);

        this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

        // options
        this.eyes_2 = new lib.option_eyes_kot_2_mc();
        this.eyes_2.setTransform(255, 95);

        this.eyes_1 = new lib.option_eyes_kot_1_mc();
        this.eyes_1.setTransform(95, 95);

        this.eyes_4 = new lib.option_eyes_kot_4_mc();
        this.eyes_4.setTransform(255, 255);

        this.eyes_3 = new lib.option_eyes_kot_3_mc();
        this.eyes_3.setTransform(95, 255);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.eyes_3
            }, {
                t: this.eyes_4
            }, {
                t: this.eyes_1
            }, {
                t: this.eyes_2
            }]
        }).to({
            state: []
        }, 1).wait(1));

        // palette
        this.color_eyes = new lib.color_picker_mc();
        this.color_eyes.setTransform(175, 180, 1, 1, 0, 0, 0, 160, 160);
        this.color_eyes._off = true;

        this.timeline.addTween(cjs.Tween.get(this.color_eyes).wait(1).to({
            _off: false
        }, 0).wait(1));

        // bg
        this.instance = new lib.bg_panel_mc();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 350, 450);
    p.frameBounds = [rect, rect];


    (lib.marinett_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // headdress
        this.headdress = new lib.marinett_hat_all();
        this.headdress.setTransform(15.3, -272.5, 1, 1, 0, 0, 0, 257.9, -223.1);

        this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

        // fringe
        this.fringe = new lib.marinett_fringe_all();
        this.fringe.setTransform(33.7, -213);

        this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

        // earrings
        this.earrings = new lib.earring_all();
        this.earrings.setTransform(59, -186.3);

        this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

        // lips
        this.lips = new lib.marinett_lips_all();
        this.lips.setTransform(24.9, -177.6);

        this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

        // eyes
        this.eyes = new lib.marinett_eyes_all();
        this.eyes.setTransform(26.8, -203.9);

        this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

        // glasses
        this.glasses = new lib.marinett_mask_all();
        this.glasses.setTransform(30.5, -203.4);

        this.timeline.addTween(cjs.Tween.get(this.glasses).wait(1));

        // eyelash
        this.eyelash = new lib.eyelash_1_mc();
        this.eyelash.setTransform(26.8, -212.8);

        this.timeline.addTween(cjs.Tween.get(this.eyelash).wait(1));

        // accessory
        this.accessory = new lib.marinett_accessory_hang_all();
        this.accessory.setTransform(-48.5, -104.1, 1, 1, 0, 0, 0, 133.4, -61.6);

        this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

        // bottom
        this.bottom = new lib.marinett_bottom_all();
        this.bottom.setTransform(17.1, 15, 1, 1, 0, 0, 0, 199, 57.5);

        this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

        // top
        this.top = new lib.marinett_top_all();
        this.top.setTransform(33.9, -113.9, 1, 1, 0, 0, 0, 215.8, -71.4);

        this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

        // shoes
        this.shoes = new lib.marinett_shoes_all();
        this.shoes.setTransform(1.4, 196.5, 1, 1, 0, 0, 0, 244, 245.9);

        this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

        // dress
        this.dress = new lib.marinett_dress_all();
        this.dress.setTransform(18.3, -44.4, 1, 1, 0, 0, 0, 260.9, 5);

        this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

        // skin
        this.skin = new lib.skin_1_mc();
        this.skin.setTransform(0, 2.6);

        this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

        // tail
        this.tail = new lib.marinett_tail_all();
        this.tail.setTransform(158, 48.5);

        this.timeline.addTween(cjs.Tween.get(this.tail).wait(1));

        // hair
        this.hair = new lib.marinett_hair_all();
        this.hair.setTransform(59.4, -173.7);

        this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-142.4, -310.7, 435.5, 584.2);
    p.frameBounds = [rect];


    (lib.heroes_0_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_69 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

        // animation
        this.instance = new lib.hero_1_0_mc();
        this.instance.setTransform(285.9, 324.6);
        this.instance.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({
            alpha: 1
        }, 10).wait(31));

        // animation
        this.instance_1 = new lib.hero_0_0_mc();
        this.instance_1.setTransform(472.1, 304.8);
        this.instance_1.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({
            alpha: 1
        }, 10).wait(41));

        // animation
        this.instance_2 = new lib.hero_2_0_mc();
        this.instance_2.setTransform(735.8, 295.5);
        this.instance_2.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({
            alpha: 1
        }, 10).wait(1));

        // animation
        this.instance_3 = new lib.hero_3_0_mc();
        this.instance_3.setTransform(601.8, 294);
        this.instance_3.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({
            alpha: 1
        }, 10).wait(21));

        // animation
        this.instance_4 = new lib.hero_4_0_mc();
        this.instance_4.setTransform(151, 303.5);
        this.instance_4.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({
            alpha: 1
        }, 10).wait(11));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(17, 23.7, 818.5, 570.6);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    (lib.adrian_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // accessory
        this.accessory = new lib.adrian_hand_accessory_all();
        this.accessory.setTransform(-72.5, 11.8);

        this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

        // headdress
        this.headdress = new lib.adrian_head_accessory_all();
        this.headdress.setTransform(13.5, -257.4, 1, 1, 0, 0, 0, 0.5, -0.4);

        this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

        // hair
        this.hair = new lib.adrian_hair_all();
        this.hair.setTransform(10.2, -224.3, 1, 1, 0, 0, 0, 0.1, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

        // eyes
        this.eyes = new lib.adrian_eyes_all();
        this.eyes.setTransform(14.9, -210.8);

        this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

        // lips
        this.lips = new lib.adrian_lips_all();
        this.lips.setTransform(13.5, -186.5);

        this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

        // glasses
        this.glasses = new lib.adrian_mask_all();
        this.glasses.setTransform(13.9, -209.2);

        this.timeline.addTween(cjs.Tween.get(this.glasses).wait(1));

        // top
        this.top = new lib.adrian_top_all();
        this.top.setTransform(-1.8, -108, 1, 1, 0, 0, 0, 11, -152);

        this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

        // shoes
        this.shoes = new lib.adrian_shoes_all();
        this.shoes.setTransform(-17.8, 235, 1, 1, 0, 0, 0, -5, 191);

        this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

        // bottom
        this.bottom = new lib.adrian_bottom_all();
        this.bottom.setTransform(-19.8, 105, 1, 1, 0, 0, 0, -7, 61);

        this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

        // dress
        this.dress = new lib.adrian_dress_all();
        this.dress.setTransform(-0.8, 25.1, 1, 1, 0, 0, 0, 12, -18.9);

        this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

        // skin
        this.skin = new lib.skin_2_mc();
        this.skin.setTransform(-13.1, 13.3);

        this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

        // tail
        this.tail = new lib.adrian_tale_all();
        this.tail.setTransform(18.3, 72.3);

        this.timeline.addTween(cjs.Tween.get(this.tail).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-115.9, -281, 221.5, 567.3);
    p.frameBounds = [rect];


    (lib.WelcomeScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.moreGames_btn = new lib.more_games_btn();
        this.moreGames_btn.setTransform(90, 510);
        new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(760, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(690.1, 40.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.freeGames_mc = new lib.free_games_btn();
        this.freeGames_mc.setTransform(590, 550, 0.727, 0.727);
        new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

        this.credits_btn = new lib.credits_btn();
        this.credits_btn.setTransform(210, 550, 0.727, 0.727);
        new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

        this.instruction_btn = new lib.instruction_btn();
        this.instruction_btn.setTransform(400, 700);
        new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

        this.play_btn = new lib.play_btn();
        this.play_btn.setTransform(710, 510);
        new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(110, 40);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.play_btn
            }, {
                t: this.instruction_btn
            }, {
                t: this.credits_btn
            }, {
                t: this.freeGames_mc
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.moreGames_btn
            }]
        }).wait(1));

        // title
        this.instance = new lib.animation_title_mc();
        this.instance.setTransform(400, 450);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // decor
        this.instance_1 = new lib.lower_shadow_mc();
        this.instance_1.setTransform(-200, 400);
        this.instance_1.alpha = 0.102;
        this.instance_1.cache(-2, -2, 1204, 204);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // heroes
        this.instance_2 = new lib.heroes_0_mc();
        this.instance_2.setTransform(412.2, 297, 1, 1, 0, 0, 0, 412.2, 297);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // decor
        this.smoke_comp = new lib.smoke_1_mc();

        this.timeline.addTween(cjs.Tween.get(this.smoke_comp).wait(1));

        // bg
        this.instance_3 = new lib.background_17_img();
        this.instance_3.setTransform(-200, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-262.6, -190.8, 1262.7, 980.8);
    p.frameBounds = [rect];


    (lib.photoContainer_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // logo
        this.logo_btn = new lib.logotype_mc();
        this.logo_btn.setTransform(670, 565, 0.667, 0.667);

        this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(5));

        // heroes
        this.hero_1 = new lib.marinett_mc();
        this.hero_1.setTransform(248, 325.9, 0.986, 0.986);

        this.hero_2 = new lib.adrian_mc();
        this.hero_2.setTransform(510, 308.4);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.hero_2,
                p: {
                    regX: 0,
                    regY: 0,
                    x: 510,
                    y: 308.4,
                    scaleX: 1,
                    scaleY: 1,
                    skewY: 0
                }
            }, {
                t: this.hero_1,
                p: {
                    regX: 0,
                    regY: 0,
                    scaleX: 0.986,
                    scaleY: 0.986,
                    x: 248,
                    y: 325.9,
                    skewY: 0
                }
            }]
        }).to({
            state: [{
                t: this.hero_1,
                p: {
                    regX: 75.3,
                    regY: -18.7,
                    scaleX: 1,
                    scaleY: 1,
                    x: 453.1,
                    y: 303,
                    skewY: 0
                }
            }]
        }, 1).to({
            state: [{
                t: this.hero_2,
                p: {
                    regX: -5.2,
                    regY: 2.6,
                    x: 376,
                    y: 312.1,
                    scaleX: 1,
                    scaleY: 1,
                    skewY: 0
                }
            }]
        }, 1).to({
            state: [{
                t: this.hero_1,
                p: {
                    regX: 75.3,
                    regY: -18.6,
                    scaleX: 1.37,
                    scaleY: 1.37,
                    x: 328.8,
                    y: 413.6,
                    skewY: 180
                }
            }]
        }, 1).to({
            state: [{
                t: this.hero_2,
                p: {
                    regX: -5.2,
                    regY: 2.6,
                    x: 427,
                    y: 443.5,
                    scaleX: 1.41,
                    scaleY: 1.41,
                    skewY: 180
                }
            }]
        }, 1).wait(1));

        // bg
        this.bg = new lib.background_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg).wait(5));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-200, 0, 1200, 600);
    p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-200, 0, 1200, 813.4), new cjs.Rectangle(-200, 0, 1200, 843.4)];


    (lib.panels_mc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            hero_1_category_1_subcategory_1: 0,
            hero_1_category_1_subcategory_2: 1,
            hero_1_category_1_subcategory_3: 2,
            hero_1_category_1_subcategory_4: 3,
            hero_1_category_1_subcategory_5: 4,
            hero_1_category_1_subcategory_6: 5,
            hero_1_category_2_subcategory_1: 6,
            hero_1_category_2_subcategory_2: 7,
            hero_1_category_2_subcategory_3: 8,
            hero_1_category_2_subcategory_4: 9,
            hero_1_category_3_subcategory_1: 10,
            hero_1_category_3_subcategory_2: 11,
            hero_1_category_3_subcategory_3: 12,
            hero_1_category_3_subcategory_4: 13,
            hero_1_category_3_subcategory_5: 14,
            hero_2_category_1_subcategory_1: 15,
            hero_2_category_1_subcategory_2: 16,
            hero_2_category_1_subcategory_3: 17,
            hero_2_category_1_subcategory_4: 18,
            hero_2_category_2_subcategory_1: 19,
            hero_2_category_2_subcategory_2: 20,
            hero_2_category_2_subcategory_3: 21,
            hero_2_category_2_subcategory_4: 22,
            hero_2_category_3_subcategory_1: 23,
            hero_2_category_3_subcategory_2: 24,
            hero_2_category_3_subcategory_3: 25,
            hero_2_category_3_subcategory_4: 26,
            hero_1_category_4_subcategory_1: 27,
            hero_2_category_4_subcategory_1: 28
        });

        // category
        this.category_4 = new lib.category_4_mc();
        this.category_4.setTransform(-35, 245);

        this.category_3 = new lib.category_3_mc();
        this.category_3.setTransform(-35, 175);

        this.category_2 = new lib.category_2_mc();
        this.category_2.setTransform(-35, 105);

        this.category_1 = new lib.category_1_mc();
        this.category_1.setTransform(-35, 35);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.category_1
            }, {
                t: this.category_2
            }, {
                t: this.category_3
            }, {
                t: this.category_4
            }]
        }).wait(29));

        // subcategory
        this.subcategory_6_1 = new lib.subcategory_1_6_mc();
        this.subcategory_6_1.setTransform(315, -35);

        this.subcategory_5_1 = new lib.subcategory_1_5_mc();
        this.subcategory_5_1.setTransform(245, -35);

        this.subcategory_4_1 = new lib.subcategory_1_4_mc();
        this.subcategory_4_1.setTransform(175, -35);

        this.subcategory_3_1 = new lib.subcategory_1_3_mc();
        this.subcategory_3_1.setTransform(105, -35);

        this.subcategory_2_1 = new lib.subcategory_1_2_mc();
        this.subcategory_2_1.setTransform(35, -35);

        this.subcategory_1_1 = new lib.subcategory_1_1_mc();
        this.subcategory_1_1.setTransform(-35, -35);

        this.subcategory_4_2 = new lib.subcategory_2_4_mc();
        this.subcategory_4_2.setTransform(245, -35);

        this.subcategory_3_2 = new lib.subcategory_2_3_mc();
        this.subcategory_3_2.setTransform(175, -35);

        this.subcategory_2_2 = new lib.subcategory_2_2_mc();
        this.subcategory_2_2.setTransform(105, -35);

        this.subcategory_1_2 = new lib.subcategory_2_1_mc();
        this.subcategory_1_2.setTransform(35, -35);

        this.subcategory_5_3 = new lib.subcategory_3_5_mc();
        this.subcategory_5_3.setTransform(315, -35);

        this.subcategory_4_3 = new lib.subcategory_3_4_mc();
        this.subcategory_4_3.setTransform(245, -35);

        this.subcategory_3_3 = new lib.subcategory_3_3_mc();
        this.subcategory_3_3.setTransform(175, -35);

        this.subcategory_2_3 = new lib.subcategory_3_2_mc();
        this.subcategory_2_3.setTransform(105, -35);

        this.subcategory_1_3 = new lib.subcategory_3_1_mc();
        this.subcategory_1_3.setTransform(35, -35);

        this.subcategory_1_4 = new lib.subcategory_4_1_mc();
        this.subcategory_1_4.setTransform(35, -35);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.subcategory_1_1,
                p: {
                    x: -35
                }
            }, {
                t: this.subcategory_2_1,
                p: {
                    x: 35
                }
            }, {
                t: this.subcategory_3_1,
                p: {
                    x: 105
                }
            }, {
                t: this.subcategory_4_1,
                p: {
                    x: 175
                }
            }, {
                t: this.subcategory_5_1
            }, {
                t: this.subcategory_6_1
            }]
        }).to({
            state: [{
                t: this.subcategory_1_2
            }, {
                t: this.subcategory_2_2
            }, {
                t: this.subcategory_3_2
            }, {
                t: this.subcategory_4_2
            }]
        }, 6).to({
            state: [{
                t: this.subcategory_1_3
            }, {
                t: this.subcategory_2_3
            }, {
                t: this.subcategory_3_3
            }, {
                t: this.subcategory_4_3
            }, {
                t: this.subcategory_5_3
            }]
        }, 4).to({
            state: [{
                t: this.subcategory_1_1,
                p: {
                    x: 35
                }
            }, {
                t: this.subcategory_2_1,
                p: {
                    x: 105
                }
            }, {
                t: this.subcategory_3_1,
                p: {
                    x: 175
                }
            }, {
                t: this.subcategory_4_1,
                p: {
                    x: 245
                }
            }]
        }, 5).to({
            state: [{
                t: this.subcategory_1_2
            }, {
                t: this.subcategory_2_2
            }, {
                t: this.subcategory_3_2
            }, {
                t: this.subcategory_4_2
            }]
        }, 4).to({
            state: [{
                t: this.subcategory_1_3
            }, {
                t: this.subcategory_2_3
            }, {
                t: this.subcategory_3_3
            }, {
                t: this.subcategory_4_3
            }]
        }, 4).to({
            state: [{
                t: this.subcategory_1_4
            }]
        }, 4).wait(2));

        // panels
        this.panel_1 = new lib.panel_1_mc();

        this.panel_2 = new lib.panel_2_mc();

        this.panel_3 = new lib.panel_3_mc();

        this.panel_4 = new lib.panel_4_mc();

        this.panel_5 = new lib.panel_5_mc();

        this.panel_6 = new lib.panel_6_mc();

        this.panel_7 = new lib.panel_7_mc();

        this.panel_8 = new lib.panel_8_mc();

        this.panel_9 = new lib.panel_9_mc();

        this.panel_10 = new lib.panel_10_mc();

        this.panel_11 = new lib.panel_11_mc();

        this.panel_12 = new lib.panel_12_mc();

        this.panel_13 = new lib.panel_13_mc();

        this.panel_14 = new lib.panel_14_mc();

        this.panel_15 = new lib.panel_15_mc();

        this.panel_16 = new lib.panel_1_2_mc();

        this.panel_17 = new lib.panel_2_2_mc();

        this.panel_18 = new lib.panel_3_2_mc();

        this.panel_19 = new lib.panel_4_2_mc();

        this.panel_20 = new lib.panel_5_2_mc();

        this.panel_21 = new lib.panel_6_2_mc();

        this.panel_22 = new lib.panel_7_2_mc();

        this.panel_23 = new lib.panel_8_2_mc();

        this.panel_24 = new lib.panel_9_2_mc();

        this.panel_25 = new lib.panel_10_2_mc();

        this.panel_26 = new lib.panel_11_2_mc();

        this.panel_27 = new lib.panel_12_2_mc();

        this.panel_28 = new lib.panel_0_mc();

        this.panel_29 = new lib.panel_0_2_mc();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.panel_1
            }]
        }).to({
            state: [{
                t: this.panel_2
            }]
        }, 1).to({
            state: [{
                t: this.panel_3
            }]
        }, 1).to({
            state: [{
                t: this.panel_4
            }]
        }, 1).to({
            state: [{
                t: this.panel_5
            }]
        }, 1).to({
            state: [{
                t: this.panel_6
            }]
        }, 1).to({
            state: [{
                t: this.panel_7
            }]
        }, 1).to({
            state: [{
                t: this.panel_8
            }]
        }, 1).to({
            state: [{
                t: this.panel_9
            }]
        }, 1).to({
            state: [{
                t: this.panel_10
            }]
        }, 1).to({
            state: [{
                t: this.panel_11
            }]
        }, 1).to({
            state: [{
                t: this.panel_12
            }]
        }, 1).to({
            state: [{
                t: this.panel_13
            }]
        }, 1).to({
            state: [{
                t: this.panel_14
            }]
        }, 1).to({
            state: [{
                t: this.panel_15
            }]
        }, 1).to({
            state: [{
                t: this.panel_16
            }]
        }, 1).to({
            state: [{
                t: this.panel_17
            }]
        }, 1).to({
            state: [{
                t: this.panel_18
            }]
        }, 1).to({
            state: [{
                t: this.panel_19
            }]
        }, 1).to({
            state: [{
                t: this.panel_20
            }]
        }, 1).to({
            state: [{
                t: this.panel_21
            }]
        }, 1).to({
            state: [{
                t: this.panel_22
            }]
        }, 1).to({
            state: [{
                t: this.panel_23
            }]
        }, 1).to({
            state: [{
                t: this.panel_24
            }]
        }, 1).to({
            state: [{
                t: this.panel_25
            }]
        }, 1).to({
            state: [{
                t: this.panel_26
            }]
        }, 1).to({
            state: [{
                t: this.panel_27
            }]
        }, 1).to({
            state: [{
                t: this.panel_28
            }]
        }, 1).to({
            state: [{
                t: this.panel_29
            }]
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-67, -67, 417, 517);
    p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect = new cjs.Rectangle(-67, -67.8, 426, 517.9), rect, rect, rect, rect, rect = new cjs.Rectangle(-67, -67, 417, 517), rect, rect, rect, rect, rect, rect, rect, rect = new cjs.Rectangle(-67, -67.8, 426, 517.9), rect, rect, rect, rect = new cjs.Rectangle(-67, -67, 417, 517), rect];


    (lib.ConstructorScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.done_btn = new lib.done_btn();
        this.done_btn.setTransform(60, 535, 0.688, 0.688);
        new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

        this.reset_btn = new lib.reset_btn();
        this.reset_btn.setTransform(535, 540);
        new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.reset_btn(), 3);

        this.random_btn = new lib.random_btn();
        this.random_btn.setTransform(695, 540);
        new cjs.ButtonHelper(this.random_btn, 0, 1, 2, false, new lib.random_btn(), 3);

        this.moreGames_btn = new lib.more_games_btn();
        this.moreGames_btn.setTransform(400, 900, 0.875, 0.875);
        new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(260, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(330.1, 40.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(110, 40);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.moreGames_btn
            }, {
                t: this.random_btn
            }, {
                t: this.reset_btn
            }, {
                t: this.done_btn
            }]
        }).wait(1));

        // panels
        this.panels_mc = new lib.panels_mc();
        this.panels_mc.setTransform(440, 90);

        this.timeline.addTween(cjs.Tween.get(this.panels_mc).wait(1));

        // heroes
        this.hero_1 = new lib.marinett_mc();
        this.hero_1.setTransform(262.7, 360.4, 0.822, 0.822, 0, 0, 0, 0.1, 0.1);

        this.hero_2 = new lib.adrian_mc();
        this.hero_2.setTransform(107.3, 318.6, 0.833, 0.833, 0, 0, 0, 0.1, 0.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.hero_2
            }, {
                t: this.hero_1
            }]
        }).wait(1));

        // decor
        this.instance = new lib.broken_glass_mc();
        this.instance.setTransform(230, 540, 1, 1, 0, 0, 0, 0, -60);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // bg
        this.bg = new lib.background_mc();

        this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-262.6, -190.8, 1262.7, 1161.8);
    p.frameBounds = [rect];


    (lib.ResultScreen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // btn
        this.facebook_btn = new lib.facebook_btn();
        this.facebook_btn.setTransform(400, 800);
        new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

        this.freeGames_mc = new lib.free_games_btn();
        this.freeGames_mc.setTransform(580, 540, 0.727, 0.727);
        new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

        this.photo_btn = new lib.photo_btn();
        this.photo_btn.setTransform(700, 500);
        new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

        this.playAgain_btn = new lib.again_btn();
        this.playAgain_btn.setTransform(100, 500);
        new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

        this.next_mc = new lib.next_mc();
        this.next_mc.setTransform(650, 380);

        this.prev_mc = new lib.prev_mc();
        this.prev_mc.setTransform(150, 380);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(760, 40, 0.583, 0.583);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(690.1, 40.1, 0.583, 0.583, 0, 0, 0, 0.1, 0.1);

        this.logo_btn = new lib.logo_btn();
        this.logo_btn.setTransform(110, 40);
        new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.logo_btn
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.sound_mc
            }, {
                t: this.prev_mc
            }, {
                t: this.next_mc
            }, {
                t: this.playAgain_btn
            }, {
                t: this.photo_btn
            }, {
                t: this.freeGames_mc
            }, {
                t: this.facebook_btn
            }]
        }).wait(1));

        // banners
        this.banner_2_mc = new lib.banner_2_mc();
        this.banner_2_mc.setTransform(720, 220, 0.923, 0.923);

        this.banner_1_mc = new lib.banner_1_mc();
        this.banner_1_mc.setTransform(80, 220, 0.923, 0.923);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.banner_1_mc
            }, {
                t: this.banner_2_mc
            }]
        }).wait(1));

        // decor
        this.instance = new lib.lower_shadow_mc();
        this.instance.setTransform(-200, 400);
        this.instance.alpha = 0.102;
        this.instance.cache(-2, -2, 1204, 204);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // photoContainer
        this.photoContainer_mc = new lib.photoContainer_mc();
        this.photoContainer_mc.setTransform(-1, -1, 1, 1, 0, 0, 0, -1, -1);

        this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(-262.6, -190.8, 1262.7, 1060.8);
    p.frameBounds = [rect];


    (lib.storage_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

        // storage
        this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
        this.text.lineHeight = 74;
        this.text.lineWidth = 252;
        this.text.setTransform(2, 2);

        this.instance = new lib.PreloaderScreen();

        this.instance_1 = new lib.CopyrightScreen();

        this.instance_2 = new lib.WelcomeScreen();
        this.instance_2.setTransform(-1, -1, 1, 1, 0, 0, 0, -1, -1);

        this.instance_3 = new lib.ConstructorScreen();

        this.instance_4 = new lib.RedirectScreen();

        this.instance_5 = new lib.ResultScreen();

        this.instance_6 = new lib.InstructionScreen();

        this.gravity_explosion_comp = new lib.GravityExplosionMC();
        this.gravity_explosion_comp.setTransform(245, 50);

        this.instance_7 = new lib.Cursor();
        this.instance_7.setTransform(185, 50);

        this.fullScreen_mc = new lib.full_screen_mc();
        this.fullScreen_mc.setTransform(115.1, 50, 0.583, 0.583, 0, 0, 0, 0.1, 0);

        this.sound_mc = new lib.sound_mc();
        this.sound_mc.setTransform(45.1, 50, 0.583, 0.583, 0, 0, 0, 0.1, 0);

        this.instance_8 = new lib.OrientationLockScreen();

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.text
            }]
        }).to({
            state: [{
                t: this.instance
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.sound_mc
            }, {
                t: this.fullScreen_mc
            }, {
                t: this.instance_7
            }, {
                t: this.gravity_explosion_comp
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(10));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(0, 0, 256.5, 75.5);
    p.frameBounds = [rect, rect = new cjs.Rectangle(-200, 0, 1200, 600), rect, new cjs.Rectangle(-262.6, -190.8, 1262.7, 970.9), new cjs.Rectangle(-262.6, -190.8, 1262.7, 1161.8), new cjs.Rectangle(-200, 0, 1200, 600), new cjs.Rectangle(-262.6, -190.8, 1262.7, 1050.9), new cjs.Rectangle(-200, 0, 1200, 600), new cjs.Rectangle(10, 15, 250, 70), new cjs.Rectangle(-200, -10, 1200, 620), rect = null, rect, rect, rect, rect, rect, rect, rect, rect, rect];


    // stage content:
    (lib.storage = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // storage
        this.instance = new lib.storage_1();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = rect = new cjs.Rectangle(400, 300, 256.5, 75.5);
    p.frameBounds = [rect];

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;