const mockResponse = {
  records: [
    {
      id: 'recGIFLNsg1SO6EVo',
      fields: {},
      createdTime: '2020-01-21T17:09:54.000Z',
    },
    {
      id: 'recIVy6YheeDmzIZD',
      fields: {
        Email: 'young.women@barnardos.org.uk',
        Address: 'N7 8YQ',
        'Closing time': 1730,
        'Opening time': 930,
        Description:
          'Women at risk of sexual exploitation support\nSexual health\nLanguage interpreters\nDrop in: wednesday 3-6:30',
        'Female-only?': true,
        Website: 'www.barnardos.org.uk',
        'Phone Number': '020 7700 2253',
        'Days open': 'Monday - Friday',
      },
      createdTime: '2020-01-21T16:58:30.000Z',
    },
    {
      id: 'recUjbpiSNuC0x5AG',
      fields: {
        Email: 'sanktus.welfare@gmail.com',
        Address: '4 Lady Margaret Road, Kentish Town',
        Description:
          'Food\nShowers\nFood voucher\nReferrals to shelters\nWelfare advice',
        'Wheelchair Accessible': true,
        Website: 'http://www.sanktus.org',
        'Phone Number': '020 7485 9160',
        Name: 'Sanktus',
      },
      createdTime: '2020-01-21T16:24:32.000Z',
    },
    {
      id: 'recUn97MqGtiFCBgX',
      fields: {
        Address: 'Kings Cross Station - mobile',
        'Closing time': 21,
        'Opening time': 730,
        Description:
          'Free medical pet care \nHarnesses and leads\nHousing advice\nFree food',
        'Wheelchair Accessible': true,
        Website: 'https://www.dogsonthestreets.org/',
        'Days open': 'Wednesday',
      },
      createdTime: '2020-01-21T16:57:29.000Z',
    },
    {
      id: 'recmoJ1QJQFUbBUd1',
      fields: {},
      createdTime: '2020-01-21T17:55:54.000Z',
    },
    {
      id: 'rectqpkpsDJM0ues6',
      fields: {
        Email: 'margins@unionchapel.org.uk',
        Address: '19b Compton Terrace',
        'Closing time': 14,
        Type: ['Food', 'Shower', 'Shelter', 'Advice', 'Wellbeing'],
        'Opening time': 10,
        Description:
          'Drop-in: \nMonday + Wednesday 11am-2pm\nFood/Refreshments\nShower facility\nTraining programme\nHousing & Benefits advice',
        Website: 'http://www.unionchapel.org.uk',
        'Phone Number': '020 7704 9050',
        Name: 'The Margins Project',
        Approved: true,
        'Days open': 'Monday and Wednesday',
      },
      createdTime: '2020-01-21T16:05:00.000Z',
    },
  ],
}

export default function getData(category) {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      mockResponse
        ? resolve(mockResponse)
        : reject({
            error: 'User with ' + userID + ' not found.',
          })
    )
  })
}
