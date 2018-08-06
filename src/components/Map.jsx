import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/china';
import 'echarts/map/js/world';
import 'echarts/extension/bmap/bmap';
import 'echarts/extension/dataTool';

import PropTypes from 'prop-types';

const option = {
    bmap: {
        center: [116.46, 39.92],
        zoom: 10,
        roam: true,
        mapStyle: {
            'styleJson': [
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#031628'
                    }
                },
                {
                    'featureType': 'land',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#000102'
                    }
                },
                {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#0b3d51'
                    }
                },
                {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#08304b'
                    }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                        'lightness': -70
                    }
                },
                {
                    'featureType': 'building',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'all',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#857f7f'
                    }
                },
                {
                    'featureType': 'all',
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                        'color': '#000000'
                    }
                },
                {
                    'featureType': 'building',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#022338'
                    }
                },
                {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#062032'
                    }
                },
                {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#465b6c'
                    }
                },
                {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#022338'
                    }
                },
                {
                    'featureType': 'label',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }
            ]
        }
    },
    series: [{
        type: 'lines',
        coordinateSystem: 'bmap',
        polyline: true,
        // data: busLines,
        silent: true,
        lineStyle: {
            normal: {
                // color: '#c23531',
                // color: 'rgb(200, 35, 45)',
                opacity: 0.2,
                width: 1
            }
        },
        progressiveThreshold: 500,
        progressive: 200
    }, {
        type: 'lines',
        coordinateSystem: 'bmap',
        polyline: true,
        // data: busLines,
        lineStyle: {
            normal: {
                width: 0
            }
        },
        effect: {
            constantSpeed: 20,
            show: true,
            trailLength: 0.1,
            symbolSize: 1.5
        },
        zlevel: 1
    }]
};

const Map = () => (
    <ReactEcharts option={option} style={{ height: '100%' }}>
    </ReactEcharts>
);
export default Map;
