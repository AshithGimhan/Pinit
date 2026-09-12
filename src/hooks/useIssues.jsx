import { bind } from 'leaflet';
import issues from '../data/Issues';
import { useState } from 'react';

function UseIssues() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('newest-first');
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  const allfilteredIssues = issues
    .filter((i) => (filter === 'all' ? true : i.status === filter))
    .filter((i) => (type === 'all' ? true : i.category.toLowerCase() === type))
    .filter(
      (i) =>
        i.title.toLowerCase().includes(search.toLowerCase()) ||
        i.location.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === 'newest-first') return new Date(b.date) - new Date(a.date);
      if (sort === 'oldest-first') return new Date(a.date) - new Date(b.date);
      if (sort === 'most-upvoted') return b.upvotes - a.upvotes;
    });

  const totalPages = Math.ceil(allfilteredIssues.length / itemsPerPage);

  const paginatedIssues = allfilteredIssues.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  function resetPage() {
    setPage(1);
  }

  return {
    allfilteredIssues,
    paginatedIssues,
    filter,
    setFilter,
    search,
    setSearch,
    type,
    setType,
    sort,
    setSort,
    totalPages,
    page,
    setPage,
    resetPage,
  };
}

export default UseIssues;
