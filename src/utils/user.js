export const generateAddressString = (addressObj, showContact = true) => {
    const getValueOrDefault = (obj, key) => (obj && obj[key]) || '';
  
    const firstName = getValueOrDefault(addressObj, 'firstName');
    const lastName = getValueOrDefault(addressObj, 'lastName');
    const address = getValueOrDefault(addressObj, 'address');
    const city = getValueOrDefault(addressObj, 'city');
    const state = getValueOrDefault(addressObj, 'state');
    const pincode = getValueOrDefault(addressObj, 'pincode');
    const countryRegion = getValueOrDefault(addressObj, 'countryRegion');
    const contact = getValueOrDefault(addressObj, 'contact');
  
    let formattedAddress = '';
  
    if (firstName || lastName) {
      formattedAddress += `${firstName} ${lastName}\n`;
    } else {
        formattedAddress += "Unknown";
    }
  
    if (address) {
      formattedAddress += `, ${address} `;
    }
  
    if (city) {
      formattedAddress += `, ${city}`;
    }
  
    if (state) {
      formattedAddress += `, ${state}`;
    }
  
    if (pincode) {
      formattedAddress += `, ${pincode}`;
    }
  
    if (countryRegion) {
      formattedAddress += `, ${countryRegion}`;
    }
    if (contact && showContact) {
      formattedAddress += `, ${contact}`;
    }
  
    return formattedAddress.trim().toUpperCase(); // Remove trailing spaces
  };
  