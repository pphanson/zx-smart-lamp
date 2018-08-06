import rainfall from './assets/rainfall.png';
import time from './assets/time.png';
import illuminance from './assets/illumination.png';
import pm2_5 from './assets/pm2.5.png';
import pm10 from './assets/pm10.png';
import temperature from './assets/temperature.png';
import humidity from './assets/humidity.png';
import winddirection from './assets/winddirection.png';
import windspeed from './assets/windspeed.png';

const icons = {
  rainfall,
  time,
  illuminance,
  pm2_5,
  pm10,
  temperature,
  humidity,
  winddirection,
  windspeed,
};
const pages = [
  {
    title: '路灯监控及控制系统',
    icon: 'user',
    key: 'page-lamp',
    pages: [
      {
        title: '实时功耗监控',
        link: '/power',
        key: 'page-lamp-power',
      },
      {
        title: '实时功耗监控',
        link: '/alarm',
        key: 'page-lamp-alarm',
      },
      {
        title: '亮灯策略管理',
        link: '/strategy',
        key: 'page-lamp-strategy',
      },
    ],
  },
  {
    title: '安全管理系统',
    icon: 'laptop',
    key: 'page-safty',
    pages: [
      {
        title: '运维管理',
        link: '/maintenance',
        key: 'page-safty-maintenance',
      },
      {
        title: '路灯位置管理',
        link: '/location',
        key: 'page-safty-location',
      },
    ],
  },
  {
    title: '业务管理系统',
    icon: 'laptop',
    key: 'page-business',
  },
  {
    title: '大数据管理系统',
    icon: 'laptop',
    key: 'page-bigdatas',
  },
  {
    title: '气象检测管理',
    icon: 'laptop',
    key: 'page-weather',
    link: '/wheather',
  },
  {
    title: '视屏实时监控',
    icon: 'laptop',
    key: 'page-video',
    link: '/video',
  },
];

const wheather = [
  {
    name: 'time',
    title: '时间',
    icon: icons.time,
  },
  {
    name: 'temperature',
    title: '温度 (\u2103)',
    icon: icons.temperature,
  },
  {
    name: 'humidity',
    title: '湿度（%RH）',
    icon: icons.humidity,
  },
  {
    name: 'illuminance',
    title: '光照度（Lux）',
    icon: icons.illuminance,
  },
  {
    name: 'windspeed',
    title: '风速（m/s）',
    icon: icons.windspeed,
  },
  {
    name: 'winddirection',
    title: '风向',
    icon: icons.winddirection,
  },
  {
    name: 'pm10',
    title: 'PM10（vg/m3）',
    icon: icons.pm10,
  },
  {
    name: 'pm2_5',
    title: 'PM2.5（vg/m3）',
    icon: icons.pm2_5,
  },
  {
    name: 'rainfallperhour',
    title: '时雨量（mm）',
    icon: icons.rainfall,
  },
  {
    name: 'rainfallperday',
    title: '天雨量（mm）',
    icon: icons.rainfall,
  },
  {
    name: 'rainfallpermonth',
    title: '月雨量（mm）',
    icon: icons.rainfall,
  },
  {
    name: 'sumofrainfall',
    title: '总雨量（mm）',
    icon: icons.rainfall,
  },
];

export { pages, wheather };
