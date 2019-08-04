package com.fixer.app.employee.dao;

import org.springframework.stereotype.Repository;

import com.fixer.app.employee.domain.Employee;

/**
 * Employee DAO.
 * 
 * @author shubham
 *
 */
@Repository("employeeDAO")
public class EmployeeDAO extends AbstractDao<Integer, Employee> {
 
    public Employee findById(Integer id) {
    	Employee employee = getByKey(id);
        return employee;
    }
 
    public Boolean save(Employee employee) {
		Boolean result = persist(employee);
		return result;
    }
}