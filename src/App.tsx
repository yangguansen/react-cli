import React  from 'react';
import styles from './App.module.scss';
import LayoutComponent from 'src/pages/Components/Layout';
import PageTabs from './pages/Components/PageTabs';


function App() {
	return (
		<div className={styles.App}>
			<LayoutComponent>
				<PageTabs></PageTabs>
			</LayoutComponent>
		</div>

	);

}

export default App;
