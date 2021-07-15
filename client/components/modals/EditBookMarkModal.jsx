// Search Redux Store

// Fetch Data From server
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
// import BookmarkCard from '../BookmarkCard';

const mapDispatchToProps = (dispatch) => {
  return {
    editApp: (bookMarkObj) => dispatch(actions.editBookmark(bookMarkObj)),
  };
};

class EditBookMarkModal extends React.Component {
  constructor(props) {
    super(props);

    const { id, title, url, thumbnail, caption, category_id, user_id } =
      props.bookMark;

    this.state = {
      bookMarkObj: {
        id: id,
        title: title,
        url: url,
        thumbnail: thumbnail,
        caption: caption,
        category_id: category_id,
        user_id: user_id,
      },
    };

    this.formFieldChangeHandler = this.formFieldChangeHandler.bind(this);
    this.SubmitHandler = this.SubmitHandler.bind(this);
    this.resetState = this.resetState.bind(this);
  }


  // submit Handler here
  SubmitHandler(event) {
    event.preventDefault();
    this.props.editApp(this.state.bookMarkObj);
    this.resetState();
    this.props.onClose();
  }
  resetState() {
    this.setState({
      bookMarkObj: {
        id: this.props.bookMark.id,
        title: this.props.bookMark.title,
        url: this.props.bookMark.url,
        thumbnail: this.props.bookMark.thumbnail,
        caption: this.props.bookMark.caption,
        category_id: this.props.bookMark.category_id,
        user_id: this.props.bookMark.user_id,
      },
    });
  }
  formFieldChangeHandler(event) {
    const { bookMarkObj } = this.state;
    bookMarkObj[event.target.name] = event.target.value;
    this.setState({ bookMarkObj });
  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Edit Bookmark</h4>
          </div>
          <div className='modal-body'>
            <form onSubmit={this.SubmitHandler}>
              <label className='modal-fieldLabel'>
                Title:
                <input
                  className='modal-field'
                  placeholder={this.state.bookMarkObj.title}
                  type='text'
                  name='title'
                  value={this.state.bookMarkObj.title}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className='modal-fieldLabel'>
                Url:
                <input
                  className='modal-field'
                  placeholder={this.state.bookMarkObj.url}
                  type='text'
                  name='url'
                  value={this.state.bookMarkObj.url}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className='modal-fieldLabel'>
                Thumbnail:
                <input
                  className='modal-field'
                  placeholder={this.state.bookMarkObj.thumbnail}
                  type='text'
                  name='thumbnail'
                  value={this.state.bookMarkObj.thumbnail}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className='modal-fieldLabel'>
                caption:
                <input
                  className='modal-field'
                  placeholder={this.state.bookMarkObj.caption}
                  type='text'
                  name='caption'
                  value={this.state.bookMarkObj.caption}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className='modal-fieldLabel'>
                Category ID:
                <input
                  className='modal-field'
                  placeholder={this.state.bookMarkObj.category_id}
                  type='number'
                  name='category_id'
                  value={this.state.bookMarkObj.category_id}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className='modal-fieldLabel'>
                User ID:
                <input
                  className='modal-field'
                  placeholder={this.state.bookMarkObj.user_id}
                  type='number'
                  name='user_id'
                  value={this.state.bookMarkObj.user_id}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <button
                className='modal-editButton'
                type='submit'
                onClick={this.SubmitHandler}
              >
                Save Changes
              </button>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              className='modal-closeButton'
              type='button'
              onClick={this.props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(EditBookMarkModal);
