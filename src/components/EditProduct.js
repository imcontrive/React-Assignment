import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../actions';

class EditProduct extends Component {
	state = {
		name: '',	
		weight: '',
		availability: '',
		productUrl: '',
		pricingTier: '',
		priceRange: '',
		isEditable: true
	}

	componentDidMount() {
		const id = this.props.location.id;
		const product = this.props.productsInfo.products[id];
		if(typeof id === "number"){
			this.setState({...this.state, ...product});
		}
	}
	
	handleChange = ({ target: { value, name } }) => {
		this.setState({
			[name]: value
		})
	}

	handleEditable = ({ target: { value, name } }) => {		
		this.setState({
			isEditable: !this.state.isEditable
		})
	}

	handleSubmit = () => {
		const { id } = this.props.location;
    const data = { ...this.state, id };
		this.props.dispatch(editProduct(data));
    this.props.history.push('/');
	}
	

	render() {
		const { name, weight, productUrl, pricingTier, priceRange, isEditable } = this.state;
    const prices = this.props.productsInfo.priceInfo[this.state.pricingTier];
		console.log(isEditable,"checking radio")
		return (
			<div className ="isWrapper">
				<table className="isTable">
					<thead>
						<tr className="table-head">
							<th>FieldName</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Name</td>
							<td>
								<input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
							</td>
						</tr>
						<tr>
							<td>Weight</td>
							<td>
								<input type="text" name="weight" onChange={this.handleChange} value={this.state.weight} />
							</td>
						</tr>
						<tr>
							<td>Availability</td>
							<td>
								<input type="number" name="availability" onChange={this.handleChange} value={this.state.availability} />
							</td>
						</tr>
						<tr>
							<td>Product URL</td>
							<td>
								<input type="text" name="productUrl" onChange={this.handleChange} value={this.state.productUrl} />
							</td>
						</tr>
						<tr>
							<td>Price Tier</td>
							<td>
								<label htmlFor="budget">
									<input type="radio" name="pricingTier" checked={this.state.pricingTier === "budget"} value="budget"  onChange={this.handleChange}/>
									budget
								</label>
								<label htmlFor="premier">
									<input type="radio" name="pricingTier" checked={this.state.pricingTier === "premier"} value="premier" onChange={this.handleChange}/>
									premier
								</label>
							</td>
						</tr>
						<tr>
							<td>Price Range</td>
							<td>
								<select name="priceRange" onChange={this.handleChange}>
									<option>Select Price</option>
									{
										prices ? prices.map((price, index) => {
											return (
												<option key={index} value={price}>{price}</option>
											)
										}) : ''
									}
								</select>
							</td>
						</tr>
						<tr>
							<td>isEditable</td>
							<td>
								<label htmlFor="isEditableTrue">
									<input type="radio" name="isEditable" checked={isEditable} value={isEditable} onChange={this.handleEditable}/>
									True
								</label>
								<label htmlFor="isEditableFalse">
									<input type="radio" name="isEditable" checked={isEditable ? false : true} onChange={this.handleEditable}/>
									False
								</label>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="isBtnWrapper">
					{
						name && weight && productUrl && pricingTier && priceRange ? 
						<button  className="isSubmitBtn" onClick={this.handleSubmit}>Submit</button> : ""
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EditProduct);