import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../redux/store';
import { getCategories } from '../redux/actions/shopping';
import { startGetCart } from '../redux/actions/cart';
import Sidebar from '../components/layout/Sidebar';
import ContentLayout from '../components/layout/ContentLayout';
import Statistics from '../components/statistics/Statistics';
import CartSidebar from '../components/cart/CartSidebar';
import AddItem from '../components/shopping/AddItem';

function StatisticsPage() {
	const dispatch = useDispatch();

	const ui = useSelector((state: RootState) => state.ui);

	const { isLoadingCategories } = useSelector(
		(state: RootState) => state.shopping
	);

	const { unsavedCart } = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		if (isLoadingCategories) {
			dispatch(getCategories());
		}
	}, [dispatch, isLoadingCategories]);

	useEffect(() => {
		if (!unsavedCart.user) {
			dispatch(startGetCart());
		}
	}, [dispatch, unsavedCart.user]);

	return (
		<>
			<ToastContainer />
			<div className="layout">
				<Sidebar />
				<ContentLayout>
					<Statistics />
					<CartSidebar />
					<AddItem show={ui.showAddItem} />
				</ContentLayout>
			</div>
		</>
	);
}

export default StatisticsPage;
