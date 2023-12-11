import NavigationList from './navigation-list.component';

export default function NavigationPopup() {
  return (
    <nav className="navigation navigation--popup"    >
      <div className="navigation__arrow" />
      <NavigationList />
    </nav>
  );
}