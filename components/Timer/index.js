import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';

import Button from '../Button'; // change

class Timer extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle={'light-content'} />
				<View style={styles.upper}>
					<Text style={styles.time}>25:00</Text>
				</View>
				<View style={styles.lower}>
					{/* Changes below */}
					<Button
						iconName="play-circle"
						onPress={() => Alert.alert('Start Timer!')}
					/>
					<Button
						iconName="stop-circle"
						onPress={() => Alert.alert('Stop Timer!')}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000'
	},
	upper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	lower: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	time: {
		color: '#ffffff',
		fontSize: 120,
		fontWeight: '100'
	}
});

export default Timer;
