import Promise from 'bluebird';

const pgp = require('pg-promise')({
  promiseLib: Promise, // Use bluebird for enhanced Promises
});

const DATABASE = process.env['PGDATABASE'] || 'cognicity';
const COUNTRY = process.env['COUNTRY'];
const PORT = process.env['PGPORT'] || '5432';
console.log('Testing against ' + DATABASE + ' for ' + COUNTRY);

import testDiscreteRegions from './testDiscreteRegions.js';
import testInstanceRegions from './testInstanceRegions.js';
import testTemplateReportSchema from './testTemplateReportSchema';
import testGRASP from './testGRASP';
import testDetik from './testDetik';
import testQlue from './testQlue';
import testFloodgauge from './testFloodgauge';
import testREM from './testREM';
import testVersion from './testVersion';

let deployments = {
  'id': {
    'connection': 'postgres://postgres@localhost:' + PORT + '/' + DATABASE,
    'name': 'cognicity_indonesia',
    'instances': [
      {
        'name': 'Jabodetabek',
        'test_instance_region_code': 'jbd',
        'test_local_area_id': '800',
        'test_report_lat': -6.2,
        'test_report_lon': 106.816667,
        'test_report_text': 'report text',
        'test_report_lang': 'en',
        'test_report_url': 'no_url',
        'test_card_url': 'abcdefg',
        'test_card_data': {'water_depth': '100'},
      },
      {
        'name': 'Surabaya',
        'test_instance_region_code': 'sby',
        'test_local_area_id': null,
        'test_report_lat': -7.410,
        'test_report_lon': 112.771,
        'test_report_text': 'report text',
        'test_report_lang': 'en',
        'test_report_url': 'no_url',
        'test_card_url': 'abcdefg',
        'test_card_data': {'water_depth': '100'},
      },
      {
        'name': 'Bandung',
        'test_instance_region_code': 'bdg',
        'test_local_area_id': null,
        'test_report_lat': -6.930,
        'test_report_lon': 107.650,
        'test_report_text': 'report text',
        'test_report_lang': 'en',
        'test_report_url': 'no_url',
        'test_card_url': 'abcdefg',
        'test_card_data': {'water_depth': '100'},
      },
      {
        'name': 'Semarang',
        'test_instance_region_code': 'srg',
        'test_local_area_id': null,
        'test_report_lat': -7.1141,
        'test_report_lon': 110.3850,
        'test_report_text': 'report text',
        'test_report_lang': 'en',
        'test_report_url': 'no_url',
        'test_card_url': 'abcdefg',
        'test_card_data': {'water_depth': '100'},
      },
    ],
  },

  'in': {
    'connection': 'postgres://postgres@localhost:' + PORT + '/' + DATABASE,
    'name': 'cognicity_india',
    'instances': [
      {
          'name': 'Chennai',
          'test_instance_region_code': 'chn', // chn, mum, blr
          'test_local_area_id': '188', // chn:188, mum:477, blr: 307
          'test_report_lat': 13.1530, // chn:13.1530, mum:19.0930, blr: 12.9730
          'test_report_lon': 80.2830, // chn:80.2830, mum:72.8630, blr: 77.5630
          'test_report_text': 'report text',
          'test_report_lang': 'en',
          'test_report_url': 'no_url',
          'test_card_url': 'abcdefg',
          'test_card_data': {'water_depth': '100'},
        },
        {
          'name': 'Mumbai',
          'test_instance_region_code': 'mum', // chn, mum, blr
          'test_local_area_id': '477', // chn:188, mum:477, blr: 307
          'test_report_lat': 19.0930, // chn:13.1530, mum:19.0930, blr: 12.9730
          'test_report_lon': 72.8630, // chn:80.2830, mum:72.8630, blr: 77.5630
          'test_report_text': 'report text',
          'test_report_lang': 'en',
          'test_report_url': 'no_url',
          'test_card_url': 'abcdefg',
          'test_card_data': {'water_depth': '100'},
        },
        {
          'name': 'Bengaluru',
          'test_instance_region_code': 'blr', // chn, mum, blr
          'test_local_area_id': '362', // chn:188, mum:477, blr: 307
          'test_report_lat': 12.8985, // chn:13.1530, mum:19.0930, blr: 12.9730
          'test_report_lon': 77.6085, // chn:80.2830, mum:72.8630, blr: 77.5630
          'test_report_text': 'report text',
          'test_report_lang': 'en',
          'test_report_url': 'no_url',
          'test_card_url': 'abcdefg',
          'test_card_data': {'water_depth': '100'},
        },
        {
          'name': 'Madhubani',
          'test_instance_region_code': 'mdh', // chn, mum, blr, mdh, krl
          'test_local_area_id': '803', // chn:188, mum:477, blr: 307
          'test_report_lat': 26.4800, // chn:13.1530, mum:19.0930, blr: 12.9730
          'test_report_lon': 86.2063, // chn:80.2830, mum:72.8630, blr: 77.5630
          'test_report_text': 'report text',
          'test_report_lang': 'en',
          'test_report_url': 'no_url',
          'test_card_url': 'abcdefg',
          'test_card_data': {'water_depth': '100'},
        },
        {
          'name': 'Kerala',
          'test_instance_region_code': 'krl',
          'test_local_area_id': '2335',
          'test_report_lat': 10.8744,
          'test_report_lon': 76.2763,
          'test_report_text': 'report text',
          'test_report_lang': 'en',
          'test_report_url': 'no_url',
          'test_card_url': 'abcdefg',
          'test_card_data': {'water_depth': '100'},
        },
    ],
  },
  'us': {
    'connection': 'postgres://postgres@localhost:' + PORT + '/' + DATABASE,
    'name': 'cognicity_us',
    'instances': [
      {
        'name': 'Broward',
        'test_instance_region_code': 'brw',
        'test_local_area_id': '1', // 03A grid in Fort Lauderdale
        'test_report_lat': 26.09591,
        'test_report_lon': -80.16504,
        'test_report_text': 'report text',
        'test_report_lang': 'en',
        'test_report_url': 'no_url',
        'test_card_url': 'abcdefg',
        'test_card_data': {'water_depth': '100'},
      },
      {
        'name': 'Florida Panhandle',
        'test_instance_region_code': 'fph',
        'test_local_area_id': '1701', // East Marion, county code 83
        'test_report_lat': 29.212,
        'test_report_lon': -81.814,
        'test_report_text': 'report text',
        'test_report_lang': 'en',
        'test_report_url': 'no_url',
        'test_card_url': 'abcdefg',
        'test_card_data': {'water_depth': '100'},
      },
    ],
  },
};

// Test instance configuration
let deployment = deployments[COUNTRY];

// Database
let db = pgp(deployment.connection);

// Test if instance regions are discrete geometries
testDiscreteRegions(db, deployment.instances);

// Tests run for each city in instance
for (let i = 0; i < deployment.instances.length; i++) {
  let instance = deployment.instances[i];
  // Tests
  testInstanceRegions(db, instance);
  testTemplateReportSchema(db, instance);
  testGRASP(db, instance);
  testDetik(db, instance);
  testQlue(db, instance);
  testFloodgauge(db, instance);
}
// Tests run for deployment
testREM(db);
testVersion(db, process.env.npm_package_version);
