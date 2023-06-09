import * as readlineSync from "readline-sync";
class Tv {
	private _currentChannel: number;
	private _channelLimit: number;
	constructor(currentChannel: number, channelLimit: number) {
		this._currentChannel = currentChannel;
		this._channelLimit = channelLimit;
		console.log(`\nYou are on the ${currentChannel} channel out of ${channelLimit}.`);
	}
	public nextChannel(): void {
		if (this._currentChannel >= this._channelLimit) {
			this._currentChannel = 1
			console.log(`\nChannels are over. You're on the next channel: ${this._currentChannel}`);
		}
		else {
			this._currentChannel++;
			console.log(`\nYou're on the next channel: ${this._currentChannel}`);
		}
	}
	public prevChannel(): void {
		if (this._currentChannel <= 1) {
			this._currentChannel = this._channelLimit;
			console.log(`\nChannels are over. You're on the previous channel: ${this._currentChannel}`);
		}
		else {
			this._currentChannel--;
			console.log(`\nYou're on the previous channel: ${this._currentChannel}`);
		}
	}
	public moveToChannel(channel: number): void {
		this._currentChannel = channel;
		console.log(`\nYou moved to the channel ${this._currentChannel}`);
	}
	public get currentChannel(): number {
		return this._currentChannel;
	}
	public set currentChannel(value: number) {
		this._currentChannel = value;
	}
	public get channelLimit(): number {
		return this._channelLimit;
	}
	public set channelLimit(value: number) {
		this._channelLimit = value;
	}
}

while (true) {
	const question: string = readlineSync.question(`\nDo you want to switch it on/off?\n1. On\n2. Off\nAnswer: `);
	if (question === '1' || question.toLowerCase() === 'on') {
		while (true) {
			const limit: number = parseInt(readlineSync.question(`\nHow much channels do you want?\nAnswer: `));
			if (limit < 1 || isNaN(limit) === true) {
				console.log(`\nWrong channels limit value! It must be a number and starts from 1.`);
			}
			else if (limit === 1) {
				const tv: Tv = new Tv(limit, limit);
				while (true) {
					const choose: string = readlineSync.question(`\nWhat do you want to do?\n1. Next (Switch to next channel)\n2. Prev (Switch to previous channel)\n3. Move (Move to channel)\n4. OFF (Switch off)\nAnswer (number or command): `);
					if (choose.toLowerCase() === 'next' || choose === '1') tv.nextChannel();
					else if (choose.toLowerCase() === 'prev' || choose === '2') tv.prevChannel();
					else if (choose.toLowerCase() === 'move' || choose === '3') {
						const toChannel: number = parseInt(readlineSync.question(`\nOn which channel do you want to move?\nAnswer: `));
						if (toChannel > tv.channelLimit || toChannel < 0 || isNaN(toChannel) === true) console.log(`\nYou entered a wrong channel!`);
						else if (toChannel === tv.currentChannel) console.log(`\nYou're already on this channel!`);
						else tv.moveToChannel(toChannel);
					}
					else if (choose.toLowerCase() === 'off' || choose === '4') {
						console.log(`TV switched off.`);
						break;
					}
					else console.log(`\nWrong command!`);
				}
				break;
			}
			else {
				while (true) {
					const channel: number = parseInt(readlineSync.question(`\nWhich current channel do you want?\nAnswer: `));
					if (channel > limit || channel < 1 || isNaN(channel) === true) console.log(`\nYou entered a wrong current channel! It must be a number and must be from 1 to ${limit}.`);
					else {
						const tv: Tv = new Tv(channel, limit);
						while (true) {
							const choose: string = readlineSync.question(`\nWhat do you want to do?\n1. Next (Switch to next channel)\n2. Prev (Switch to previous channel)\n3. Move (Move to channel)\n4. OFF (Switch off)\nAnswer (number or command): `);
							if (choose.toLowerCase() === 'next' || choose === '1') tv.nextChannel();
							else if (choose.toLowerCase() === 'prev' || choose === '2') tv.prevChannel();
							else if (choose.toLowerCase() === 'move' || choose === '3') {
								const toChannel: number = parseInt(readlineSync.question(`\nOn which channel do you want to move?\nAnswer: `));
								if (toChannel > tv.channelLimit || toChannel < 0 || isNaN(toChannel) === true) console.log(`\nYou entered a wrong channel!`);
								else if (toChannel === tv.currentChannel) console.log(`\nYou're already on this channel!`);
								else tv.moveToChannel(toChannel);
							}
							else if (choose.toLowerCase() === 'off' || choose === '4') {
								console.log(`TV switched off.`);
								break;
							}
							else console.log(`\nWrong command!`);
						}
						break;
					}
				}
				break;
			}
		}
		break;
	}
	else if (question === '2' || question.toLowerCase() === 'off') {
		console.log('TV switched off.');
		break;
	}
	else console.log(`\nWrong command!`);
}