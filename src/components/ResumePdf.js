import React from 'react';
import { Page, Text, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const ResumePdf = ({ formData }) => {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
    },
    section: {
      marginBottom: 10,
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 12,
    },
  });

  return (
    <PDFDownloadLink
      document={
        <Document>
          <Page style={styles.page}>
            <Text style={styles.heading}>{formData.name}</Text>
            <Text style={styles.text}>Email: {formData.email}</Text>
            <Text style={styles.text}>Phone: {formData.phone}</Text>
            <Text style={styles.text}>Experience: {formData.experience}</Text>
            <Text style={styles.text}>Skills: {formData.skills}</Text>
          </Page>
        </Document>
      }
      fileName="resume.pdf"
    >
      {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
    </PDFDownloadLink>
  );
};

export default ResumePdf;
