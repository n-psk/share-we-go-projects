import React from 'react';
import io from 'socket.io-client'
import Loading from './loading';
import Login from './login';
import Private from './private'
import firebase from "../lib/firebase";
import '../css/styles.css';




class Index extends React.Component {

    // fetch old messages data from the server


    state = {
        auth: false,
        loading: true,
        position: this.props.position,
    }

    componentDidMount() {

        const socket = io('http://localhost:7000/')



        // กำหนดเวลาโชว์การเปิดตัว
        setTimeout(() => {
            this.setState({ loading: false })
        }, 3000)

        // ตรวจการเข้าใช้ ของผู้ใช้งาน
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                // รับค่าจาก firebase auth
                const { uid, displayName, email, photoURL, phoneNumber } = user;

                // กำหนดค่า ตัวแปล authenticate = true
                this.setState({ auth: true })

                var userData = {
                    uid: uid,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                    phoneNumber: phoneNumber,
                }

                // เขียนข้อมูล user ให้ database
                socket.emit('users', userData)
                // console.log(userData);

                if (navigator.geolocation) {
                    navigator.geolocation.watchPosition(function (position) {
                        var data = {
                            uid: uid,
                            displayName: displayName,
                            email: email,
                            photoURL: photoURL,
                            phoneNumber: phoneNumber,
                            coords: {
                                accuracy: position.coords.accuracy,
                                altitude: position.coords.altitude,
                                altitudeAccuracy: position.coords.altitudeAccuracy,
                                heading: position.coords.heading,
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                speed: position.coords.speed
                            },
                            timestamp: position.timestamp,
                        };


                        // console.log(data);
                        socket.emit('position', data)

                    }, function () {
                        handleLocationError(true, infoWindow, map.getCenter());
                    });
                }
            }

        });


    }

    onValue = (position) => {
        this.setState({ position: position })

    }

    render() {

        const { loading, auth } = this.state;

        return (
            <React.Fragment>
                {loading == true
                    ? <Loading />
                    : <React.Fragment>
                        {auth == true
                            ? <Private />
                            : <Login />
                        }
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}


export default Index;