import React from 'react';

const graphEx = {
    "nodes": [
        { "id": 1, "name": "USD" },
        { "id": 2, "name": "GBP" },
        { "id": "4", "name": "EUR" },
        { "id": "8", "name": "JYP" },
        { "id": "16", "name": "GLD" },
        { "id": "11", "name": "SLV" },
        { "id": "12", "name": "AUD" },
        { "id": "14", "name": "CAD" },
        { "id": "18", "name": "MXN" },
        { "id": "116", "name": "BIT" }
    ],
    "links": [
        { "source": 2, "target": 1, "value": 1 },
       // { "source": "1", "target": "2", "value": 1 },
        { "source": "2", "target": "4", "value": 2 },
        { "source": "4", "target": "8", "value": 3 },
        { "source": "4", "target": "8", "value": 4 },
        { "source": "8", "target": "16", "value": 5 },
        { "source": "16", "target": "1", "value": 6 }
    ]
}

class CytoDemo extends React.Component {



    render() {

    }
}