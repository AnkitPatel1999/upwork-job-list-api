var express = require('express');
var router  = express.Router();

router.get('/joblist', (req, res) => {
    const data = [
        {
            date: 'Mon 2 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '50.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: true
        },
        {
            date: 'Tue 10 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '40.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: true
        },
        {
            date: 'Wed 21 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '85.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Sun 10 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Satur 9 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: true
        },
        {
            date: 'wed 22 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Mon 10 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: true
        },
        {
            date: 'Fri 11 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Sun 1 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Satur 5 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Turs 6 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Fri 17 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Sun 13 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Mon 2 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Tues 17 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: false
        },
        {
            date: 'Sun 19 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: true
        },
        {
            date: 'Satur 3 Apr',
            time:'07:00 AM - 07:30 PM',
            job: 'Intesive Care General',
            rate: '55.25',
            hospitalName: 'A Nice Hospital',
            star: 2,
            address: '10 Nice Street 2000 NSW, Sydney',
            invited: true
        }
    ]
    res.status(200).json(data)
});


module.exports = router;