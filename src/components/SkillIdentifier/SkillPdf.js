import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, ReactPDF } from '@react-pdf/renderer';
import styled from 'styled-components'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  }
});

// Create Document Component
export const MyDocument = ({skillList}) => {

/* const [list, setList] = useState([])
useEffect(() => {
    setList(skillList)

    console.log(skillList)
}) */
    
return(

  <Document>
    <Page wrap size="A4" orientation='landscape' style={styles.page}>
      <View style={styles.section}>

{/*       <Text render={({ skillList }) => (
        skillList
      )} fixed /> */}


<View style={styles.column}>

   {skillList.map(skill => <Text>{skill}</Text>)}

</View> 

{/*         <Text render={({list}) => (
        list.map(skill => <p>{skill}</p>)
        )} /> */}
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
)
  
}