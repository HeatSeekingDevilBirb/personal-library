import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Button from '@material-ui/core/Button';

const mapDispatchToProps = (dispatch) => ({
  addBookmark: (newBookmark) => dispatch(actions.addBookmark(newBookmark)),
});

class CreateBookmarkModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarkDetails: {
        title: '',
        url: '',
        thumbnail: '',
        caption: '',
        category_id: '',
        user_id: '',
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formFieldChangeHandler = this.formFieldChangeHandler.bind(this);
  }

  ResetState() {
    this.setState({
      bookmarkDetails: {
        title: '',
        url: '',
        thumbnail: '',
        caption: '',
        category_id: '',
        user_id: '',
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBookmark(this.state.bookmarkDetails);
    this.ResetState();
    this.props.onClose();
  }

  formFieldChangeHandler(e) {
    const { bookmarkDetails } = this.state;
    bookmarkDetails[e.target.name] = e.target.value;
    this.setState({ bookmarkDetails });
  }

  render() {
    if (!this.props.show) return null;

    return (
      <div className="modal-list">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Create Bookmark</h4>
          </div>
          <div className="modal-body">
            <form>
              <label className="modal-fieldLabel">
                Title:
                <input
                  className="modal-field"
                  type="text"
                  name="title"
                  value={this.state.bookmarkDetails.title}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className="modal-fieldLabel">
                URL:
                <input
                  className="modal-field"
                  type="text"
                  name="url"
                  value={this.state.bookmarkDetails.url}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className="modal-fieldLabel">
                Thumbnail:
                <input
                  className="modal-field"
                  type="text"
                  name="thumbnail"
                  value={this.state.bookmarkDetails.thumbnail}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className="modal-fieldLabel">
                Caption:
                <input
                  className="modal-field"
                  type="text"
                  name="caption"
                  value={this.state.bookmarkDetails.caption}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className="modal-fieldLabel">
                Category ID:
                <input
                  className="modal-field"
                  type="text"
                  name="category_id"
                  value={this.state.bookmarkDetails.category_id}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <label className="modal-fieldLabel">
                User ID:
                <input
                  className="modal-field"
                  type="text"
                  name="user_id"
                  value={this.state.bookmarkDetails.user_id}
                  onChange={this.formFieldChangeHandler}
                />
              </label>
              <Button
                variant="contained"
                color="primary"
                className="modal-addButton"
                type="submit"
                onClick={this.handleSubmit}
              >
                Add Bookmark
              </Button>
            </form>
          </div>
          <div className="modal-footer">
            <Button
              variant="contained"
              color="default"
              className="modal-closeButton"
              type="button"
              onClick={this.props.onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateBookmarkModal);
