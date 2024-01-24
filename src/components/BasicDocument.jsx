import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image
} from "@react-pdf/renderer";

// sample data
const data = [
    {
        name: "Shrijit",
        age: 25,
        city: "New York",
        occupation: "Software Engineer",
        author: "shrijit"
    },
    {
        name: "Jane Smith",
        age: 30,
        city: "San Francisco",
        occupation: "Data Scientist",
        author: "Jane Smith"
    },
    {
        name: "Bob Johnson",
        age: 28,
        city: "Los Angeles",
        occupation: "Graphic Designer",
        author: "shBob Johnsonrijit"
    },
    // Add more objects as needed
];

// Styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#fff",
        color: "#ccc",
        flexDirection: "column",
    },
    header: {
        margin: 10,
        padding: 5,
        border: '1px solid #ccc',
        flexDirection: "row",
    },
    watermark: {
        position: 'absolute',
        top: '40%',
        left: '15%',
        fontSize: '100',
        transform: 'rotate(-50deg)',
        opacity: 0.5
    },
    footer: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 0,
        margin: 10,
        padding: 5,
        flexDirection: "row",
    },
    section: {
        padding: '5px 20px',
    },
    author: {
        marginTop: 30,
    },
    pages: {
        marginTop: 20,
        marginLeft: 110,
    },
    name: {
        marginLeft: 70,
        marginTop: 30,
    },
    viewer: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    image: {
        marginTop: 5,
        paddingLeft: 20,
        width: 150,
        height: 80,
    },
});

// Create Document Component
function BasicDocument() {
    return (
        <PDFViewer style={styles.viewer} fileName="Shrijit.pdf">
            <Document>
                {data.map((item, index) => (
                    <Page size="A4" style={styles.page} key={index}>
                        <View style={styles.header}>
                            <Image style={styles.image} src="./logo1.png" />
                            <Text style={styles.name}>Connexo Asia Limited</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>{item.name}</Text>
                        </View>
                        <View style={styles.watermark}>
                            <Text>Connexo</Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.author}>Author: Shrijit</Text>
                            <Text style={styles.name}>Connexo Asia Limited</Text>
                            <Text render={({ pageNumber, totalPages }) =>
                                `Page ${pageNumber} of ${totalPages}`
                            } style={styles.pages} />
                        </View>
                    </Page>
                ))}
            </Document>
        </PDFViewer>
    );
}
export default BasicDocument;