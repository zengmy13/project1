export const categoryData = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];


// import React,{useState} from 'react';
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
// } from 'react-places-autocomplete';
//
// function LocationSearchInput() {
//
//    const [address,setAddress]=useState("")
//     function handleChange (address){
//        setAddress(address)
//     };
//
//     function handleSelect (address) {
//         geocodeByAddress(address)
//             .then(results => getLatLng(results[0]))
//             .then(latLng => console.log('Success', latLng))
//             .catch(error => console.error('Error', error));
//
//         setAddress(address)
//     };
//
//
//         return (
//             <PlacesAutocomplete
//                 value={address}
//                 onChange={handleChange}
//                 onSelect={handleSelect}
//             >
//                 {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                     <div>
//                         <input
//                             {...getInputProps({
//                                 placeholder: 'Search Places ...',
//                                 className: 'location-search-input',
//                             })}
//                         />
//                         <div className="autocomplete-dropdown-container">
//                             {loading && <div>Loading...</div>}
//                             {suggestions.map(suggestion => {
//                                 const className = suggestion.active
//                                     ? 'suggestion-item--active'
//                                     : 'suggestion-item';
//                                 // inline style for demonstration purpose
//                                 const style = suggestion.active
//                                     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                                     : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                                 return (
//                                     <div
//                                         {...getSuggestionItemProps(suggestion, {
//                                             className,
//                                             style,
//                                         })}
//                                     >
//                                         <span>{suggestion.description}</span>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 )}
//             </PlacesAutocomplete>
//         );
//
// }

// import React, { useState } from 'react';
//
//
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
// function SimpleMap(){
//
//
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//
//                 >
//
//                 </GoogleMapReact>
//             </div>
//         );
//
// }
//
// export default SimpleMap;
