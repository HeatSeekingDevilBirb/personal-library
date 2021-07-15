// Search Redux Store

// Fetch Data From server
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import BookmarkCard from '../BookmarkCard';
  
 
const mapDispatchToProps = (dispatch) => {
  return  {
    editApp: (bookMarkId, bookMarkObj) => 
    dispatch(actions.editApp(bookMarkId, bookMarkObj)),
  };
};

class EditBookMarkModal extends React.Component {
  constructor (props) {
    super (props);
    const { title, url, thumbnail, caption, category_id, user_id } =  props.bookMark;
    this.formData = this.formData.bind(this);
    this.SubmitHandler = this.SubmitHandler.bind(this);
  }
  // formData(event) {
  //   this.props.
  // }

  // submit Handler here 
  SubmitHandler(event) {
    event.preventDefault();
    this.props.editApp(
      this.props.bookMarkId,
      // this.props.
    )
  }
   <Modal 
// isOpen = {!!props.editApp} onRequestClose= props /*variable here */
   >
     </Modal>
 
}
// const EditBookMarkModal = ({
//   //update 
//   updateBookMark, 

// }) => {

// }

//  div  // form  // statef
