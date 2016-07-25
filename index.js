'use strict';
const execa = require('execa');
const linuxBattery = require('linux-battery');
const osxBattery = require('osx-battery');

const linux = () => linuxBattery().then(res => res[0].powerSupply === 'yes');
const osx = () => osxBattery().then(res => res.isCharging);

const win = () => execa('WMIC', ['Path', 'Win32_Battery', 'Get', 'BatteryStatus']).then(res => {
	if (!res.stdout) {
		return Promise.reject(new Error('No battery could be found'));
	}

	return res.stdout.indexOf('2') !== -1;
});

if (process.platform === 'darwin') {
	module.exports = osx;
} else if (process.platform === 'linux') {
	module.exports = linux;
} else {
	module.exports = win;
}
