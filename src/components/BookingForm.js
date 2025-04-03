import React, {useState} from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("")
  const [occasion, setOccasion] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <section className='container'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="book-date">Choose Date:</label>
            <input type="date" id="book-date" name="book-date" value={date} onChange={(e)=>handleChange(e.target.value)} required />
          </div>

          <div>
            <label htmlFor="book-time">Choose Time:</label>
            <select id='book-time' value ={time} onChange={(e)=>setTime(e.target.value)}>
              <option>
                {
                  props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                }
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input id='book-guests' min="1" max="30" value={guests} onChange={(e)=>setGuests(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="book-occasion">Occasion:</label>
            <select id='book-occasion' key={occasion} value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Date Night">Date Night</option>
              <option value="Business Meeting">Business Meeting</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className='btnReceive'>
            <input aria-label="On Click" type='submit' value="Make Your Reservation"/>
          </div>

        </fieldset>

      </form>
    </section>
  );
};

export default BookingForm;