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

import Bg from './career-pdf-bg.jpg'
import styled from "styled-components";

const sampleText = 'one two three four five six seven eight nine ten eleven twelve'

export const MyDocument = ({  selectedIndustries, selectedSkills, selectedValues, filteredIndustries }) => {


  return (
    <Document>

      <Page wrap size={[1920, 1080]} style={styles.page}>
      <Image style={styles.image} src={Bg} />

        <View style={styles.container}>
          
          <Text style={styles.titleUI}>Your Career Pathways</Text>

              <View style={styles.gridUI}>
                {filteredIndustries.map(skill => <View  style={styles.careerUI}><Text>{skill.title}</Text></View>)}
              </View>
          
              <View style={styles.gridUI}>
                {selectedIndustries.map(skill => <View  style={styles.industryUI}><Text>{skill.title}</Text></View>)}
              </View>
          
              <View style={styles.gridUI}>
              {selectedSkills.map(skill => <View  style={styles.skillUI}><Text>{skill.title}</Text></View>)}
              </View>
          
                        <View style={styles.gridUI}>
                        {selectedValues.map(skill => <View  style={styles.valueUI}><Text>{skill.title}</Text></View>)}
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
    backgroundColor: "black",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
   	height: "100%",
    alignItems: "center",
    position: 'absolute',
    top: '0'
  },

  gridUI: {
  
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    margin: "10px 0"

  },
  
    titleUI: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
	color: "white",
    padding: "20px 40px",
    borderRadius: "50px",
    fontSize: "36px",


  },

  careerUI: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: "20px 40px",
    borderRadius: "50px",
    fontSize: "18px",
      margin: '10px',
    fontWeight: '800',
    

  },
  
    industryUI: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
      color: "white",
    borderRadius: "50px",
      borderStyle:"solid",
      borderColor: "white",
      borderWidth: "3px",
        margin: '5px'

  },
  
      skillUI: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "14px",
          margin: '5px',
        color: "white"
      

  },
      valueUI: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: "10px 20px",
    borderRadius: "10px",
    fontSize: "14px",
        margin: '5px',
        color: "white"
  },


  
});
