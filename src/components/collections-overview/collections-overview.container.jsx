import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpiner from '../withSpinner/withSpinner.component';
import CollectionsOverview from './collections-overview.component';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpiner
)(CollectionsOverview);

export default CollectionsOverviewContainer;