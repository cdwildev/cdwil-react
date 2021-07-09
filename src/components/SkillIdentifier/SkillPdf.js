import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  ReactPDF,
  Font,
  Image,
} from "@react-pdf/renderer";

import Starmap from "./starmap.jpg";
import Starlist from "./starlist.jpg";
import styled from "styled-components";

const sampleText = 'one two three four five six seven eight nine ten eleven twelve'

export const MyDocument = ({ skillList, softSkillList, softwareList, hardSkillList }) => {

  const limitText = (el) => {

    if(el.length < 30){
      return el
    } else{
      return el.substring(0,30)+'...'
    }
  }


  return (
    <Document>
      
      <Page wrap size={[1920, 1080]} style={styles.page}>
        <Image style={styles.image} src={Starmap} />
        <Text style={styles.oneOne}>{ skillList.length > 0 ? limitText(skillList[0]) : limitText('') }</Text>
        <Text style={styles.oneTwo}>{ skillList.length > 1 ? limitText(skillList[1]) : limitText('') }</Text>
        <Text style={styles.oneThree}>{ skillList.length > 2 ? limitText(skillList[2]) : limitText('') }</Text>

        <Text style={styles.twoOne}>{ skillList.length > 3 ? limitText(skillList[3]) : limitText('') }</Text>
        <Text style={styles.twoTwo}>{ skillList.length > 4 ? limitText(skillList[4]) : limitText('') }</Text>
        <Text style={styles.twoThree}>{ skillList.length > 5 ? limitText(skillList[5]) : limitText('') }</Text>

        <Text style={styles.threeOne}>{ skillList.length > 6 ? limitText(skillList[6]) : limitText('') }</Text>
        <Text style={styles.threeTwo}>{ skillList.length > 7 ? limitText(skillList[7]) : limitText('') }</Text>
        <Text style={styles.threeThree}>{ skillList.length > 8 ? limitText(skillList[8]) : limitText('') }</Text>

        <Text style={styles.fourOne}>{ skillList.length > 9 ? limitText(skillList[9]) : limitText('') }</Text>
        <Text style={styles.fourTwo}>{ skillList.length > 10 ? limitText(skillList[10]) : limitText('') }</Text>
        <Text style={styles.fourThree}>{ skillList.length > 11 ? limitText(skillList[11]) : limitText('') }</Text>

        <Text style={styles.fiveOne}>{ skillList.length > 12 ? limitText(skillList[12]) : limitText('') }</Text>
        <Text style={styles.fiveTwo}>{ skillList.length > 13 ? limitText(skillList[13]) : limitText('') }</Text>
        <Text style={styles.fiveThree}>{ skillList.length > 14 ? limitText(skillList[14]) : limitText('') }</Text>

        <Text style={styles.sixOne}>{ skillList.length > 15 ? limitText(skillList[15]) : limitText('') }</Text>
        <Text style={styles.sixTwo}>{ skillList.length > 16 ? limitText(skillList[16]) : limitText('') }</Text>


        <Text style={styles.sevenOne}>{ skillList.length > 17 ? limitText(skillList[17]) : limitText('') }</Text>
        <Text style={styles.sevenTwo}>{ skillList.length > 18 ? limitText(skillList[18]) : limitText('') }</Text>

        <Text style={styles.eightOne}>{ skillList.length > 19 ? limitText(skillList[19]) : limitText('') }</Text>
        <Text style={styles.eightTwo}>{ skillList.length > 20 ? limitText(skillList[20]) : limitText('') }</Text>


        <Text style={styles.nineOne}>{ skillList.length > 21 ? limitText(skillList[21]) : limitText('') }</Text>
        <Text style={styles.nineTwo}>{ skillList.length > 22 ? limitText(skillList[22]) : limitText('') }</Text>
        <Text style={styles.nineThree}>{ skillList.length > 23 ? limitText(skillList[23]) : limitText('') }</Text>

        <Text style={styles.tenOne}>{ skillList.length > 24 ? limitText(skillList[24]) : limitText('') }</Text>
        <Text style={styles.tenTwo}>{ skillList.length > 25 ? limitText(skillList[25]) : limitText('') }</Text>
        <Text style={styles.tenThree}>{ skillList.length > 26 ? limitText(skillList[26]) : limitText('') }</Text>

        <Text style={styles.elevenOne}>{ skillList.length > 27 ? limitText(skillList[27]) : limitText('') }</Text>
        <Text style={styles.elevenTwo}>{ skillList.length > 28 ? limitText(skillList[28]) : limitText('') }</Text>
        <Text style={styles.elevenThree}>{ skillList.length > 29 ? limitText(skillList[29]) : limitText('') }</Text>
  

      </Page>
      <Page wrap size={[1920, 1080]} style={styles.page}>
        <Image style={styles.image} src={Starlist} />

        <View style={styles.section}>
          <View style={styles.column}>
            <View style={styles.listColumn}>
              {softSkillList.map((skill) => (
                <Text style={styles.listItem}>{skill}</Text>
              ))}
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.listColumn}>
              {hardSkillList.map((skill) => (
                <Text style={styles.listItem}>{skill}</Text>
              ))}
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.listColumn}>
              {softwareList.map((skill) => (
                <Text style={styles.listItem}>{skill}</Text>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  image: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    fontWeight: "900",
    alignItems: "center",
    position: "absolute",
    top: "50px",
    fontSize: "96px",
    padding: "0 45px",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    height: "100%",
    position: "absolute",
    padding: " 400px 145px 0 145px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    fontSize: "16px",
    width: "530px",
    height: "656px",

    borderRadius: "25px",
    alignItems: "center",
  },

  listColumn: {
    fontSize: "16px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",

    height: "500px",
    overflow: "hidden",
  },
  listItem: {
    fontSize: "16px",
    width: "180px",

    margin: "10 10",
  },
  h2: {
    display: "flex",
    fontSize: "35px",
    fontWeight: "900",
    margin: "45px 0 25px",
    alignItems: "center",

  },
  oneOne: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "159px",
    left: "771px",
    color: "white",
    height:'58px',
    width: '164px',
    
    backgroundColor: "transparent",
    
  },
  oneTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "234px",
    left: "798px",
    color: "white",
    height:'18px',
    width: '164px',
    
    backgroundColor: "transparent",
  },
  oneThree: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "268px",
    left: "718px",
    color: "white",
    height:'58px',
    width: '164px',
  
    backgroundColor: "transparent",
  },



  twoOne: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "379px",
    left: "628px",
    color: "white",
    height:'18px',
    width: '197px',
    
    backgroundColor: "transparent",
    
  },
  twoTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "402px",
    left: "675px",
    color: "white",
    height:'50px',
    width: '189px',
   
    backgroundColor: "transparent",
  },
  twoThree: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "468px",
    left: "667px",
    color: "white",
    height:'60px',
    width: '197px',

    backgroundColor: "transparent",
  },



  threeOne: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "154px",
    left: "984px",
    color: "white",
    height:'18px',
    width: '171px',
    
    backgroundColor: "transparent",
    
  },
  threeTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "207px",
    left: "1027px",
    color: "white",
    height:'18px',
    width: '134px',
  
    backgroundColor: "transparent",
  },
  threeThree: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "185px",
    left: "1083px",
    color: "white",
    height:'18px',
    width: '171px',
    
    backgroundColor: "transparent",
  },




  fourOne: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "331px",
    left: "984px",
    color: "white",
    height:'18px',
    width: '171px',
    
    backgroundColor: "transparent",
    
  },
  fourTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "381px",
    left: "939px",
    color: "white",
    height:'18px',
    width: '171px',
  
    backgroundColor: "transparent",
  },
  fourThree: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "416px",
    left: "905px",
    color: "white",
    height:'18px',
    width: '171px',
    
    backgroundColor: "transparent",
  },


  fiveOne: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign:'right',
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "462px",
    left: "887px",
    color: "white",
    height:'18px',
    width: '119px',
    
    backgroundColor: "transparent",
    
  },
  fiveTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "461px",
    left: "1084px",
    color: "white",
    height:'18px',
    width: '171px',
  
    backgroundColor: "transparent",
  },
  fiveThree: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "514px",
    left: "1059px",
    color: "white",
    height:'18px',
    width: '119px',
    
    backgroundColor: "transparent",
  },




  sixOne: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign:'left',
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "303px",
    left: "1187px",
    color: "white",
    height:'18px',
    width: '119px',
    
    backgroundColor: "transparent",
    
  },
  sixTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "363px",
    left: "1187px",
    color: "white",
    height:'18px',
    width: '164px',
  
    backgroundColor: "transparent",
  },


  sevenOne: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign:'left',
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "578px",
    left: "543px",
    color: "white",
    height:'18px',
    width: '197px',
    
    backgroundColor: "transparent",
    
  },
  sevenTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "616px",
    left: "772px",
    color: "white",
    height:'18px',
    width: '145px',
  
    backgroundColor: "transparent",
  },


    eightOne: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign:'left',
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "873px",
    left: "842px",
    color: "white",
    height:'18px',
    width: '119px',
    
    backgroundColor: "transparent",
    
  },
  eightTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "873px",
    left: "1031px",
    color: "white",
    height:'18px',
    width: '119px',
  
    backgroundColor: "transparent",
  },



  nineOne: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign:'left',
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "804px",
    left: "674px",
    color: "white",
    height:'92px',
    width: '73px',
    
    backgroundColor: "transparent",
    
  },
  nineTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "783px",
    left: "842px",
    color: "white",
    height:'18px',
    width: '171px',
  
    backgroundColor: "transparent",
  },
  nineThree: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "735px",
    left: "861px",
    color: "white",
    height:'18px',
    width: '145px',
    
    backgroundColor: "transparent",
  },


  tenOne: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign:'right',
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "662px",
    left: "784px",
    color: "white",
    height:'46px',
    width: '145px',
    
    backgroundColor: "transparent",
    
  },
  tenTwo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "627px",
    left: "1007px",
    color: "white",
    height:'18px',
    width: '119px',
  
    backgroundColor: "transparent",
  },
  tenThree: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "679px",
    left: "1048px",
    color: "white",
    height:'18px',
    width: '119px',
    
    backgroundColor: "transparent",
  },



  elevenOne: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign:'right',
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "540px",
    left: "1196px",
    color: "white",
    height:'18px',
    width: '119px',
    
    backgroundColor: "transparent",
    
  },
  elevenTwo: {
    display: "flex",
    textAlign:'right',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "588px",
    left: "1164px",
    color: "white",
    height:'53px',
    width: '119px',
  
    backgroundColor: "transparent",
  },
  elevenThree: {
    display: "flex",
    textAlign:'right',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "12px",
    position: "absolute",
    top: "740px",
    left: "1144px",
    color: "white",
    height:'18px',
    width: '119px',
    
    backgroundColor: "transparent",
  },
  
});
