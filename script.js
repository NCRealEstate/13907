(function(){
    var script = {
 "start": "this.playAudioList([this.audio_F64B673D_94F8_8A7C_41CF_18B3B9B02115]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 20,
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "paddingLeft": 0,
 "definitions": [{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 148.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B513C31_94FE_F91D_41D8_B732241DA7B6",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100748_00_merged",
 "id": "panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D7E3A8E1_9428_8607_41E1_5F5932834548"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095913_00_merged",
 "id": "panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_B31D4489_9469_8E04_41DF_85B6464D924A",
  "this.overlay_B3433D5E_9469_9E3D_41B0_578D4E4FE8E2",
  "this.overlay_B3A68B55_9469_7A0F_41C1_4853B4A5BA8A",
  "this.overlay_B398F714_9468_8A0D_41CA_BEF71604B741",
  "this.overlay_B3E83155_9468_860F_41DE_BAC09511B87A",
  "this.overlay_BC7BD069_9468_8604_41DE_22ACFEAFD109",
  "this.overlay_BCF75D9D_9468_9E3F_41E1_2998739739A0",
  "this.overlay_BD63FAB6_9468_FA0D_41D8_24A4C20CBB76",
  "this.overlay_BE25E825_9468_860F_41D2_560A947E5843",
  "this.overlay_BEEFB6C4_9468_8A0D_41BE_8D054DBB89EC",
  "this.overlay_C9589E20_94F8_BA05_41D7_A2B5ED3B423E"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 108,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "backwardYaw": -52.8,
   "distance": 1
  },
  {
   "yaw": 78.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435",
   "backwardYaw": -135.04,
   "distance": 1
  },
  {
   "yaw": 122.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "backwardYaw": -41.99,
   "distance": 1
  },
  {
   "yaw": -167.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012",
   "backwardYaw": 130.04,
   "distance": 1
  },
  {
   "yaw": -93.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E",
   "backwardYaw": 103.18,
   "distance": 1
  },
  {
   "yaw": 102.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61",
   "backwardYaw": -75.82,
   "distance": 1
  },
  {
   "yaw": -20.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61",
   "backwardYaw": 131.61,
   "distance": 1
  },
  {
   "yaw": 73.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "backwardYaw": -121.78,
   "distance": 1
  },
  {
   "yaw": -103.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531",
   "backwardYaw": 144.58,
   "distance": 1
  },
  {
   "yaw": -128.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
   "backwardYaw": 70.13,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 95.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A626E63_94FE_F93D_41D6_019B3331CF52",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100339_00_merged",
 "id": "panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A81D9C9B_9438_9E3B_41DC_3DEDEC0A2E8A",
  "this.overlay_A8DD8A8E_9438_BA1D_4190_3BBF172CD8D1",
  "this.overlay_A8F858DC_9438_863D_41C9_7E15BB11F6BD",
  "this.overlay_A94CADD7_9439_9E0B_41AB_19CEE43B4E63",
  "this.overlay_DCAC2D3C_9439_9E7D_41DA_227F6D598090"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 111.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB",
   "backwardYaw": -168.6,
   "distance": 1
  },
  {
   "yaw": 7.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8",
   "backwardYaw": 137,
   "distance": 1
  },
  {
   "yaw": -166.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012",
   "backwardYaw": -77.4,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A"
  },
  {
   "yaw": -81.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF",
   "backwardYaw": -0.39,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A8201EE_94FE_0B07_41DA_B323FF090A6A",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 155.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B258C78_94FE_F90B_41C5_99C2457859E0",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 102.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AD15181_94FE_0BFD_41C7_7857DC8CD74A",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 143.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B47FC4B_94FE_F90D_41DC_4CA05090C944",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 35.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_993B8D6E_94FE_FB07_41C8_693A43DFD1FA",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 111.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A189B20_94FE_FF3B_41D2_61914AFFA4F5",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_094714_00_merged",
 "id": "panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_86B56F91_9458_9A04_41DC_7E67097DD679",
  "this.overlay_872CF82B_9458_8604_41C4_55874549E756",
  "this.overlay_876D2570_9458_8E05_41CC_224FC66B3A50",
  "this.overlay_87D76531_9458_8E07_41D8_2072AFAA1357",
  "this.overlay_8054CB20_9458_9A05_41B5_CC5DB0235DE2",
  "this.overlay_80D1FD56_945B_7E0D_41DD_AB29BE829CF7",
  "this.overlay_815ECC18_945B_9E05_41D6_D57CADC63843"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435"
  },
  {
   "yaw": -31.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "backwardYaw": -175.86,
   "distance": 1
  },
  {
   "yaw": 56.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
   "backwardYaw": -98.05,
   "distance": 1
  },
  {
   "yaw": 58.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023",
   "backwardYaw": 74.18,
   "distance": 1
  },
  {
   "yaw": -36.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "backwardYaw": 154.92,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4"
  },
  {
   "yaw": 17.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "backwardYaw": -107.39,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_849DF017_94FE_0904_41D3_E799A59921E6",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -72.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B15CC87_94FE_F905_41CD_B2AC219406FE",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_094953_00_merged",
 "id": "panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_81A3764C_9468_8A1D_4192_79076BC28D3E",
  "this.overlay_81C45502_9469_8E05_41A7_C49F6955DA14",
  "this.overlay_820B6734_9469_8A0D_41E2_3FC951A8E340",
  "this.overlay_825572FD_9469_8BFF_41D1_B51526430736",
  "this.overlay_82F6CFB9_9469_9A07_41C9_69F9E0EDB764",
  "this.overlay_83602CD9_9469_FE07_41B8_B0761160A5BE",
  "this.overlay_8171B8DD_9469_863F_41B2_6661BFFAD6CF",
  "this.overlay_81D85AB6_9469_BA0D_418A_D470B88BFC86",
  "this.overlay_CF9A13B9_94F9_8A07_41E1_332949E98C1C"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 24.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435",
   "backwardYaw": 140.56,
   "distance": 1
  },
  {
   "yaw": -63.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "backwardYaw": 97.78,
   "distance": 1
  },
  {
   "yaw": 108.42,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61",
   "backwardYaw": -84.57,
   "distance": 1
  },
  {
   "yaw": -150.21,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
   "backwardYaw": 2.38,
   "distance": 1
  },
  {
   "yaw": 162.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023",
   "backwardYaw": 99.37,
   "distance": 1
  },
  {
   "yaw": -107.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE",
   "backwardYaw": 17.43,
   "distance": 1
  },
  {
   "yaw": -24.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "backwardYaw": 106.43,
   "distance": 1
  },
  {
   "yaw": -52.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": 108,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 162.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BF94B3A_94FE_FF0F_41B2_E352B1CBECFE",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -55.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9ABAAE0E_94FE_F907_41D9_9665256F60F5",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BE9DEC4_94FE_F97B_41D1_DE6A8A0B58E1",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100557_00_merged",
 "id": "panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_ABB765CA_9438_8E05_41B6_7C4E1FF46B96"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -168.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF",
   "backwardYaw": 111.45,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 118.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A356AFF_94FE_F905_41DD_F66A16106EF4",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -82.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A736AC5_94FE_F905_41D5_6D0B673EA734",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AAF11B0_94FE_0B1B_41E0_D33247E911D4",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 98.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84D84CB1_94FE_F91D_41CE_1832FFA230DC",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 29.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A838E45_94FE_F905_41D3_0F0C696E2AA1",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 127.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AB5F1B0_94FE_0B1B_41E0_C90C4F51F1B6",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -160.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_846D2D1E_94FE_FB04_41D4_F77555D6BE52",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B5D6F43_94FE_F77D_41CC_662B3256E2C2",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8473503A_94FE_090F_41C6_F6225DB42460",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -57.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A17925E_94FE_0907_41B3_CB96377316B0",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 21.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84EB9C9F_94FE_F904_41D9_44A66DD724F9",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 102.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AE8B152_94FE_0B1F_41D2_45D736FBA96F",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_101138_00_merged",
 "id": "panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D28B196A_9428_8604_41C0_C2782B01A3B5",
  "this.overlay_D37472A1_9428_8A07_41D1_495A63B421A3"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 4.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89",
   "backwardYaw": 170.96,
   "distance": 1
  },
  {
   "yaw": -144.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61",
   "backwardYaw": -159.04,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 72.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BDD9ECA_94FE_F90F_41E0_0063C4199235",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 63.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BCF2B77_94FE_FF05_41E2_42F4E0CCD421",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_102815_00_merged",
 "id": "panorama_984308A6_93C3_E5E5_41DE_130FD56275BC",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_C7F5A30A_94DF_8A04_41D1_EDEB8E2510B8",
  "this.overlay_C01BA548_94DF_8E05_41CE_51C6640FD887",
  "this.overlay_C0253D2A_94DF_BE04_41A5_2801E29BA307",
  "this.overlay_C31F11B7_94D8_860C_41A2_AF747086354E"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 19.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61",
   "backwardYaw": -68.45,
   "distance": 1
  },
  {
   "yaw": -23.2,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1",
   "backwardYaw": 67.37,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89"
  },
  {
   "yaw": -4.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F",
   "backwardYaw": -17.5,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100131_00_merged",
 "id": "panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A7EA9C25_9457_9E0C_419A_82A21D20B611",
  "this.overlay_A024B23E_9457_8A7D_41D5_34165F90612B",
  "this.overlay_A00EECF7_9457_9E0B_41D5_73CC0B8D7A65",
  "this.overlay_A071D789_9457_8A07_41B0_0432892BA614",
  "this.overlay_A0515225_9457_8A0C_41B2_364E155587D5",
  "this.overlay_A0ACFD47_9457_9E0C_41DC_C17A8FB035BB",
  "this.overlay_A0A482AF_9428_8A1B_41B5_88AE7C201CD7",
  "this.overlay_A11B3170_9428_8605_41D0_92DA9BC31CB2",
  "this.overlay_A203E4A1_9428_8E04_41CA_8D5AD3A02AAA",
  "this.overlay_A79FA1A7_9428_860B_41E0_2566AA6BFF9D",
  "this.overlay_C85CA03F_94F7_867B_41C7_5A0FA5752E90"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435"
  },
  {
   "yaw": 99.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "backwardYaw": -75.63,
   "distance": 1
  },
  {
   "yaw": 109.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012",
   "backwardYaw": 61.66,
   "distance": 1
  },
  {
   "yaw": 5.52,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E",
   "backwardYaw": -165.74,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61"
  },
  {
   "yaw": 72.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "backwardYaw": -136.23,
   "distance": 1
  },
  {
   "yaw": 70.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": -128.45,
   "distance": 1
  },
  {
   "yaw": 125.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78",
   "backwardYaw": 52.62,
   "distance": 1
  },
  {
   "yaw": -52.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531",
   "backwardYaw": -161.32,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 148.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A2DD24D_94FE_0905_41C3_8EA339D4D13E",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095828_00_merged",
 "id": "panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_B6D84937_947B_860B_41C1_330CB58EC5DD",
  "this.overlay_B772FE08_947B_BA05_41CD_B550B4566B70",
  "this.overlay_B75947A5_947B_8A0F_41C9_359BCB62B61A",
  "this.overlay_B7BAB37F_947B_8AFC_41B9_7898CEC2CE25",
  "this.overlay_B7E83FB4_947B_7A0D_41C3_2BA6EF8D2707",
  "this.overlay_B039DADD_9478_9A3F_41E1_A622EAFCC792",
  "this.overlay_B0D55FD4_9478_BA0D_41A3_64D16E444C09",
  "this.overlay_B2249BDF_9478_FA3C_41D1_2BED1FF314F6",
  "this.overlay_B35B87B6_9478_8A0D_41E0_261AC539930E",
  "this.overlay_BC1DA4EC_9478_8E1D_41DF_9CBC3D65725C",
  "this.overlay_C805EE80_94FB_9A05_419D_709AFBB26F20"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 52.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435",
   "backwardYaw": -169.37,
   "distance": 1
  },
  {
   "yaw": -75.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
   "backwardYaw": 99.35,
   "distance": 1
  },
  {
   "yaw": -58.42,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E",
   "backwardYaw": 127.56,
   "distance": 1
  },
  {
   "yaw": 97.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61",
   "backwardYaw": -86.73,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61"
  },
  {
   "yaw": 124.73,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
   "backwardYaw": -49.55,
   "distance": 1
  },
  {
   "yaw": -175.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE",
   "backwardYaw": -31.85,
   "distance": 1
  },
  {
   "yaw": 3.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "backwardYaw": 152.36,
   "distance": 1
  },
  {
   "yaw": -41.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": 122.66,
   "distance": 1
  },
  {
   "yaw": 97.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "backwardYaw": -63.43,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -103.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9ADDD162_94FE_0B3F_41DD_71DD136342C7",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_101916_00_merged",
 "id": "panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_DAB87D80_94D9_BE05_41BA_78977140D576",
  "this.overlay_DB793BA3_94D9_FA04_41E2_5DBD3C918CB7",
  "this.overlay_DB6D3707_94D9_8A0B_41E2_00AA43A3BC58",
  "this.overlay_DB17A2AC_94D9_8A1D_41DE_A078EAD64D30",
  "this.overlay_DB326CE7_94D9_BE0B_41E0_852E762B9E72"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -107.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984C0817_93C2_24A3_41DD_097411309BF0",
   "backwardYaw": -140.75,
   "distance": 1
  },
  {
   "yaw": -6.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1",
   "backwardYaw": -72.49,
   "distance": 1
  },
  {
   "yaw": -17.5,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC",
   "backwardYaw": -4.72,
   "distance": 1
  },
  {
   "yaw": -169.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86",
   "backwardYaw": -82.91,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -68.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B9D4BC2_94FE_FF7F_4184_82D4F438BFA9",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 172.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_848F3CFD_94FE_F905_41DE_979E74FB56AC",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100444_00_merged",
 "id": "panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_ABAAA577_9439_8E0B_41DE_E52AD73AA96A"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -0.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF",
   "backwardYaw": -81.75,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -168.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_990EFDAD_94FE_FB05_41BD_6C139A5C4014",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 51.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8492A019_94FE_090D_41DB_E3D9EE08B706",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -112.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A089B2A_94FE_FF0C_41C3_774A030348D6",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_847F5D03_94FE_F8FD_41DC_A5625A5F2BF6",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -172.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9ACC2181_94FE_0BFD_4190_7E7DDAAF1DAA",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -162.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A38CE83_94FE_F9FD_41B4_C73FFFC63FC6",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100948_00_merged",
 "id": "panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D2F6B9B8_942B_8605_41BC_AC411DF7FA71",
  "this.overlay_D351E5E5_942B_8E0C_41D7_455F0C17CA61"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -86.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A",
   "backwardYaw": 107.31,
   "distance": 1
  },
  {
   "yaw": 170.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB",
   "backwardYaw": 4.53,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AFAEDCF_94FE_FB05_41DD_7F0EF330FF15",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -118.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84BC4003_94FE_08FD_41C6_C9182DC70D5A",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -106.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B374C61_94FE_F93D_41D7_9655609631F4",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 104.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84CF3FF9_94FE_F70D_41B5_C5A734485F24",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 10.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A68D20D_94FE_0904_41E0_26EE46E3405E",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -155.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8421A078_94FE_090B_41DC_552E294E627F",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -17.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A572AE9_94FE_F90D_41E0_5DEC22A88974",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B143F9F_94FE_F704_41E0_964DD14C4482",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095230_00_merged",
 "id": "panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8E2D24E7_9468_8E0B_41C0_96CA05E6CB93",
  "this.overlay_8EA930E4_9468_860D_41D6_CB0675412119",
  "this.overlay_8EE58F0D_9468_9A1C_41B2_AD7DFFB3BB13"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -84.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697",
   "backwardYaw": 75.75,
   "distance": 1
  },
  {
   "yaw": -175.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77",
   "backwardYaw": -158.75,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 93.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AF86123_94FE_0B3D_419C_561FF23E54F5",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100242_00_merged",
 "id": "panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_AFD479F1_943B_8604_41DC_E2A9F35669D7",
  "this.overlay_AFA423F6_943B_8A0D_41BE_A936B70E42AA"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 34.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012",
   "backwardYaw": -163.68,
   "distance": 1
  },
  {
   "yaw": 52.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
   "backwardYaw": 125.02,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095500_00_merged",
 "id": "panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8862F92C_9477_861D_41C6_D2BFAF4A4ACA",
  "this.overlay_88B93508_9477_8E04_41D2_7A68DD6F12BE",
  "this.overlay_88EF5A5C_9477_BA3D_41E1_52FE39D0C2F2"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 2.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3",
   "backwardYaw": -159.54,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A"
  },
  {
   "yaw": -176.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77",
   "backwardYaw": 10.83,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 26.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AA391BF_94FE_0B04_418D_956D3E99B3EE",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -107.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B834BE2_94FE_FF3F_41DD_45F823EFDB8D",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -98.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AA0EE24_94FE_F93B_41CC_40EDD41FCB57",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -34.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_99200D9B_94FE_FB0D_41DA_074CD0A95A41",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 156.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_99175DAD_94FE_FB05_41E0_B062D27B429F",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AF70133_94FE_0B1D_41E1_A4BB142E2E00",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -131.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9ACA7190_94FE_0B1C_41D9_FD58B545AC74",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A118E9B_94FE_F90C_41C8_2510A1AC7488",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B05BC90_94FE_F91B_41D1_CDA189921B48",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -121.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A67EADB_94FE_F90C_41BD_D9CCBF187FA2",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BEC427D_94FE_0905_41C4_5FEFB042746C",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100843_00_merged",
 "id": "panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D78CC059_9429_8607_41D4_B186D706FD4E",
  "this.overlay_D07565F9_9429_8E07_41D7_BF7A484CA193",
  "this.overlay_D0038772_9429_8A05_41CB_8F5E704AE38C"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -138.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8",
   "backwardYaw": -43.77,
   "distance": 1
  },
  {
   "yaw": -50.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB",
   "backwardYaw": 87.64,
   "distance": 1
  },
  {
   "yaw": 107.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89",
   "backwardYaw": -86.85,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A8E11DF_94FE_0B05_41DB_67ACE876B234",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 71.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AC061A0_94FE_0B3B_41B6_1E16DF3DFD71",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100004_00_merged",
 "id": "panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_BECFBF3B_945B_9A7B_41D0_81F9D2E30B9B",
  "this.overlay_BF72ACD5_945B_9E0F_41DF_BE167A2EA476",
  "this.overlay_BF57ADB0_945B_FE05_41D8_308B35650656",
  "this.overlay_BFA67F0C_945B_9A1D_41E0_56AAAA343E68",
  "this.overlay_B83BD397_945B_8A0B_41DB_6201037378A3",
  "this.overlay_B876AEA1_945B_9A04_41C1_9BCF26C7BA24",
  "this.overlay_B8DBAFB5_945B_7A0C_41C3_113AA3392D5B",
  "this.overlay_B969FACF_9458_9A1B_419A_98C990C291F4",
  "this.overlay_BA176EB3_9458_BA0B_41D2_84E543375E64",
  "this.overlay_C837083F_94F9_867B_41A1_6CE55826E86E"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435"
  },
  {
   "yaw": 127.56,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "backwardYaw": -58.42,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012"
  },
  {
   "yaw": -165.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
   "backwardYaw": 5.52,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61"
  },
  {
   "yaw": 100.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "backwardYaw": -116.86,
   "distance": 1
  },
  {
   "yaw": 103.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": -93.15,
   "distance": 1
  },
  {
   "yaw": -108.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531",
   "backwardYaw": 108.5,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095142_00_merged",
 "id": "panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8D60F212_9469_8A04_41DF_254A6FC8FA75",
  "this.overlay_8EEF85D5_9468_8E0F_41DD_16DF19174BBD",
  "this.overlay_8F674B9C_946B_9A3D_41C9_CAA6028B386D"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 75.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A",
   "backwardYaw": -84.98,
   "distance": 1
  },
  {
   "yaw": -174.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61",
   "backwardYaw": -7.65,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A74F1FE_94FE_0B07_41D0_20468A15716D",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 72.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84AE9CDF_94FE_F905_41DE_F27EE97AC7FC",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A2E4E8D_94FE_F905_41E1_7CE5D85C1B92",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -109.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B525F58_94FE_F70B_41D0_580AFC19E4A4",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 20.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_99310D6E_94FE_FB07_41D0_D53924BEA555",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_85F4F0A3_94FE_093D_41B6_EE0FA04803E8",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 130.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A3F323F_94FE_0905_41C1_8FC945714CCD",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AED2142_94FE_0B7C_41E2_7D576AFDB600",
 "automaticZoomSpeed": 10
},
{
 "class": "MediaAudio",
 "data": {
  "label": "our-summer-matrika-main-version-31126-02-48"
 },
 "autoplay": true,
 "id": "audio_F64B673D_94F8_8A7C_41CF_18B3B9B02115",
 "audio": {
  "mp3Url": "media/audio_F64B673D_94F8_8A7C_41CF_18B3B9B02115.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_F64B673D_94F8_8A7C_41CF_18B3B9B02115.ogg"
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_101544_00_merged",
 "id": "panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_DD8BBE93_9429_9A0B_41E2_28864A5B4820",
  "this.overlay_DE162E35_9429_9A0F_41DF_639C5410ACFF",
  "this.overlay_DE0EA9B9_9429_8604_41D7_C9F01C3CD35D",
  "this.overlay_DEF9F05C_9429_863C_41D0_6DC0F844B66A"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 87.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A",
   "backwardYaw": -50.85,
   "distance": 1
  },
  {
   "yaw": -89.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392",
   "backwardYaw": -165.34,
   "distance": 1
  },
  {
   "yaw": -115.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86",
   "backwardYaw": -177.93,
   "distance": 1
  },
  {
   "yaw": 174.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
   "backwardYaw": 174.91,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 2.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B26FF8B_94FE_F70D_41E2_984981F6842D",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "Video",
 "label": "fireplace",
 "scaleMode": "fit_inside",
 "width": 960,
 "thumbnailUrl": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44_t.jpg",
 "loop": false,
 "id": "video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44",
 "height": 540,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 116.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A0A726A_94FE_090F_41E1_B594109CCBC4",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A569E6B_94FE_F90C_41DC_F737170CBD96",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B314F79_94FE_F70D_41D4_C2E33164CE9A",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84602047_94FE_0905_41D4_0D528F9CC778",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 10.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A2ADB0E_94FE_FF07_41D7_B410FD33AEDE",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -52.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A56B21D_94FE_0905_41E1_4285EEC403AD",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_094620_00_merged",
 "id": "panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_80A39316_93DE_24A5_41A3_F909EC9EC461",
  "this.overlay_8004A821_93DE_649F_41B2_D2A054F1298D",
  "this.overlay_8032F4AF_93DE_6DE3_41DD_1198F94C51F9",
  "this.overlay_87B2D0ED_93DE_2567_41C6_371DE812C0F9",
  "this.overlay_804920CD_93DD_E5A7_41D7_0FB43F5B11B0",
  "this.overlay_87D86EF8_93DD_DD6D_4194_E9DF7A13BB9D",
  "this.overlay_80467279_93C2_E56F_41DE_2D07768F9D20",
  "this.overlay_878B84F6_93C2_2D65_41C2_29E29AE8FA98",
  "this.overlay_87BDC036_93C2_24E5_41DC_FD945F71C879",
  "this.overlay_CF312AE5_94F8_9A0C_41DA_D1725C10499C"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 0.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435",
   "backwardYaw": 143.22,
   "distance": 1
  },
  {
   "yaw": -49.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "backwardYaw": 124.73,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697"
  },
  {
   "yaw": 174.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB",
   "backwardYaw": 174.28,
   "distance": 1
  },
  {
   "yaw": 97.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023",
   "backwardYaw": 81.37,
   "distance": 1
  },
  {
   "yaw": -98.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE",
   "backwardYaw": 56.48,
   "distance": 1
  },
  {
   "yaw": -31.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "backwardYaw": 122.26,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4"
  },
  {
   "yaw": 2.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "backwardYaw": -150.21,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -70.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9ACC9DFE_94FE_FB07_4195_8D8DFCE5D95A",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A9451CF_94FE_0B05_41C7_3D37FAF24162",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 127.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BD3DECA_94FE_F90F_41C5_5023745F5418",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -54.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BE39282_94FE_09FF_41C7_E45BA6237B99",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 121.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BE95B43_94FE_FF7D_41AE_4CCA50D348E1",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 93.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A4B6232_94FE_091F_41B6_D4A15F12A391",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B732C06_94FE_F907_41DB_D04019DF1F33",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095747_00_merged",
 "id": "panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8B82E6FD_9479_8BFC_41CB_D2310EA6326D",
  "this.overlay_8BDA69BE_9479_867D_41CA_A2A1F8118E8F",
  "this.overlay_B4318B40_9479_9A04_41C7_567493571E7C",
  "this.overlay_B46CAA0A_9479_7A05_41CD_E24B0A048F14",
  "this.overlay_B4986EC0_9478_9A05_41D6_342915C0B4B1",
  "this.overlay_B5195EF7_9478_BA0B_41B0_F7972C782EB1",
  "this.overlay_B581ED2D_9478_9E1C_41E2_341781C21A16",
  "this.overlay_B67EEBC5_9478_FA0F_41D1_ABD9E3FF1EE7",
  "this.overlay_B727FDD1_9478_9E07_41C4_E3096E016E13",
  "this.overlay_B7E81D23_9478_BE04_41DC_BA67B2E5A01A",
  "this.overlay_8BBD982E_9478_861D_41DB_80C4994E20EA",
  "this.overlay_CF906200_94F8_8A05_41BE_FE7F74EDE5E8"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 66.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435",
   "backwardYaw": -125.8,
   "distance": 1
  },
  {
   "yaw": -136.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
   "backwardYaw": 72.89,
   "distance": 1
  },
  {
   "yaw": 152.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "backwardYaw": 3.84,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012"
  },
  {
   "yaw": -116.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E",
   "backwardYaw": 100.53,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61"
  },
  {
   "yaw": 122.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
   "backwardYaw": -31.57,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023"
  },
  {
   "yaw": 154.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE",
   "backwardYaw": -36.87,
   "distance": 1
  },
  {
   "yaw": -121.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": 73.68,
   "distance": 1
  },
  {
   "yaw": 106.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "backwardYaw": -24.86,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 86.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BBC8B94_94FE_FF1B_41E1_8BFAA8B19367",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -36.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AC14DFE_94FE_FB07_41E0_296BF2CDF21D",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_camera"
  },
  {
   "media": "this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_camera"
  },
  {
   "media": "this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_camera"
  },
  {
   "media": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_camera"
  },
  {
   "media": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_camera"
  },
  {
   "media": "this.panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_camera"
  },
  {
   "media": "this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_camera"
  },
  {
   "media": "this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_camera"
  },
  {
   "media": "this.panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_camera"
  },
  {
   "media": "this.panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_camera"
  },
  {
   "media": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_camera"
  },
  {
   "media": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_camera"
  },
  {
   "media": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_camera"
  },
  {
   "media": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_camera"
  },
  {
   "media": "this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_camera"
  },
  {
   "media": "this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_camera"
  },
  {
   "media": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_camera"
  },
  {
   "media": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_camera"
  },
  {
   "media": "this.panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_camera"
  },
  {
   "media": "this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_camera"
  },
  {
   "media": "this.panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_camera"
  },
  {
   "media": "this.panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_camera"
  },
  {
   "media": "this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_camera"
  },
  {
   "media": "this.panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_camera"
  },
  {
   "media": "this.panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_camera"
  },
  {
   "media": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_camera"
  },
  {
   "media": "this.panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_camera"
  },
  {
   "media": "this.panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_camera"
  },
  {
   "media": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_camera"
  },
  {
   "media": "this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_camera"
  },
  {
   "media": "this.panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_camera"
  },
  {
   "media": "this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_camera"
  },
  {
   "media": "this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_camera"
  },
  {
   "media": "this.panorama_984C0817_93C2_24A3_41DD_097411309BF0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984C0817_93C2_24A3_41DD_097411309BF0_camera"
  },
  {
   "media": "this.panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_camera"
  },
  {
   "media": "this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_camera"
  },
  {
   "media": "this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -49.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BA52EF4_94FE_F91B_41DB_74A0F1A56E22",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_992A4D8F_94FE_FB05_418C_0B9EAF0001D5",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -123.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A947E2D_94FE_F905_41E0_891323FE17A5",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -77.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84F8DFCA_94FE_F70C_41B2_1E7563E9D772",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -127.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84835030_94FE_091B_41DD_FF9992B35D8F",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_102251_00_merged",
 "id": "panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_C64103AF_94D8_8A1B_41DF_FE46C5616AD8"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984C0817_93C2_24A3_41DD_097411309BF0",
   "backwardYaw": 117.35,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -45.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_99034DC5_94FE_FB05_41DA_CA322D00C3BD",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095355_00_merged",
 "id": "panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8F7F55DF_9469_8E3B_41E1_A437D5862469",
  "this.overlay_8F81B052_9468_8604_41CF_81B8B8326C14",
  "this.overlay_8FF2E715_9468_8A0F_41DD_F03FBCDD28CC"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 6.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3",
   "backwardYaw": -153.39,
   "distance": 1
  },
  {
   "yaw": -158.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A",
   "backwardYaw": -175.86,
   "distance": 1
  },
  {
   "yaw": 10.83,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021",
   "backwardYaw": -176.35,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AE63162_94FE_0B3F_41B5_BD00A29E670D",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -57.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A8E1E3B_94FE_F90C_4189_E02DB2EBBD35",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100039_00_merged",
 "id": "panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_BAC2ED09_9459_9E07_41CB_C78A2A52EA2D",
  "this.overlay_BB5EFA34_9459_9A0C_41D6_FADFA818B49F",
  "this.overlay_BB4B3446_9459_8E0D_41CB_275EE08FBB1A",
  "this.overlay_BB9987D2_9459_8A05_41B6_2B8777B2A6BC",
  "this.overlay_BBEEE4E2_9459_8E04_41E0_92FF7CBF5A96",
  "this.overlay_A40EC6CB_9459_8A1B_4196_11E9AD7531BA",
  "this.overlay_A486E8BF_9459_867B_41C4_87A0508DDAAF",
  "this.overlay_A569DAF0_9458_9A05_41D7_F3DBB06DB66C",
  "this.overlay_A63808E3_9458_860B_41D7_DB74719B5589",
  "this.overlay_C83EA458_94F8_8E04_41B1_9DC3750F1558"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734"
  },
  {
   "yaw": -175.5,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012",
   "backwardYaw": 48.3,
   "distance": 1
  },
  {
   "yaw": 108.5,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E",
   "backwardYaw": -108.78,
   "distance": 1
  },
  {
   "yaw": -161.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
   "backwardYaw": -52.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE"
  },
  {
   "yaw": 144.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": -103.39,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -169.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_992C5D83_94FE_FBFD_41D0_FA27ED63D67E",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -82.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A69BE59_94FE_F90D_41C2_07AECE8A91DB",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095704_00_merged",
 "id": "panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8A867147_9478_860B_41E2_2EA2B1203C9A",
  "this.overlay_8AD9F393_9478_8A0B_41DD_5908933FCB24",
  "this.overlay_8B25E4AF_9478_8E1B_41DA_F23C6DFCE4C5",
  "this.overlay_8B0622F2_9478_8A05_41B5_70742C18EF19",
  "this.overlay_8B5B536D_947B_8A1F_41E1_05C07D4F9F8A",
  "this.overlay_CFDDAD43_94F8_9E04_41E1_8B30A3057F54"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 143.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
   "backwardYaw": 0.02,
   "distance": 1
  },
  {
   "yaw": -125.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "backwardYaw": 66.4,
   "distance": 1
  },
  {
   "yaw": -169.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "backwardYaw": 52.53,
   "distance": 1
  },
  {
   "yaw": -135.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": 78.99,
   "distance": 1
  },
  {
   "yaw": 140.56,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "backwardYaw": 24.41,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_101657_00_merged",
 "id": "panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_DF31731C_942B_8A3C_41BB_5FCC4251AC3E",
  "this.overlay_DFE82E4B_942B_FA1B_41DC_59936290A18A",
  "this.overlay_DFBFCDCF_942B_9E1C_41E0_780A6FD0AF24",
  "this.overlay_C4210022_9428_8604_41DA_6CB79960FD20"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -165.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB",
   "backwardYaw": -89.89,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A"
  },
  {
   "yaw": -61.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86",
   "backwardYaw": 145.78,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100634_00_merged",
 "id": "panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D4C43BAC_9438_9A1D_41C6_C92EA6D2131D",
  "this.overlay_D49FC3B1_9438_8A07_41C4_91F59F99856F",
  "this.overlay_D4B7AA79_9438_FA04_41E0_65C0CC247893",
  "this.overlay_D56D26C5_9438_8A0F_41D4_629B88000ED9",
  "this.overlay_D5039648_9438_8A05_416F_200D587546FC"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -131.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7",
   "backwardYaw": 76.34,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26"
  },
  {
   "yaw": -43.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A",
   "backwardYaw": -138.78,
   "distance": 1
  },
  {
   "yaw": 134.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012",
   "backwardYaw": -77.03,
   "distance": 1
  },
  {
   "yaw": 137,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF",
   "backwardYaw": 7.77,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_99026104_94FE_08FB_41E0_CA9D1DDA3A57",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_991C8DA4_94FE_FB3B_41C8_7ACE9794233E",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -39.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A745E50_94FE_F91B_41D5_259F7F228852",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84B82CD0_94FE_F91B_41DA_FDE4244A20AE",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -79.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B613C18_94FE_F90C_41E1_CAB3461849FD",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -62.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BF9B272_94FE_091F_41E1_42FE5D5FE0DD",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -145.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AE07DE8_94FE_FB0C_41CE_4B9CD0153CD5",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_102208_00_merged",
 "id": "panorama_984C0817_93C2_24A3_41DD_097411309BF0",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_C5FC9C38_94DB_BE04_41D1_A6FEAD600B89",
  "this.overlay_C5AF8908_94DB_8604_41CA_52FF0CB8284F"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 117.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED",
   "backwardYaw": -84,
   "distance": 1
  },
  {
   "yaw": -140.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F",
   "backwardYaw": -107.31,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84C85CC8_94FE_F90B_419A_DF32AA6C48F5",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AAF6E1C_94FE_F90B_41D0_5C03B7EAD1D9",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_984C0817_93C2_24A3_41DD_097411309BF0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 12.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9AEF4DDE_94FE_FB07_41AA_B03B59B84515",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9ADB0DEC_94FE_FB04_41DC_2D57D4CB0162",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -104.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84FA7C90_94FE_F91B_41D0_6E978E04775F",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84E83FDE_94FE_F707_41E0_63D650A07D95",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -76.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B9B2EF9_94FE_F90D_41AC_F1C1322EEDAC",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 44.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BC79EDA_94FE_F90F_418F_4A5795484216",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -48.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B7E7F20_94FE_F73B_41E1_215E7DAFB371",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_094833_00_merged",
 "id": "panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8049BDBA_9458_FE04_41D6_90C32C0F7DFB",
  "this.overlay_80A9A708_9458_8A05_41D4_E5D682CBDF87",
  "this.overlay_813E0FE7_9457_7A0B_41AF_95523E6618ED",
  "this.overlay_81A80E0E_9457_BA1D_41D6_81A991562A85"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 81.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
   "backwardYaw": 97.69,
   "distance": 1
  },
  {
   "yaw": 74.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE",
   "backwardYaw": 58.25,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4"
  },
  {
   "yaw": 99.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "backwardYaw": 162.81,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 159.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_845DCD2B_94FE_FB0D_41CB_01160895F2C0",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -82.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B056FB7_94FE_F704_41D8_E7421551EBB8",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095537_00_merged",
 "id": "panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_899F2550_9478_8E05_41D9_95C10BAB5620",
  "this.overlay_8A289EC4_9479_7A0D_41D3_42EA2EA6953D",
  "this.overlay_8A313C8A_9479_9E04_41D8_00B6FAA3BAFF"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A"
  },
  {
   "yaw": -153.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77",
   "backwardYaw": 6.59,
   "distance": 1
  },
  {
   "yaw": -159.54,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021",
   "backwardYaw": 2.85,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100208_00_merged",
 "id": "panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A3DAA24E_9428_8A1D_41BF_33622B6708A3",
  "this.overlay_AC41F169_9428_8607_41AF_FBCDE3C1FE20",
  "this.overlay_AC592BCE_9428_9A1D_41DB_2F3EBF02AABB",
  "this.overlay_AC0DFD4B_9428_BE1B_41D8_DD6F4DBA0D20",
  "this.overlay_AC3A1196_9428_860D_41E0_F7D1377F8012",
  "this.overlay_AD6DBD04_9437_9E0D_41A7_43C96C65B813",
  "this.overlay_ADFBB00E_9437_861D_41C0_8B69045CA075",
  "this.overlay_AA5299BF_9438_867B_41DA_F407B045A87D"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -77.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8",
   "backwardYaw": 134.62,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A"
  },
  {
   "yaw": -77.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF",
   "backwardYaw": -166.44,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61"
  },
  {
   "yaw": 130.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": -167.81,
   "distance": 1
  },
  {
   "yaw": -163.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78",
   "backwardYaw": 34.51,
   "distance": 1
  },
  {
   "yaw": 48.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531",
   "backwardYaw": -175.5,
   "distance": 1
  },
  {
   "yaw": 61.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
   "backwardYaw": 109.78,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 129.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B43FF68_94FE_F70B_41B0_98F22BB71B6C",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -71.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84D9FFE7_94FE_F704_41CF_C4E3FAF57663",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 138.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BB42EE9_94FE_F90C_41C6_19DD7C3335FB",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -71.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BAD6BAC_94FE_FF04_41D7_2A38B6BD8B23",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A21124D_94FE_0905_41BF_2AF18B4917FF",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_camera"
  },
  {
   "media": "this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_camera"
  },
  {
   "media": "this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_camera"
  },
  {
   "media": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_camera"
  },
  {
   "media": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_camera"
  },
  {
   "media": "this.panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_camera"
  },
  {
   "media": "this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_camera"
  },
  {
   "media": "this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_camera"
  },
  {
   "media": "this.panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_camera"
  },
  {
   "media": "this.panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_camera"
  },
  {
   "media": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_camera"
  },
  {
   "media": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_camera"
  },
  {
   "media": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_camera"
  },
  {
   "media": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_camera"
  },
  {
   "media": "this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_camera"
  },
  {
   "media": "this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_camera"
  },
  {
   "media": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_camera"
  },
  {
   "media": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_camera"
  },
  {
   "media": "this.panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_camera"
  },
  {
   "media": "this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_camera"
  },
  {
   "media": "this.panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_camera"
  },
  {
   "media": "this.panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_camera"
  },
  {
   "media": "this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_camera"
  },
  {
   "media": "this.panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_camera"
  },
  {
   "media": "this.panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_camera"
  },
  {
   "media": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_camera"
  },
  {
   "media": "this.panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_camera"
  },
  {
   "media": "this.panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_camera"
  },
  {
   "media": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_camera"
  },
  {
   "media": "this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_camera"
  },
  {
   "media": "this.panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_camera"
  },
  {
   "media": "this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_camera"
  },
  {
   "media": "this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_camera"
  },
  {
   "media": "this.panorama_984C0817_93C2_24A3_41DD_097411309BF0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984C0817_93C2_24A3_41DD_097411309BF0_camera"
  },
  {
   "media": "this.panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_camera"
  },
  {
   "media": "this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_camera"
  },
  {
   "media": "this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 104.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B884F09_94FE_F70D_41C3_771F10DB4B61",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9ADEDA8B_94FE_F90C_41E2_06F9643AF4B6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9ADEDA8B_94FE_F90C_41E2_06F9643AF4B6, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_9ADEDA8B_94FE_F90C_41E2_06F9643AF4B6",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 107.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84071096_94FE_0907_41E0_956B89313CB4",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BD6528D_94FE_0905_419D_8826BA362415",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BDEDB64_94FE_FF3B_41DE_21DCD8B0A676",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_990B60F0_94FE_091C_41C4_8F27ED402C9B",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -80.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A62F20D_94FE_0904_41D3_49448FE7E711",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_100709_00_merged",
 "id": "panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D709926F_9437_8A1C_41BE_EEF6A068F964",
  "this.overlay_D7DB7E61_9437_BA07_41A6_1E5389CE5138"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 76.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8",
   "backwardYaw": -131.6,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26"
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 58.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B6F1F2C_94FE_F70B_41D7_CA10189A161B",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 39.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8417D085_94FE_0905_41BD_2737A35305FC",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84ADE007_94FE_0905_41D9_6B296CA09703",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 95.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_849EECED_94FE_F904_41C8_3808554CDDB1",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 54.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9B93FBD5_94FE_FF05_41D0_81566A66B133",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_095105_00_merged",
 "id": "panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_83FA8A86_9469_9A0C_41DE_BA7354127985",
  "this.overlay_8C0D6BBB_9469_9A7B_41CD_9FB53ED9F896",
  "this.overlay_8C7158ED_9469_861F_41D3_ADE65FB1CB99",
  "this.overlay_8D051C49_9468_9E07_41C9_52CF2C438499"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -86.73,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734",
   "backwardYaw": 97.48,
   "distance": 1
  },
  {
   "yaw": -75.82,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": 102.3,
   "distance": 1
  },
  {
   "yaw": -7.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697",
   "backwardYaw": -174.47,
   "distance": 1
  },
  {
   "yaw": -84.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2",
   "backwardYaw": 108.42,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 81.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A079EAC_94FE_F90B_41A5_CA3F091ED1A9",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A221E9A_94FE_F90C_41D6_3398D5452C11",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 64.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A44AAF3_94FE_F91C_41B3_A1892A3F84E4",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -80.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9A440E78_94FE_F90B_41C1_FDB40AEA7792",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_101223_00_merged",
 "id": "panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D323E501_9429_8E07_41DA_3197CEC814E6",
  "this.overlay_DCBBCDB1_9428_9E07_41D1_A9F7968D9236",
  "this.overlay_DD60DBA9_9428_9A07_41B1_16BDE3DE3B16",
  "this.overlay_DD29B1BF_9428_867B_41C2_F1EE6CA75A40"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 11.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1",
   "backwardYaw": -4.82,
   "distance": 1
  },
  {
   "yaw": -68.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC",
   "backwardYaw": 19.78,
   "distance": 1
  },
  {
   "yaw": 131.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4",
   "backwardYaw": -20.95,
   "distance": 1
  },
  {
   "yaw": -159.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB",
   "backwardYaw": -144.53,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -101.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84367069_94FE_090D_41DB_289CE3D59BAF",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_102627_00_merged",
 "id": "panorama_98AB52F7_93C3_E563_41DE_06760A2746A1",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_C668D325_94D9_8A0C_41CC_67A51C7C50EC",
  "this.overlay_C6DFDBFD_94D9_99FF_4150_AF334542F0EC",
  "this.overlay_C6FE5D32_94D9_BE05_41E2_558DBB3360AF"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -72.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F",
   "backwardYaw": -6.69,
   "distance": 1
  },
  {
   "yaw": 67.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC",
   "backwardYaw": -23.2,
   "distance": 1
  },
  {
   "yaw": -4.82,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61",
   "backwardYaw": 11.61,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -113.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8450E053_94FE_091D_41B6_BC7466D4D5A7",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_990440F8_94FE_090B_41B3_F0C6D90AECE4",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 41.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9ADB3171_94FE_0B1D_41D2_8538F65076C2",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "IMG_20240708_101825_00_merged",
 "id": "panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_D9D273E3_94D7_8A0B_4177_2A0E0C9B739D",
  "this.overlay_DA50D8F4_94D7_860C_41D3_5B5ACDF1C8F6",
  "this.overlay_DA656B53_94D7_9A0B_41D0_169F49A813F2"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -177.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB",
   "backwardYaw": -115.18,
   "distance": 1
  },
  {
   "yaw": 145.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392",
   "backwardYaw": -61.18,
   "distance": 1
  },
  {
   "yaw": -82.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F",
   "backwardYaw": -169.32,
   "distance": 1
  }
 ],
 "hfov": 360,
 "hfovMin": "150%",
 "partial": false
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 20.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BC5A28D_94FE_0905_41D0_6486CE4791CE",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -127.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8446705B_94FE_090C_41C0_81AB82A63606",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -105.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_9BFB9EAC_94FE_F90B_41D6_075EFD6FB9D3",
 "automaticZoomSpeed": 10
},
{
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 },
 "horizontalAlign": "center",
 "height": 58,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "toolTipPaddingTop": 7,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 55,
 "toolTipBorderRadius": 3,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "toolTipShadowOpacity": 0,
 "toolTipShadowSpread": 0,
 "toolTipDisplayTime": 600,
 "progressHeight": 6,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 10,
 "paddingRight": 0,
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#000000",
 "progressLeft": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontSize": 13,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeight": 10,
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "minHeight": 50,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "minWidth": 100,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "top": 0,
 "toolTipFontWeight": "normal",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 7,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Georgia",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 5,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "playbackBarBorderRadius": 0,
 "toolTipFontColor": "#FFFFFF",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "height": 641,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "0%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": true,
 "data": {
  "name": "--SETTINGS"
 },
 "horizontalAlign": "left",
 "layout": "absolute",
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "contentOpaque": false,
 "minHeight": 1,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": 0,
 "height": 118,
 "backgroundOpacity": 0.64,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": true,
 "data": {
  "name": "--MENU"
 },
 "horizontalAlign": "left",
 "layout": "absolute",
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "minHeight": 1,
 "layout": "absolute",
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "propagateClick": true,
 "data": {
  "name": "--INFO photo"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "minHeight": 1,
 "layout": "absolute",
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "propagateClick": true,
 "data": {
  "name": "--INFO photoalbum"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "minHeight": 1,
 "layout": "absolute",
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "propagateClick": true,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "minHeight": 1,
 "layout": "absolute",
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "propagateClick": true,
 "data": {
  "name": "--LOCATION"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "minHeight": 1,
 "layout": "absolute",
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "propagateClick": true,
 "data": {
  "name": "--FLOORPLAN"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "minHeight": 1,
 "layout": "absolute",
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "minHeight": 1,
 "layout": "absolute",
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "minHeight": 1,
 "layout": "absolute",
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 0.6,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "propagateClick": true,
 "data": {
  "name": "--REALTOR"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "height": "7.606%",
 "id": "Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE",
 "left": "0%",
 "width": "5.398%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "url": "skin/Image_B44E6FBD_BAA2_0E15_41E1_F18F1E555CBE.png",
 "class": "Image",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "click": "this.openLink('http://NicholasC.JohnLScott.com', '_blank')",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 1258,
 "data": {
  "name": "Image4523"
 },
 "horizontalAlign": "center",
 "visible": false,
 "maxHeight": 953,
 "scaleMode": "fit_inside",
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "horizontalAlign": "center",
 "height": 58,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -35.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.6,
   "hfov": 5.63
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE94A81_94FE_F9FD_41D8_FDE2679D8096",
   "yaw": -35.11,
   "pitch": -23.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.63
  }
 ],
 "id": "overlay_D7E3A8E1_9428_8607_41E1_5F5932834548",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -93.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.78,
   "hfov": 5.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E, this.camera_9B9B2EF9_94FE_F90D_41AC_F1C1322EEDAC); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9903CA76_94FE_F907_41C2_804A2BEC0233",
   "yaw": -93.15,
   "pitch": -30.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.45
  }
 ],
 "id": "overlay_B31D4489_9469_8E04_41DF_85B6464D924A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -128.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.79,
   "hfov": 5.74
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC, this.camera_9B525F58_94FE_F70B_41D0_580AFC19E4A4); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99025A76_94FE_F907_41E0_722C57F15463",
   "yaw": -128.45,
   "pitch": -28.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.74
  }
 ],
 "id": "overlay_B3433D5E_9469_9E3D_41B0_578D4E4FE8E2",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -103.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.33,
   "hfov": 5.58
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531, this.camera_9B5D6F43_94FE_F77D_41CC_662B3256E2C2); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9902FA76_94FE_F907_41C8_279365668BEC",
   "yaw": -103.39,
   "pitch": -14.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.58
  }
 ],
 "id": "overlay_B3A68B55_9469_7A0F_41C1_4853B4A5BA8A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -167.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.62,
   "hfov": 5.41
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012, this.camera_9BA52EF4_94FE_F91B_41DB_74A0F1A56E22); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99029A76_94FE_F907_41C6_36EEF6EBF33F",
   "yaw": -167.81,
   "pitch": -31.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.41
  }
 ],
 "id": "overlay_B398F714_9468_8A0D_41CA_BEF71604B741",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -20.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.06,
   "hfov": 10.54
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61, this.camera_9B7E7F20_94FE_F73B_41E1_215E7DAFB371); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F41C3B29_94DB_7A07_41E2_128EBE50287D",
   "yaw": -20.95,
   "pitch": -14.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 10.54
  }
 ],
 "id": "overlay_B3E83155_9468_860F_41DE_BAC09511B87A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 73.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.28,
   "hfov": 4.72
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE, this.camera_9B6F1F2C_94FE_F70B_41D7_CA10189A161B); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFDDA76_94FE_F907_41C2_37A0A8D5F560",
   "yaw": 73.68,
   "pitch": -28.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.72
  }
 ],
 "id": "overlay_BC7BD069_9468_8604_41DE_22ACFEAFD109",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 78.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.86,
   "hfov": 5.58
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435, this.camera_9BC79EDA_94FE_F90F_418F_4A5795484216); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFC5A76_94FE_F907_41D4_96CD9958FB66",
   "yaw": 78.99,
   "pitch": -13.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.58
  }
 ],
 "id": "overlay_BCF75D9D_9468_9E3F_41E1_2998739739A0",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 122.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.11,
   "hfov": 5.84
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734, this.camera_9BB42EE9_94FE_F90C_41C6_19DD7C3335FB); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFC1A76_94FE_F907_41E2_39B6436A3AB9",
   "yaw": 122.66,
   "pitch": -23.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.84
  }
 ],
 "id": "overlay_BD63FAB6_9468_FA0D_41D8_24A4C20CBB76",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 108,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_8_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.48,
   "hfov": 6
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2, this.camera_9BD3DECA_94FE_F90F_41C5_5023745F5418); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFCBA76_94FE_F907_41B4_8244A68098AC",
   "yaw": 108,
   "pitch": -12.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6
  }
 ],
 "id": "overlay_BE25E825_9468_860F_41D2_560A947E5843",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 102.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_9_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.09,
   "hfov": 4.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61, this.camera_9B884F09_94FE_F70D_41C3_771F10DB4B61); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFF6A76_94FE_F907_41DD_2364D7E319A7",
   "yaw": 102.3,
   "pitch": -6.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.16
  }
 ],
 "id": "overlay_BEEFB6C4_9468_8A0D_41BE_8D054DBB89EC",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rotationX": 31.29,
 "autoplay": true,
 "id": "overlay_C9589E20_94F8_BA05_41D7_A2B5ED3B423E",
 "roll": 2.65,
 "loop": true,
 "vfov": 4.15,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_C9589E20_94F8_BA05_41D7_A2B5ED3B423E_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -6.53,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 1.73,
 "yaw": 71.34,
 "class": "VideoPanoramaOverlay",
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 4.77,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -81.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.04,
   "hfov": 5.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF, this.camera_9AE63162_94FE_0B3F_41B5_BD00A29E670D); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF31A7D_94FE_F905_41E2_79AF6808EC63",
   "yaw": -81.75,
   "pitch": -45.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.59
  }
 ],
 "id": "overlay_A81D9C9B_9438_9E3B_41DC_3DEDEC0A2E8A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 111.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.32,
   "hfov": 7.14
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB, this.camera_9AF70133_94FE_0B1D_41E1_A4BB142E2E00); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF3BA7D_94FE_F905_41D8_25FCD5468E1E",
   "yaw": 111.45,
   "pitch": -28.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.14
  }
 ],
 "id": "overlay_A8DD8A8E_9438_BA1D_4190_3BBF172CD8D1",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 7.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.62,
   "hfov": 6.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8, this.camera_9AED2142_94FE_0B7C_41E2_7D576AFDB600); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF24A7F_94FE_F905_41A1_D26D1CB9D977",
   "yaw": 7.77,
   "pitch": -40.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.31
  }
 ],
 "id": "overlay_A8F858DC_9438_863D_41C9_7E15BB11F6BD",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -166.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.37,
   "hfov": 5.82
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012, this.camera_9AE8B152_94FE_0B1F_41D2_45D736FBA96F); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF2DA7F_94FE_F905_41E0_13D1FACD9C99",
   "yaw": -166.44,
   "pitch": -37.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.82
  }
 ],
 "id": "overlay_A94CADD7_9439_9E0B_41AB_19CEE43B4E63",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 5.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.39,
   "hfov": 6.3
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AED6A7F_94FE_F905_41C3_90B91F8DE215",
   "yaw": 5.8,
   "pitch": -6.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.3
  }
 ],
 "id": "overlay_DCAC2D3C_9439_9E7D_41DA_227F6D598090",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -31.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.12,
   "hfov": 6.63
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734, this.camera_9A118E9B_94FE_F90C_41C8_2510A1AC7488); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99118A6A_94FE_F90F_419C_8CCB5B7C86A6",
   "yaw": -31.85,
   "pitch": -33.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.63
  }
 ],
 "id": "overlay_86B56F91_9458_9A04_41DC_7E67097DD679",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -36.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.32,
   "hfov": 7.03
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE, this.camera_9BE9DEC4_94FE_F97B_41D1_DE6A8A0B58E1); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99102A6B_94FE_F90D_41E1_3B59A3FFAEEE",
   "yaw": -36.87,
   "pitch": -16.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.03
  }
 ],
 "id": "overlay_872CF82B_9458_8604_41C4_55874549E756",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 56.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.38,
   "hfov": 5.73
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80, this.camera_9A079EAC_94FE_F90B_41A5_CA3F091ED1A9); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9910DA6B_94FE_F90D_4199_78289818B744",
   "yaw": 56.48,
   "pitch": -25.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.73
  }
 ],
 "id": "overlay_876D2570_9458_8E05_41CC_224FC66B3A50",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 58.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.52,
   "hfov": 6.83
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023, this.camera_9BFB9EAC_94FE_F90B_41D6_075EFD6FB9D3); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99109A6B_94FE_F90D_41E1_2BFF9D0671E2",
   "yaw": 58.25,
   "pitch": -10.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.83
  }
 ],
 "id": "overlay_87D76531_9458_8E07_41D8_2072AFAA1357",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -59.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.23,
   "hfov": 5.73
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99131A6B_94FE_F90D_41BE_30D710DF1FA8",
   "yaw": -59.1,
   "pitch": -15.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.73
  }
 ],
 "id": "overlay_8054CB20_9458_9A05_41B5_CC5DB0235DE2",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -4.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.98,
   "hfov": 6.36
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9913DA6B_94FE_F90D_41DD_C2D63DF1EE93",
   "yaw": -4.01,
   "pitch": -12.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.36
  }
 ],
 "id": "overlay_80D1FD56_945B_7E0D_41DD_AB29BE829CF7",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 17.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.46,
   "hfov": 6.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2, this.camera_9BDD9ECA_94FE_F90F_41E0_0063C4199235); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99127A6B_94FE_F90D_41E0_2872FE7F2BAC",
   "yaw": 17.43,
   "pitch": -20.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.31
  }
 ],
 "id": "overlay_815ECC18_945B_9E05_41D6_D57CADC63843",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -150.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.39,
   "hfov": 4.98
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80, this.camera_9A569E6B_94FE_F90C_41DC_F737170CBD96); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990DDA6C_94FE_F90B_41D7_7FED279CD2CC",
   "yaw": -150.21,
   "pitch": -42.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.98
  }
 ],
 "id": "overlay_81A3764C_9468_8A1D_4192_79076BC28D3E",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -107.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.52,
   "hfov": 5.68
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE, this.camera_9A38CE83_94FE_F9FD_41B4_C73FFFC63FC6); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99120A6C_94FE_F90B_41E0_D4EB2BB72CFE",
   "yaw": -107.39,
   "pitch": -22.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.68
  }
 ],
 "id": "overlay_81C45502_9469_8E05_41A7_C49F6955DA14",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -63.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.13,
   "hfov": 5.64
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734, this.camera_9A69BE59_94FE_F90D_41C2_07AECE8A91DB); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9912CA6C_94FE_F90B_41E0_E5073F1E732E",
   "yaw": -63.43,
   "pitch": -27.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.64
  }
 ],
 "id": "overlay_820B6734_9469_8A0D_41E2_3FC951A8E340",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -24.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.87,
   "hfov": 5.47
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE, this.camera_9A2E4E8D_94FE_F905_41E1_7CE5D85C1B92); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990D5A6C_94FE_F90B_41A7_7B4CA71ECCF0",
   "yaw": -24.86,
   "pitch": -17.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.47
  }
 ],
 "id": "overlay_825572FD_9469_8BFF_41D1_B51526430736",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -52.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.85,
   "hfov": 5.42
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_9A221E9A_94FE_F90C_41D6_3398D5452C11); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990D2A6C_94FE_F90B_41CC_B5C1081BF2E3",
   "yaw": -52.8,
   "pitch": -12.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.42
  }
 ],
 "id": "overlay_82F6CFB9_9469_9A07_41C9_69F9E0EDB764",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 24.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.36,
   "hfov": 7.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435, this.camera_9A745E50_94FE_F91B_41D5_259F7F228852); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990DBA6C_94FE_F90B_41D6_8ACC66C79B76",
   "yaw": 24.41,
   "pitch": -23.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.08
  }
 ],
 "id": "overlay_83602CD9_9469_FE07_41B8_B0761160A5BE",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 108.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.98,
   "hfov": 5.94
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61, this.camera_9A626E63_94FE_F93D_41D6_019B3331CF52); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990C7A6C_94FE_F90B_41DC_BD03E771E83A",
   "yaw": 108.42,
   "pitch": -42.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.94
  }
 ],
 "id": "overlay_8171B8DD_9469_863F_41B2_6661BFFAD6CF",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 162.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.96,
   "hfov": 5.98
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023, this.camera_9A440E78_94FE_F90B_41C1_FDB40AEA7792); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990CFA6D_94FE_F904_41E1_B5C7BFD61141",
   "yaw": 162.81,
   "pitch": -23.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.98
  }
 ],
 "id": "overlay_81D85AB6_9469_BA0D_418A_D470B88BFC86",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rotationX": 14.08,
 "autoplay": false,
 "id": "overlay_CF9A13B9_94F9_8A07_41E1_332949E98C1C",
 "roll": -9.34,
 "loop": false,
 "vfov": 6.01,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CF9A13B9_94F9_8A07_41E1_332949E98C1C_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -11.47,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "data": {
  "label": "Video"
 },
 "rotationY": -34.48,
 "yaw": 33.63,
 "class": "VideoPanoramaOverlay",
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "click": "this.overlay_CF9A13B9_94F9_8A07_41E1_332949E98C1C.play()",
 "hfov": 9.66
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -168.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.5,
   "hfov": 4.49
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF, this.camera_9B9D4BC2_94FE_FF7F_4184_82D4F438BFA9); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AED9A80_94FE_F9FB_41E0_EDD58B055342",
   "yaw": -168.6,
   "pitch": -29.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.49
  }
 ],
 "id": "overlay_ABB765CA_9438_8E05_41B6_7C4E1FF46B96",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -144.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.73,
   "hfov": 6.63
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61, this.camera_9BC5A28D_94FE_0905_41D0_6486CE4791CE); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEB9A83_94FE_F9FD_41D1_98576FF70F92",
   "yaw": -144.53,
   "pitch": -21.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.63
  }
 ],
 "id": "overlay_D28B196A_9428_8604_41C0_C2782B01A3B5",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 4.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.02,
   "hfov": 6.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89, this.camera_9BD6528D_94FE_0905_419D_8826BA362415); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE8BA83_94FE_F903_41E0_0A0DD5B34D64",
   "yaw": 4.53,
   "pitch": -5.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.31
  }
 ],
 "id": "overlay_D37472A1_9428_8A07_41D1_495A63B421A3",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 19.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 19.28,
   "hfov": 7.47
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61, this.camera_9A189B20_94FE_FF3B_41D2_61914AFFA4F5); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADDEA8A_94FE_F90C_41D9_FDC43EBF8C80",
   "yaw": 19.78,
   "pitch": 19.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.47
  }
 ],
 "id": "overlay_C7F5A30A_94DF_8A04_41D1_EDEB8E2510B8",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -23.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.55,
   "hfov": 6.32
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1, this.camera_9A089B2A_94FE_FF0C_41C3_774A030348D6); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADC7A8B_94FE_F90C_41D3_D91A80C09BDA",
   "yaw": -23.2,
   "pitch": -5.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.32
  }
 ],
 "id": "overlay_C01BA548_94DF_8E05_41CE_51C6640FD887",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -4.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.79,
   "hfov": 7.28
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F, this.camera_9BF94B3A_94FE_FF0F_41B2_E352B1CBECFE); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADC1A8B_94FE_F90C_41E2_33F84B0DDF95",
   "yaw": -4.72,
   "pitch": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.28
  }
 ],
 "id": "overlay_C0253D2A_94DF_BE04_41A5_2801E29BA307",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 51.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.24,
   "hfov": 5.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADC9A8B_94FE_F90C_41D4_CCFB3F06AED0",
   "yaw": 51.35,
   "pitch": 16.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.9
  }
 ],
 "id": "overlay_C31F11B7_94D8_860C_41A2_AF747086354E",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 109.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.72,
   "hfov": 5.94
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012, this.camera_84BC4003_94FE_08FD_41C6_C9182DC70D5A); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF55A78_94FE_F90B_41D8_2C794A624BDB",
   "yaw": 109.78,
   "pitch": -45.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.94
  }
 ],
 "id": "overlay_A7EA9C25_9457_9E0C_419A_82A21D20B611",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 70.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.4,
   "hfov": 5.87
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_8492A019_94FE_090D_41DB_E3D9EE08B706); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF5FA78_94FE_F90B_41AB_76968C3E874A",
   "yaw": 70.13,
   "pitch": -22.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.87
  }
 ],
 "id": "overlay_A024B23E_9457_8A7D_41D5_34165F90612B",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 99.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.74,
   "hfov": 5.53
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734, this.camera_84CF3FF9_94FE_F70D_41B5_C5A734485F24); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF5BA78_94FE_F90B_41A6_929BB0AE1755",
   "yaw": 99.35,
   "pitch": -15.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.53
  }
 ],
 "id": "overlay_A00EECF7_9457_9E0B_41D5_73CC0B8D7A65",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 98.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.63,
   "hfov": 6.06
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF44A78_94FE_F90B_4199_C97FFA13F757",
   "yaw": 98.75,
   "pitch": -9.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.06
  }
 ],
 "id": "overlay_A071D789_9457_8A07_41B0_0432892BA614",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 78.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.94,
   "hfov": 5.49
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF40A78_94FE_F90B_41DB_6AD6C0996FD4",
   "yaw": 78.5,
   "pitch": -8.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.49
  }
 ],
 "id": "overlay_A0515225_9457_8A0C_41B2_364E155587D5",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 72.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.06,
   "hfov": 6.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE, this.camera_849DF017_94FE_0904_41D3_E799A59921E6); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF4AA7B_94FE_F90C_41D6_D754CEA472A8",
   "yaw": 72.89,
   "pitch": -14.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.16
  }
 ],
 "id": "overlay_A0ACFD47_9457_9E0C_41DC_C17A8FB035BB",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 125.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.11,
   "hfov": 6.41
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78, this.camera_84835030_94FE_091B_41DD_FF9992B35D8F); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF73A7B_94FE_F90C_41D9_5A340164A26C",
   "yaw": 125.02,
   "pitch": -11.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.41
  }
 ],
 "id": "overlay_A0A482AF_9428_8A1B_41B5_88AE7C201CD7",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -52.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.5,
   "hfov": 5.34
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531, this.camera_8473503A_94FE_090F_41C6_F6225DB42460); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF7EA7B_94FE_F90C_41D8_10B59BA2E34E",
   "yaw": -52.03,
   "pitch": -41.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.34
  }
 ],
 "id": "overlay_A11B3170_9428_8605_41D0_92DA9BC31CB2",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 5.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_8_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.39,
   "hfov": 6.85
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E, this.camera_84ADE007_94FE_0905_41D9_6B296CA09703); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF67A7B_94FE_F90C_41E1_A148A9721122",
   "yaw": 5.52,
   "pitch": -24.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.85
  }
 ],
 "id": "overlay_A203E4A1_9428_8E04_41CA_8D5AD3A02AAA",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -4.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_9_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.67,
   "hfov": 8.48
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF63A7B_94FE_F90C_41C1_C58AF6D003D0",
   "yaw": -4.72,
   "pitch": -4.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.48
  }
 ],
 "id": "overlay_A79FA1A7_9428_860B_41E0_2566AA6BFF9D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rotationX": 17.7,
 "autoplay": true,
 "id": "overlay_C85CA03F_94F7_867B_41C7_5A0FA5752E90",
 "roll": 0.28,
 "loop": true,
 "vfov": 2.29,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_C85CA03F_94F7_867B_41C7_5A0FA5752E90_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -4.19,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 14.23,
 "yaw": 76.28,
 "class": "VideoPanoramaOverlay",
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 3.66,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 3.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.42,
   "hfov": 7.03
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE, this.camera_9A21124D_94FE_0905_41BF_2AF18B4917FF); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9901DA73_94FE_F91D_41C7_6A798EE83555",
   "yaw": 3.84,
   "pitch": -27.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.03
  }
 ],
 "id": "overlay_B6D84937_947B_860B_41C1_330CB58EC5DD",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 52.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.19,
   "hfov": 7.52
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435, this.camera_9A68D20D_94FE_0904_41E0_26EE46E3405E); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99018A73_94FE_F91D_41C0_9886B90C9037",
   "yaw": 52.53,
   "pitch": -18.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.52
  }
 ],
 "id": "overlay_B772FE08_947B_BA05_41CD_B550B4566B70",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 97.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.26,
   "hfov": 7.29
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61, this.camera_9A4B6232_94FE_091F_41B6_D4A15F12A391); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99001A73_94FE_F91D_41E1_0C895CB74D08",
   "yaw": 97.48,
   "pitch": -14.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.29
  }
 ],
 "id": "overlay_B75947A5_947B_8A0F_41C9_359BCB62B61A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 97.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.36,
   "hfov": 7.28
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2, this.camera_9A0A726A_94FE_090F_41E1_B594109CCBC4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9900CA73_94FE_F91D_41D9_DD1A455D6F3E",
   "yaw": 97.78,
   "pitch": -26.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.28
  }
 ],
 "id": "overlay_B7BAB37F_947B_8AFC_41B9_7898CEC2CE25",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -41.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.4,
   "hfov": 6.01
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_9A17925E_94FE_0907_41B3_CB96377316B0); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99037A73_94FE_F91D_41D9_FE3CBEC136C7",
   "yaw": -41.99,
   "pitch": -23.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.01
  }
 ],
 "id": "overlay_B7E83FB4_947B_7A0D_41C3_2BA6EF8D2707",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -175.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.16,
   "hfov": 6.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE, this.camera_9A2DD24D_94FE_0905_41C3_8EA339D4D13E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99032A73_94FE_F91D_41C5_4D2E812DB140",
   "yaw": -175.86,
   "pitch": -37.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.31
  }
 ],
 "id": "overlay_B039DADD_9478_9A3F_41E1_A622EAFCC792",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -27.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.91,
   "hfov": 6.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9903CA73_94FE_F91D_41E0_470A4A1746A0",
   "yaw": -27.93,
   "pitch": -4.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.9
  }
 ],
 "id": "overlay_B0D55FD4_9478_BA0D_41A3_64D16E444C09",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 124.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.73,
   "hfov": 6.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80, this.camera_9A3F323F_94FE_0905_41C1_8FC945714CCD); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9900FA75_94FE_F905_41BD_3C101A5B56DF",
   "yaw": 124.73,
   "pitch": -21.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.08
  }
 ],
 "id": "overlay_B2249BDF_9478_FA3C_41D1_2BED1FF314F6",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -58.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_8_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.59,
   "hfov": 7.73
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E, this.camera_9A56B21D_94FE_0905_41E1_4285EEC403AD); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9900AA75_94FE_F905_41D5_15777E2E8714",
   "yaw": -58.42,
   "pitch": -12.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.73
  }
 ],
 "id": "overlay_B35B87B6_9478_8A0D_41E0_261AC539930E",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -75.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_9_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.36,
   "hfov": 6.91
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC, this.camera_9A62F20D_94FE_0904_41D3_49448FE7E711); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99034A75_94FE_F905_41A4_54248443838E",
   "yaw": -75.63,
   "pitch": -14.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.91
  }
 ],
 "id": "overlay_BC1DA4EC_9478_8E1D_41DF_9CBC3D65725C",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rotationX": 4.5,
 "autoplay": true,
 "id": "overlay_C805EE80_94FB_9A05_419D_709AFBB26F20",
 "roll": -0.75,
 "loop": true,
 "vfov": 4.71,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_C805EE80_94FB_9A05_419D_709AFBB26F20_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -8.14,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 8.06,
 "yaw": 53.31,
 "class": "VideoPanoramaOverlay",
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 7.39,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -107.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.08,
   "hfov": 6.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984C0817_93C2_24A3_41DD_097411309BF0, this.camera_8417D085_94FE_0905_41BD_2737A35305FC); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE1DA88_94FE_F90B_41DE_B6C036C5ABA4",
   "yaw": -107.31,
   "pitch": -5.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.31
  }
 ],
 "id": "overlay_DAB87D80_94D9_BE05_41BA_78977140D576",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -169.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.46,
   "hfov": 5.95
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86, this.camera_990B60F0_94FE_091C_41C4_8F27ED402C9B); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE04A88_94FE_F90B_41C2_691CCFCA4C2A",
   "yaw": -169.32,
   "pitch": 2.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.95
  }
 ],
 "id": "overlay_DB793BA3_94D9_FA04_41E2_5DBD3C918CB7",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -52.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.74,
   "hfov": 8.18
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE0DA88_94FE_F90B_419D_E077934C9D38",
   "yaw": -52.12,
   "pitch": 9.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.18
  }
 ],
 "id": "overlay_DB6D3707_94D9_8A0B_41E2_00AA43A3BC58",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -6.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.79,
   "hfov": 7.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1, this.camera_84071096_94FE_0907_41E0_956B89313CB4); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE36A89_94FE_F90D_41BB_ED380B2412C8",
   "yaw": -6.69,
   "pitch": -17.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.16
  }
 ],
 "id": "overlay_DB17A2AC_94D9_8A1D_41DE_A078EAD64D30",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -17.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.35,
   "hfov": 6.48
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC, this.camera_85F4F0A3_94FE_093D_41B6_EE0FA04803E8); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE3CA89_94FE_F90D_41E1_5BD1C9E78FF9",
   "yaw": -17.5,
   "pitch": -8.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.48
  }
 ],
 "id": "overlay_DB326CE7_94D9_BE0B_41E0_852E762B9E72",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -0.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.59,
   "hfov": 6.84
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF, this.camera_84D84CB1_94FE_F91D_41CE_1832FFA230DC); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AED0A7F_94FE_F905_41D2_D560FFCE6F06",
   "yaw": -0.39,
   "pitch": -24.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.84
  }
 ],
 "id": "overlay_ABAAA577_9439_8E0B_41DE_E52AD73AA96A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -86.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.15,
   "hfov": 6.35
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A, this.camera_9B15CC87_94FE_F905_41CD_B2AC219406FE); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE89A82_94FE_F9FF_41B2_98295CEC14F0",
   "yaw": -86.85,
   "pitch": -14.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.35
  }
 ],
 "id": "overlay_D2F6B9B8_942B_8605_41BC_AC411DF7FA71",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 170.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.1,
   "hfov": 8.68
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB, this.camera_9B05BC90_94FE_F91B_41D1_CDA189921B48); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEB2A83_94FE_F9FD_41E2_0C96CD4A2B91",
   "yaw": 170.96,
   "pitch": -5.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.68
  }
 ],
 "id": "overlay_D351E5E5_942B_8E0C_41D7_455F0C17CA61",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -175.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.17,
   "hfov": 6.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77, this.camera_84EB9C9F_94FE_F904_41D9_44A66DD724F9); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99092A6D_94FE_F904_41C6_41807E5F57C7",
   "yaw": -175.86,
   "pitch": -37.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.31
  }
 ],
 "id": "overlay_8E2D24E7_9468_8E0B_41C0_96CA05E6CB93",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -128.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.77,
   "hfov": 5.98
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9909CA6D_94FE_F904_416F_38D10461A983",
   "yaw": -128.75,
   "pitch": -19.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.98
  }
 ],
 "id": "overlay_8EA930E4_9468_860D_41D6_CB0675412119",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -84.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.69,
   "hfov": 5.4
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697, this.camera_84FA7C90_94FE_F91B_41D0_6E978E04775F); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99098A6D_94FE_F904_41E2_04C441DB1EBB",
   "yaw": -84.98,
   "pitch": -36.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.4
  }
 ],
 "id": "overlay_8EE58F0D_9468_9A1C_41B2_AD7DFFB3BB13",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 34.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.8,
   "hfov": 4.13
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012, this.camera_9BEC427D_94FE_0905_41C4_5FEFB042746C); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF26A7D_94FE_F905_41BF_B6ACE0B0F264",
   "yaw": 34.51,
   "pitch": -47.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.13
  }
 ],
 "id": "overlay_AFD479F1_943B_8604_41DC_E2A9F35669D7",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 52.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.16,
   "hfov": 5.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC, this.camera_9BE39282_94FE_09FF_41C7_E45BA6237B99); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF2DA7D_94FE_F905_41D8_F09EFE671D09",
   "yaw": 52.62,
   "pitch": -20.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.22
  }
 ],
 "id": "overlay_AFA423F6_943B_8A0D_41BE_A936B70E42AA",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 2.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.47,
   "hfov": 5.17
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3, this.camera_99310D6E_94FE_FB07_41D0_D53924BEA555); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990B1A71_94FE_F91D_41A5_2990758803B4",
   "yaw": 2.85,
   "pitch": -43.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.17
  }
 ],
 "id": "overlay_8862F92C_9477_861D_41C6_D2BFAF4A4ACA",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -176.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.58,
   "hfov": 6.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77, this.camera_992C5D83_94FE_FBFD_41D0_FA27ED63D67E); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990BCA71_94FE_F91D_41E1_41A102060AD2",
   "yaw": -176.35,
   "pitch": -36.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.05
  }
 ],
 "id": "overlay_88B93508_9477_8E04_41D2_7A68DD6F12BE",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -177.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.36,
   "hfov": 6.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990A6A71_94FE_F91D_41DE_9550575AD267",
   "yaw": -177.76,
   "pitch": -12.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.97
  }
 ],
 "id": "overlay_88EF5A5C_9477_BA3D_41E1_52FE39D0C2F2",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -138.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.26,
   "hfov": 7.65
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8, this.camera_990440F8_94FE_090B_41B3_F0C6D90AECE4); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE9DA81_94FE_F9FC_41CC_A613AEA0B184",
   "yaw": -138.78,
   "pitch": -8.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.65
  }
 ],
 "id": "overlay_D78CC059_9429_8607_41D4_B186D706FD4E",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -50.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.75,
   "hfov": 6.47
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB, this.camera_99026104_94FE_08FB_41E0_CA9D1DDA3A57); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE98A82_94FE_F9FF_41D3_B4BFF5FDC5A6",
   "yaw": -50.85,
   "pitch": -8.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.47
  }
 ],
 "id": "overlay_D07565F9_9429_8E07_41D7_BF7A484CA193",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 107.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.5,
   "hfov": 7.5
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89, this.camera_9AF86123_94FE_0B3D_419C_561FF23E54F5); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE8FA82_94FE_F9FF_41D7_E4F7143AE868",
   "yaw": 107.31,
   "pitch": -5.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.5
  }
 ],
 "id": "overlay_D0038772_9429_8A05_41CB_8F5E704AE38C",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -108.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.93,
   "hfov": 4.94
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531, this.camera_9BAD6BAC_94FE_FF04_41D7_2A38B6BD8B23); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFFEA76_94FE_F907_41DF_83B775A4B123",
   "yaw": -108.78,
   "pitch": -33.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.94
  }
 ],
 "id": "overlay_BECFBF3B_945B_9A7B_41D0_81F9D2E30B9B",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -165.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.07,
   "hfov": 6.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC, this.camera_9BDEDB64_94FE_FF3B_41DE_21DCD8B0A676); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFF9A78_94FE_F90B_41C5_8C40DD6132C0",
   "yaw": -165.74,
   "pitch": -30.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.16
  }
 ],
 "id": "overlay_BF72ACD5_945B_9E0F_41DF_BE167A2EA476",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 103.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.2,
   "hfov": 6.5
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_9BBC8B94_94FE_FF1B_41E1_8BFAA8B19367); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFE2A78_94FE_F90B_41C0_BED1C8B551EB",
   "yaw": 103.18,
   "pitch": -24.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.5
  }
 ],
 "id": "overlay_BF57ADB0_945B_FE05_41D8_308B35650656",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 100.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.97,
   "hfov": 4.37
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE, this.camera_9BCF2B77_94FE_FF05_41E2_42F4E0CCD421); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFEEA78_94FE_F90B_41D4_2CAAEEEB616F",
   "yaw": 100.53,
   "pitch": -16.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.37
  }
 ],
 "id": "overlay_BFA67F0C_945B_9A1D_41E0_56AAAA343E68",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 102.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.04,
   "hfov": 4.51
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF96A78_94FE_F90B_41E0_F4991065ACE9",
   "yaw": 102.3,
   "pitch": -9.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.51
  }
 ],
 "id": "overlay_B83BD397_945B_8A0B_41DB_6201037378A3",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 127.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.86,
   "hfov": 6.35
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734, this.camera_9BE95B43_94FE_FF7D_41AE_4CCA50D348E1); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF9FA78_94FE_F90B_41A8_E670C4405D6B",
   "yaw": 127.56,
   "pitch": -13.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.35
  }
 ],
 "id": "overlay_B876AEA1_945B_9A04_41C1_9BCF26C7BA24",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 119.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.1,
   "hfov": 4.88
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF9AA78_94FE_F90B_41C6_09E12ED6D61A",
   "yaw": 119.12,
   "pitch": -10.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.88
  }
 ],
 "id": "overlay_B8DBAFB5_945B_7A0C_41C3_113AA3392D5B",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 163.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.54,
   "hfov": 4.34
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF85A78_94FE_F90B_41D5_B41AC262569C",
   "yaw": 163.53,
   "pitch": -24.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.34
  }
 ],
 "id": "overlay_B969FACF_9458_9A1B_419A_98C990C291F4",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -0.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_8_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.52,
   "hfov": 7.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF8FA78_94FE_F90B_41DB_D64C2884A220",
   "yaw": -0.39,
   "pitch": -10.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.99
  }
 ],
 "id": "overlay_BA176EB3_9458_BA0B_41D2_84E543375E64",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rotationX": 44.08,
 "autoplay": true,
 "id": "overlay_C837083F_94F9_867B_41A1_6CE55826E86E",
 "roll": 0.59,
 "loop": true,
 "vfov": 2.74,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_C837083F_94F9_867B_41A1_6CE55826E86E_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -5.11,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": -0.57,
 "yaw": 94.38,
 "class": "VideoPanoramaOverlay",
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 3.14,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -174.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.65,
   "hfov": 6.12
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61, this.camera_848F3CFD_94FE_F905_41DE_979E74FB56AC); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990E4A6D_94FE_F904_41AC_67A5373F23B5",
   "yaw": -174.47,
   "pitch": -20.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.12
  }
 ],
 "id": "overlay_8D60F212_9469_8A04_41DF_254A6FC8FA75",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 75.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.02,
   "hfov": 5.54
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A, this.camera_849EECED_94FE_F904_41C8_3808554CDDB1); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990EEA6D_94FE_F904_41C0_A24C9C96C6C7",
   "yaw": 75.75,
   "pitch": -32.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.54
  }
 ],
 "id": "overlay_8EEF85D5_9468_8E0F_41DD_16DF19174BBD",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 118.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.73,
   "hfov": 6.27
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990E9A6D_94FE_F904_41D5_FC9B6F42B541",
   "yaw": 118.06,
   "pitch": -21.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.27
  }
 ],
 "id": "overlay_8F674B9C_946B_9A3D_41C9_CAA6028B386D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -89.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.22,
   "hfov": 6.83
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392, this.camera_9B314F79_94FE_F70D_41D4_C2E33164CE9A); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE56A85_94FE_F905_41E2_1BE208C2F6E6",
   "yaw": -89.89,
   "pitch": -10.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.83
  }
 ],
 "id": "overlay_DD8BBE93_9429_9A0B_41E2_28864A5B4820",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 87.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.65,
   "hfov": 7.28
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A, this.camera_9B43FF68_94FE_F70B_41B0_98F22BB71B6C); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE5DA86_94FE_F907_41DA_215F0978FCF3",
   "yaw": 87.64,
   "pitch": -6.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.28
  }
 ],
 "id": "overlay_DE162E35_9429_9A0F_41DF_639C5410ACFF",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 174.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59,
   "hfov": 8.07
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80, this.camera_9B143F9F_94FE_F704_41E0_964DD14C4482); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE58A86_94FE_F907_41DC_00D063AE9341",
   "yaw": 174.28,
   "pitch": -6.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.07
  }
 ],
 "id": "overlay_DE0EA9B9_9429_8604_41D7_C9F01C3CD35D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -115.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.55,
   "hfov": 6.28
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86, this.camera_9B26FF8B_94FE_F70D_41E2_984981F6842D); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE43A86_94FE_F907_41D8_8A590FA4F287",
   "yaw": -115.18,
   "pitch": -8.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.28
  }
 ],
 "id": "overlay_DEF9F05C_9429_863C_41D0_6DC0F844B66A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 97.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.82,
   "hfov": 6.75
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023, this.camera_9AA0EE24_94FE_F93B_41CC_40EDD41FCB57); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9914EA67_94FE_F905_41E1_AEC69E256523",
   "yaw": 97.69,
   "pitch": -22.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.75
  }
 ],
 "id": "overlay_80A39316_93DE_24A5_41A3_F909EC9EC461",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 2.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.6,
   "hfov": 5.96
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2, this.camera_9A838E45_94FE_F905_41D3_0F0C696E2AA1); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99175A68_94FE_F90B_41B8_D21A8EDAF39B",
   "yaw": 2.38,
   "pitch": -35.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.96
  }
 ],
 "id": "overlay_8004A821_93DE_649F_41B2_D2A054F1298D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.72,
   "hfov": 6.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435, this.camera_9AC14DFE_94FE_FB07_41E0_296BF2CDF21D); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99171A68_94FE_F90B_41D7_D8EC26819BCD",
   "yaw": 0.02,
   "pitch": -16.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.45
  }
 ],
 "id": "overlay_8032F4AF_93DE_6DE3_41DD_1198F94C51F9",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -31.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.85,
   "hfov": 6.51
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE, this.camera_9A8E1E3B_94FE_F90C_4189_E02DB2EBBD35); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9917CA68_94FE_F90B_41D4_9D72CDD72142",
   "yaw": -31.57,
   "pitch": -14.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.51
  }
 ],
 "id": "overlay_87B2D0ED_93DE_2567_41C6_371DE812C0F9",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -98.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.98,
   "hfov": 6.68
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE, this.camera_9A947E2D_94FE_F905_41E0_891323FE17A5); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99166A6A_94FE_F90F_41C9_DBB6A4B5E945",
   "yaw": -98.05,
   "pitch": -29.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.68
  }
 ],
 "id": "overlay_804920CD_93DD_E5A7_41D7_0FB43F5B11B0",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -66.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.18,
   "hfov": 7.71
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99161A6A_94FE_F90F_41D6_3AAF0C8942C5",
   "yaw": -66.39,
   "pitch": -13.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.71
  }
 ],
 "id": "overlay_87D86EF8_93DD_DD6D_4194_E9DF7A13BB9D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 40.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.03,
   "hfov": 7.42
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9916DA6A_94FE_F90F_41DF_B062FEFAC919",
   "yaw": 40.84,
   "pitch": -10.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.42
  }
 ],
 "id": "overlay_80467279_93C2_E56F_41DE_2D07768F9D20",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -49.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_8_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.57,
   "hfov": 6.61
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734, this.camera_9ABAAE0E_94FE_F907_41D9_9665256F60F5); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99116A6A_94FE_F90F_41D8_B709920D98A0",
   "yaw": -49.55,
   "pitch": -25.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.61
  }
 ],
 "id": "overlay_878B84F6_93C2_2D65_41C2_29E29AE8FA98",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 174.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_9_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.19,
   "hfov": 6.51
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB, this.camera_9AAF6E1C_94FE_F90B_41D0_5C03B7EAD1D9); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99111A6A_94FE_F90F_41D2_A9A014C045D6",
   "yaw": 174.91,
   "pitch": -24.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.51
  }
 ],
 "id": "overlay_87BDC036_93C2_24E5_41DC_FD945F71C879",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rotationX": 14.15,
 "autoplay": true,
 "id": "overlay_CF312AE5_94F8_9A0C_41DA_D1725C10499C",
 "roll": -6,
 "loop": true,
 "vfov": 4.29,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CF312AE5_94F8_9A0C_41DA_D1725C10499C_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -7.5,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": -39.33,
 "yaw": 7.6,
 "class": "VideoPanoramaOverlay",
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 7.02,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -121.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.69,
   "hfov": 5.62
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_9B374C61_94FE_F93D_41D7_9655609631F4); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9905CA71_94FE_F91D_41B6_8E459DDC688C",
   "yaw": -121.78,
   "pitch": -30.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.62
  }
 ],
 "id": "overlay_8B82E6FD_9479_8BFC_41CB_D2310EA6326D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 66.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.91,
   "hfov": 4.47
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435, this.camera_9B93FBD5_94FE_FF05_41D0_81566A66B133); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99046A71_94FE_F91D_41D5_30182633C1F2",
   "yaw": 66.4,
   "pitch": -25.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.47
  }
 ],
 "id": "overlay_8BDA69BE_9479_867D_41CA_A2A1F8118E8F",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 152.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.11,
   "hfov": 5.19
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734, this.camera_9B732C06_94FE_F907_41DB_D04019DF1F33); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99041A71_94FE_F91D_41C3_872980957C6A",
   "yaw": 152.36,
   "pitch": -35.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.19
  }
 ],
 "id": "overlay_B4318B40_9479_9A04_41C7_567493571E7C",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 154.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.75,
   "hfov": 7.5
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE, this.camera_9B47FC4B_94FE_F90D_41DC_4CA05090C944); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9904CA71_94FE_F91D_41D2_7E921B404EB2",
   "yaw": 154.92,
   "pitch": -18.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.5
  }
 ],
 "id": "overlay_B46CAA0A_9479_7A05_41CD_E24B0A048F14",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 122.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.85,
   "hfov": 4.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80, this.camera_9B513C31_94FE_F91D_41D8_B732241DA7B6); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99077A71_94FE_F91D_41D8_B250277FA6D8",
   "yaw": 122.26,
   "pitch": -14.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.99
  }
 ],
 "id": "overlay_B4986EC0_9478_9A05_41D6_342915C0B4B1",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 106.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.63,
   "hfov": 5.57
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2, this.camera_9B258C78_94FE_F90B_41C5_99C2457859E0); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99071A73_94FE_F91D_41E0_FB5723F2EEAA",
   "yaw": 106.43,
   "pitch": -20.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.57
  }
 ],
 "id": "overlay_B5195EF7_9478_BA0B_41B0_F7972C782EB1",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 100.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.13,
   "hfov": 6.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9907CA73_94FE_F91D_41D3_E882BEC9C9F5",
   "yaw": 100.92,
   "pitch": -10.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.05
  }
 ],
 "id": "overlay_B581ED2D_9478_9E1C_41E2_341781C21A16",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 116.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.06,
   "hfov": 3.94
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99067A73_94FE_F91D_41D6_2A79534422D9",
   "yaw": 116.85,
   "pitch": -8.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.94
  }
 ],
 "id": "overlay_B67EEBC5_9478_FA0F_41D1_ABD9E3FF1EE7",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -151.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_8_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.74,
   "hfov": 6.54
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99061A73_94FE_F91D_41E1_3F74F3C52607",
   "yaw": -151.86,
   "pitch": -19.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.54
  }
 ],
 "id": "overlay_B727FDD1_9478_9E07_41C4_E3096E016E13",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -116.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_9_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.95,
   "hfov": 7.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E, this.camera_9B613C18_94FE_F90C_41E1_CAB3461849FD); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9906CA73_94FE_F91D_41D0_B507FCA7ABBE",
   "yaw": -116.86,
   "pitch": -14.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.08
  }
 ],
 "id": "overlay_B7E81D23_9478_BE04_41DC_BA67B2E5A01A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -136.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_10_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.86,
   "hfov": 7.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC, this.camera_9B834BE2_94FE_FF3F_41DD_45F823EFDB8D); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99016A73_94FE_F91D_41E2_08A59C65195E",
   "yaw": -136.23,
   "pitch": -16.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.21
  }
 ],
 "id": "overlay_8BBD982E_9478_861D_41DB_80C4994E20EA",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rotationX": 18.06,
 "autoplay": true,
 "id": "overlay_CF906200_94F8_8A05_41BE_FE7F74EDE5E8",
 "roll": 8.1,
 "loop": true,
 "vfov": 7.32,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CF906200_94F8_8A05_41BE_FE7F74EDE5E8_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -12.38,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 34.74,
 "yaw": 53.48,
 "class": "VideoPanoramaOverlay",
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 10.83,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.25,
   "hfov": 6.72
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984C0817_93C2_24A3_41DD_097411309BF0, this.camera_9BF9B272_94FE_091F_41E1_42FE5D5FE0DD); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADD6A89_94FE_F90D_41C4_27531CD3FA4E",
   "yaw": -84,
   "pitch": -14.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.72
  }
 ],
 "id": "overlay_C64103AF_94D8_8A1B_41DF_FE46C5616AD8",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 6.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.75,
   "hfov": 6.13
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3, this.camera_9AA391BF_94FE_0B04_418D_956D3E99B3EE); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99082A6D_94FE_F904_41D5_2EAD3D8B9BD6",
   "yaw": 6.59,
   "pitch": -14.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.13
  }
 ],
 "id": "overlay_8F7F55DF_9469_8E3B_41E1_A437D5862469",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 10.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.79,
   "hfov": 5.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021, this.camera_9A8E11DF_94FE_0B05_41DB_67ACE876B234); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9908CA6D_94FE_F904_41C7_574ED5BA9E01",
   "yaw": 10.83,
   "pitch": -28.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.22
  }
 ],
 "id": "overlay_8F81B052_9468_8604_41CF_81B8B8326C14",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -158.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.98,
   "hfov": 5.59
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A, this.camera_9A9451CF_94FE_0B05_41C7_3D37FAF24162); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990B7A6D_94FE_F904_41D0_ECC5061DB0E0",
   "yaw": -158.75,
   "pitch": -33.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.59
  }
 ],
 "id": "overlay_8FF2E715_9468_8A0F_41DD_F03FBCDD28CC",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -161.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.8,
   "hfov": 5.18
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC, this.camera_9AB5F1B0_94FE_0B1B_41E0_C90C4F51F1B6); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFB6A78_94FE_F90B_41D7_CAE7CCC38B07",
   "yaw": -161.32,
   "pitch": -47.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.18
  }
 ],
 "id": "overlay_BAC2ED09_9459_9E07_41CB_C78A2A52EA2D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -175.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.74,
   "hfov": 5.32
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012, this.camera_9ACA7190_94FE_0B1C_41D9_FD58B545AC74); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF99A78_94FE_F90B_41D3_456CB5ADABA7",
   "yaw": -175.5,
   "pitch": -26.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.32
  }
 ],
 "id": "overlay_BB5EFA34_9459_9A0C_41D6_FADFA818B49F",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 108.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.44,
   "hfov": 4.18
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E, this.camera_9AC061A0_94FE_0B3B_41B6_1E16DF3DFD71); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF84A78_94FE_F90B_41A5_A04440710B2A",
   "yaw": 108.5,
   "pitch": -45.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.18
  }
 ],
 "id": "overlay_BB4B3446_9459_8E0D_41CB_275EE08FBB1A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 144.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.45,
   "hfov": 6.91
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_9AAF11B0_94FE_0B1B_41E0_D33247E911D4); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF8DA78_94FE_F90B_41D2_7AFA4A22911E",
   "yaw": 144.58,
   "pitch": -19.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.91
  }
 ],
 "id": "overlay_BB9987D2_9459_8A05_41B6_2B8777B2A6BC",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 143.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.82,
   "hfov": 4.8
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF89A78_94FE_F90B_41D3_B8D07D98D6CC",
   "yaw": 143.4,
   "pitch": -14.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.8
  }
 ],
 "id": "overlay_BBEEE4E2_9459_8E04_41E0_92FF7CBF5A96",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 167.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.44,
   "hfov": 5.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFB3A78_94FE_F90B_41C4_D326FCF780DD",
   "yaw": 167.76,
   "pitch": -15.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.93
  }
 ],
 "id": "overlay_A40EC6CB_9459_8A1B_4196_11E9AD7531BA",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 166.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.81,
   "hfov": 6.04
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFBCA78_94FE_F90B_41C2_CCE36C5C5F4F",
   "yaw": 166.39,
   "pitch": -10.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.04
  }
 ],
 "id": "overlay_A486E8BF_9459_867B_41C4_87A0508DDAAF",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 148.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.45,
   "hfov": 5.28
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFA7A78_94FE_F90B_41D8_7643B02B2A12",
   "yaw": 148.78,
   "pitch": -10.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.28
  }
 ],
 "id": "overlay_A569DAF0_9458_9A05_41D7_F3DBB06DB66C",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 85.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_8_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.54,
   "hfov": 7.31
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AFA0A78_94FE_F90B_41D1_F35156E71181",
   "yaw": 85.28,
   "pitch": -3.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.31
  }
 ],
 "id": "overlay_A63808E3_9458_860B_41D7_DB74719B5589",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rotationX": 24.01,
 "autoplay": true,
 "id": "overlay_C83EA458_94F8_8E04_41B1_9DC3750F1558",
 "roll": -0.56,
 "loop": true,
 "vfov": 2.02,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_C83EA458_94F8_8E04_41B1_9DC3750F1558_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -6.77,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": 32.72,
 "yaw": 144.82,
 "class": "VideoPanoramaOverlay",
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 3.46,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -125.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.29,
   "hfov": 6.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE, this.camera_8450E053_94FE_091D_41B6_BC7466D4D5A7); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990BAA71_94FE_F91D_41DE_663A4671D164",
   "yaw": -125.8,
   "pitch": -30.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.15
  }
 ],
 "id": "overlay_8A867147_9478_860B_41E2_2EA2B1203C9A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -135.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.21,
   "hfov": 7.2
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_84367069_94FE_090D_41DB_289CE3D59BAF); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990A6A71_94FE_F91D_41E0_5EC3E0F51D10",
   "yaw": -135.04,
   "pitch": -17.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.2
  }
 ],
 "id": "overlay_8AD9F393_9478_8A0B_41DD_5908933FCB24",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -169.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.14,
   "hfov": 5.47
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734, this.camera_8446705B_94FE_090C_41C0_81AB82A63606); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990AFA71_94FE_F91D_41DB_4F7EF5760401",
   "yaw": -169.37,
   "pitch": -27.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.47
  }
 ],
 "id": "overlay_8B25E4AF_9478_8E1B_41DA_F23C6DFCE4C5",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 140.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.85,
   "hfov": 5.82
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2, this.camera_8421A078_94FE_090B_41DC_552E294E627F); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990A8A71_94FE_F91D_41D0_F5FB8138793A",
   "yaw": 140.56,
   "pitch": -32.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.82
  }
 ],
 "id": "overlay_8B0622F2_9478_8A05_41B5_70742C18EF19",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 143.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.41,
   "hfov": 6.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80, this.camera_84602047_94FE_0905_41D4_0D528F9CC778); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99052A71_94FE_F91D_41D9_8691559162BB",
   "yaw": 143.22,
   "pitch": -21.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.45
  }
 ],
 "id": "overlay_8B5B536D_947B_8A1F_41E1_05C07D4F9F8A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rotationX": 36.14,
 "autoplay": true,
 "id": "overlay_CFDDAD43_94F8_9E04_41E1_8B30A3057F54",
 "roll": -1.15,
 "loop": true,
 "vfov": 15.43,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CFDDAD43_94F8_9E04_41E1_8B30A3057F54_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 540
   }
  ]
 },
 "pitch": -33.88,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "rotationY": -5.65,
 "yaw": 7.34,
 "class": "VideoPanoramaOverlay",
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 540,
  "mp4Url": "media/video_F4D937BA_94F8_8A05_41D2_8CDADAE64C44.mp4"
 },
 "enabledInCardboard": true,
 "blending": 0,
 "distance": 50,
 "hfov": 23.32,
 "data": {
  "label": "Video"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -61.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.47,
   "hfov": 6.35
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86, this.camera_99200D9B_94FE_FB0D_41DA_074CD0A95A41); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE4CA86_94FE_F907_41DC_AA926B29F32B",
   "yaw": -61.18,
   "pitch": -13.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.35
  }
 ],
 "id": "overlay_DF31731C_942B_8A3C_41BB_5FCC4251AC3E",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -165.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.99,
   "hfov": 6.23
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB, this.camera_992A4D8F_94FE_FB05_418C_0B9EAF0001D5); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE74A86_94FE_F907_41DA_7D7D587D5180",
   "yaw": -165.34,
   "pitch": -17.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.23
  }
 ],
 "id": "overlay_DFE82E4B_942B_FA1B_41DC_59936290A18A",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -165.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.43,
   "hfov": 5.54
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE7DA86_94FE_F907_41DB_006949F5BA5F",
   "yaw": -165.24,
   "pitch": -4.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.54
  }
 ],
 "id": "overlay_DFBFCDCF_942B_9E1C_41E0_780A6FD0AF24",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -139.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.62,
   "hfov": 6.32
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE67A86_94FE_F907_41E2_3069AB7D9C70",
   "yaw": -139.68,
   "pitch": -4.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.32
  }
 ],
 "id": "overlay_C4210022_9428_8604_41DA_6CB79960FD20",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -131.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -49.37,
   "hfov": 4.39
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7, this.camera_9ADDD162_94FE_0B3F_41DD_71DD136342C7); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEC3A80_94FE_F9FB_41CA_A8748B1F2A3A",
   "yaw": -131.6,
   "pitch": -49.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_D4C43BAC_9438_9A1D_41C6_C92EA6D2131D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -43.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.19,
   "hfov": 5.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A, this.camera_9ADB3171_94FE_0B1D_41D2_8538F65076C2); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AECCA80_94FE_F9FB_4172_1C09A37C8A90",
   "yaw": -43.77,
   "pitch": -18.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.08
  }
 ],
 "id": "overlay_D49FC3B1_9438_8A07_41C4_91F59F99856F",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 53.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.88,
   "hfov": 6.47
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEF5A80_94FE_F9FB_41DC_CE0404020730",
   "yaw": 53.02,
   "pitch": -24.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.47
  }
 ],
 "id": "overlay_D4B7AA79_9438_FA04_41E0_65C0CC247893",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 137,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.89,
   "hfov": 4.43
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF, this.camera_9ACC2181_94FE_0BFD_4190_7E7DDAAF1DAA); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEFEA80_94FE_F9FB_41CC_3612358851F5",
   "yaw": 137,
   "pitch": -41.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.43
  }
 ],
 "id": "overlay_D56D26C5_9438_8A0F_41D4_629B88000ED9",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 134.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.64,
   "hfov": 4.62
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012, this.camera_9AD15181_94FE_0BFD_41C7_7857DC8CD74A); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEF8A81_94FE_F9FD_4191_0E35148C1E2F",
   "yaw": 134.62,
   "pitch": -21.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.62
  }
 ],
 "id": "overlay_D5039648_9438_8A05_416F_200D587546FC",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 117.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.95,
   "hfov": 7.26
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED, this.camera_84B82CD0_94FE_F91B_41DA_FDE4244A20AE); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE25A89_94FE_F90D_41DA_8702AB7ABDE6",
   "yaw": 117.35,
   "pitch": -14.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.26
  }
 ],
 "id": "overlay_C5FC9C38_94DB_BE04_41D1_A6FEAD600B89",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -140.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.72,
   "hfov": 6.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F, this.camera_84AE9CDF_94FE_F905_41DE_F27EE97AC7FC); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE2DA89_94FE_F90D_41CB_5D155E98E9FE",
   "yaw": -140.75,
   "pitch": -16.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.45
  }
 ],
 "id": "overlay_C5AF8908_94DB_8604_41CA_52FF0CB8284F",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 },
 "horizontalAlign": "center",
 "height": 58,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "cursor": "hand",
 "paddingBottom": 0,
 "transparencyActive": true,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "right": 30,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "bottom": 8,
 "height": 75,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 49,
 "data": {
  "name": "IconButton VR"
 },
 "horizontalAlign": "center",
 "maxHeight": 37
},
{
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "horizontalAlign": "center",
 "height": 58,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 },
 "horizontalAlign": "center",
 "height": 58,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 81.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.73,
   "hfov": 6.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80, this.camera_9A736AC5_94FE_F905_41D5_6D0B673EA734); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_99122A6B_94FE_F90D_41E0_6A53ED824A34",
   "yaw": 81.37,
   "pitch": -21.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.08
  }
 ],
 "id": "overlay_8049BDBA_9458_FE04_41D6_90C32C0F7DFB",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 74.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.67,
   "hfov": 5.9
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE, this.camera_9A67EADB_94FE_F90C_41BD_D9CCBF187FA2); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9912CA6B_94FE_F90D_41B7_74DB4A0B3A8D",
   "yaw": 74.18,
   "pitch": -7.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.9
  }
 ],
 "id": "overlay_80A9A708_9458_8A05_41D4_E5D682CBDF87",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 99.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.6,
   "hfov": 7.17
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2, this.camera_9A572AE9_94FE_F90D_41E0_5DEC22A88974); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990D7A6B_94FE_F90D_41DA_E4C6749618FF",
   "yaw": 99.37,
   "pitch": -17.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.17
  }
 ],
 "id": "overlay_813E0FE7_9457_7A0B_41AF_95523E6618ED",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.76,
   "hfov": 6.68
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990D2A6B_94FE_F90D_41CC_80A175DA4301",
   "yaw": 90.31,
   "pitch": -7.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.68
  }
 ],
 "id": "overlay_81A80E0E_9457_BA1D_41D6_81A991562A85",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -159.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -53.21,
   "hfov": 4.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021, this.camera_9A74F1FE_94FE_0B07_41D0_20468A15716D); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990A1A71_94FE_F91D_41CE_C21C7D988A7D",
   "yaw": -159.54,
   "pitch": -53.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.15
  }
 ],
 "id": "overlay_899F2550_9478_8E05_41D9_95C10BAB5620",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -153.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.29,
   "hfov": 6.5
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77, this.camera_9A8201EE_94FE_0B07_41DA_B323FF090A6A); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990ACA71_94FE_F91D_41CA_268A570D556D",
   "yaw": -153.39,
   "pitch": -24.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.5
  }
 ],
 "id": "overlay_8A289EC4_9479_7A0D_41D3_42EA2EA6953D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -156.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.01,
   "hfov": 6.42
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990B0A71_94FE_F91D_41DB_2D1B95771C40",
   "yaw": -156.19,
   "pitch": -11.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.42
  }
 ],
 "id": "overlay_8A313C8A_9479_9E04_41D8_00B6FAA3BAFF",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 130.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.14,
   "hfov": 3.72
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_9AEF4DDE_94FE_FB07_41AA_B03B59B84515); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF6AA7B_94FE_F90C_41C9_0956C60FF584",
   "yaw": 130.04,
   "pitch": -27.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.72
  }
 ],
 "id": "overlay_A3DAA24E_9428_8A1D_41BF_33622B6708A3",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 61.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.54,
   "hfov": 5.44
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC, this.camera_9ACC9DFE_94FE_FB07_4195_8D8DFCE5D95A); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF12A7B_94FE_F90C_41E1_78192258CB9A",
   "yaw": 61.66,
   "pitch": -33.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.44
  }
 ],
 "id": "overlay_AC41F169_9428_8607_41AF_FBCDE3C1FE20",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -77.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.61,
   "hfov": 5.51
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF, this.camera_9AFAEDCF_94FE_FB05_41DD_7F0EF330FF15); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF1DA7D_94FE_F905_41C3_5E7AE95233DC",
   "yaw": -77.4,
   "pitch": -32.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.51
  }
 ],
 "id": "overlay_AC592BCE_9428_9A1D_41DB_2F3EBF02AABB",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -77.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.01,
   "hfov": 5.22
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8, this.camera_99034DC5_94FE_FB05_41DA_CA322D00C3BD); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF06A7D_94FE_F905_41E1_6F15D1ACF557",
   "yaw": -77.03,
   "pitch": -20.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.22
  }
 ],
 "id": "overlay_AC0DFD4B_9428_BE1B_41D8_DD6F4DBA0D20",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -75.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.26,
   "hfov": 7.06
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF00A7D_94FE_F905_41C1_56A93A12902C",
   "yaw": -75.75,
   "pitch": -8.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.06
  }
 ],
 "id": "overlay_AC3A1196_9428_860D_41E0_F7D1377F8012",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 74.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.05,
   "hfov": 7.13
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF0AA7D_94FE_F905_41E0_59676CA7EFF0",
   "yaw": 74.27,
   "pitch": -1.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.13
  }
 ],
 "id": "overlay_AD6DBD04_9437_9E0D_41A7_43C96C65B813",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 48.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.15,
   "hfov": 5.66
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531, this.camera_9ADB0DEC_94FE_FB04_41DC_2D57D4CB0162); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF31A7D_94FE_F905_41C3_02186BC7D70C",
   "yaw": 48.3,
   "pitch": -18.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.66
  }
 ],
 "id": "overlay_ADFBB00E_9437_861D_41C0_8B69045CA075",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -163.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.83,
   "hfov": 6.29
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78, this.camera_9AE07DE8_94FE_FB0C_41CE_4B9CD0153CD5); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AF3CA7D_94FE_F905_41D4_0FC9D375711F",
   "yaw": -163.68,
   "pitch": -24.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.29
  }
 ],
 "id": "overlay_AA5299BF_9438_867B_41DA_F407B045A87D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 76.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.57,
   "hfov": 4.17
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8, this.camera_84C85CC8_94FE_F90B_419A_DF32AA6C48F5); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEE2A81_94FE_F9FD_41B5_A5FF0E5299C4",
   "yaw": 76.34,
   "pitch": -43.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.17
  }
 ],
 "id": "overlay_D709926F_9437_8A1C_41BE_EEF6A068F964",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 63.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.97,
   "hfov": 6.55
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEEBA81_94FE_F9FD_41DF_F54FE3542576",
   "yaw": 63.34,
   "pitch": -18.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.55
  }
 ],
 "id": "overlay_D7DB7E61_9437_BA07_41A6_1E5389CE5138",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -84.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33,
   "hfov": 4.83
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2, this.camera_84D9FFE7_94FE_F704_41CF_C4E3FAF57663); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990CAA6D_94FE_F904_41DA_B214DB5F72DB",
   "yaw": -84.57,
   "pitch": -33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.83
  }
 ],
 "id": "overlay_83FA8A86_9469_9A0C_41DE_BA7354127985",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -86.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.2,
   "hfov": 5.87
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734, this.camera_9B056FB7_94FE_F704_41D8_E7421551EBB8); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990F3A6D_94FE_F904_41DC_3540B3978F30",
   "yaw": -86.73,
   "pitch": -17.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.87
  }
 ],
 "id": "overlay_8C0D6BBB_9469_9A7B_41CD_9FB53ED9F896",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -75.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.31,
   "hfov": 6.25
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_84F8DFCA_94FE_F70C_41B2_1E7563E9D772); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990FFA6D_94FE_F904_41DB_C9CCDC1D84F1",
   "yaw": -75.82,
   "pitch": -10.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.25
  }
 ],
 "id": "overlay_8C7158ED_9469_861F_41D3_ADE65FB1CB99",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -7.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.5,
   "hfov": 5.68
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697, this.camera_84E83FDE_94FE_F707_41E0_63D650A07D95); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_990F8A6D_94FE_F904_41CA_0922492BA50C",
   "yaw": -7.65,
   "pitch": -32.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.68
  }
 ],
 "id": "overlay_8D051C49_9468_9E07_41C9_52CF2C438499",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -159.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.18,
   "hfov": 8.04
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB, this.camera_993B8D6E_94FE_FB07_41C8_693A43DFD1FA); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEB4A85_94FE_F905_41B2_456470903189",
   "yaw": -159.04,
   "pitch": -19.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.04
  }
 ],
 "id": "overlay_D323E501_9429_8E07_41DA_3197CEC814E6",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 131.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.26,
   "hfov": 7.1
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4, this.camera_845DCD2B_94FE_FB0D_41CB_01160895F2C0); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEBDA85_94FE_F905_416C_FFD944A3DF50",
   "yaw": 131.61,
   "pitch": -14.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.1
  }
 ],
 "id": "overlay_DCBBCDB1_9428_9E07_41D1_A9F7968D9236",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 11.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.52,
   "hfov": 6.79
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98AB52F7_93C3_E563_41DE_06760A2746A1, this.camera_847F5D03_94FE_F8FD_41DC_A5625A5F2BF6); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEA7A85_94FE_F905_41B6_5C4F6C5D6E82",
   "yaw": 11.61,
   "pitch": -28.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.79
  }
 ],
 "id": "overlay_DD60DBA9_9428_9A07_41B1_16BDE3DE3B16",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -68.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.92,
   "hfov": 7.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC, this.camera_846D2D1E_94FE_FB04_41D4_F77555D6BE52); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AEAFA85_94FE_F905_41C2_53B96642E6EF",
   "yaw": -68.45,
   "pitch": -28.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.45
  }
 ],
 "id": "overlay_DD29B1BF_9428_867B_41C2_F1EE6CA75A40",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 67.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.29,
   "hfov": 7.08
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984308A6_93C3_E5E5_41DE_130FD56275BC, this.camera_99175DAD_94FE_FB05_41E0_B062D27B429F); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADDDA89_94FE_F90D_41B1_47AB1E98C905",
   "yaw": 67.37,
   "pitch": -6.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.08
  }
 ],
 "id": "overlay_C668D325_94D9_8A0C_41CC_67A51C7C50EC",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -4.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 25.19,
   "hfov": 6.82
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61, this.camera_990EFDAD_94FE_FB05_41BD_6C139A5C4014); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADC5A8A_94FE_F90C_41C9_7EDC0F1AA271",
   "yaw": -4.82,
   "pitch": 25.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.82
  }
 ],
 "id": "overlay_C6DFDBFD_94D9_99FF_4150_AF334542F0EC",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -72.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.28,
   "hfov": 7.51
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F, this.camera_991C8DA4_94FE_FB3B_41C8_7ACE9794233E); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADD6A8A_94FE_F90C_418C_E2BAED330444",
   "yaw": -72.49,
   "pitch": 3.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.51
  }
 ],
 "id": "overlay_C6FE5D32_94D9_BE05_41E2_558DBB3360AF",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -82.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.31,
   "hfov": 5.76
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F, this.camera_9A2ADB0E_94FE_FF07_41D7_B410FD33AEDE); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE60A88_94FE_F90B_41C2_B46E3481AEBC",
   "yaw": -82.91,
   "pitch": -20.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.76
  }
 ],
 "id": "overlay_D9D273E3_94D7_8A0B_4177_2A0E0C9B739D",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 145.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.59,
   "hfov": 6.64
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392, this.camera_9A356AFF_94FE_F905_41DD_F66A16106EF4); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE6AA88_94FE_F90B_41D1_A19900229857",
   "yaw": 145.78,
   "pitch": -9.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.64
  }
 ],
 "id": "overlay_DA50D8F4_94D7_860C_41D3_5B5ACDF1C8F6",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -177.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.36,
   "hfov": 7.83
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB, this.camera_9A44AAF3_94FE_F91C_41B3_A1892A3F84E4); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9AE14A88_94FE_F90B_41CB_C56449E5111D",
   "yaw": -177.93,
   "pitch": -8.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.83
  }
 ],
 "id": "overlay_DA656B53_94D7_9A0B_41D0_169F49A813F2",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "height": 110,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "top": "0%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": true,
 "data": {
  "name": "button menu sup"
 },
 "horizontalAlign": "center",
 "layout": "horizontal",
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "contentOpaque": false,
 "minHeight": 1,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": "85.959%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "horizontalAlign": "center",
 "visible": false,
 "layout": "vertical",
 "gap": 3
},
{
 "paddingBottom": 0,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "minHeight": 1,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "class": "Image",
 "minWidth": 1,
 "shadow": false,
 "bottom": 53,
 "height": 2,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 3000,
 "data": {
  "name": "white line"
 },
 "horizontalAlign": "center",
 "maxHeight": 2,
 "scaleMode": "fit_outside"
},
{
 "paddingBottom": 0,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 30,
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": 51,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": true,
 "data": {
  "name": "-button set container"
 },
 "horizontalAlign": "left",
 "layout": "horizontal",
 "gap": 3
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "paddingBottom": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "10%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "bottom": "5%",
 "top": "5%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "contentOpaque": false,
 "minHeight": 1,
 "right": "10%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "80%",
 "top": "5%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "layout": "vertical",
 "gap": 10
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "paddingBottom": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "10%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "bottom": "5%",
 "top": "5%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "contentOpaque": false,
 "minHeight": 1,
 "right": "10%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "80%",
 "top": "5%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "layout": "vertical",
 "gap": 10
},
{
 "layout": "vertical",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingBottom": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "bottom": "7%",
 "top": "7%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "paddingBottom": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "10%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "bottom": "5%",
 "top": "5%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "contentOpaque": false,
 "minHeight": 1,
 "right": "10%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "80%",
 "top": "5%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "layout": "vertical",
 "gap": 10
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingBottom": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "bottom": "7%",
 "top": "7%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "layout": "vertical",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "paddingBottom": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "bottom": "7%",
 "top": "7%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingBottom": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "15%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "bottom": "7%",
 "top": "7%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "paddingBottom": 0,
 "contentOpaque": false,
 "minHeight": 1,
 "right": "10%",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "bottom": "5%",
 "top": "5%",
 "shadow": true,
 "shadowOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowSpread": 1,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "contentOpaque": false,
 "minHeight": 1,
 "right": "10%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "bottom": "80%",
 "top": "5%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "layout": "vertical",
 "gap": 10
},
{
 "levels": [
  {
   "url": "media/panorama_98AFC517_93C2_6CA3_41AD_0FC0EF514A26_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE94A81_94FE_F9FD_41D8_FDE2679D8096",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9903CA76_94FE_F907_41C2_804A2BEC0233",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99025A76_94FE_F907_41E0_722C57F15463",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9902FA76_94FE_F907_41C8_279365668BEC",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99029A76_94FE_F907_41C6_36EEF6EBF33F",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_F41C3B29_94DB_7A07_41E2_128EBE50287D",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFDDA76_94FE_F907_41C2_37A0A8D5F560",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFC5A76_94FE_F907_41D4_96CD9958FB66",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFC1A76_94FE_F907_41E2_39B6436A3AB9",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFCBA76_94FE_F907_41B4_8244A68098AC",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4D969_93C2_E76F_41D4_24B7CB1501D4_1_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFF6A76_94FE_F907_41DD_2364D7E319A7",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF31A7D_94FE_F905_41E2_79AF6808EC63",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF3BA7D_94FE_F905_41D8_25FCD5468E1E",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF24A7F_94FE_F905_41A1_D26D1CB9D977",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF2DA7F_94FE_F905_41E0_13D1FACD9C99",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4EA18_93C2_24AD_41DE_86086E843FEF_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AED6A7F_94FE_F905_41C3_90B91F8DE215",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99118A6A_94FE_F90F_419C_8CCB5B7C86A6",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99102A6B_94FE_F90D_41E1_3B59A3FFAEEE",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9910DA6B_94FE_F90D_4199_78289818B744",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99109A6B_94FE_F90D_41E1_2BFF9D0671E2",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99131A6B_94FE_F90D_41BE_30D710DF1FA8",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9913DA6B_94FE_F90D_41DD_C2D63DF1EE93",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A827AE_93C2_6BE5_41AC_F663EF74D1CE_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99127A6B_94FE_F90D_41E0_2872FE7F2BAC",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990DDA6C_94FE_F90B_41D7_7FED279CD2CC",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99120A6C_94FE_F90B_41E0_D4EB2BB72CFE",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9912CA6C_94FE_F90B_41E0_E5073F1E732E",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990D5A6C_94FE_F90B_41A7_7B4CA71ECCF0",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990D2A6C_94FE_F90B_41CC_B5C1081BF2E3",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990DBA6C_94FE_F90B_41D6_8ACC66C79B76",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990C7A6C_94FE_F90B_41DC_BD03E771E83A",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AF22EC_93C2_6565_41E0_ABCB850073F2_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990CFA6D_94FE_F904_41E1_B5C7BFD61141",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFB4F7_93C2_2D63_41DA_6D7CB8A91BFB_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AED9A80_94FE_F9FB_41E0_EDD58B055342",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEB9A83_94FE_F9FD_41D1_98576FF70F92",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984775A3_93C2_6FE3_41DE_C7BD9CB9C5DB_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE8BA83_94FE_F903_41E0_0A0DD5B34D64",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADDEA8A_94FE_F90C_41D9_FDC43EBF8C80",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADC7A8B_94FE_F90C_41D3_D91A80C09BDA",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADC1A8B_94FE_F90C_41E2_33F84B0DDF95",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984308A6_93C3_E5E5_41DE_130FD56275BC_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADC9A8B_94FE_F90C_41D4_CCFB3F06AED0",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF55A78_94FE_F90B_41D8_2C794A624BDB",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF5FA78_94FE_F90B_41AB_76968C3E874A",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF5BA78_94FE_F90B_41A6_929BB0AE1755",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF44A78_94FE_F90B_4199_C97FFA13F757",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF40A78_94FE_F90B_41DB_6AD6C0996FD4",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF4AA7B_94FE_F90C_41D6_D754CEA472A8",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF73A7B_94FE_F90C_41D9_5A340164A26C",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF7EA7B_94FE_F90C_41D8_10B59BA2E34E",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF67A7B_94FE_F90C_41E1_A148A9721122",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB39CA_93C2_E7AD_41CC_DC79881D1FFC_1_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF63A7B_94FE_F90C_41C1_C58AF6D003D0",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9901DA73_94FE_F91D_41C7_6A798EE83555",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99018A73_94FE_F91D_41C0_9886B90C9037",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99001A73_94FE_F91D_41E1_0C895CB74D08",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9900CA73_94FE_F91D_41D9_DD1A455D6F3E",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99037A73_94FE_F91D_41D9_FE3CBEC136C7",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99032A73_94FE_F91D_41C5_4D2E812DB140",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9903CA73_94FE_F91D_41E0_470A4A1746A0",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9900FA75_94FE_F905_41BD_3C101A5B56DF",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9900AA75_94FE_F905_41D5_15777E2E8714",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4C3EA_93C2_EB6D_41C0_BF0AC794E734_1_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99034A75_94FE_F905_41A4_54248443838E",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE1DA88_94FE_F90B_41DE_B6C036C5ABA4",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE04A88_94FE_F90B_41C2_691CCFCA4C2A",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE0DA88_94FE_F90B_419D_E077934C9D38",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE36A89_94FE_F90D_41BB_ED380B2412C8",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984D8249_93C2_24AF_41BB_D6FA4DC0077F_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE3CA89_94FE_F90D_41E1_5BD1C9E78FF9",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9FF88_93C2_3BAD_41C6_872ACE59A2EF_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AED0A7F_94FE_F905_41D2_D560FFCE6F06",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE89A82_94FE_F9FF_41B2_98295CEC14F0",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFCFF5_93C2_7B67_41D3_CB9742117B89_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEB2A83_94FE_F9FD_41E2_0C96CD4A2B91",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99092A6D_94FE_F904_41C6_41807E5F57C7",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9909CA6D_94FE_F904_416F_38D10461A983",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9A33B_93C2_24E3_41BE_92ADDEF8B12A_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99098A6D_94FE_F904_41E2_04C441DB1EBB",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF26A7D_94FE_F905_41BF_B6ACE0B0F264",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A8B4A9_93C2_2DEF_41C9_3465BA10BB78_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF2DA7D_94FE_F905_41D8_F09EFE671D09",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990B1A71_94FE_F91D_41A5_2990758803B4",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990BCA71_94FE_F91D_41E1_41A102060AD2",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AEFE0A_93C2_3CAD_4178_F371C796D021_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990A6A71_94FE_F91D_41DE_9550575AD267",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE9DA81_94FE_F9FC_41CC_A613AEA0B184",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE98A82_94FE_F9FF_41D3_B4BFF5FDC5A6",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B4DAA5_93C2_65E7_41B6_E0D7028F650A_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE8FA82_94FE_F9FF_41D7_E4F7143AE868",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFFEA76_94FE_F907_41DF_83B775A4B123",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFF9A78_94FE_F90B_41C5_8C40DD6132C0",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFE2A78_94FE_F90B_41C0_BED1C8B551EB",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFEEA78_94FE_F90B_41D4_2CAAEEEB616F",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF96A78_94FE_F90B_41E0_F4991065ACE9",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF9FA78_94FE_F90B_41A8_E670C4405D6B",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF9AA78_94FE_F90B_41C6_09E12ED6D61A",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF85A78_94FE_F90B_41D5_B41AC262569C",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AE6EC9_93C2_FDAF_41CA_A15D9DE7415E_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF8FA78_94FE_F90B_41DB_D64C2884A220",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990E4A6D_94FE_F904_41AC_67A5373F23B5",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990EEA6D_94FE_F904_41C0_A24C9C96C6C7",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9BDCB_93C2_5FA3_41C8_AB325391C697_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990E9A6D_94FE_F904_41D5_FC9B6F42B541",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE56A85_94FE_F905_41E2_1BE208C2F6E6",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE5DA86_94FE_F907_41DA_215F0978FCF3",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE58A86_94FE_F907_41DC_00D063AE9341",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98BF80F0_93C2_257D_41DA_E9B62A7DF5FB_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE43A86_94FE_F907_41D8_8A590FA4F287",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9914EA67_94FE_F905_41E1_AEC69E256523",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99175A68_94FE_F90B_41B8_D21A8EDAF39B",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99171A68_94FE_F90B_41D7_D8EC26819BCD",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9917CA68_94FE_F90B_41D4_9D72CDD72142",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99166A6A_94FE_F90F_41C9_DBB6A4B5E945",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99161A6A_94FE_F90F_41D6_3AAF0C8942C5",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9916DA6A_94FE_F90F_41DF_B062FEFAC919",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99116A6A_94FE_F90F_41D8_B709920D98A0",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AFD21F_93C2_64A3_41C6_1677F78E2C80_1_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99111A6A_94FE_F90F_41D2_A9A014C045D6",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9905CA71_94FE_F91D_41B6_8E459DDC688C",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99046A71_94FE_F91D_41D5_30182633C1F2",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99041A71_94FE_F91D_41C3_872980957C6A",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9904CA71_94FE_F91D_41D2_7E921B404EB2",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99077A71_94FE_F91D_41D8_B250277FA6D8",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99071A73_94FE_F91D_41E0_FB5723F2EEAA",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9907CA73_94FE_F91D_41D3_E882BEC9C9F5",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99067A73_94FE_F91D_41D6_2A79534422D9",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99061A73_94FE_F91D_41E1_3F74F3C52607",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9906CA73_94FE_F91D_41D0_B507FCA7ABBE",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B42E8A_93C2_DDAD_41C8_866542FFDEDE_1_HS_10_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99016A73_94FE_F91D_41E2_08A59C65195E",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B68D88_93C3_DFAD_41D7_FA78867298ED_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADD6A89_94FE_F90D_41C4_27531CD3FA4E",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99082A6D_94FE_F904_41D5_2EAD3D8B9BD6",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9908CA6D_94FE_F904_41C7_574ED5BA9E01",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AAE8AA_93C2_25ED_41DF_8C07BF084C77_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990B7A6D_94FE_F904_41D0_ECC5061DB0E0",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFB6A78_94FE_F90B_41D7_CAE7CCC38B07",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF99A78_94FE_F90B_41D3_456CB5ADABA7",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF84A78_94FE_F90B_41A5_A04440710B2A",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF8DA78_94FE_F90B_41D2_7AFA4A22911E",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF89A78_94FE_F90B_41D3_B8D07D98D6CC",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFB3A78_94FE_F90B_41C4_D326FCF780DD",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFBCA78_94FE_F90B_41C2_CCE36C5C5F4F",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFA7A78_94FE_F90B_41D8_7643B02B2A12",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A89449_93C2_ECAF_41E1_CF4D87C6F531_1_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AFA0A78_94FE_F90B_41D1_F35156E71181",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990BAA71_94FE_F91D_41DE_663A4671D164",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990A6A71_94FE_F91D_41E0_5EC3E0F51D10",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990AFA71_94FE_F91D_41DB_4F7EF5760401",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990A8A71_94FE_F91D_41D0_F5FB8138793A",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A8A8EA_93C2_256D_41E0_8367BF2C7435_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99052A71_94FE_F91D_41D9_8691559162BB",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE4CA86_94FE_F907_41DC_AA926B29F32B",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE74A86_94FE_F907_41DA_7D7D587D5180",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE7DA86_94FE_F907_41DB_006949F5BA5F",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9843B6AE_93C2_2DE5_41D7_425829D9C392_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE67A86_94FE_F907_41E2_3069AB7D9C70",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEC3A80_94FE_F9FB_41CA_A8748B1F2A3A",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AECCA80_94FE_F9FB_4172_1C09A37C8A90",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEF5A80_94FE_F9FB_41DC_CE0404020730",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEFEA80_94FE_F9FB_41CC_3612358851F5",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AA0A57_93C2_24A3_41E0_E7F62299FFC8_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEF8A81_94FE_F9FD_4191_0E35148C1E2F",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE25A89_94FE_F90D_41DA_8702AB7ABDE6",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984C0817_93C2_24A3_41DD_097411309BF0_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE2DA89_94FE_F90D_41CB_5D155E98E9FE",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_99122A6B_94FE_F90D_41E0_6A53ED824A34",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9912CA6B_94FE_F90D_41B7_74DB4A0B3A8D",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990D7A6B_94FE_F90D_41DA_E4C6749618FF",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B56D8B_93C2_7FA3_41AB_0E5AC4617023_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990D2A6B_94FE_F90D_41CC_80A175DA4301",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990A1A71_94FE_F91D_41CE_C21C7D988A7D",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990ACA71_94FE_F91D_41CA_268A570D556D",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9238B_93C2_2BA3_41E0_B990CBC340B3_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990B0A71_94FE_F91D_41DB_2D1B95771C40",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF6AA7B_94FE_F90C_41C9_0956C60FF584",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF12A7B_94FE_F90C_41E1_78192258CB9A",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF1DA7D_94FE_F905_41C3_5E7AE95233DC",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF06A7D_94FE_F905_41E1_6F15D1ACF557",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF00A7D_94FE_F905_41C1_56A93A12902C",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF0AA7D_94FE_F905_41E0_59676CA7EFF0",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF31A7D_94FE_F905_41C3_02186BC7D70C",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A9DF3A_93C2_DCED_41DA_EF51A179E012_1_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AF3CA7D_94FE_F905_41D4_0FC9D375711F",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEE2A81_94FE_F9FD_41B5_A5FF0E5299C4",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98A84FC6_93C2_5BA5_41DF_EA730B486BB7_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEEBA81_94FE_F9FD_41DF_F54FE3542576",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990CAA6D_94FE_F904_41DA_B214DB5F72DB",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990F3A6D_94FE_F904_41DC_3540B3978F30",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990FFA6D_94FE_F904_41DB_C9CCDC1D84F1",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98ABB85C_93C2_64A5_41D8_580F50A64C61_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_990F8A6D_94FE_F904_41CA_0922492BA50C",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEB4A85_94FE_F905_41B2_456470903189",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEBDA85_94FE_F905_416C_FFD944A3DF50",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEA7A85_94FE_F905_41B6_5C4F6C5D6E82",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98B82B72_93C2_5B7D_41A7_17258A2FAE61_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AEAFA85_94FE_F905_41C2_53B96642E6EF",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADDDA89_94FE_F90D_41B1_47AB1E98C905",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADC5A8A_94FE_F90C_41C9_7EDC0F1AA271",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_98AB52F7_93C3_E563_41DE_06760A2746A1_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADD6A8A_94FE_F90C_418C_E2BAED330444",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE60A88_94FE_F90B_41C2_B46E3481AEBC",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE6AA88_94FE_F90B_41D1_A19900229857",
 "frameCount": 22,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_984E2C7C_93C2_3D65_41D4_2249DC802C86_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AE14A88_94FE_F90B_41CB_C56449E5111D",
 "frameCount": 22,
 "colCount": 4
},
{
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 },
 "horizontalAlign": "center",
 "height": 60,
 "maxHeight": 60,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "data": {
  "name": "IconButton TWITTER"
 },
 "horizontalAlign": "center",
 "height": 58,
 "visible": false,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 1,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "paddingRight": 0,
 "propagateClick": true,
 "maxWidth": 58,
 "data": {
  "name": "IconButton FB"
 },
 "horizontalAlign": "center",
 "height": 58,
 "visible": false,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "width": 120,
 "minHeight": 1,
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "backgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverShadow": false,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "mode": "push",
 "label": "HOUSE INFO",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "visible": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button house info"
 },
 "backgroundColorRatios": [
  0
 ],
 "fontSize": 12,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "bold",
 "iconWidth": 0
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 130,
 "minHeight": 1,
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "mode": "push",
 "label": "PANORAMA LIST",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button panorama list"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": 12,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "width": 90,
 "minHeight": 1,
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "mode": "push",
 "label": "LOCATION",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button location"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": 12,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 103,
 "minHeight": 1,
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "mode": "push",
 "label": "FLOORPLAN",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "visible": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button floorplan"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": 12,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 112,
 "minHeight": 1,
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "mode": "push",
 "label": "PHOTOALBUM",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "visible": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button photoalbum"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": 12,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "width": 90,
 "minHeight": 1,
 "fontFamily": "Montserrat",
 "layout": "horizontal",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "iconHeight": 32,
 "pressedBackgroundOpacity": 1,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "mode": "push",
 "label": "REALTOR",
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "visible": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button realtor"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": 12,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "bold",
 "iconWidth": 32
},
{
 "layout": "absolute",
 "paddingBottom": 0,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "layout": "vertical",
 "paddingBottom": 20,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 0,
 "transparencyActive": false,
 "height": "75%",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "cursor": "hand"
},
{
 "layout": "absolute",
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "height": "100%",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "layout": "vertical",
 "paddingBottom": 20,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "height": "100%",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 0,
 "transparencyActive": false,
 "height": "75%",
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "width": "25%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "layout": "absolute",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 70,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemThumbnailScaleMode": "fit_outside",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "itemPaddingLeft": 3,
 "paddingLeft": 70,
 "verticalAlign": "middle",
 "itemMaxWidth": 1000,
 "itemThumbnailWidth": 220,
 "class": "ThumbnailGrid",
 "scrollBarWidth": 10,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "itemThumbnailOpacity": 1,
 "itemLabelPosition": "bottom",
 "selectedItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "itemThumbnailShadow": false,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelGap": 7,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontColor": "#666666",
 "paddingRight": 70,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemThumbnailShadow": true,
 "itemOpacity": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailBorderRadius": 0,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemMode": "normal",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "itemHorizontalAlign": "center",
 "minHeight": 1,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemMinHeight": 50,
 "itemThumbnailHeight": 125,
 "selectedItemLabelFontWeight": "bold",
 "itemMaxHeight": 1000,
 "itemMinWidth": 50,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "minWidth": 1,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "backgroundOpacity": 0.05,
 "scrollBarMargin": 2,
 "itemWidth": 220,
 "shadow": false,
 "itemBackgroundOpacity": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontSize": 14,
 "itemPaddingBottom": 3,
 "itemHeight": 156,
 "paddingTop": 10,
 "borderRadius": 5,
 "itemLabelFontFamily": "Montserrat",
 "itemLabelTextDecoration": "none",
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "normal",
 "propagateClick": false,
 "data": {
  "name": "ThumbnailList"
 },
 "horizontalAlign": "center",
 "itemBorderRadius": 0,
 "itemLabelHorizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "gap": 26,
 "itemVerticalAlign": "top"
},
{
 "layout": "absolute",
 "paddingBottom": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "width": "85%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "layout": "vertical",
 "paddingBottom": 20,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "width": "15%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 400,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 0,
 "transparencyActive": false,
 "height": "75%",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "MapViewer",
 "transitionMode": "blending",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "toolTipBorderRadius": 3,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowSpread": 0,
 "toolTipDisplayTime": 600,
 "progressHeight": 6,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "paddingRight": 0,
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressLeft": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontSize": 12,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeight": 10,
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "minHeight": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 1,
 "toolTipShadowColor": "#333333",
 "shadow": false,
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "toolTipFontColor": "#606060",
 "data": {
  "name": "Floor Plan"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0
},
{
 "paddingBottom": 0,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "layout": "absolute",
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "layout": "absolute",
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "height": "100%",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "layout": "absolute",
 "paddingBottom": 0,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "layout": "absolute",
 "paddingBottom": 0,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "width": "55%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10
},
{
 "layout": "vertical",
 "paddingBottom": 20,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "width": "45%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 60,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "paddingBottom": 0,
 "transparencyActive": false,
 "height": "75%",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "height": "100%",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "class": "Image",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 2000,
 "data": {
  "name": "Image"
 },
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "scaleMode": "fit_outside"
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "layout": "vertical",
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "right": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "toolTipBorderRadius": 3,
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowSpread": 0,
 "toolTipDisplayTime": 600,
 "progressHeight": 6,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "paddingRight": 0,
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressLeft": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontSize": 12,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeight": 10,
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "minHeight": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 1,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "bottom": 0,
 "top": 0,
 "toolTipFontWeight": "normal",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "toolTipFontColor": "#606060",
 "data": {
  "name": "Viewer info 1"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0
},
{
 "paddingBottom": 0,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "height": "100%",
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container arrows"
 },
 "horizontalAlign": "left",
 "layout": "horizontal",
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "layout": "vertical",
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "height": "100%",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "height": "100%",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "minHeight": 100,
 "paddingLeft": 80,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "paddingBottom": 0,
 "transparencyActive": false,
 "height": "36.14%",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "right": 20,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "IconButton",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "top": 20,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "maxHeight": 60,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "minHeight": 1,
 "right": "0%",
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "class": "WebFrame",
 "minWidth": 1,
 "shadow": false,
 "bottom": "0%",
 "top": "0%",
 "backgroundOpacity": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "insetBorder": false,
 "borderRadius": 0,
 "scrollEnabled": true,
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "layout": "vertical",
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "height": "100%",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "minHeight": 100,
 "paddingLeft": 80,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "paddingBottom": 0,
 "transparencyActive": false,
 "height": "36.14%",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "right": 20,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "IconButton",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "top": 20,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "maxHeight": 60,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "height": "100%",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "minHeight": 100,
 "paddingLeft": 80,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.15vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.15vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "paddingBottom": 0,
 "transparencyActive": false,
 "height": "36.14%",
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "width": "100%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "right": 20,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "IconButton",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "top": 20,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "maxHeight": 60,
 "cursor": "hand"
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "toolTipBorderRadius": 3,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowSpread": 0,
 "toolTipDisplayTime": 600,
 "progressHeight": 6,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "paddingRight": 0,
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressLeft": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontSize": 12,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeight": 10,
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "minHeight": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 1,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "toolTipFontColor": "#606060",
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0
},
{
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "cursor": "hand",
 "paddingBottom": 0,
 "transparencyActive": false,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "width": "14.22%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 50,
 "shadow": false,
 "bottom": "20%",
 "top": "20%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "maxHeight": 60
},
{
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "cursor": "hand",
 "paddingBottom": 0,
 "transparencyActive": false,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "width": "14.22%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "right": 10,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 50,
 "shadow": false,
 "bottom": "20%",
 "top": "20%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "maxHeight": 60
},
{
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "toolTipBorderRadius": 3,
 "height": "100%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowSpread": 0,
 "toolTipDisplayTime": 600,
 "progressHeight": 6,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "paddingRight": 0,
 "progressBorderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressLeft": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarProgressOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontSize": 12,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeight": 10,
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "minHeight": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 1,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "toolTipFontColor": "#606060",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0
},
{
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "cursor": "hand",
 "paddingBottom": 0,
 "transparencyActive": false,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 50,
 "shadow": false,
 "bottom": "20%",
 "top": "20%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "maxHeight": 60
},
{
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "cursor": "hand",
 "paddingBottom": 0,
 "transparencyActive": false,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "right": 10,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 50,
 "shadow": false,
 "bottom": "20%",
 "top": "20%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "maxHeight": 60
},
{
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "paddingBottom": 0,
 "transparencyActive": false,
 "height": "10%",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "right": 20,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "IconButton",
 "minWidth": 50,
 "backgroundOpacity": 0,
 "top": 20,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "maxHeight": 60,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "height": "100%",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "bottom",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "class": "Image",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "top": "0%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 2000,
 "data": {
  "name": "Image"
 },
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "scaleMode": "fit_outside"
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 60,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0
},
{
 "layout": "vertical",
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "layout": "horizontal",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.58vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": "46%",
 "minHeight": 1,
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "mode": "push",
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": false,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button"
 },
 "backgroundColorRatios": [
  0
 ],
 "fontSize": "3vh",
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "normal",
 "iconWidth": 32
},
{
 "paddingBottom": 0,
 "transparencyActive": true,
 "height": "8%",
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "width": "12%",
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 70,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 150,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "maxHeight": 150,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "class": "Container",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "height": "30%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Container separator"
 },
 "horizontalAlign": "left",
 "layout": "absolute",
 "gap": 10
},
{
 "paddingBottom": 0,
 "transparencyActive": true,
 "height": "8%",
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "width": "12%",
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "minWidth": 70,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 150,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "maxHeight": 150,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "cursor": "hand"
},
{
 "paddingBottom": 20,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "width": "46%",
 "minHeight": 1,
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "mode": "push",
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": false,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button"
 },
 "backgroundColorRatios": [
  0
 ],
 "fontSize": "3vh",
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "normal",
 "iconWidth": 32
},
{
 "paddingBottom": 20,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.6vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.47vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.12vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontColor": "#FFFFFF",
 "paddingBottom": 0,
 "textDecoration": "none",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "width": 207,
 "minHeight": 1,
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "class": "Button",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "borderColor": "#000000",
 "backgroundOpacity": 0.7,
 "height": 59,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "mode": "push",
 "label": "lorem ipsum",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "shadowSpread": 1,
 "propagateClick": false,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#04A3E1"
 ],
 "visible": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button"
 },
 "backgroundColorRatios": [
  0
 ],
 "fontSize": 34,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "normal",
 "iconWidth": 32
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "minHeight": 1,
 "paddingLeft": 0,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "height": "45%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "layout": "horizontal",
 "paddingBottom": 0,
 "children": [
  "this.Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "width": "100%",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "- content"
 },
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10
},
{
 "paddingBottom": 0,
 "id": "Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904",
 "width": "25.177%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "url": "skin/Image_AAEAE258_BAF1_0DDD_41E6_FB144FCE6904.jpg",
 "class": "Image",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "height": "30.5%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 983,
 "data": {
  "name": "Image4092"
 },
 "horizontalAlign": "center",
 "maxHeight": 1219,
 "scaleMode": "fit_inside"
},
{
 "paddingBottom": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "72.222%",
 "minHeight": 1,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#233142;font-size:2.35vh;font-family:'Bebas Neue Bold';\">NICHOLAS CUMMINGS</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.79vh;font-family:'Bebas Neue Bold';\">Licensed Realtor</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.79vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">Tlf.: +1 (253) 225-0548</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC@JohnLScott.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.79vh;font-family:'Bebas Neue Bold';\">NicholasC.JohnLScott.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">Meet Nick Cummings, your trusted real estate advisor in Kitsap County, Washington. As a native of this beautiful region, I bring a deep understanding of its neighborhoods, communities, and market trends. While my experience in the real estate industry may be modest, my passion for helping clients achieve their homeownership dreams is boundless.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">With a genuine love for Kitsap County and its unique charm, I am committed to providing personalized service tailored to each client's needs and preferences. Whether you're buying, selling, or investing in real estate, I am here to guide you every step of the way. Holding a realtor license, I adhere to the highest standards of professionalism and ethics, ensuring a seamless and rewarding real estate experience for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">My approach is rooted in transparency, integrity, and open communication. I take the time to listen to my clients' goals and concerns, empowering them with the knowledge and resources they need to make informed decisions. From navigating the complexities of the local market to negotiating the best possible deals, I am dedicated to achieving exceptional results for my clients.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.12vh;font-family:'Bebas Neue Bold';\">As your local real estate expert, I am honored to serve the diverse communities of Kitsap County. Whether you're searching for your dream home, selling your property, or exploring investment opportunities, I am here to turn your real estate aspirations into reality. Contact me today, and let's embark on this exciting journey together</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 }
}],
 "class": "Player",
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "mouseWheelEnabled": true,
 "propagateClick": true,
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "data": {
  "name": "Player468"
 },
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "gap": 10,
 "mobileMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
