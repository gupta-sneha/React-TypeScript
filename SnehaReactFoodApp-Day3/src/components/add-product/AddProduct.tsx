import * as superagent from 'superagent';
import * as React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

interface IState {
    showModel: boolean
}

class AddProduct extends React.Component {

    private titleInput: HTMLInputElement;
    private descriptionInput: HTMLTextAreaElement;
    private priceInput: HTMLInputElement;
    private imageInput: HTMLInputElement;

    public setTitleInput = (e1: HTMLInputElement) => {
        this.titleInput = e1;
    }

    public setDescriptionInput = (e1: HTMLTextAreaElement) => {
        this.descriptionInput = e1;
    }

    public setPriceInput = (e1: HTMLInputElement) => {
        this.priceInput = e1;
    }

    public setImageInput = (e1: HTMLInputElement) => {
        this.imageInput = e1;
    }

    public onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        superagent
            .post('http://5b209237ca762000147b255b.mockapi.io/products')
            .send(
                {
                    title: this.titleInput.value,
                    description: this.descriptionInput.value,
                    price: this.priceInput.value,
                    imageUrl: this.imageInput.value
                }
            )
            .set('accept', 'json')
            .end((err, res) => {
                this.setState({
                    showModel : true
                })
            });
    }

    public state: Readonly<IState> = {
        showModel: false
    }

    public closeModal = () =>{
        this.setState({
            showModel: false
        })
    }

    public getModal = () => {
        return (
            <Modal isOpen={this.state.showModel}>
                <ModalHeader>
                    Modal title
                    </ModalHeader>
                <ModalBody>
                    Product Added
                   </ModalBody>
                   <button onClick={this.closeModal}>Close</button>
            </Modal>
        )
    }

    public render() {
        return (
            <div className="row" >
                <div className="col">
                    {this.getModal()}
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input ref={this.setTitleInput} className="form-control" name="title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea ref={this.setDescriptionInput} rows={5} className="form-control" name="description" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input ref={this.setPriceInput} className="form-control" name="price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl">Image URL</label>
                            <input ref={this.setImageInput} className="form-control" name="imageUrl" />
                        </div>
                        <button type="submit" className="btn btn-success">Add Product</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProduct;