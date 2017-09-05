_oc=new DWObjectCode(0,4,2);
var _DWPub = new DWPublication(0,"WWII",true,1,false);
DWVariables.instance().initPublication(_DWPub,'SCORE',0, 'SCORE_VALUE',0, 'SCORE_VALUE_TOTAL',0, 'SCORE_VALUE_PERCENT',0, 'SCORE_CORRECT',0, 'SCORE_INCORRECT',0, 'SCORE_TOTAL',0, 'SCORE_PERCENT',0, 'SCORE_TOTAL_POSSIBLE',0, 'SCORE_TOTAL_QUESTIONS',0, 'SCORE_CURRENT_POSSIBLE',0, 'CHAPTER_PASSWORD',"", 'PUBLICATION_TIME',0, 'SYSTEM_TIME_YEAR',0, 'SYSTEM_TIME_MONTH',0, 'SYSTEM_TIME_DATE',0, 'SYSTEM_TIME_DAY',0, 'SYSTEM_TIME_HOUR',0, 'SYSTEM_TIME_MINUTE',0, 'SYSTEM_TIME_SECOND',0, 'SYSTEM_TIME_12HOUR',0, 'SYSTEM_TIME_AMPM',0, 'SYSTEM_DATE_FULL',"", 'SYSTEM_WIN_DIR',"", 'SYSTEM_WINSYS_DIR',"", 'SYSTEM_DOCUMENTS_DIR',"", 'SYSTEM_PROGRAMS_DIR',"", 'SYSTEM_PROGRAMDATA_DIR',"", 'SYSTEM_USERNAME',"", 'SYSTEM_PUBLICATION_DIR',"", 'SYSTEM_CD_DRIVE',"", 'SYSTEM_TEMP_DIR',"", 'PUBLICATION_TITLE',"", 'PUBLICATION_PAGE_TITLE',"", 'SYSTEM_COLOUR_DEPTH',0, 'SYSTEM_SCREEN_RES_X',0, 'SYSTEM_SCREEN_RES_Y',0, 'SYSTEM_OPERATING_SYS',0, 'SYSTEM_HAS_SOUND',"", 'LOGIN_USER_NAME',"", 'LOGIN_LEVEL_VALUE',"", 'LOGIN_LEVEL_NAME',"", 'LOGIN_FIRSTNAME',"", 'LOGIN_SURNAME',"", 'LOGIN_LEARNER_ID',"", 'LOGIN_TUTOR',"", 'LOGIN_DEPT',"", 'LOGIN_MANAGER',"", 'LOGIN_ORGANIZATION',"", 'LOGIN_USER_EMAIL',"", 'LOGIN_SCORE_EMAIL',"", 'USER_VOL',0, 'RADIO_GROUP_1_ID',-1, 'RADIO_GROUP_1_NAME',"", 'RADIO_GROUP_2_ID',-1, 'RADIO_GROUP_2_NAME',"", 'RADIO_GROUP_3_ID',-1, 'RADIO_GROUP_3_NAME',"", 'RADIO_GROUP_4_ID',-1, 'RADIO_GROUP_4_NAME',"", 'Q_SCORE_VALUE',0, 'Q_SCORE_VALUE_TOTAL',0, 'Q_SCORE_VALUE_PERCENT',0, 'Q_SCORE_CORRECT',0, 'Q_SCORE_INCORRECT',0, 'Q_SCORE_TOTAL',0, 'Q_SCORE_TOTAL_POSSIBLE',0, 'Q_SCORE_TOTAL_QUESTIONS',0, 'Q_SCORE_ANSWERED_QUESTIONS',0, 'Q_SCORE_CURRENT_POSSIBLE',0, 'Q_SCORE_VALUE_POSSIBLE',0, 'Q_SCORE_VALUE_TOTAL_REMAINING',0, 'Q_SCORE_OVERALL_PERCENT',0, 'Q_SCORE_COURSE_SUMMARY',"", 'Q_SCORE_PERCENT_POSSIBLE',0, 'Q_SCORE_COURSE_FINISHED',"", 'Q_SCORE_COURSE_PASSED',"", 'Q_COURSE_ADMINISTRATOR',"", 'Q_COURSE_ADMINISTRATOR_EMAIL',"", 'Q_TOPIC_NAME',new Object, 'Q_TOPIC_PASS_VALUE',new Object, 'Q_TOPIC_CRITICAL_PASS',new Object, 'Q_TOPIC_CURRENT_VALUE',new Object, 'Q_TOPIC_CURRENT_PERCENT',new Object, 'Q_TOPIC_CURRENT_POSSIBLE',new Object, 'Q_TOPIC_TOTAL_POSSIBLE',new Object, 'Q_TOPIC_CORRECT',new Object, 'Q_TOPIC_INCORRECT',new Object, 'Q_TOPIC_ANSWERED_QUESTIONS',new Object, 'Q_TOPIC_TOTAL_QUESTIONS',new Object, 'Q_TOPIC_VALUE_TOTAL_REMAINING',new Object, 'Q_TOPIC_OVERALL_PERCENT',new Object, 'Q_TOPIC_PASSED',new Object, 'Q_TOPIC_FINISHED',new Object);
if(true){var topics = new Array(1);topics[0] = new DWCBTTopic('Topic 1', 100.000000, true, false);DWCBTManager.instance().initialise(topics, '', '', '');}
var GrandadWWII = new DWChapter();
GrandadWWII.setObjectCode(new DWObjectCode(0,2,1));
_DWPub.addChild(GrandadWWII);
_DWPub.WWII1=WWII1=new DWPage('WWII1',_oc,720,1280,1024,768,2147483647,2147483647,true,0,false);
GrandadWWII.addChild(WWII1);
_oc1=new DWObjectCode(1,3,2);
tr=new DWRevealTransition(1100,true).addBlock(0,0,1000,1000,0,0,1000,1000,0,100,-0.0,1.0,0);
_oc2=new DWObjectCode(1,2,4);
_c=new DWColour(124,121,102,1.0);
_c1=new DWColour(192,192,192,0.8);
_c2=new DWColour(142,143,143,0.8);
_c3=new DWColour(255,255,255,1.0);
var _bbr=new DWLinearGradientBrush(Math.PI/2).addColourStop(0,_c3).addColourStop(50,_c);
ape=new DWButtonElement(_bbr,2,null,_c2, (null), 3.0);
ape1=new DWButtonElement(_bbr,2,_c1,_c2, (null), 3.0);
_c4=new DWColour(102,99,84,1.0);
var _bbr1=new DWLinearGradientBrush(Math.PI/2).addColourStop(0,_c3).addColourStop(50,_c4);
ape2=new DWButtonElement(_bbr1,2,null,_c2, (null), 3.0);
ape3=new DWButtonElement(_bbr1,2,_c1,_c2, (null), 3.0);
_oc3=new DWObjectCode(1,4,4);
_oc4=new DWObjectCode(1,3,3);
_oc5=new DWObjectCode(1,3,1);
_oc6=new DWObjectCode(2,0,1);
_oc7=new DWObjectCode(1,10,2);
_c5=new DWColour(0,101,148,1.0);
_c6=new DWColour(0,101,148,0.5);
_pp=['M',-265.000,-235.000,'L',85.000,-345.000,'L',265.000,235.000,'L',-85.000,345.000,'L',-265.000,-235.000];
var _br=new DWSolidBrush(_c5);
var _pn=new DWPen(_c6,4.0,2,2,0.0);
var _pl=new DWPolygon(_br,_pn,null,_pp);
tr1=new DWRevealTransition(1000,false).addBlock(0,0,1000,1000,0,0,1000,1000,0,100,-0.0,1.0,0);
_oc8=new DWObjectCode(1,10,3);
_c7=new DWColour(0,101,148,1.0);
_pp1=['M',-165.000,-170.000,'L',-5.000,-120.000,'L',-5.000,-90.000,'L',45.000,-70.000,'L',75.000,-80.000,'L',165.000,130.000,'L',115.000,170.000,'L',-165.000,170.000,'L',-165.000,-170.000];
var _br1=new DWSolidBrush(_c7);
var _pl1=new DWPolygon(_br1,_pn,null,_pp1);
_oc9=new DWObjectCode(1,10,4);
_pp2=['M',-215.303,-435.500,'L',355.500,-306.830,'L',275.387,89.080,'L',175.246,59.386,'L',-185.261,168.261,'L',-135.190,386.011,'L',-126.177,435.500,'L',-355.500,376.114,'L',-215.303,-435.500];
var _pl2=new DWPolygon(_br1,_pn,null,_pp2);
_oc10=new DWObjectCode(1,4,5);

WWII1.init('WWIID',function(){var p = this;p.Letter=new DWImage('LetterD',_oc1,'Letter',405.0,614.0,1250,1228);
p.ClickAnItem=new DWButton('ClickAnItemD',_oc2,'ClickAnItem',360.0,1251.5,720,37);
p.__2_=new DWText('__2_G',_oc3,' (2)',0.0,0.0,712,29);
p.Army_Record=new DWImage('Army_RecordD',_oc4,'Army Record',352.0,277.0,762,428);
p.ArmyPort=new DWImage('ArmyPortD',_oc5,'ArmyPort',365.0,590.5,710,1163);
p.Minstral_Boy1_ogg=new DWAudio(_oc6);
p.PhotoHS=new DWVector('PhotoHSD',_oc7,'PhotoHS',445.0,875.0,534,694);
p.IdentityHS=new DWVector('IdentityHSD',_oc8,'IdentityHS',175.0,1060.0,334,344);
p.LetterHS=new DWVector('LetterHSD',_oc9,'LetterHS',355.5,455.5,715,875);
p.Royal=new DWText('RoyalD',_oc10,'Royal',255.0,1030.0,450,180);
p.Letter.setHideTransition(tr);
p.Letter.setInitiallyHidden( true, -1 );
p.ClickAnItem.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.Royal.hideAction.bind(p.Royal,null)),new DWSimpleAction(p.ArmyPort.hideAction.bind(p.ArmyPort,null)),new DWSimpleAction(p.Army_Record.hideAction.bind(p.Army_Record,null)),new DWSimpleAction(p.Letter.hideAction.bind(p.Letter,null))))
		)
	)
));
p.ClickAnItem.addChildren(p.__2_);
p.ClickAnItem.initAppearance(1, new DWAppearance( ape)).initAppearance(2, new DWAppearance( ape1)).initAppearance(5, new DWAppearance( ape2)).initAppearance(6, new DWAppearance( ape3)).initAppearance(4, new DWAppearance( ape)).initAppearance(7, new DWAppearance( ape2));
p.Army_Record.setHideTransition(tr);
p.Army_Record.setInitiallyHidden( true, -1 ).setInitialEffectsTransforms( 10.00, 1.00, 1.00, 0.00, 0.00 );
p.ArmyPort.setHideTransition(tr);
p.ArmyPort.setInitiallyHidden( true, -1 );
p.Minstral_Boy1_ogg.addResource('Minstral Boy1.mp3','audio/mpeg;codecs="mp3"').addResource('Minstral Boy1.ogg','audio/ogg;codecs="vorbis"');
p.PhotoHS.addPolygons(0,null,0,_pl);
p.PhotoHS.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWActionGroup(new DWActionList(new DWSimpleAction(p.Royal.showAction.bind(p.Royal,tr1)),new DWSimpleAction(p.ArmyPort.showAction.bind(p.ArmyPort,tr1))))
		)
	)
));
p.PhotoHS.setIgnoreTransparentArea(true);
p.IdentityHS.addPolygons(0,null,0,_pl1);
p.IdentityHS.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWSimpleAction(p.Army_Record.showAction.bind(p.Army_Record,tr1))
		)
	)
));
p.IdentityHS.setIgnoreTransparentArea(true);
p.LetterHS.addPolygons(0,null,0,_pl2);
p.LetterHS.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnLeftClick')
		),
		new DWActionList(
			new DWSimpleAction(p.Letter.showAction.bind(p.Letter,tr1))
		)
	)
));
p.LetterHS.setIgnoreTransparentArea(true);
p.Royal.setInitiallyHidden( true, -1 );
WWII1.addChildren(p.Letter,p.ClickAnItem,p.Army_Record,p.ArmyPort,p.Minstral_Boy1_ogg,p.PhotoHS,p.IdentityHS,p.LetterHS,p.Royal);
WWII1.initActions(new DWEventList(
	new DWEvent(
		new DWTriggerList(
			new DWSimpleTrigger('OnShow')
		),
		new DWActionList(
			new DWPlaySoundAction(0, 100, false, true, -1, p.Minstral_Boy1_ogg)
		)
	)
));
});_DWPub.setCurrentPage(WWII1);
window.onload=_DWPub.start.bind(_DWPub);
window.onunload=function(){};
